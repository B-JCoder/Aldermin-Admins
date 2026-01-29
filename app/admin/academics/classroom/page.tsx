"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ClassRoomForm } from "@/components/modules/academics/ClassRoomForm";
import { ClassRoomList } from "@/components/modules/academics/ClassRoomList";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function ClassRoomPage() {
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: "101", capacity: "40" },
  ]);
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomNumber || !capacity) return;
    setRooms([...rooms, { id: rooms.length + 1, roomNumber, capacity }]);
    setRoomNumber("");
    setCapacity("");
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this room?")) {
      setRooms(rooms.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Classroom Management"
        subtitle="Infrastructure"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Add Room
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <ClassRoomForm
            roomNumber={roomNumber}
            setRoomNumber={setRoomNumber}
            capacity={capacity}
            setCapacity={setCapacity}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <ClassRoomList rooms={rooms} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
