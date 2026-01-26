"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { LessonForm } from "@/components/modules/lesson-plan/LessonForm";
import { LessonList } from "@/components/modules/lesson-plan/LessonList";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function LessonPage() {
  const [formData, setFormData] = useState({
    title: "",
    className: "",
    section: "",
    subject: "",
  });

  const [lessonList, setLessonList] = useState([
    {
      id: 1,
      className: "Class 10",
      section: "Section A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
    },
    {
      id: 2,
      className: "Class 10",
      section: "Section A",
      subject: "Physics",
      lesson: "Laws of Motion",
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.className) {
      const newLesson = {
        id: lessonList.length + 1,
        className: formData.className,
        section: formData.section || "N/A",
        subject: formData.subject || "N/A",
        lesson: formData.title,
      };
      setLessonList([...lessonList, newLesson]);
      setFormData({ title: "", className: "", section: "", subject: "" });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this lesson?")) {
      setLessonList(lessonList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Lesson Configuration"
        subtitle="Academic Planning"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> New Lesson
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <LessonForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <LessonList lessonList={lessonList} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
