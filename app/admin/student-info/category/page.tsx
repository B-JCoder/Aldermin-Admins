"use client";

import React, { useState } from "react";
import { FaTags } from "react-icons/fa";
import { CategoryForm } from "@/components/modules/student-info/CategoryForm";
import { CategoryList } from "@/components/modules/student-info/CategoryList";
import { PageHeader } from "@/components/common/PageHeader";

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
      <PageHeader title="Demographic Categories" icon={<FaTags size={20} />} />

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
