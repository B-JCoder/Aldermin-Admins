"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import {
  FaUserShield,
  FaIdCard,
  FaUserTie,
  FaBuilding,
  FaUserCircle,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUniversity,
  FaShareAlt,
  FaFileUpload,
  FaCloudUploadAlt,
  FaSave,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function AddStaffPage() {
  const [formData, setFormData] = useState({
    staffNo: "",
    role: "",
    department: "",
    designation: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    email: "",
    gender: "",
    dob: "",
    joiningDate: "",
    phone: "",
    maritalStatus: "",
    emergencyMobile: "",
    drivingLicense: "",
    photo: null as File | null,
    isExpert: true,
    address: "",
    permanentAddress: "",
    experience: "",
    epfNo: "",
    basicSalary: "",
    contractType: "",
    location: "",
    bankAccountName: "",
    bankAccountNo: "",
    bankName: "",
    branchName: "",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    resume: null as File | null,
    joiningDoc: null as File | null,
    otherDoc: null as File | null,
    nic: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, [field]: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving Staff Details", formData);
  };

  const SectionTitle = ({
    icon: Icon,
    title,
    subtitle,
  }: {
    icon: any;
    title: string;
    subtitle: string;
  }) => (
    <div className="flex items-center gap-4 mb-8 group">
      <div className="p-3 bg-secondary rounded-2xl shadow-lg ring-4 ring-secondary/5 group-hover:scale-110 transition-transform">
        <Icon className="text-white" size={20} />
      </div>
      <div>
        <h4 className="text-lg font-black text-gray-800 tracking-tight uppercase">
          {title}
        </h4>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          {subtitle}
        </p>
      </div>
      <div className="flex-1 border-b border-dashed border-gray-100 ml-4"></div>
    </div>
  );

  return (
    <div className="container mx-auto space-y-12 pb-20">
      <PageHeader
        title="Personnel Onboarding"
        subtitle="Staff Recruitment Lifecycle"
        backUrl="/admin/hr/staff"
      />

      <form onSubmit={handleSubmit} noValidate className="space-y-12">
        {/* Basic Info Section */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-50 ring-1 ring-black/5">
          <SectionTitle
            icon={FaUserCircle}
            title="Primary Identity"
            subtitle="Core employment data & credentials"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Staff ID # <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="staffNo"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                placeholder="REQ-001"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Role <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              >
                <option value="">Select</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Department <span className="text-red-500">*</span>
              </label>
              <select
                name="department"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              >
                <option value="">Select</option>
                <option value="academic">Academic</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Designation <span className="text-red-500">*</span>
              </label>
              <select
                name="designation"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              >
                <option value="">Select</option>
                <option value="lecturer">Lecturer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Gender
              </label>
              <select
                name="gender"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                placeholder="email@institution.edu"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Mobile # <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                placeholder="+880..."
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Joining Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="joiningDate"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Professional & Payroll Section */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-50 ring-1 ring-black/5">
          <SectionTitle
            icon={FaMoneyBillWave}
            title="Payroll & Professional"
            subtitle="Salary structure and contract specifics"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                EPF Number
              </label>
              <input
                type="text"
                name="epfNo"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Basic Salary
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-black">
                  $
                </span>
                <input
                  type="text"
                  name="basicSalary"
                  onChange={handleInputChange}
                  className="w-full rounded-2xl bg-gray-50 border-gray-100 pl-10 p-4 text-sm font-black text-indigo-600 focus:ring-2 focus:ring-blue-500/20 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Contract Type
              </label>
              <select
                name="contractType"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
              >
                <option value="">Select</option>
                <option value="permanent">Permanent</option>
                <option value="probation">Probation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                Experience
              </label>
              <input
                type="text"
                name="experience"
                onChange={handleInputChange}
                className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                placeholder="5 Years"
              />
            </div>
          </div>
        </div>

        {/* Bank & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-50 ring-1 ring-black/5">
            <SectionTitle
              icon={FaUniversity}
              title="Bank Registry"
              subtitle="Direct deposit details"
            />
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  name="bankAccountName"
                  onChange={handleInputChange}
                  className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Account #
                  </label>
                  <input
                    type="text"
                    name="bankAccountNo"
                    onChange={handleInputChange}
                    className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    onChange={handleInputChange}
                    className="w-full rounded-2xl bg-gray-50 border-gray-100 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-50 ring-1 ring-black/5">
            <SectionTitle
              icon={FaCloudUploadAlt}
              title="Documentation"
              subtitle="Upload essential verification files"
            />
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 hover:border-blue-300 transition-colors relative">
                <span className="text-xs font-black text-gray-500 uppercase">
                  Staff Resume / CV
                </span>
                <FaFileUpload className="text-gray-300" size={20} />
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "resume")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 hover:border-blue-300 transition-colors relative">
                <span className="text-xs font-black text-gray-500 uppercase">
                  Employment Letter
                </span>
                <FaFileUpload className="text-gray-300" size={20} />
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "joiningDoc")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 hover:border-blue-300 transition-colors relative">
                <span className="text-xs font-black text-gray-500 uppercase">
                  NID / Global ID
                </span>
                <FaFileUpload className="text-gray-300" size={20} />
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "otherDoc")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-center pt-8">
          <Button
            type="submit"
            className="group relative flex items-center justify-center gap-4 rounded-full bg-secondary h-20 px-16 py-5 text-white font-black text-xl transition-all hover:bg-secondary/90 active:scale-[0.98] shadow-2xl shadow-secondary/20 overflow-hidden"
          >
            <FaSave
              size={24}
              className="group-hover:rotate-12 transition-transform"
            />
            Finalize Personnel Record
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Button>
        </div>
      </form>
    </div>
  );
}
