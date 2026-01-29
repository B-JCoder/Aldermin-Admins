"use client";

import React, { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FaCheck, FaCogs } from "react-icons/fa";
import { Label } from "@/components/ui/label";

export function EvaluationSettings() {
  const [settings, setSettings] = useState({
    allowStudentReview: true,
    allowParentReview: true,
    anonymousReviews: false,
    reviewVerificationRequired: true,
    maxStars: 5,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AdminCard className="p-8">
          <h3 className="text-sm font-semibold text-gray-500   mb-6">
            Access Control
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 backdrop-blur-sm">
              <div className="space-y-1">
                <Label
                  className="text-sm font-semibold text-foreground cursor-pointer"
                  htmlFor="allowStudentReview"
                >
                  Student Reviews
                </Label>
                <div className="text-[10px]  font-bold text-gray-500 ">
                  Allow students to submit evaluations
                </div>
              </div>
              <Switch
                id="allowStudentReview"
                checked={settings.allowStudentReview}
                onCheckedChange={() => handleToggle("allowStudentReview")}
                className="data-[state=checked]:bg-secondary"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 backdrop-blur-sm">
              <div className="space-y-1">
                <Label
                  className="text-sm font-semibold text-foreground cursor-pointer"
                  htmlFor="allowParentReview"
                >
                  Parent Reviews
                </Label>
                <div className="text-[10px]  font-bold text-gray-500 ">
                  Allow parents to submit evaluations
                </div>
              </div>
              <Switch
                id="allowParentReview"
                checked={settings.allowParentReview}
                onCheckedChange={() => handleToggle("allowParentReview")}
                className="data-[state=checked]:bg-secondary"
              />
            </div>
          </div>
        </AdminCard>

        <AdminCard className="p-8">
          <h3 className="text-sm font-semibold text-gray-500   mb-6">
            Data Privacy
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 backdrop-blur-sm">
              <div className="space-y-1">
                <Label
                  className="text-sm font-semibold text-foreground cursor-pointer"
                  htmlFor="anonymousReviews"
                >
                  Anonymous Submissions
                </Label>
                <div className="text-[10px]  font-bold text-gray-500 ">
                  Hide submitter identity from faculty
                </div>
              </div>
              <Switch
                id="anonymousReviews"
                checked={settings.anonymousReviews}
                onCheckedChange={() => handleToggle("anonymousReviews")}
                className="data-[state=checked]:bg-secondary"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 backdrop-blur-sm">
              <div className="space-y-1">
                <Label
                  className="text-sm font-semibold text-foreground cursor-pointer"
                  htmlFor="reviewVerificationRequired"
                >
                  Admin Approval
                </Label>
                <div className="text-[10px]  font-bold text-gray-500 ">
                  Manual verification before publishing
                </div>
              </div>
              <Switch
                id="reviewVerificationRequired"
                checked={settings.reviewVerificationRequired}
                onCheckedChange={() =>
                  handleToggle("reviewVerificationRequired")
                }
                className="data-[state=checked]:bg-secondary"
              />
            </div>
          </div>
        </AdminCard>
      </div>

      <div className="flex justify-end">
        <Button
          variant="secondary"
          size="lg"
          className="rounded-2xl px-10 py-6 text-sm font-semibold   shadow-xl"
        >
          <FaCheck className="mr-2" />
          Save Protocol
        </Button>
      </div>
    </div>
  );
}
