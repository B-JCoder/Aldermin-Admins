"use client";

import { useState } from "react";

const classes = ["Class 1", "Class 2", "Class 3"];
const sections = ["A", "B", "C"];
const teachers = ["John Doe", "Sarah Smith", "Michael Lee"];

const assignedTeachers = [
  {
    id: 1,
    class: "Class 1",
    section: "A",
    teacher: "John Doe",
  },
];

export default function AssignClassTeacherPage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this record?")) {
      alert("Deleted (mock)");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Assign Class Teacher
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* FORM */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Add Assign Class Teacher
            </h2>

            <form className="space-y-4">
              {/* Class */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Class <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">Select</option>
                  {classes.map((cls) => (
                    <option key={cls}>{cls}</option>
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
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
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
                  value={selectedTeacher}
                  onChange={(e) => setSelectedTeacher(e.target.value)}
                >
                  <option value="">Select</option>
                  {teachers.map((teacher) => (
                    <option key={teacher}>{teacher}</option>
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
            <h2 className="text-lg font-semibold mb-4">
              Assign Class Teacher List
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">SN</th>
                    <th className="px-4 py-2 border">Class</th>
                    <th className="px-4 py-2 border">Section</th>
                    <th className="px-4 py-2 border">Teacher</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedTeachers.map((item, index) => (
                    <tr key={item.id} className="text-center">
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{item.class}</td>
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
