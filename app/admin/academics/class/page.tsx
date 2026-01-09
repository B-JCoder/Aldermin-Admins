"use client";

import { useState } from "react";

const passingMarksOptions = [33, 40, 50];

const classList = [
  {
    id: 1,
    name: "Class 1",
    passingMarks: 33,
    averageMarks: 65,
  },
];

export default function ClassPage() {
  const [className, setClassName] = useState("");
  const [passingMarks, setPassingMarks] = useState("");
  const [sections, setSections] = useState({
    A: false,
    B: false,
    C: false,
  });

  const handleCheckboxChange = (section: "A" | "B" | "C") => {
    setSections({ ...sections, [section]: !sections[section] });
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this record?")) {
      alert("Deleted (mock)");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-800">Class</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* FORM */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Add Class</h2>

            <form className="space-y-4">
              {/* Class Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Class Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </div>

              {/* Passing Marks */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Passing Marks
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                  value={passingMarks}
                  onChange={(e) => setPassingMarks(e.target.value)}
                >
                  <option value="">Select</option>
                  {passingMarksOptions.map((mark) => (
                    <option key={mark} value={mark}>
                      {mark}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sections */}
              <div className="space-y-2">
                {(["A", "B", "C"] as const).map((section) => (
                  <label
                    key={section}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={sections[section]}
                      onChange={() => handleCheckboxChange(section)}
                      className="h-4 w-4 text-blue-600"
                    />
                    Section {section}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
            </form>
          </div>
        </div>

        {/* TABLE */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Class List</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">SN</th>
                    <th className="px-4 py-2 border">Class Name</th>
                    <th className="px-4 py-2 border">Average Passing Marks</th>
                    <th className="px-4 py-2 border">Average Marks</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {classList.map((cls, index) => (
                    <tr key={cls.id} className="text-center">
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{cls.name}</td>
                      <td className="border px-4 py-2">{cls.passingMarks}</td>
                      <td className="border px-4 py-2">{cls.averageMarks}</td>
                      <td className="border px-4 py-2">
                        <div className="flex justify-center gap-2">
                          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
                            Edit
                          </button>
                          <button
                            onClick={handleDelete}
                            className="px-3 py-1 text-sm text-red-600 border rounded hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
