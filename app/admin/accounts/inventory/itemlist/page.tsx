"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";

interface InventoryItem {
  id: number;
  item: string;
  category: string;
  qty: number;
  unit: string;
}

export default function ItemListPage() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data =
          (await apiService.accounts.getInventory()) as InventoryItem[];
        setItems(data);
      } catch (error) {
        console.error("Error fetching inventory items:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const columns = [
    {
      header: "Asset Item",
      accessor: "item" as keyof InventoryItem,
      className: "font-semibold text-foreground",
    },
    {
      header: "Category",
      accessor: (item: InventoryItem) => (
        <Badge
          variant="secondary"
          className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0"
        >
          {item.category}
        </Badge>
      ),
    },
    {
      header: "Stock Level",
      accessor: (item: InventoryItem) => (
        <span className="font-mono font-bold text-gray-700">
          {item.qty} {item.unit}
        </span>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Action",
      accessor: (item: InventoryItem) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setItems(items.filter((i) => i.id !== item.id))}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Stock Inventory"
        subtitle="Institutional Resource Registry"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10">
            <FaPlusCircle /> Register New Supply
          </Button>
        }
      />

      <DataTable
        data={items}
        columns={columns}
        searchKey="item"
        searchPlaceholder="Search items by name or category..."
        title="Asset Registry"
        isLoading={isLoading}
      />
    </div>
  );
}
