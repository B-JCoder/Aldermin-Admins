"use client";

import { useState } from "react";

const subjects = ["Math", "English", "Science"];
const sections = ["A", "B", "C"];
const teachers = ["John Doe", "Sarah Smith", "Michael Lee"];

const assignedSubjects = [
  {
    id: 1,
    subject: "Math",
    section: "A",
    teacher: "John Doe",
  },
];

export default function AssignSubjectPage() {
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");
  const [teacher, setTeacher] = useState("");

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this record?")) {
      alert("Deleted (mock)");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Assign Subject</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* FORM */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Add Assign Subject</h2>

            <form className="space-y-4">
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Subject <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Select</option>
                  {subjects.map((sub) => (
                    <option key={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              {/* Section */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Section <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option value="">Select</option>
                  {sections.map((sec) => (
                    <option key={sec}>{sec}</option>
                  ))}
                </select>
              </div>

              {/* Teacher */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Teacher <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                >
                  <option value="">Select</option>
                  {teachers.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
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
            <h2 className="text-lg font-semibold mb-4">Assign Subject List</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">SN</th>
                    <th className="px-4 py-2 border">Subject</th>
                    <th className="px-4 py-2 border">Section</th>
                    <th className="px-4 py-2 border">Teacher</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedSubjects.map((item, index) => (
                    <tr key={item.id} className="text-center">
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{item.subject}</td>
                      <td className="border px-4 py-2">{item.section}</td>
                      <td className="border px-4 py-2">{item.teacher}</td>
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
