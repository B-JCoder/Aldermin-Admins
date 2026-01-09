"use client";

import { useState } from "react";

type Subject = {
  name: string;
  code: string;
  type: "Theory" | "Practical";
};

export default function SubjectPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [form, setForm] = useState<Subject>({
    name: "",
    code: "",
    type: "Theory",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubjects([...subjects, form]);
    setForm({ name: "", code: "", type: "Theory" });
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Add Subject */}
      <div className="col-span-12 md:col-span-4">
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold mb-4">Add Subject</h2>

          <form onSubmit={submit} className="space-y-3">
            <input
              placeholder="Subject Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <input
              placeholder="Subject Code"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <div className="flex gap-6 text-sm">
              <label>
                <input
                  type="radio"
                  checked={form.type === "Theory"}
                  onChange={() => setForm({ ...form, type: "Theory" })}
                />{" "}
                Theory
              </label>

              <label>
                <input
                  type="radio"
                  checked={form.type === "Practical"}
                  onChange={() => setForm({ ...form, type: "Practical" })}
                />{" "}
                Practical
              </label>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </form>
        </div>
      </div>

      {/* Subject List */}
      <div className="col-span-12 md:col-span-8">
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold mb-4">Subject List</h2>

          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">SN</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Code</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, i) => (
                <tr key={i}>
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.type}</td>
                  <td className="border p-2">{s.code}</td>
                  <td className="border p-2 text-center text-red-600">
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
