"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BiDotsVerticalRounded,
  BiBell,
  BiUpArrowAlt,
  BiMaleSign,
  BiFemaleSign,
  BiPlus,
  BiPencil,
  BiTrash,
  BiChevronLeft,
  BiChevronRight,
  BiDownArrowAlt,
} from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

// Chart Data (Matches Blade script)
const chartData = [
  { month: "Jan", income: 1200, expense: 800 },
  { month: "Feb", income: 1500, expense: 1100 },
  { month: "Mar", income: 1700, expense: 1200 },
  { month: "Apr", income: 1400, expense: 1000 },
  { month: "May", income: 1900, expense: 1300 },
  { month: "Jun", income: 2000, expense: 1600 },
  { month: "Jul", income: 2100, expense: 1700 },
  { month: "Aug", income: 2300, expense: 1800 },
  { month: "Sep", income: 2200, expense: 1500 },
  { month: "Oct", income: 2500, expense: 1900 },
  { month: "Nov", income: 2700, expense: 2000 },
  { month: "Dec", income: 3000, expense: 2200 },
];

export default function Dashboard() {
  return (
    <div className="container-fluid space-y-6">
      <div className="grid grid-cols-12 gap-6 mt-4 items-stretch">
        {/* Welcome Card (col-md-7) */}
        <div className="col-span-12 md:col-span-7">
          <div className="bg-white rounded-[20px] shadow-sm h-full p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
            {/* Text Section */}
            <div className="flex-grow-1 z-10 max-w-lg mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Welcome back, The Deenway School Team!
              </h2>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Manage your school operations with ease. Stay updated on
                academics, attendance, finances, and more — all in one place.
                Let’s keep shaping a brighter future together!
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                src="/assets/images/dashboard-img/img-1.png"
                alt="Decoration"
                className="h-[200px] md:h-[260px] object-contain"
                onError={(e) =>
                  ((e.target as HTMLImageElement).style.display = "none")
                }
              />
            </div>
          </div>
        </div>

        {/* Stats Section (col-md-2) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col gap-4">
          <div className="bg-white rounded-[20px] shadow-sm p-4 h-full flex flex-col justify-between">
            {/* Students */}
            <div
              className="rounded-xl p-4 mb-2 shadow-sm"
              style={{ backgroundColor: "#fde68a" }}
            >
              <div className="flex justify-between items-center mb-1">
                <h6 className="font-semibold text-gray-800">Students</h6>
                <button className="text-gray-700 hover:text-gray-900">
                  <BiDotsVerticalRounded size={20} />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,230</h3>
            </div>

            {/* Teachers */}
            <div
              className="rounded-xl p-4 mb-2 shadow-sm"
              style={{ backgroundColor: "#e9d5ff" }}
            >
              <div className="flex justify-between items-center mb-1">
                <h6 className="font-semibold text-gray-800">Teachers</h6>
                <button className="text-gray-700 hover:text-gray-900">
                  <BiDotsVerticalRounded size={20} />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">60</h3>
            </div>

            {/* Employee */}
            <div
              className="rounded-xl p-4 mb-0 shadow-sm"
              style={{ backgroundColor: "#fde68a" }}
            >
              <div className="flex justify-between items-center mb-1">
                <h6 className="font-semibold text-gray-800">Employee</h6>
                <button className="text-gray-700 hover:text-gray-900">
                  <BiDotsVerticalRounded size={20} />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100</h3>
            </div>
          </div>
        </div>

        {/* Calendar Card (col-md-3) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white rounded-[20px] shadow-sm h-full p-6 flex flex-col items-center justify-center text-center">
            {/* Visual Calendar Placeholder */}
            <div className="w-full flex-1 flex flex-col items-center justify-center min-h-[250px]">
              <div className="w-full max-w-[280px]">
                <div className="flex items-center justify-between mb-4">
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <BiChevronLeft size={24} className="text-gray-600" />
                  </button>
                  <span className="font-semibold text-gray-800">May 2024</span>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <BiChevronRight size={24} className="text-gray-600" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-gray-400 font-medium">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
                  {/* Mock Days */}
                  {[...Array(31)].map((_, i) => (
                    <span
                      key={i}
                      className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-50 ${
                        i === 11 ? "bg-blue-500 text-white shadow-md" : ""
                      }`}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="mt-4 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors w-1/2">
              Manage Calendar
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Students Chart (col-md-4) */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white rounded-[20px] shadow-sm p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h5 className="font-semibold text-gray-800 text-lg">Students</h5>
              <BiDotsVerticalRounded
                size={22}
                className="text-gray-600 cursor-pointer"
              />
            </div>

            <div className="flex-1 flex justify-around items-center flex-wrap gap-4">
              {/* Boys Knob */}
              <div className="text-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="72"
                      cy="72"
                      r="65"
                      stroke="#eee"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="65"
                      stroke="#B5A8FF"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="408"
                      strokeDashoffset="191"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-2xl font-bold text-gray-700">
                    53%
                  </span>
                </div>
              </div>
              {/* Girls Knob */}
              <div className="text-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="72"
                      cy="72"
                      r="65"
                      stroke="#eee"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="65"
                      stroke="#FFE79B"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="408"
                      strokeDashoffset="216"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-2xl font-bold text-gray-700">
                    47%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-blue-500 font-semibold flex items-center justify-center gap-2">
                  <BiMaleSign size={18} /> 3,178 (Boys)
                </div>
                <div className="text-yellow-500 font-semibold flex items-center justify-center gap-2">
                  <BiFemaleSign size={18} /> 2,731 (Girls)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Board (col-md-3) */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white rounded-[20px] shadow-sm p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-gray-800 text-lg">
                Notice Board
              </h5>
              <a
                href="#"
                className="text-gray-500 text-sm font-semibold hover:underline"
              >
                view all
              </a>
            </div>

            <div className="flex-grow-1 overflow-auto custom-scrollbar flex flex-col gap-3 max-h-[210px] pr-2">
              {/* Notice 1 */}
              <div
                className="p-4 rounded-2xl flex gap-3"
                style={{ backgroundColor: "#fff8e6" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#FFEFB8" }}
                >
                  <BiBell className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <h6 className="font-semibold text-gray-800 text-sm mb-1">
                    Sports Day Announcement
                  </h6>
                  <p className="text-xs text-gray-500 leading-snug">
                    Annual Sports Day on May 12, 2024. Mark your calendars!
                  </p>
                </div>
              </div>

              {/* Notice 2 */}
              <div
                className="p-4 rounded-2xl flex gap-3"
                style={{ backgroundColor: "#f2f0ff" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#E0DBFF" }}
                >
                  <BiBell className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h6 className="font-semibold text-gray-800 text-sm mb-1">
                    Summer Break Start
                  </h6>
                  <p className="text-xs text-gray-500 leading-snug">
                    Summer break begins on May 25, 2024. Enjoy!
                  </p>
                </div>
              </div>

              {/* Notice 3 */}
              <div
                className="p-4 rounded-2xl flex gap-3"
                style={{ backgroundColor: "#eafaf1" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#c8f7d0" }}
                >
                  <BiBell className="text-green-600 text-xl" />
                </div>
                <div>
                  <h6 className="font-semibold text-gray-800 text-sm mb-1">
                    New Timetable Uploaded
                  </h6>
                  <p className="text-xs text-gray-500 leading-snug">
                    Check the updated class schedule on the portal.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 flex gap-2">
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 flex items-center gap-1 text-xs font-medium">
                <BiPlus size={14} /> Add
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
                <BiPencil size={14} />
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
                <BiTrash size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Financial Overview (col-md-5) */}
        <div className="col-span-12 md:col-span-4 lg:col-span-5">
          <div className="bg-white rounded-[20px] shadow-sm p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h5 className="font-semibold text-gray-800 text-lg">
                Financial Overview
              </h5>
              <div className="flex gap-2">
                <select className="bg-gray-50 border-0 text-sm rounded-lg px-3 py-1.5 outline-none text-gray-600">
                  <option>2023-2024</option>
                  <option>2022-2023</option>
                  <option>2021-2022</option>
                </select>
                <select className="bg-gray-50 border-0 text-sm rounded-lg px-3 py-1.5 outline-none text-gray-600">
                  <option>Annual</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {/* Income */}
              <div className="bg-cyan-50/50 p-6 rounded-[20px] relative text-gray-800 flex flex-col justify-end">
                <BiUpArrowAlt className="absolute top-6 left-6 text-white text-2xl drop-shadow-sm" />
                <span className="absolute top-6 right-6 bg-green-100 text-green-700 border border-green-200 text-[11px] font-bold px-3 py-1 rounded-full">
                  ↑ 12%
                </span>
                <div className="mt-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-1">
                    PKR 29,545,000
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Total Income
                  </p>
                </div>
              </div>

              {/* Expense */}
              <div className="bg-blue-50/50 p-6 rounded-[20px] relative text-gray-800 flex flex-col justify-end">
                <BiDownArrowAlt className="absolute top-6 left-6 text-white text-2xl drop-shadow-sm" />
                <span className="absolute top-6 right-6 bg-red-100 text-red-700 border border-red-200 text-[11px] font-bold px-3 py-1 rounded-full">
                  ↓ 0.5%
                </span>
                <div className="mt-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-1">
                    PKR 19,291,266
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Total Expenses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Earnings Chart (col-lg-7) */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white rounded-[20px] shadow-sm p-6 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-800 text-lg">Earning</h4>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                  <FaCircle className="text-[#c3ebfa]" size={10} /> Income
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                  <FaCircle className="text-[#cfceff]" size={10} /> Expense
                </div>
              </div>
              <button>
                <BiDotsVerticalRounded size={22} className="text-gray-600" />
              </button>
            </div>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorIncome"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#c3ebfa" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#c3ebfa"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="colorExpense"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#cfceff" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#cfceff"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <CartesianGrid vertical={false} stroke="#f3f4f6" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="income"
                    stroke="#7dd3fc"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                  />
                  <Area
                    type="monotone"
                    dataKey="expense"
                    stroke="#a5b4fc"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorExpense)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Fee Status (col-md-2) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <div className="bg-white rounded-[20px] shadow-sm p-6 h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h6 className="font-semibold text-gray-800">Fee Status</h6>
                <button>
                  <BiDotsVerticalRounded size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg border border-green-200 bg-green-50">
                  <span className="text-green-700 text-sm font-medium">
                    Paid
                  </span>
                  <strong className="text-green-800">$38,420</strong>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg border border-yellow-200 bg-yellow-50">
                  <span className="text-yellow-700 text-sm font-medium">
                    Pending
                  </span>
                  <strong className="text-yellow-800">$6,780</strong>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg border border-red-200 bg-red-50">
                  <span className="text-red-700 text-sm font-medium">
                    Overdue
                  </span>
                  <strong className="text-red-800">$1,450</strong>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <select className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none">
                <option>Annual</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </div>
        </div>

        {/* Messages (col-md-3) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white rounded-[20px] shadow-sm p-6 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h6 className="font-semibold text-gray-800">Messages</h6>
              <button>
                <BiDotsVerticalRounded size={20} className="text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1">
              {/* Message 1 */}
              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <img
                  src="/assets/images/dashboard-img/img-3.png"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="User"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=John+Doe")
                  }
                />
                <div>
                  <div className="flex justify-between w-full items-center">
                    <h6 className="font-semibold text-sm text-gray-800 leading-none">
                      John Doe
                    </h6>
                    <small className="text-gray-400 text-[10px]">10 min</small>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    Regarding student progress report...
                  </p>
                </div>
              </div>
              {/* Message 2 */}
              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <img
                  src="/assets/images/dashboard-img/img-2.jpeg"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="User"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=Sarah+Smith")
                  }
                />
                <div>
                  <div className="flex justify-between w-full items-center">
                    <h6 className="font-semibold text-sm text-gray-800 leading-none">
                      Sarah Smith
                    </h6>
                    <small className="text-gray-400 text-[10px]">2h ago</small>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    Meeting request for next week...
                  </p>
                </div>
              </div>
              {/* Message 3 */}
              <div className="flex items-start gap-3 border-gray-100">
                <img
                  src="/assets/images/dashboard-img/img-3.png"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="User"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=Admin")
                  }
                />
                <div>
                  <div className="flex justify-between w-full items-center">
                    <h6 className="font-semibold text-sm text-gray-800 leading-none">
                      Admin
                    </h6>
                    <small className="text-gray-400 text-[10px]">5h ago</small>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    System maintenance notice...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
