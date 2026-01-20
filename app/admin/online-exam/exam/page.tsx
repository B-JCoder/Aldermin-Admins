"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { OnlineExamForm } from "@/components/modules/online-exam/OnlineExamForm";
import { OnlineExamList } from "@/components/modules/online-exam/OnlineExamList";

type OnlineExam = {
  title: string;
  className: string;
  subject: string;
  date: string;
  endDate: string;
  duration: string;
  percentage: string;
  status: string;
};

export default function OnlineExamPage() {
  const [exams, setExams] = useState<OnlineExam[]>([]);

  const [form, setForm] = useState({
    title: "",
    className: "",
    subject: "",
    date: "",
    endDate: "",
    duration: "",
    percentage: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    setExams([
      ...exams,
      {
        title: form.title,
        className: form.className,
        subject: form.subject,
        date: form.date,
        endDate: form.endDate,
        duration: form.duration,
        percentage: form.percentage,
        status: "Active",
      },
    ]);

    setForm({
      title: "",
      className: "",
      subject: "",
      date: "",
      endDate: "",
      duration: "",
      percentage: "",
    });
  };

  const remove = (index: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setExams(exams.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Online Examination Control"
        subtitle="Schedule and Manage Assessment Events"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[700px]">
        <div className="lg:col-span-4 h-full">
          <OnlineExamForm form={form} setForm={setForm} onSubmit={submit} />
        </div>
        <div className="lg:col-span-8 h-full">
          <OnlineExamList exams={exams} onRemove={remove} />
        </div>
      </div>
    </div>
  );
}
