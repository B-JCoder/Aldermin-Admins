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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaUserTie,
  FaUser,
  FaGraduationCap,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export interface Evaluation {
  id: number;
  staffNo: string;
  teacherName: string;
  submittedBy: string;
  className: string;
  rating: number;
  comment: string;
  status: string;
}

interface EvaluationListProps {
  evaluations: Evaluation[];
  onRemove?: (id: number) => void;
  onEdit?: (id: number) => void;
  onView?: (id: number) => void;
  onApprove?: (id: number) => void;
}

export function EvaluationList({
  evaluations,
  onRemove,
  onEdit,
  onView,
  onApprove,
}: EvaluationListProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex text-amber-400 gap-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={10}
            className={i < rating ? "fill-current" : "text-gray-200"}
          />
        ))}
      </div>
    );
  };

  return (
    <AdminCard className="p-0 overflow-hidden relative">
      

      <div className="p-8 pb-0">
        <h3 className="text-[10px] font-semibold   text-gray-500 mb-4">
          Evaluation Records
        </h3>
      </div>

      <div className="p-6">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Staff Identity
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Evaluated Faculty
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Submission Detail
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-semibold   text-gray-500">
                  Rating & Review
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Current Status
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Controls
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {evaluations.map((report, index) => (
                <TableRow
                  key={report.id}
                  className="group hover:bg-white transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className=" text-[10px] font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block border border-secondary/20">
                      {report.staffNo}
                    </div>
                    <div className="mt-2 text-[9px] font-semibold text-gray-500  tracking-tighter ">
                      SN: {index + 1}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full ring-4 ring-white border-2 border-secondary/10 bg-secondary/10 flex items-center justify-center text-secondary font-semibold text-sm shadow-inner">
                        <FaUserTie />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground tracking-tight group-hover:text-secondary transition-colors  ">
                          {report.teacherName}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
                        <FaUser
                          size={10}
                          className="text-gray-500/50"
                        />
                        {report.submittedBy}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-semibold text-secondary  tracking-wide bg-secondary/5 w-fit px-2 py-0.5 rounded">
                        <FaGraduationCap size={10} />
                        {report.className}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="space-y-2">
                      {renderStars(report.rating)}
                      <p className="text-[10px] font-medium text-gray-500 leading-relaxed max-w-[200px] line-clamp-2 ">
                        "{report.comment}"
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
                      <FaCheckCircle size={10} />
                      <span className="text-[9px] font-semibold  ">
                        {report.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      {onApprove && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onApprove(report.id)}
                          className="h-8 w-8 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
                          title="Approve"
                        >
                          <FaCheckCircle size={14} />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onView?.(report.id)}
                        className="h-8 w-8 text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50"
                      >
                        <FaEye size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit?.(report.id)}
                        className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemove?.(report.id)}
                        className="h-8 w-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                      >
                        <FaTrash size={14} />
                      </Button>
                    </div>
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
