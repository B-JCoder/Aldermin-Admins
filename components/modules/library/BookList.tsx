"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { FaTags, FaUserEdit, FaEdit, FaTrash } from "react-icons/fa";

export interface Book {
  id: number;
  title: string;
  number: string;
  isbn: string;
  category: string;
  publisher: string;
  author: string;
  quantity: number;
  price: string;
}

interface BookListProps {
  books: Book[];
}

export function BookList({ books }: BookListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / pageSize);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search archive..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Bibliographic Archive
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-6 py-5 text-left w-16 text-[10px] font-semibold   text-gray-500">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-5 text-left text-[10px] font-semibold   text-gray-500">
                    Industrial Data
                  </TableHead>
                  <TableHead className="px-6 py-5 text-center text-[10px] font-semibold   text-gray-500">
                    Quantities
                  </TableHead>
                  <TableHead className="px-6 py-5 text-center text-[10px] font-semibold   text-gray-500">
                    Valuation
                  </TableHead>
                  <TableHead className="px-6 py-5 text-center text-[10px] font-semibold   text-gray-500">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedBooks.map((b, index) => (
                  <TableRow
                    key={b.id}
                    className="hover:bg-secondary/5 transition-all group"
                  >
                    <TableCell className="px-6 py-8 text-gray-500/50  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div>
                        <div className="font-semibold text-foreground tracking-tight text-base    leading-none mb-1 group-hover:text-secondary transition-colors">
                          {b.title}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[8px] font-semibold bg-foreground text-background px-2 py-0.5 rounded  ">
                            {b.number}
                          </span>
                          <span className="text-[8px] font-semibold text-gray-500   ">
                            ISBN: {b.isbn}
                          </span>
                        </div>
                        <div className="text-[9px] font-semibold text-secondary   mt-2 flex items-center gap-1.5 opacity-60">
                          <FaTags size={8} /> {b.category} •{" "}
                          <FaUserEdit size={8} /> {b.author}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <div className="inline-flex flex-col items-center p-3 rounded-2xl bg-secondary/5 border border-secondary/10 group-hover:bg-white transition-all shadow-sm">
                        <span className="text-sm font-semibold text-foreground leading-none">
                          {b.quantity}
                        </span>
                        <span className="text-[7px] font-semibold  text-gray-500 mt-1">
                          Units
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <div className="text-sm font-semibold  text-secondary">
                        {b.price}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center text-[10px] font-semibold text-secondary  ">
                      <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm"
                        >
                          <FaEdit size={12} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                        >
                          <FaTrash size={12} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredBooks.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredBooks.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </AdminCard>
    </div>
  );
}
