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
    <div
      className={cn(
        "flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        className
      )}
    >
      {onView && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={(e) => {
            e.stopPropagation();
            onView();
          }}
          className="bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-sm"
        >
          <FaEye size={14} />
        </Button>
      )}

      {onEdit && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
        >
          <FaEdit size={14} />
        </Button>
      )}

      {onDelete && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm"
        >
          <FaTrash size={14} />
        </Button>
      )}

      {customActions}
    </div>
  );
}
