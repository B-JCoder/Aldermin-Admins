"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { QuestionBankForm } from "@/components/modules/online-exam/QuestionBankForm";
import { QuestionBankList } from "@/components/modules/online-exam/QuestionBankList";

type Question = {
  group: string;
  className: string;
  type: string;
  question: string;
  marks: string;
};

export default function QuestionBankPage() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [form, setForm] = useState({
    group: "",
    className: "",
    section: "",
    type: "",
    question: "",
    marks: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    setQuestions([
      ...questions,
      {
        group: form.group,
        className: form.className,
        type: form.type,
        question: form.question,
        marks: form.marks,
      },
    ]);

    setForm({
      group: "",
      className: "",
      section: "",
      type: "",
      question: "",
      marks: "",
    });
  };

  const remove = (index: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Question Bank Management"
        subtitle="Repository for Online Assessment Items"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]">
        <div className="lg:col-span-4 h-full">
          <QuestionBankForm form={form} setForm={setForm} onSubmit={submit} />
        </div>
        <div className="lg:col-span-8 h-full">
          <QuestionBankList questions={questions} onRemove={remove} />
        </div>
      </div>
    </div>
  );
}
