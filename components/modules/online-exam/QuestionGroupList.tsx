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
import { FaEdit, FaTrash, FaLayerGroup } from "react-icons/fa";

export interface QuestionGroup {
  title: string;
}

interface QuestionGroupListProps {
  groups: QuestionGroup[];
  onRemove: (index: number) => void;
}

export function QuestionGroupList({
  groups,
  onRemove,
}: QuestionGroupListProps) {
  return (
    <AdminCard className="p-0 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-border/50 flex items-center justify-between bg-white">
        <h3 className="text-sm font-semibold text-gray-500  tracking-wider flex items-center gap-2">
          <FaLayerGroup className="text-gray-500/50" />
          Existing Groups
        </h3>
        <span className="text-[10px] font-semibold bg-secondary/10 text-secondary px-2 py-1 rounded-md">
          Total: {groups.length}
        </span>
      </div>

      <div className="flex-1 overflow-x-auto p-4">
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/5">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-16 px-6 py-4 text-left text-[10px] font-semibold   text-gray-500">
                  SN
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] font-semibold   text-gray-500">
                  Title
                </TableHead>
                <TableHead className="w-32 px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border/50">
              {groups.map((g, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-secondary/5 transition-colors group"
                >
                  <TableCell className="px-6 py-4 text-gray-500/50  text-xs ">
                    {i + 1}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <span className="font-bold text-foreground text-sm">
                      {g.title}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-lg text-secondary hover:text-white hover:bg-secondary transition-colors"
                      >
                        <FaEdit size={12} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemove(i)}
                        className="h-8 w-8 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors"
                      >
                        <FaTrash size={12} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {groups.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="px-6 py-12 text-center text-gray-500 font-bold   text-[10px]"
                  >
                    No question groups found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminCard>
  );
}
