"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ListActionButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
  customActions?: React.ReactNode;
  className?: string;
}

export function ListActionButtons({
  onEdit,
  onDelete,
  onView,
  customActions,
  className,
}: ListActionButtonsProps) {
  return (
    <div className={cn("flex justify-center gap-1", className)}>
      {onView && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onView();
          }}
          className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
        >
          <FaEye size={14} />
        </Button>
      )}

      {onEdit && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="h-8 w-8 p-0 text-gray-500 hover:text-green-600 hover:bg-green-50"
        >
          <FaEdit size={14} />
        </Button>
      )}

      {onDelete && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="h-8 w-8 p-0 text-gray-500 hover:text-red-600 hover:bg-red-50"
        >
          <FaTrash size={14} />
        </Button>
      )}

      {customActions}
    </div>
  );
}
