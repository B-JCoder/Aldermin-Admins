"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { TopicForm } from "@/components/modules/lesson-plan/TopicForm";
import { TopicList } from "@/components/modules/lesson-plan/TopicList";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function TopicPage() {
  const [formData, setFormData] = useState({
    title: "",
    className: "",
    section: "",
    subject: "",
    lesson: "",
  });

  const [topicList, setTopicList] = useState([
    {
      id: 1,
      className: "Class 10",
      section: "Section A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
    },
    {
      id: 2,
      className: "Class 10",
      section: "Section A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
      topic: "Discriminant Analysis",
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
    if (formData.title && formData.className && formData.lesson) {
      const newTopic = {
        id: topicList.length + 1,
        ...formData,
        topic: formData.title,
      };
      setTopicList([...topicList, newTopic]);
      setFormData({
        title: "",
        className: "",
        section: "",
        subject: "",
        lesson: "",
      });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this topic?")) {
      setTopicList(topicList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Syllabus Topics"
        subtitle="Topic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> New Topic
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <TopicForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <TopicList topicList={topicList} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
