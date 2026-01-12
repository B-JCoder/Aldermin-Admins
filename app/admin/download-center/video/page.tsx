"use client";

import React, { useState } from "react";
import {
  FaVideo,
  FaPlay,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaYoutube,
  FaLink,
  FaSearch,
} from "react-icons/fa";

export default function VideoTutorialPage() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Introduction to Calculus",
      source: "YouTube",
      url: "https://youtube.com/watch?v=...",
      class: "Class 11",
      date: "2024-03-10",
    },
    {
      id: 2,
      title: "Lab Safety Procedures",
      source: "Vimeo",
      url: "https://vimeo.com/...",
      class: "All Classes",
      date: "2024-02-15",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-red-600 rounded-xl shadow-lg ring-4 ring-red-50">
            <FaVideo className="text-white" size={20} />
          </div>
          Visual Learning Hub
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-red-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Embed Video Resource
              <div className="h-1 w-12 bg-red-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Video Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. Chapter 1 Overview"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Source Link
                  </label>
                  <div className="relative">
                    <FaLink
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="url"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="https://..."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Platform
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>YouTube</option>
                      <option>Vimeo</option>
                      <option>Internal Server</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Target Audience
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>All Classes</option>
                      <option>Class 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white shadow-sm min-h-[80px]"
                    placeholder="Details..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Publish Video
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Video List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Video Archive
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((v) => (
                <div
                  key={v.id}
                  className="group relative rounded-3xl overflow-hidden bg-gray-900 aspect-video shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                    {v.source}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white font-black text-lg leading-tight mb-1">
                      {v.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                      <span>{v.class}</span> &bull; <span>{v.date}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-sm cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-4 ring-white/10 hover:scale-110 transition-all">
                      <FaPlay className="ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-all">
                      <FaTrash size={12} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-500 transition-all">
                      <FaEdit size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
