"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ListPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalRecords: number;
  pageSize: number;
}

export function ListPagination({
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
  pageSize,
}: ListPaginationProps) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalRecords);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 border-t border-white/20 bg-white/30">
      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        Showing <span className="text-foreground">{start}</span> to{" "}
        <span className="text-foreground">{end}</span> of{" "}
        <span className="text-foreground">{totalRecords}</span> Results
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="rounded-xl border-white/40 bg-white/50 text-muted-foreground hover:text-secondary disabled:opacity-30 transition-all font-bold uppercase text-[9px] tracking-widest px-4"
        >
          <FaChevronLeft size={10} className="mr-1" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-lg text-[10px] font-black ${
                currentPage === page
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                  : "text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
              } transition-all`}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="rounded-xl border-white/40 bg-white/50 text-muted-foreground hover:text-secondary disabled:opacity-30 transition-all font-bold uppercase text-[9px] tracking-widest px-4"
        >
          Next
          <FaChevronRight size={10} className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
