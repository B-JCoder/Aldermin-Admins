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
import clsx from "clsx";

type SubMenuItem = {
    label: string;
    href: string;
};

type MenuItem = {
    icon: React.ElementType;
    label: string;
    href?: string; // If it has a direct link
    subItems?: SubMenuItem[]; // If it has submenu
};

const menuItems: MenuItem[] = [
    { icon: FaTachometerAlt, label: "Dashboard", href: "/" },
    {
        icon: FaUserGraduate,
        label: "Student Info",
        subItems: [
            { label: "Student Category", href: "#" },
            { label: "Add Student", href: "#" },
            { label: "Student List", href: "#" },
            { label: "Student Attendance", href: "#" },
            { label: "Student Wise Attendance", href: "#" },
            { label: "Student Group", href: "#" },
            { label: "Student Promote", href: "#" }, // Simplified for now
        ],
    },
    {
        icon: FaClipboardCheck,
        label: "Behaviour Records",
        subItems: [
            { label: "Incidents", href: "#" },
            { label: "Assign Incident", href: "#" },
            { label: "Student Incident Report", href: "#" },
            { label: "Behaviour Report", href: "#" },
            { label: "Class Section Report", href: "#" },
            { label: "Incident Wise Report", href: "#" },
        ],
    },
    {
        icon: FaMoneyBillWave,
        label: "Fees",
        subItems: [
            { label: "Fees Group", href: "#" },
            { label: "Fees Type", href: "#" },
            { label: "Fees Invoice", href: "#" },
            { label: "Fees Carry Forward", href: "#" },
        ],
    },
    {
        icon: FaBook,
        label: "Homework",
        subItems: [
            { label: "Add Homework", href: "#" },
            { label: "Homework List", href: "#" },
            { label: "Homework Report", href: "#" },
        ],
    },
    {
        icon: FaBookOpen,
        label: "Library",
        subItems: [
            { label: "Book", href: "#" },
            { label: "Book Category", href: "#" },
            { label: "Library Members", href: "#" },
            { label: "Issue/Return Book", href: "#" },
            { label: "All Issued Book", href: "#" },
            { label: "Subject", href: "#" },
        ],
    },
    {
        icon: FaClipboardList,
        label: "Examination",
        subItems: [
            { label: "Exam Type", href: "#" },
            { label: "Exam Setup", href: "#" },
            { label: "Exam Schedule", href: "#" },
            { label: "Exam Attendance", href: "#" },
            { label: "Marks Register", href: "#" },
            { label: "Marks Grade", href: "#" },
            { label: "Marksheet Report", href: "#" },
        ],
    },
    {
        icon: FaCalendarCheck,
        label: "Exam Plan",
        subItems: [
            { label: "Admit Card", href: "#" },
            { label: "Seat Plan", href: "#" },
        ],
    },
    {
        icon: FaLaptop,
        label: "Online Exam",
        subItems: [
            { label: "Question Group", href: "#" },
            { label: "Question Bank", href: "#" },
            { label: "Online Exam", href: "#" },
        ],
    },
    {
        icon: FaUsers,
        label: "Human Resource",
        subItems: [
            { label: "Designation", href: "#" },
            { label: "Department", href: "#" },
            { label: "Add Staff", href: "#" },
            { label: "Staff Directory", href: "#" },
            { label: "Staff Attendance", href: "#" },
            { label: "Payroll", href: "#" },
        ],
    },
    {
        icon: FaUsers,
        label: "Teacher Evaluation",
        subItems: [
            { label: "Approved Report", href: "#" },
            { label: "Pending Report", href: "#" },
            { label: "Teacher Wise Report", href: "#" },
            { label: "Setting", href: "#" },
        ],
    },
    {
        icon: FaUsers,
        label: "Leave",
        subItems: [
            { label: "Leave Type", href: "#" },
            { label: "Leave Define", href: "#" },
            { label: "Apply Leave", href: "#" },
        ],
    },
    {
        icon: FaWrench,
        label: "Admin Section",
        subItems: [
            { label: "Admission Query", href: "#" },
            { label: "Visitor Book", href: "#" },
            { label: "Complaint", href: "#" },
            { label: "Postal Receive", href: "#" },
            { label: "Postal Dispatch", href: "#" },
            { label: "Phone Call Log", href: "#" },
            { label: "Admin Setup", href: "#" },
            { label: "ID Card", href: "#" },
            { label: "Certificate", href: "#" },
            { label: "Generate ID Card", href: "#" },
            { label: "Generate Certificate", href: "#" },
        ],
    },
    {
        icon: FaGraduationCap,
        label: "Academics",
        subItems: [
            { label: "Section", href: "#" },
            { label: "Class", href: "#" },
            { label: "Subjects", href: "#" },
            { label: "Assign Class Teacher", href: "#" },
            { label: "Assign Subject", href: "#" },
            { label: "Class Room", href: "#" },
            { label: "Class Routine", href: "#" },
        ],
    },
    {
        icon: FaFileAlt,
        label: "Study Material",
        subItems: [
            { label: "Upload Content", href: "#" },
            { label: "Assignment", href: "#" },
            { label: "Syllabus", href: "#" },
            { label: "Other Downloads", href: "#" },
        ],
    },
    {
        icon: FaChalkboardTeacher,
        label: "Lesson Plan",
        subItems: [
            { label: "Lesson", href: "#" },
            { label: "Topic", href: "#" },
            { label: "Topic Overview", href: "#" },
            { label: "Lesson Plan", href: "#" },
            { label: "Lesson Overview", href: "#" },
        ],
    },
    {
        icon: FaPrint,
        label: "Bulk Print",
        subItems: [
            { label: "ID", href: "#" },
            { label: "Certificate", href: "#" },
            { label: "Payroll Bulk Print", href: "#" },
            { label: "Fees Invoice Bulk Print", href: "#" },
        ],
    },
    {
        icon: FaDownload,
        label: "Download Centre",
        subItems: [
            { label: "Content Type", href: "#" },
            { label: "Content List", href: "#" },
            { label: "Shared Content List", href: "#" },
            { label: "Video List", href: "#" },
        ],
    },
    { icon: FaUser, label: "User", href: "#" },
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
        <aside className="w-64 bg-[#233342] text-white h-screen overflow-y-auto custom-scrollbar flex-shrink-0">
            <div className="p-4 flex items-center justify-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Aldermin</h1>
            </div>
            <nav className="mt-4">
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="border-l-4 border-transparent hover:border-[#1e88e5]"
                        >
                            {item.subItems ? (
                                <div>
                                    <button
                                        onClick={() =>
                                            toggleSubMenu(item.label)
                                        }
                                        className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-[#1e2b36] hover:text-white transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className="text-lg" />
                                            <span className="font-medium">
                                                {item.label}
                                            </span>
                                        </div>
                                        {openSubMenus.includes(item.label) ? (
                                            <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowForward />
                                        )}
                                    </button>
                                    {/* Submenu */}
                                    <div
                                        className={clsx(
                                            "bg-[#1a2632] overflow-hidden transition-all duration-300",
                                            openSubMenus.includes(item.label)
                                                ? "max-h-[1000px]"
                                                : "max-h-0"
                                        )}
                                    >
                                        <ul className="py-2">
                                            {item.subItems.map(
                                                (subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.href}
                                                            className="block px-4 py-2 pl-12 text-sm text-gray-400 hover:text-white hover:bg-[#233342] transition-colors"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#1e2b36] hover:text-white transition-colors"
                                >
                                    <item.icon className="text-lg" />
                                    <span className="font-medium">
                                        {item.label}
                                    </span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
