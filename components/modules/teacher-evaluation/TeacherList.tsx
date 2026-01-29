"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminCard } from "@/components/common/AdminCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaEye, FaStar, FaUserTie } from "react-icons/fa";

interface Teacher {
  id: number;
  staffNo: string;
  name: string;
  department: string;
  avgRating: number;
  totalReviews: number;
  status: string;
}

interface TeacherListProps {
  teachers: Teacher[];
}

export function TeacherList({ teachers }: TeacherListProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex text-amber-400 gap-0.5 items-center">
        <span className="text-xs font-semibold text-gray-700 mr-1">{rating}</span>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={10}
            className={
              i < Math.round(rating) ? "fill-current" : "text-gray-200"
            }
          />
        ))}
      </div>
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Top Performer":
        return (
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200"
          >
            {status}
          </Badge>
        );
      case "Needs Improvement":
        return (
          <Badge
            variant="destructive"
            className="bg-red-100 text-red-700 hover:bg-red-200 border-red-200"
          >
            {status}
          </Badge>
        );
      default:
        return (
          <Badge
            variant="outline"
            className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200"
          >
            {status}
          </Badge>
        );
    }
  };

  return (
    <AdminCard className="p-0 overflow-hidden relative">
      

      <div className="p-8 pb-0">
        <h3 className="text-[10px] font-semibold   text-gray-500 mb-4">
          Faculty Performance Registry
        </h3>
      </div>

      <div className="p-6">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Faculty Identity
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Department
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Aggregate Rating
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Total Reviews
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Performance Status
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Analytics
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((t) => (
                <TableRow
                  key={t.id}
                  className="group hover:bg-white transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 border-2 border-white ring-2 ring-secondary/10">
                        {/* In a real app we'd have images, text-avatar for now */}
                        <AvatarFallback className="bg-secondary/10 text-secondary font-bold">
                          <FaUserTie />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-semibold text-foreground tracking-tight group-hover:text-secondary transition-colors  ">
                          {t.name}
                        </div>
                        <div className="text-[9px] font-semibold text-gray-500   mt-0.5">
                          {t.staffNo}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <span className="text-[10px] font-semibold   text-gray-500">
                      {t.department}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {renderStars(t.avgRating)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <span className=" text-xs font-bold text-gray-500">
                      {t.totalReviews}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    {getStatusBadge(t.status)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-xl h-9 w-9 bg-secondary/10 text-secondary hover:bg-secondary hover:text-white shadow-none"
                    >
                      <FaEye size={14} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminCard>
  );
}
