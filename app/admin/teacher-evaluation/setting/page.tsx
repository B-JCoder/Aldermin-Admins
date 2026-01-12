"use client";

import React, { useState } from "react";
import { FaCogs, FaCheck } from "react-icons/fa";

export default function TeacherEvaluationSettingsPage() {
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
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-gray-400 rotate-1">
            <FaCogs className="text-white -rotate-1" size={24} />
          </div>
          Evaluation Protocols
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">
            Access Control
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <div className="text-sm font-black text-gray-900">
                  Student Reviews
                </div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                  Allow students to submit evaluations
                </div>
              </div>
              <button
                onClick={() => handleToggle("allowStudentReview")}
                className={`w-14 h-8 rounded-full p-1 transition-all ${
                  settings.allowStudentReview ? "bg-indigo-600" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                    settings.allowStudentReview
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <div className="text-sm font-black text-gray-900">
                  Parent Reviews
                </div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                  Allow parents to submit evaluations
                </div>
              </div>
              <button
                onClick={() => handleToggle("allowParentReview")}
                className={`w-14 h-8 rounded-full p-1 transition-all ${
                  settings.allowParentReview ? "bg-indigo-600" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                    settings.allowParentReview
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">
            Data Privacy
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <div className="text-sm font-black text-gray-900">
                  Anonymous Submissions
                </div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                  Hide submitter identity from faculty
                </div>
              </div>
              <button
                onClick={() => handleToggle("anonymousReviews")}
                className={`w-14 h-8 rounded-full p-1 transition-all ${
                  settings.anonymousReviews ? "bg-indigo-600" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                    settings.anonymousReviews
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <div className="text-sm font-black text-gray-900">
                  Admin Approval
                </div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                  Manual verification before publishing
                </div>
              </div>
              <button
                onClick={() => handleToggle("reviewVerificationRequired")}
                className={`w-14 h-8 rounded-full p-1 transition-all ${
                  settings.reviewVerificationRequired
                    ? "bg-indigo-600"
                    : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                    settings.reviewVerificationRequired
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <button className="relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-10 py-5 text-sm font-black uppercase tracking-widest transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200">
          <div className="relative z-10 flex items-center justify-center gap-2">
            <FaCheck />
            Save Protocol
          </div>
        </button>
      </div>
    </div>
  );
}
