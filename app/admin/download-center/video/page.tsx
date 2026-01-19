"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { FaPlay, FaCheck, FaLink, FaTrash, FaEdit } from "react-icons/fa";

export default function VideoTutorialPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

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

  const filteredVideos = videos.filter(
    (v: any) =>
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVideos.length / pageSize);
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Visual Learning Hub"
        subtitle="Manage and Publish Educational Video Content"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Upload Form */}
        <div className="lg:col-span-4 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Embed Video Resource
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Video Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm italic"
                    placeholder="e.g. Chapter 1 Overview"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Source Link
                  </label>
                  <div className="relative">
                    <FaLink
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <input
                      type="url"
                      className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="https://..."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Platform
                    </label>
                    <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>YouTube</option>
                      <option>Vimeo</option>
                      <option>Internal Server</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Target Audience
                    </label>
                    <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>All Classes</option>
                      <option>Class 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[100px]"
                    placeholder="Details about this learning resource..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaCheck className="mr-2 italic" /> Publish Hub Video
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Video List */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search tutorial archive..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <GlassCard className="flex-1 flex flex-col p-8">
            <div className="mb-8 border-b border-white/20 pb-6">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Visual Resource Archive
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {paginatedVideos.map((v: any) => (
                <div
                  key={v.id}
                  className="group relative rounded-[2rem] overflow-hidden bg-slate-950 aspect-video shadow-lg hover:shadow-2xl transition-all border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                    {v.source}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white font-black text-lg leading-tight mb-2 uppercase italic tracking-tight">
                      {v.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
                      <span className="text-secondary">{v.class}</span>{" "}
                      <span className="opacity-20">|</span>{" "}
                      <span>{v.date}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-sm cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-secondary/80 backdrop-blur-md flex items-center justify-center text-white ring-8 ring-secondary/20 hover:scale-110 transition-all shadow-2xl">
                      <FaPlay size={20} className="ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary transition-all shadow-xl">
                      <FaEdit size={12} />
                    </button>
                    <button className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500 transition-all shadow-xl">
                      <FaTrash size={12} />
                    </button>
                  </div>
                </div>
              ))}
              {paginatedVideos.length === 0 && (
                <div className="col-span-full h-60 flex items-center justify-center border border-dashed border-white/20 rounded-[2rem] text-muted-foreground uppercase tracking-widest text-[10px] font-black">
                  No matching videos in archive.
                </div>
              )}
            </div>

            {filteredVideos.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredVideos.length}
                pageSize={pageSize}
              />
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
