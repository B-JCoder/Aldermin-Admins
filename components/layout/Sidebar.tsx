"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaBook,
  FaBookOpen,
  FaClipboardList,
  FaCalendarCheck,
  FaLaptop,
  FaUsers,
  FaWrench,
  FaGraduationCap,
  FaFileAlt,
  FaChalkboardTeacher,
  FaPrint,
  FaDownload,
  FaUser,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { cn } from "@/lib/utils";

type SubMenuItem = {
  label: string;
  href: string;
};

type MenuItem = {
  icon: React.ElementType;
  label: string;
  href?: string;
  subItems?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  { icon: FaTachometerAlt, label: "Dashboard", href: "/admin" },
  {
    icon: FaUserGraduate,
    label: "Student Info",
    subItems: [
      { label: "Student Category", href: "/admin/student-info/category" },
      { label: "Add Student", href: "/admin/student-info/add" },
      { label: "Student List", href: "/admin/student-info/list" },
      { label: "Student Attendance", href: "/admin/student-info/attendance" },
      {
        label: "Student Wise Attendance",
        href: "/admin/student-info/wise-attendance",
      },
      { label: "Student Group", href: "/admin/student-info/group" },
      { label: "Student Promote", href: "/admin/student-info/promote" },
    ],
  },
  {
    icon: FaClipboardCheck,
    label: "Behaviour Records",
    subItems: [
      { label: "Incidents", href: "/admin/behaviour/incidents" },
      { label: "Assign Incident", href: "/admin/behaviour/assign" },
      {
        label: "Student Incident Report",
        href: "/admin/behaviour/student-report",
      },
      { label: "Behaviour Report", href: "/admin/behaviour/report" },
      { label: "Class Section Report", href: "/admin/behaviour/class-report" },
      { label: "Incident Wise Report", href: "/admin/behaviour/incident-wise" },
    ],
  },
  {
    icon: FaMoneyBillWave,
    label: "Fees",
    subItems: [
      { label: "Fees Group", href: "/admin/fees/group" },
      { label: "Fees Type", href: "/admin/fees/type" },
      { label: "Fees Invoice", href: "/admin/fees/invoice" },
      { label: "Fees Carry Forward", href: "/admin/fees/carry-forward" },
    ],
  },
  {
    icon: FaBook,
    label: "Homework",
    subItems: [
      { label: "Add Homework", href: "/admin/homework/add" },
      { label: "Homework List", href: "/admin/homework/list" },
      { label: "Homework Report", href: "/admin/homework/report" },
    ],
  },
  {
    icon: FaBookOpen,
    label: "Library",
    subItems: [
      { label: "Book", href: "/admin/library/book" },
      { label: "Book Category", href: "/admin/library/category" },
      { label: "Library Members", href: "/admin/library/members" },
      { label: "Issue/Return Book", href: "/admin/library/issue-return" },
      { label: "All Issued Book", href: "/admin/library/issued" },
      { label: "Subject", href: "/admin/library/subject" },
    ],
  },
  {
    icon: FaClipboardList,
    label: "Examination",
    subItems: [
      { label: "Exam Type", href: "/admin/examination/type" },
      { label: "Exam Setup", href: "/admin/examination/setup" },
      { label: "Exam Schedule", href: "/admin/examination/schedule" },
      { label: "Exam Attendance", href: "/admin/examination/attendance" },
      { label: "Marks Register", href: "/admin/examination/marks-register" },
      { label: "Marks Grade", href: "/admin/examination/marks-grade" },
      { label: "Marksheet Report", href: "/admin/examination/marksheet" },
    ],
  },
  {
    icon: FaCalendarCheck,
    label: "Exam Plan",
    subItems: [
      { label: "Admit Card", href: "/admin/exam-plan/admit-card" },
      { label: "Seat Plan", href: "/admin/exam-plan/seat-plan" },
    ],
  },
  {
    icon: FaLaptop,
    label: "Online Exam",
    subItems: [
      { label: "Question Group", href: "/admin/online-exam/question-group" },
      { label: "Question Bank", href: "/admin/online-exam/question-bank" },
      { label: "Online Exam", href: "/admin/online-exam/exam" },
    ],
  },
  {
    icon: FaUsers,
    label: "Human Resource",
    subItems: [
      { label: "Designation", href: "/admin/hr/designation" },
      { label: "Department", href: "/admin/hr/department" },
      { label: "Add Staff", href: "/admin/hr/add-staff" },
      { label: "Staff Directory", href: "/admin/hr/staff-list" },
      { label: "Staff Attendance", href: "/admin/hr/attendance" },
      { label: "Payroll", href: "/admin/hr/payroll" },
    ],
  },
  {
    icon: FaUsers,
    label: "Teacher Evaluation",
    subItems: [
      { label: "Approved Report", href: "/admin/teacher-evaluation/approved" },
      { label: "Pending Report", href: "/admin/teacher-evaluation/pending" },
      {
        label: "Teacher Wise Report",
        href: "/admin/teacher-evaluation/teacher-wise",
      },
      { label: "Setting", href: "/admin/teacher-evaluation/setting" },
    ],
  },
  {
    icon: FaUsers,
    label: "Leave",
    subItems: [
      { label: "Leave Type", href: "/admin/leave/type" },
      { label: "Leave Define", href: "/admin/leave/define" },
      { label: "Apply Leave", href: "/admin/leave/apply" },
    ],
  },
  {
    icon: FaWrench,
    label: "Admin Section",
    subItems: [
      {
        label: "Admission Query",
        href: "/admin/admin-section/admission-query",
      },
      { label: "Visitor Book", href: "/admin/admin-section/visitor-book" },
      { label: "Complaint", href: "/admin/admin-section/complaint" },
      { label: "Postal Receive", href: "/admin/admin-section/postal-receive" },
      {
        label: "Postal Dispatch",
        href: "/admin/admin-section/postal-dispatch",
      },
      { label: "Phone Call Log", href: "/admin/admin-section/phone-log" },
      { label: "Admin Setup", href: "/admin/admin-section/setup" },
      { label: "ID Card", href: "/admin/admin-section/id-card" },
      { label: "Certificate", href: "/admin/admin-section/certificate" },
      { label: "Generate ID Card", href: "/admin/admin-section/generate-id" },
      {
        label: "Generate Certificate",
        href: "/admin/admin-section/generate-certificate",
      },
    ],
  },
  {
    icon: FaGraduationCap,
    label: "Academics",
    subItems: [
      { label: "Section", href: "/admin/academics/section" },
      { label: "Class", href: "/admin/academics/class" },
      { label: "Subjects", href: "/admin/academics/subjects" },
      {
        label: "Assign Class Teacher",
        href: "/admin/academics/assign-teacher",
      },
      { label: "Assign Subject", href: "/admin/academics/assign-subject" },
      { label: "Class Room", href: "/admin/academics/classroom" },
      { label: "Class Routine", href: "/admin/academics/routine" },
    ],
  },
  {
    icon: FaFileAlt,
    label: "Study Material",
    subItems: [
      { label: "Upload Content", href: "/admin/study-material/upload" },
      { label: "Assignment", href: "/admin/study-material/assignment" },
      { label: "Syllabus", href: "/admin/study-material/syllabus" },
      { label: "Other Downloads", href: "/admin/study-material/downloads" },
    ],
  },
  {
    icon: FaChalkboardTeacher,
    label: "Lesson Plan",
    subItems: [
      { label: "Lesson", href: "/admin/lesson-plan/lesson" },
      { label: "Topic", href: "/admin/lesson-plan/topic" },
      { label: "Topic Overview", href: "/admin/lesson-plan/topic-overview" },
      { label: "Lesson Plan", href: "/admin/lesson-plan/plan" },
      { label: "Lesson Overview", href: "/admin/lesson-plan/lesson-overview" },
    ],
  },
  {
    icon: FaPrint,
    label: "Bulk Print",
    subItems: [
      { label: "ID", href: "/admin/bulk-print/id" },
      { label: "Certificate", href: "/admin/bulk-print/certificate" },
      { label: "Payroll Bulk Print", href: "/admin/bulk-print/payroll" },
      { label: "Fees Invoice Bulk Print", href: "/admin/bulk-print/fees" },
    ],
  },
  {
    icon: FaDownload,
    label: "Download Centre",
    subItems: [
      { label: "Content Type", href: "/admin/download-center/type" },
      { label: "Content List", href: "/admin/download-center/list" },
      { label: "Shared Content List", href: "/admin/download-center/shared" },
      { label: "Video List", href: "/admin/download-center/video" },
    ],
  },
  { icon: FaUser, label: "User", href: "/admin/user" },
];

export default function Sidebar() {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground h-screen overflow-y-auto custom-scrollbar flex-shrink-0 transition-colors duration-300 border-r border-sidebar-border/10">
      <div className="p-4 flex items-center justify-center border-b border-sidebar-border/10">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">Aldermin</h1>
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="border-l-4 border-transparent hover:border-sidebar-foreground/50"
            >
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleSubMenu(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="text-lg opacity-90" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                    {openSubMenus.includes(item.label) ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                  {/* Submenu */}
                  <div
                    className={cn(
                      "bg-black/10 overflow-hidden transition-all duration-300 ease-in-out",
                      openSubMenus.includes(item.label)
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 pl-12 text-xs font-medium text-sidebar-foreground/70 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
                >
                  <item.icon className="text-lg opacity-90" />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
