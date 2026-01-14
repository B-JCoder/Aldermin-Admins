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
import { GlassCard } from "@/components/cards/GlassCard";
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
        <span className="text-xs font-black text-gray-700 mr-1">{rating}</span>
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
    <GlassCard className="p-0 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-0">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">
          Faculty Performance Registry
        </h3>
      </div>

      <div className="p-6">
        <div className="rounded-xl border border-white/20 overflow-hidden bg-white/40">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Faculty Identity
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Department
                </TableHead>
                <TableHead className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Aggregate Rating
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Total Reviews
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Performance Status
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Analytics
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((t) => (
                <TableRow
                  key={t.id}
                  className="group hover:bg-white/60 transition-colors"
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
                        <div className="text-sm font-black text-foreground tracking-tight group-hover:text-secondary transition-colors font-serif italic">
                          {t.name}
                        </div>
                        <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mt-0.5">
                          {t.staffNo}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {t.department}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {renderStars(t.avgRating)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <span className="font-mono text-xs font-bold text-muted-foreground">
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
    </GlassCard>
  );
}
