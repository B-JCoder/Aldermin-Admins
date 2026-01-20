"use client";

import React, { useState } from "react";
import { BookForm } from "@/components/modules/library/BookForm";
import { BookList } from "@/components/modules/library/BookList";
import { PageHeader } from "@/components/common/PageHeader";

export default function BookPage() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Selfish Gene",
      number: "B-501",
      isbn: "978-0198788607",
      category: "Evolutionary Biology",
      publisher: "Oxford Press",
      author: "Richard Dawkins",
      quantity: 15,
      price: "$22.50",
    },
    {
      id: 2,
      title: "Brief Answers to the Big Questions",
      number: "B-204",
      isbn: "978-1473695986",
      category: "Astrophysics",
      publisher: "John Murray",
      author: "Stephen Hawking",
      quantity: 8,
      price: "$18.00",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Bibliographic Asset Registry"
        subtitle="Manage Library Books and Assets"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <BookForm />
        </div>
        <div className="lg:col-span-8">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
}
