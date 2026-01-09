"use client";

import { useState } from "react";

export default function ClassRoomPage() {
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: "101", capacity: "40" },
  ]);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* ===== Form ===== */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Add Class Room</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Room Number</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Capacity</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </form>
        </div>
      </div>

      {/* ===== Table ===== */}
      <div className="col-span-12 lg:col-span-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Class Room List</h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">SN</th>
                  <th className="p-2 border">Room Number</th>
                  <th className="p-2 border">Capacity</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>

              <tbody>
                {rooms.map((room, index) => (
                  <tr key={room.id}>
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{room.roomNumber}</td>
                    <td className="p-2 border">{room.capacity}</td>
                    <td className="p-2 border text-center">
                      <button className="text-blue-600 mr-3">Edit</button>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
