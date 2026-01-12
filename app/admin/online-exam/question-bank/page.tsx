"use client";

import { useState } from "react";

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
    <>
      {/* PAGE TITLE */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Question Bank</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* ADD QUESTION */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-4">Add Question Bank</h2>

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
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
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
                type="text"
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

        {/* QUESTION LIST */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-4">Question Bank List</h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">SN</th>
                    <th className="border p-2">Group</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Type</th>
                    <th className="border p-2">Question</th>
                    <th className="border p-2">Marks</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {questions.map((q, i) => (
                    <tr key={i}>
                      <td className="border p-2">{i + 1}</td>
                      <td className="border p-2">{q.group}</td>
                      <td className="border p-2">{q.className}</td>
                      <td className="border p-2">{q.type}</td>
                      <td className="border p-2">{q.question}</td>
                      <td className="border p-2">{q.marks}</td>
                      <td className="border p-2 text-center">
                        <button className="text-blue-600 mr-2">Edit</button>
                        <button
                          onClick={() => remove(i)}
                          className="text-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {questions.length === 0 && (
                    <tr>
                      <td colSpan={7} className="text-center p-4 text-gray-400">
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
