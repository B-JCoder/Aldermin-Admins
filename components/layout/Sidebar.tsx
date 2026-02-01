"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
  FaTimes,
  FaWallet,
  FaBoxes,
  FaBullhorn,
  FaCalculator,
  FaCog,
  FaFileInvoiceDollar,
  FaHotel,
  FaBus,
  FaUserShield,
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
      { label: "Student Export", href: "/admin/student-info/studentexport" },
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
  {
    icon: FaCalculator,
    label: "Accounts",
    subItems: [
      { label: "Bank Account", href: "/admin/accounts/accounts/bankaccount" },
      {
        label: "Chart of Account",
        href: "/admin/accounts/accounts/chartofaccount",
      },
      { label: "Expense", href: "/admin/accounts/accounts/expence" },
      { label: "Fund Transfer", href: "/admin/accounts/accounts/fundtransfer" },
      { label: "Income", href: "/admin/accounts/accounts/income" },
      {
        label: "Profit & Loss",
        href: "/admin/accounts/accounts/profitandlost",
      },
    ],
  },
  {
    icon: FaBullhorn,
    label: "Communicate",
    subItems: [
      { label: "Calendar", href: "/admin/accounts/communicate/calendar" },
      {
        label: "Email/SMS Log",
        href: "/admin/accounts/communicate/emailsmsandlog",
      },
      { label: "Event", href: "/admin/accounts/communicate/event" },
      {
        label: "Notice Board",
        href: "/admin/accounts/communicate/noticeboard",
      },
      {
        label: "Send Email/SMS",
        href: "/admin/accounts/communicate/sendemailandsms",
      },
    ],
  },
  {
    icon: FaBoxes,
    label: "Inventory",
    subItems: [
      {
        label: "Item Category",
        href: "/admin/accounts/inventory/itemcategory",
      },
      { label: "Item Issue", href: "/admin/accounts/inventory/itemissue" },
      { label: "Item List", href: "/admin/accounts/inventory/itemlist" },
      { label: "Item Receive", href: "/admin/accounts/inventory/itemreceive" },
      {
        label: "Item Receive List",
        href: "/admin/accounts/inventory/itemreceivelist",
      },
      {
        label: "Item Sell List",
        href: "/admin/accounts/inventory/itemselllist",
      },
      { label: "Item Store", href: "/admin/accounts/inventory/itemstore" },
      { label: "Suppliers", href: "/admin/accounts/inventory/supplier" },
    ],
  },
  {
    icon: FaHotel,
    label: "Dormitory",
    subItems: [
      { label: "Dormitory", href: "/admin/dormitory/dormitory" },
      { label: "Dormitory Rooms", href: "/admin/dormitory/dormitoryrooms" },
      { label: "Room Type", href: "/admin/dormitory/roomtype" },
    ],
  },
  {
    icon: FaBus,
    label: "Transport",
    subItems: [
      { label: "Routes", href: "/admin/transport/routes" },
      { label: "Vehicle", href: "/admin/transport/vehicle" },
      { label: "Assign Vehicle", href: "/admin/transport/assignvehicle" },
    ],
  },
  {
    icon: FaUserShield,
    label: "Roles & Permissions",
    subItems: [
      { label: "Manage Roles", href: "/admin/role&permission/managerole" },
      {
        label: "Login Permission",
        href: "/admin/role&permission/loginpermission",
      },
    ],
  },
  {
    icon: FaWallet,
    label: "Wallet",
    subItems: [
      {
        label: "Approved Deposit",
        href: "/admin/accounts/wallet/approveddeposit",
      },
      {
        label: "Pending Deposit",
        href: "/admin/accounts/wallet/pendingdeposit",
      },
      { label: "Refund Request", href: "/admin/accounts/wallet/refundrequest" },
      { label: "Reject Deposit", href: "/admin/accounts/wallet/rejectdeposit" },
      {
        label: "Wallet Transaction",
        href: "/admin/accounts/wallet/wallettransaction",
      },
    ],
  },
  {
    icon: FaFileAlt,
    label: "Student Reports",
    subItems: [
      {
        label: "Student Attendance Report",
        href: "/admin/reports/studentreports/student-attendance-report",
      },
      {
        label: "Subject Attendance Report",
        href: "/admin/reports/studentreports/subject-attendance-report",
      },
      {
        label: "Home Work Evaluation Report",
        href: "/admin/reports/studentreports/home-work-evaluation-report",
      },
      {
        label: "Student Transport Report",
        href: "/admin/reports/studentreports/student-transport-report",
      },
      {
        label: "Student Dormitory Report",
        href: "/admin/reports/studentreports/student-dormitory-report",
      },
      {
        label: "Guardian Report",
        href: "/admin/reports/studentreports/guardian-report",
      },
      {
        label: "Student History",
        href: "/admin/reports/studentreports/student-history",
      },
      {
        label: "Student Login Report",
        href: "/admin/reports/studentreports/student-login-report",
      },
      {
        label: "Class Report",
        href: "/admin/reports/studentreports/class-report",
      },
      {
        label: "Class Routine",
        href: "/admin/reports/studentreports/class-routine",
      },
      { label: "User Log", href: "/admin/reports/studentreports/user-log" },
      {
        label: "Student Report",
        href: "/admin/reports/studentreports/student-report",
      },
      {
        label: "Previous Record",
        href: "/admin/reports/studentreports/previous-record",
      },
    ],
  },
  {
    icon: FaClipboardList,
    label: "Exam Reports",
    subItems: [
      {
        label: "Exam Routine",
        href: "/admin/reports/examreports/exam-routine",
      },
      {
        label: "Merit List Report",
        href: "/admin/reports/examreports/merit-list-report",
      },
      {
        label: "Online Exam Report",
        href: "/admin/reports/examreports/online-exam-report",
      },
      {
        label: "Mark Sheet Report",
        href: "/admin/reports/examreports/mark-sheet-report",
      },
      {
        label: "Tabulation Sheet Report",
        href: "/admin/reports/examreports/tabulation-sheet-report",
      },
      {
        label: "Progress Card Report",
        href: "/admin/reports/examreports/progress-card-report",
      },
      {
        label: "Progress Card Report 100%",
        href: "/admin/reports/examreports/progress-card-report-100",
      },
      {
        label: "Previous Result",
        href: "/admin/reports/examreports/previous-result",
      },
    ],
  },
  {
    icon: FaUsers,
    label: "Staff Reports",
    subItems: [
      {
        label: "Staff Attendance Report",
        href: "/admin/reports/staffreports/staff-attendance-report",
      },
      {
        label: "Payroll Report",
        href: "/admin/reports/staffreports/payroll-report",
      },
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    label: "Fees Reports",
    subItems: [
      {
        label: "Fees Due Report",
        href: "/admin/reports/feesreports/fees-due-report",
      },
      { label: "Fine Report", href: "/admin/reports/feesreports/fine-report" },
      {
        label: "Payment Report",
        href: "/admin/reports/feesreports/payment-report",
      },
      {
        label: "Balance Report",
        href: "/admin/reports/feesreports/balance-report",
      },
      {
        label: "Waiver Report",
        href: "/admin/reports/feesreports/waiver-report",
      },
    ],
  },
  {
    icon: FaCalculator,
    label: "Accounts Reports",
    subItems: [
      {
        label: "Payroll Report",
        href: "/admin/reports/accountsreports/payroll-report",
      },
      {
        label: "Transaction",
        href: "/admin/reports/accountsreports/transaction",
      },
      {
        label: "Wallet Report",
        href: "/admin/reports/accountsreports/wallet-report",
      },
    ],
  },
  {
    icon: FaCog,
    label: "General Settings",
    subItems: [
      {
        label: "Student Settings",
        href: "/admin/settings/general-settings/student-settings",
      },
      {
        label: "Lesson Plan Setting",
        href: "/admin/settings/general-settings/lesson-plan-setting",
      },
      {
        label: "Staff Settings",
        href: "/admin/settings/general-settings/staff-settings",
      },
      {
        label: "General Settings",
        href: "/admin/settings/general-settings/general-settings-inner",
      },
      {
        label: "Academic Year",
        href: "/admin/settings/general-settings/academic-year",
      },
      { label: "Holiday", href: "/admin/settings/general-settings/holiday" },
      {
        label: "Notification Setting",
        href: "/admin/settings/general-settings/notification-setting",
      },
      {
        label: "Email Setting",
        href: "/admin/settings/general-settings/email-setting",
      },
      {
        label: "Payment Settings",
        href: "/admin/settings/general-settings/payment-settings",
      },
      {
        label: "Base Setup",
        href: "/admin/settings/general-settings/base-setup",
      },
      {
        label: "SMS Settings",
        href: "/admin/settings/general-settings/sms-settings",
      },
      { label: "Weekend", href: "/admin/settings/general-settings/weekend" },
      {
        label: "Language Settings",
        href: "/admin/settings/general-settings/language-settings",
      },
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    label: "Fees Settings",
    subItems: [
      {
        label: "Fees Invoice Settings",
        href: "/admin/settings/fees-settings/fees-invoice-settings",
      },
    ],
  },
  { icon: FaUser, label: "User", href: "/admin/user" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "w-64 bg-sidebar text-sidebar-foreground h-screen overflow-y-auto custom-scrollbar flex-shrink-0 transition-transform duration-300 border-r border-sidebar-border/10",
          "fixed top-0 left-0 z-50 md:sticky md:top-0 md:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-sidebar-border/10">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">Aldermin</h1>
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest leading-none mt-1">
              Management
            </span>
          </div>

          <button
            onClick={onClose}
            className="md:hidden text-sidebar-foreground hover:text-white transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="mt-4 pb-20">
          <div className="px-4 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
              Navigation
            </span>
          </div>
          <ul>
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              const isSubOpen = openSubMenus.includes(item.label);

              return (
                <li
                  key={index}
                  className={cn(
                    "border-l-4 border-transparent transition-all duration-200",
                    isActive
                      ? "border-white bg-white/10"
                      : "hover:border-sidebar-foreground/50",
                  )}
                >
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleSubMenu(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="text-lg opacity-90" />
                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </div>
                        {isSubOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                      </button>
                      <div
                        className={cn(
                          "bg-black/10 overflow-hidden transition-all duration-300 ease-in-out",
                          isSubOpen
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <ul className="py-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                onClick={onClose}
                                className={cn(
                                  "block px-4 py-2 pl-12 text-xs font-medium transition-colors",
                                  pathname === subItem.href
                                    ? "text-white font-bold"
                                    : "text-sidebar-foreground/70 hover:text-white hover:bg-white/10",
                                )}
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
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 transition-all duration-200",
                        isActive
                          ? "text-white font-bold"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <item.icon className="text-lg opacity-90" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
