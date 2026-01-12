"use client";

import { useState } from "react";

type OnlineExam = {
  title: string;
  className: string;
  subject: string;
  date: string;
  duration: string;
  percentage: string;
  status: string;
};

export default function OnlineExamPage() {
  const [exams, setExams] = useState<OnlineExam[]>([]);

  const [form, setForm] = useState({
    group: "",
    className: "",
    section: "",
    questionType: "",
    question: "",
    marks: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    setExams([
      ...exams,
      {
        title: form.question,
        className: form.className,
        subject: "N/A",
        date: "N/A",
        duration: "N/A",
        percentage: "N/A",
        status: "Active",
      },
    ]);

    setForm({
      group: "",
      className: "",
      section: "",
      questionType: "",
      question: "",
      marks: "",
    });
  };

  return (
    <>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Online Exam</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* ADD ONLINE EXAM */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-4">Add Online Exam</h2>

            <form onSubmit={submit} className="space-y-3">
              <select
                className="w-full border rounded px-3 py-2"
                value={form.group}
                onChange={(e) => setForm({ ...form, group: e.target.value })}
              >
                <option value="">Select Group</option>
              </select>

              <select
                className="w-full border rounded px-3 py-2"
                value={form.className}
                onChange={(e) =>
                  setForm({ ...form, className: e.target.value })
                }
              >
                <option value="">Select Class</option>
              </select>

              <select
                className="w-full border rounded px-3 py-2"
                value={form.section}
                onChange={(e) => setForm({ ...form, section: e.target.value })}
              >
                <option value="">Select Section</option>
              </select>

              <select
                className="w-full border rounded px-3 py-2"
                value={form.questionType}
                onChange={(e) =>
                  setForm({ ...form, questionType: e.target.value })
                }
              >
                <option value="">Question Type</option>
              </select>

              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Question"
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
              />

              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Marks"
                value={form.marks}
                onChange={(e) => setForm({ ...form, marks: e.target.value })}
              />

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </form>
          </div>
        </div>

        {/* ONLINE EXAM LIST */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-4">Online Exam List</h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">SN</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Subject</th>
                    <th className="border p-2">Exam Date</th>
                    <th className="border p-2">Duration</th>
                    <th className="border p-2">Percentage</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {exams.map((exam, i) => (
                    <tr key={i}>
                      <td className="border p-2">{i + 1}</td>
                      <td className="border p-2">{exam.title}</td>
                      <td className="border p-2">{exam.className}</td>
                      <td className="border p-2">{exam.subject}</td>
                      <td className="border p-2">{exam.date}</td>
                      <td className="border p-2">{exam.duration}</td>
                      <td className="border p-2">{exam.percentage}</td>
                      <td className="border p-2">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                          {exam.status}
                        </span>
                      </td>
                      <td className="border p-2 text-center">
                        <button className="text-blue-600 mr-2">Edit</button>
                        <button className="text-red-600">Delete</button>
                      </td>
                    </tr>
                  ))}

                  {exams.length === 0 && (
                    <tr>
                      <td colSpan={9} className="text-center p-4 text-gray-400">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
