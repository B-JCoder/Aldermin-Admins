"use client";

import React, { useState } from "react";
import { FaTags } from "react-icons/fa";
import { CategoryForm } from "@/components/modules/student-info/CategoryForm";
import { CategoryList } from "@/components/modules/student-info/CategoryList";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function StudentCategoryPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "General", grade: "All", section: "All" },
    { id: 2, name: "Scholarship", grade: "All", section: "All" },
    { id: 3, name: "OBC", grade: "All", section: "All" },
  ]);

  const handleAddCategory = (name: string) => {
    setCategories([
      ...categories,
      {
        id: categories.length + 1,
        name: name,
        grade: "All",
        section: "All",
      },
    ]);
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Student Classifications"
        subtitle="Demographic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
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
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  );
}
