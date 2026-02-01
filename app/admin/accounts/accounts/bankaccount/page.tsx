"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function BankAccountPage() {
  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Bank Accounts"
        subtitle="Manage your institution's bank accounts"
      />
      <AdminCard className="p-6">
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl text-primary">🏦</span>
          </div>
          <h3 className="text-xl font-semibold">Bank Accounts Module</h3>
          <p className="text-muted-foreground max-w-md">
            The Bank Accounts management interface is currently under
            development. Here you will be able to manage bank details and
            transactions.
          </p>
        </div>
      </AdminCard>
    </div>
  );
}
