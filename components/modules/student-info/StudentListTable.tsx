"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaIdCard,
  FaMapMarkerAlt,
  FaUserGraduate,
} from "react-icons/fa";

interface Student {
  id: number;
  admissionNo: string;
  name: string;
  fatherName: string;
  dob: string;
  className: string;
  gender: string;
  category: string;
}

interface StudentListTableProps {
  students: Student[];
}

export function StudentListTable({ students }: StudentListTableProps) {
  return (
    <GlassCard className="p-0 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 relative z-10">
        <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Identity
                </TableHead>
                <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Student Profile
                </TableHead>
                <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Guardianship
                </TableHead>
                <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Class Point
                </TableHead>
                <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Interaction
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  className="group hover:bg-white/60 transition-all font-medium"
                >
                  <TableCell className="px-6 py-8">
                    <Badge
                      variant="secondary"
                      className="font-mono text-[10px] font-black bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 shadow-none px-3 py-1"
                    >
                      {student.admissionNo}
                    </Badge>
                    <div className="mt-2 flex items-center gap-1 text-[9px] font-black text-muted-foreground uppercase tracking-tighter">
                      <FaIdCard size={10} /> Certified Member
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm ring-2 ring-secondary/5">
                        <AvatarFallback className="bg-secondary/10 text-secondary font-black text-lg">
                          {student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-base font-black text-foreground tracking-tight leading-none group-hover:text-secondary transition-colors font-serif italic">
                          {student.name}
                        </div>
                        <div className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-widest flex items-center gap-2">
                          {student.gender}{" "}
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>{" "}
                          {student.dob}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="text-xs font-black text-foreground tracking-tight mb-1">
                      {student.fatherName}
                    </div>
                    <div className="text-[9px] font-black text-muted-foreground uppercase leading-none">
                      Primary Contact
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="inline-flex flex-col items-center">
                      <Badge className="px-4 py-1.5 bg-accent text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg hover:bg-accent/90">
                        {student.className}
                      </Badge>
                      <div className="mt-2 text-[9px] font-black text-emerald-600 uppercase flex items-center gap-1 italic">
                        <FaMapMarkerAlt size={8} /> Active Desk
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-secondary hover:text-white hover:bg-secondary rounded-xl transition-all shadow-sm"
                      >
                        <FaEye size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-blue-500 hover:text-white hover:bg-blue-600 rounded-xl transition-all shadow-sm"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-destructive hover:text-white hover:bg-destructive rounded-xl transition-all shadow-sm"
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
    </GlassCard>
  );
}
