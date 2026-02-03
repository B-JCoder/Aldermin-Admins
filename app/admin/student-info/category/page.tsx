"use client";

import React, { useState, useEffect } from "react";
import { CategoryForm } from "@/components/modules/student-info/CategoryForm";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Category {
  id: number;
  name: string;
  grade: string;
  section: string;
}

export default function StudentCategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.categories.getAll();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddCategory = (name: string) => {
    const newCategory = {
      id: categories.length + 1,
      name: name,
      grade: "All",
      section: "All",
    };
    setCategories([...categories, newCategory]);
  };

  const columns = [
    {
      header: "Category Name",
      accessor: "name" as keyof Category,
      className: "font-bold text-gray-700",
    },
    {
      header: "Grade Scope",
      accessor: "grade" as keyof Category,
    },
    {
      header: "Section Scope",
      accessor: "section" as keyof Category,
    },
    {
      header: "Actions",
      accessor: (category: Category) => (
        <ListActionButtons
          onView={() => console.log("View", category.id)}
          onEdit={() => console.log("Edit", category.id)}
          onDelete={() => console.log("Delete", category.id)}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Student Classifications"
        subtitle="Demographic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Category
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <CategoryForm onAddCategory={handleAddCategory} />
        </div>

        {/* Category List */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={categories}
            columns={columns}
            searchKey="name"
            searchPlaceholder="Search categories..."
            title="Classification Records"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
