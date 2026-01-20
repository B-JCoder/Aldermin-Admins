"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { QuestionGroupForm } from "@/components/modules/online-exam/QuestionGroupForm";
import { QuestionGroupList } from "@/components/modules/online-exam/QuestionGroupList";

type QuestionGroup = {
  title: string;
};

export default function QuestionGroupPage() {
  const [groups, setGroups] = useState<QuestionGroup[]>([]);
  const [title, setTitle] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    setGroups([...groups, { title }]);
    setTitle("");
  };

  const remove = (index: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setGroups(groups.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Question Group Management"
        subtitle="Organize Questions into Logical Groups"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        <div className="lg:col-span-4 h-full">
          <QuestionGroupForm
            title={title}
            setTitle={setTitle}
            onSubmit={submit}
          />
        </div>
        <div className="lg:col-span-8 h-full">
          <QuestionGroupList groups={groups} onRemove={remove} />
        </div>
      </div>
    </div>
  );
}
