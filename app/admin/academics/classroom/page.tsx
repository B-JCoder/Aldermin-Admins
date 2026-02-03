"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ClassRoomForm } from "@/components/modules/academics/ClassRoomForm";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Room {
  id: number;
  roomNumber: string;
  capacity: string;
}

export default function ClassRoomPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = (await apiService.academics.getClassRooms()) as Room[];
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomNumber || !capacity) return;
    setRooms([...rooms, { id: Math.random(), roomNumber, capacity }]);
    setRoomNumber("");
    setCapacity("");
  };

  const columns = [
    {
      header: "Room Identifier",
      accessor: "roomNumber" as keyof Room,
      className: "font-bold text-foreground",
    },
    {
      header: "Seating Capacity",
      accessor: (item: Room) => (
        <span className="font-mono text-secondary font-bold">
          {item.capacity} Seats
        </span>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Action",
      accessor: (item: Room) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setRooms(rooms.filter((r) => r.id !== item.id))}
        />
      ),
      className: "text-right",
      headerClassName: "text-right",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Classroom Management"
        subtitle="Infrastructure"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Add Room
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
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
          <DataTable
            data={rooms}
            columns={columns}
            searchKey="roomNumber"
            searchPlaceholder="Search rooms..."
            title="Institutional Infrastructure"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
