"use client";

import { useState } from "react";

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
    <>
      {/* PAGE TITLE */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Question Group</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* ADD QUESTION GROUP */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-4">Add Question</h2>

            <form onSubmit={submit} className="space-y-3">
              <div>
                <label className="block text-sm mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </form>
          </div>
        </div>

        {/* QUESTION GROUP LIST */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-4">Question List</h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">SN</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {groups.map((g, i) => (
                    <tr key={i}>
                      <td className="border p-2">{i + 1}</td>
                      <td className="border p-2">{g.title}</td>
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

                  {groups.length === 0 && (
                    <tr>
                      <td colSpan={3} className="text-center p-4 text-gray-400">
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
