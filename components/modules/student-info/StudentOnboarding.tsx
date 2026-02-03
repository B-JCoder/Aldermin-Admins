"use client";

import React, { useState, useEffect } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaUserPlus,
  FaGraduationCap,
  FaUserAlt,
  FaPhoneAlt,
  FaHospitalSymbol,
  FaUsers,
  FaFileAlt,
  FaSave,
  FaSpinner,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { apiService } from "@/lib/api-service";

export function StudentOnboarding() {
  const [activeSegment, setActiveSegment] = useState("academic");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [classes, setClasses] = useState<string[]>([]);
  const [sections, setSections] = useState<string[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    session: "2023 - 2024",
    grade: "",
    section: "",
    admissionNo: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "Male",
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      const classData = await apiService.academics.getClasses();
      const sectionData = await apiService.academics.getSections();
      setClasses(classData);
      setSections(sectionData);
    };
    fetchMetadata();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await apiService.students.create(formData);
      if (response.success) {
        alert("Student record initialized in archive successfully!");
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const segments = [
    { id: "academic", label: "Academic", icon: <FaGraduationCap /> },
    { id: "personal", label: "Personal", icon: <FaUserAlt /> },
    { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
    { id: "medical", label: "Medical", icon: <FaHospitalSymbol /> },
    { id: "parents", label: "Family", icon: <FaUsers /> },
    { id: "guardian", label: "Guardian", icon: <FaUserPlus /> },
    { id: "additional", label: "Extended", icon: <FaFileAlt /> },
  ];

  return (
    <div className="pb-8">
      <AdminCard className="mb-8 p-1.5 flex flex-wrap gap-1">
        {segments.map((seg) => (
          <button
            key={seg.id}
            type="button"
            onClick={() => setActiveSegment(seg.id)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-semibold transition-all",
              activeSegment === seg.id
                ? "bg-secondary text-white shadow-md"
                : "text-gray-500 hover:bg-secondary/10 hover:text-secondary",
            )}
          >
            {seg.icon}
            <span className="hidden lg:inline">{seg.label}</span>
          </button>
        ))}
      </AdminCard>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <div className="lg:col-span-8 space-y-8">
          <AdminCard className="p-8">
            {activeSegment === "academic" && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                    01
                  </span>
                  Institutional Placement
                  <div className="h-[1px] flex-1 bg-secondary/10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Session Year <span className="text-secondary">*</span>
                    </Label>
                    <Select defaultValue={formData.session}>
                      <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023 - 2024">2023 - 2024</SelectItem>
                        <SelectItem value="2024 - 2025">2024 - 2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Grade / Class <span className="text-secondary">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) => handleInputChange("grade", val)}
                    >
                      <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Sectional Unit <span className="text-secondary">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) => handleInputChange("section", val)}
                    >
                      <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
                        <SelectValue placeholder="Select Section" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Admission No.
                    </Label>
                    <Input
                      value={formData.admissionNo}
                      onChange={(e) =>
                        handleInputChange("admissionNo", e.target.value)
                      }
                      className="w-full bg-secondary/5 border-secondary/20 rounded-xl py-6 text-xs font-semibold text-secondary placeholder:text-secondary/30"
                      placeholder="SIS-2023-..."
                    />
                  </div>
                </div>
              </section>
            )}

            {activeSegment === "personal" && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                    02
                  </span>
                  Persona Details
                  <div className="h-[1px] flex-1 bg-secondary/10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Legal First Name <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full bg-white border-gray-200 py-6 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Legal Last Name <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full bg-white border-gray-200 py-6 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Birth Date <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => handleInputChange("dob", e.target.value)}
                      className="w-full bg-white border-gray-200 py-6 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-gray-500 ml-2">
                      Gender Identity <span className="text-secondary">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={
                          formData.gender === "Male" ? "secondary" : "outline"
                        }
                        onClick={() => handleInputChange("gender", "Male")}
                        className="py-6 rounded-xl text-[10px] font-semibold"
                      >
                        Male
                      </Button>
                      <Button
                        type="button"
                        variant={
                          formData.gender === "Female" ? "secondary" : "outline"
                        }
                        onClick={() => handleInputChange("gender", "Female")}
                        className="py-6 rounded-xl border-gray-200 bg-white/30 text-gray-500 text-[10px] font-semibold hover:bg-white"
                      >
                        Female
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSegment !== "academic" && activeSegment !== "personal" && (
              <div className="py-20 text-center space-y-4">
                <div className="text-6xl text-secondary/20 flex justify-center">
                  {segments.find((s) => s.id === activeSegment)?.icon}
                </div>
                <div className="text-xs font-semibold text-gray-500 tracking-[0.3em]">
                  Segment {activeSegment} UI Layer Initialized
                </div>
              </div>
            )}
          </AdminCard>
        </div>

        {/* Side Actions & Overview */}
        <div className="lg:col-span-4 space-y-8">
          <AdminCard className="bg-secondary text-white p-8 relative overflow-hidden group border-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
            <h4 className="text-[10px] font-semibold tracking-[0.4em] opacity-50 mb-8">
              Registration Status
            </h4>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-semibold tracking-tighter">
                  {isSubmitting ? "Finalizing..." : "Profile Not Finalized"}
                </div>
                <div className="text-[10px] font-bold text-white/70 mt-2">
                  Step 1 of 7: {activeSegment}
                </div>
              </div>
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-1/7"></div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-secondary hover:bg-white/90 rounded-2xl py-6 text-xs font-semibold shadow-xl"
              >
                {isSubmitting ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  <FaSave size={14} className="mr-2" />
                )}
                Commit Archive
              </Button>
            </div>
          </AdminCard>

          <AdminCard className="p-8 space-y-6">
            <h4 className="text-[10px] font-semibold text-gray-500">
              Patron Portrait
            </h4>
            <div className="aspect-square bg-secondary/5 rounded-[2rem] border-4 border-dashed border-secondary/10 flex flex-col items-center justify-center text-secondary/30 gap-4 group cursor-pointer hover:border-secondary/30 hover:bg-secondary/10 transition-all">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center text-secondary/20 group-hover:text-secondary transition-colors">
                <FaUserAlt size={32} />
              </div>
              <div className="text-[9px] font-semibold text-secondary/50">
                Upload Digital ISO
              </div>
            </div>
          </AdminCard>
        </div>
      </form>
    </div>
  );
}
