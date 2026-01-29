"use client";

import React, { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaTrophy, FaCheckCircle, FaSortNumericDown } from "react-icons/fa";

export function ExamTypeForm() {
  const [examName, setExamName] = useState("");
  const [isMandatory, setIsMandatory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Exam Name:", examName);
    console.log("Is Mandatory:", isMandatory);
    setExamName("");
    setIsMandatory(false);
  };

  return (
    <AdminCard className="p-8 h-full flex flex-col">
      <h4 className="mb-6 text-xs font-semibold text-gray-500   leading-none flex items-center justify-between">
        Define New Assessment
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label className="text-[10px] font-semibold text-gray-500   ml-1">
            Assessment Designation <span className="text-rose-500">*</span>
          </Label>
          <Input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            className="w-full rounded-2xl border-border/50 bg-secondary/5 pl-4 h-12 text-sm font-bold focus:ring-secondary/20 shadow-sm placeholder:text-gray-500/50"
            placeholder="e.g. Annual Finals"
            required
          />
        </div>

        <div className="flex items-center gap-4 bg-secondary/5 p-4 rounded-2xl border border-secondary/10">
          <Button
            type="button"
            onClick={() => setIsMandatory(!isMandatory)}
            variant="ghost"
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all p-0 ${
              isMandatory
                ? "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90 hover:text-white"
                : "bg-white text-gray-500 border border-border/50 shadow-sm hover:bg-secondary/10"
            }`}
          >
            <FaCheckCircle size={18} />
          </Button>
          <div>
            <div className="text-[10px] font-semibold text-foreground   ">
              Average Passing
            </div>
            <div className="text-[9px] font-bold text-gray-500 lowercase ">
              Mandatory evaluative criteria
            </div>
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-[10px] font-semibold  tracking-[0.2em] py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaTrophy className="" />
              Save Assessment Model
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
