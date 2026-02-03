"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaBookMedical } from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  quantity: number;
}

export default function BookListPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = (await apiService.library.getBooks()) as Book[];
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const columns = [
    {
      header: "Book Title",
      accessor: "title" as keyof Book,
      className: "font-bold text-foreground",
    },
    {
      header: "Author",
      accessor: "author" as keyof Book,
      className: "italic text-gray-600",
    },
    {
      header: "Category",
      accessor: (item: Book) => (
        <Badge variant="outline" className="text-secondary border-secondary/20">
          {item.category}
        </Badge>
      ),
    },
    {
      header: "ISBN",
      accessor: "isbn" as keyof Book,
    },
    {
      header: "Qty",
      accessor: "quantity" as keyof Book,
      className: "text-center font-semibold",
      headerClassName: "text-center",
    },
    {
      header: "Action",
      accessor: (item: Book) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setBooks(books.filter((b) => b.id !== item.id))}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Library Repository"
        subtitle="Cataloging & Asset Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10">
            <FaBookMedical /> Add New Volume
          </Button>
        }
      />

      <DataTable
        data={books}
        columns={columns}
        searchKey="title"
        searchPlaceholder="Search volumes by title or author..."
        title="Asset Inventory"
        isLoading={isLoading}
      />
    </div>
  );
}
