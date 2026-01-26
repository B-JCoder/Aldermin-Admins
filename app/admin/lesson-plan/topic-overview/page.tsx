"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { TopicOverviewFilter } from "@/components/modules/lesson-plan/TopicOverviewFilter";
import { TopicOverviewList } from "@/components/modules/lesson-plan/TopicOverviewList";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

export default function TopicOverviewPage() {
  const [searchParams, setSearchParams] = useState({
    className: "",
    section: "",
    subject: "",
  });

  const [topics, setTopics] = useState([
    {
      id: 1,
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
      date: "2023-12-10",
      teacher: "Marcus Aurelius",
    },
    {
      id: 2,
      lesson: "Quadratic Equations",
      topic: "Discriminant Analysis",
      date: "2023-12-12",
      teacher: "Marcus Aurelius",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching topics with", searchParams);
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Syllabus Topic Overview"
        subtitle="Holistic View"
        action={
          <Button variant="outline" className="gap-2">
            <FaPrint /> Print Summary
          </Button>
        }
      />

      <div className="space-y-8">
        {/* Filter Section */}
        <TopicOverviewFilter
          searchParams={searchParams}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />

        {/* Topics Table */}
        <TopicOverviewList topics={topics} />
      </div>
    </div>
  );
}
