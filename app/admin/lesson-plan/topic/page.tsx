"use client";

import React, { useState } from "react";
import {
  FaBookmark,
  FaEdit,
  FaTrash,
  FaCheckDouble,
  FaLayerGroup,
} from "react-icons/fa";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaBookmark className="text-white" size={20} />
          </div>
          Syllabus Topics
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Define New Topic
              <div className="h-1 w-12 bg-emerald-100 rounded-full"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-5 flex-1">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                  Topic Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:font-medium bg-gray-50/50"
                  placeholder="e.g. Completing the Square"
                  required
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="className"
                    value={formData.className}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none bg-gray-50/50"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Class 10">Class 10</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                      Section
                    </label>
                    <select
                      name="section"
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 outline-none bg-gray-50/50"
                    >
                      <option value="">Select</option>
                      <option value="Section A">A</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 outline-none bg-gray-50/50"
                    >
                      <option value="">Select</option>
                      <option value="Mathematics">Math</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    Lesson <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="lesson"
                    value={formData.lesson}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none bg-gray-50/50"
                    required
                  >
                    <option value="">Select Lesson</option>
                    <option value="Quadratic Equations">
                      Quadratic Equations
                    </option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden rounded-2xl bg-emerald-600 px-8 py-4 text-white font-black text-sm uppercase tracking-widest transition-all hover:bg-emerald-700 active:scale-[0.98] shadow-2xl shadow-emerald-200 shadow-opacity-20"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheckDouble className="group-hover:rotate-12 transition-transform" />
                    Save Topic
                  </div>
                  <div className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Registry Table */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5">
            <div className="flex items-center justify-between mb-8 text-xs font-black text-gray-400 uppercase tracking-widest">
              <span>Active Syllabus Index</span>
              <span className="tabular-nums font-mono text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">
                {topicList.length} Topics
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold">
                  <tr>
                    <th className="px-6 py-5 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-5 text-left text-[10px] uppercase font-black tracking-widest">
                      Lesson Parent
                    </th>
                    <th className="px-6 py-5 text-left text-[10px] uppercase font-black tracking-widest">
                      Topic Detail
                    </th>
                    <th className="px-6 py-5 text-center text-[10px] uppercase font-black tracking-widest">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {topicList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-emerald-50/30 transition-all group"
                    >
                      <td className="px-6 py-5 text-gray-400 font-mono text-xs">
                        {index + 1}
                      </td>
                      <td className="px-6 py-5">
                        <div className="font-black text-gray-700 text-xs uppercase mb-1">
                          {item.lesson}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                          <FaLayerGroup
                            size={10}
                            className="text-emerald-300"
                          />
                          {item.className} / {item.section}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="font-black text-gray-900 tracking-tight text-base group-hover:text-emerald-600 transition-colors">
                          {item.topic}
                        </div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">
                          {item.subject}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-center gap-2">
                          <button className="p-2.5 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2.5 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {topicList.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-16 text-center text-gray-300 font-black uppercase tracking-widest text-[10px]"
                      >
                        No topics mapped to the current syllabus.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Using FaCheckDouble from icons
import { FaCheckDouble } from "react-icons/fa";
