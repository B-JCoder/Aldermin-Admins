"use client";

import React, { useState } from "react";
import { CategoryForm } from "@/components/modules/library/CategoryForm";
import { CategoryList } from "@/components/modules/library/CategoryList";
import { PageHeader } from "@/components/common/PageHeader";

export default function BookCategoryPage() {
  const [categories, setCategories] = useState([
    { id: 1, title: "Theoretical Physics" },
    { id: 2, title: "Classical Literature" },
    { id: 3, title: "Advanced Mathematics" },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Bibliographic Taxonomy"
        subtitle="Manage Library Categories"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-4 h-full">
          <CategoryForm />
        </div>
        <div className="lg:col-span-8 h-full">
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  );
}
