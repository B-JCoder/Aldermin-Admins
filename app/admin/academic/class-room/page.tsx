"use client";

import React, { useState } from "react";
import {
  FaDoorOpen,
  FaUsers,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaBuilding,
} from "react-icons/fa";

export default function AcademicClassRoomPage() {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rooms, setRooms] = useState([
    { id: 1, number: "Room-101", capacity: "40" },
    { id: 2, number: "Room-102", capacity: "35" },
    { id: 3, number: "Lecture Hall B", capacity: "120" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomNumber.trim() && capacity.trim()) {
      setRooms([
        ...rooms,
        { id: rooms.length + 1, number: roomNumber, capacity: capacity },
      ]);
      setRoomNumber("");
      setCapacity("");
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaBuilding className="text-white" size={20} />
          </div>
          Spatial Inventory
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/10">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Register Space
              <div className="h-1 w-12 bg-indigo-100 rounded-full"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Room Designation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaDoorOpen
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={14}
                  />
                  <input
                    type="text"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className="w-full rounded-2xl border-gray-100 p-4 pl-12 text-sm font-bold focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/20 outline-none transition-all placeholder:font-medium bg-white shadow-sm italic uppercase"
                    placeholder="e.g. HALL-A"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Occupancy Capacity <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUsers
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={14}
                  />
                  <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="w-full rounded-2xl border-gray-100 p-4 pl-12 text-sm font-black focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/20 outline-none transition-all placeholder:font-medium bg-white shadow-sm font-mono"
                    placeholder="40"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-5 text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-black active:scale-[0.98] shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="group-hover:rotate-12 transition-transform" />
                    Archive Space
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Architectural Matrix
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Space Identity
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Load Capacity
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {rooms.map((r, index) => (
                    <tr
                      key={r.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm border border-gray-100">
                            <FaDoorOpen size={20} />
                          </div>
                          <span className="font-black text-gray-900 tracking-tight text-lg font-serif italic uppercase leading-none">
                            {r.number}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-2xl text-xs font-black italic shadow-sm border border-indigo-100">
                          <FaUsers size={12} />
                          {r.capacity} Seats
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={14} />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                            <FaTrash size={14} />
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
