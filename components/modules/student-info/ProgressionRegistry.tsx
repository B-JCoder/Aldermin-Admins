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
import { FaUserGraduate, FaArrowRight } from "react-icons/fa";

interface Student {
  id: number;
  name: string;
  rollNo: string;
  currentClass: string;
  nextClass: string;
}

interface ProgressionRegistryProps {
  students: Student[];
}

export function ProgressionRegistry({ students }: ProgressionRegistryProps) {
  return (
    <GlassCard className="p-0 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-tl-[10rem] -mb-40 -mr-40 pointer-events-none"></div>

      <div className="p-10 relative z-10">
        <div className="overflow-hidden rounded-xl border border-white/20 bg-white/40">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground w-20">
                  SN
                </TableHead>
                <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Patron Information
                </TableHead>
                <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Roll/Nº
                </TableHead>
                <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Progression Path
                </TableHead>
                <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Interaction
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => (
                <TableRow
                  key={student.id}
                  className="group hover:bg-white/60 transition-all font-medium"
                >
                  <TableCell className="px-6 py-8 text-muted-foreground font-mono text-xs italic">
                    {index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-muted-foreground group-hover:bg-secondary group-hover:text-white transition-all shadow-sm border border-white/40">
                        <FaUserGraduate size={16} />
                      </div>
                      <div className="font-black text-foreground tracking-tight text-base font-serif italic">
                        {student.name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <Badge
                      variant="outline"
                      className="bg-white/50 text-muted-foreground border-white/60 font-black"
                    >
                      {student.rollNo}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest mb-1">
                          From
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-secondary/10 text-secondary border-secondary/20 shadow-none px-3"
                        >
                          {student.currentClass}
                        </Badge>
                      </div>
                      <FaArrowRight
                        className="text-muted-foreground/30 animate-pulse"
                        size={12}
                      />
                      <div className="text-center">
                        <div className="text-[8px] font-black text-emerald-500/50 uppercase tracking-widest mb-1">
                          To
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-emerald-50 text-emerald-600 border-emerald-100 shadow-none px-3"
                        >
                          {student.nextClass}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <Button
                      variant="secondary"
                      className="rounded-2xl text-[10px] font-black uppercase tracking-widest h-auto py-3 px-6 shadow-md hover:scale-105 transition-transform"
                    >
                      Promote & Update
                      <FaArrowRight
                        size={10}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
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
