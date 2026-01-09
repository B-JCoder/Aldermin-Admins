"use client";

import { useState } from "react";

export default function SectionPage() {
  const [sections, setSections] = useState<string[]>([]);
  const [sectionName, setSectionName] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionName) return;
    setSections([...sections, sectionName]);
    setSectionName("");
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Add Section */}
      <div className="col-span-12 md:col-span-4">
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-4">Add Section</h2>

          <form onSubmit={submit} className="space-y-3">
            <label className="text-sm font-medium">Section Name</label>
            <input
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </form>
        </div>
      </div>

      {/* Section List */}
      <div className="col-span-12 md:col-span-8">
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-4">Section List</h2>

          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">SN</th>
                <th className="border p-2">Section</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((sec, i) => (
                <tr key={i}>
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{sec}</td>
                  <td className="border p-2 text-center text-red-600">
                    Delete
                  </td>
                </tr>
              ))}
              {sections.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-gray-400">
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
