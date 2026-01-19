"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { HomeworkFilter } from "@/components/modules/homework/HomeworkFilter";
import { HomeworkListTable } from "@/components/modules/homework/HomeworkListTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeworkListPage() {
  const [homeworkList] = useState([
    {
      id: 1,
      class: "Grade 10 (Alpha)",
      subject: "Advanced Physics",
      marks: 25,
      homeworkDate: "2024-03-20",
      submissionDate: "2024-03-25",
      evaluationDate: "2024-03-27",
      fileName: "kinematics_v2.pdf",
    },
    {
      id: 2,
      class: "Grade 11 (Beta)",
      subject: "Organic Chemistry",
      marks: 20,
      homeworkDate: "2024-03-21",
      submissionDate: "2024-03-26",
      evaluationDate: "2024-03-28",
      fileName: "alkanes_guide.pdf",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Curricular Registry"
        subtitle="Homework Management"
        action={
          <Link href="/admin/homework/add">
            <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
              <FaPlus /> Authorize Assignment
            </Button>
          </Link>
        }
      />

      <div className="space-y-8">
        <HomeworkFilter />
        <HomeworkListTable homeworkList={homeworkList} />
      </div>
    </div>
  );
}
