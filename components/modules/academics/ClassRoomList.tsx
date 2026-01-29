"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaDoorOpen } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface Room {
  id: number;
  roomNumber: string;
  capacity: string;
}

interface ClassRoomListProps {
  rooms: Room[];
  handleDelete: (id: number) => void;
}

export function ClassRoomList({ rooms, handleDelete }: ClassRoomListProps) {
  return (
    <AdminCard className="h-full bg-white">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white ">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FaDoorOpen className="text-secondary" />
          Classrooms
        </h3>
        <Badge variant="outline" className="px-3 py-1 bg-white">
          {rooms.length} Rooms
        </Badge>
      </div>

      <div className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500  bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider">SN</th>
                <th className="px-6 py-4 font-bold tracking-wider">
                  Room Number
                </th>
                <th className="px-6 py-4 font-bold tracking-wider">Capacity</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rooms.map((room, index) => (
                <tr
                  key={room.id}
                  className="hover:bg-gray-50/60 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {room.roomNumber}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="font-bold">
                      {room.capacity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(room.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <FaTrash size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {rooms.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No classrooms added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminCard>
  );
}
