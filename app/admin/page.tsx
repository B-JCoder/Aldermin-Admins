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
    FaEllipsisH,
    FaBell,
    FaArrowUp,
    FaArrowDown,
    FaCircle,
    FaCalendarCheck,
} from "react-icons/fa";

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
        <div className="min-h-screen pb-10">
            {/* Row 1: Welcome & Stats */}
            <div className="grid grid-cols-12 gap-6 mb-6">
                {/* Welcome Card */}
                <div className="col-span-12 lg:col-span-7">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex items-center justify-between relative overflow-hidden">
                        <div className="z-10 relative max-w-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                Welcome back, The Deenway School Team!
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                Manage your school operations with ease.
                                Stay updated on academics, attendance,
                                finances, and more — all in one place. Let’s
                                keep shaping a brighter future together!
                            </p>
                        </div>
                        <div className="hidden sm:block absolute right-0 bottom-0 h-full w-1/3 pointer-events-none">
                            <img
                                src="/assets/images/dashboard-img/img-1.png"
                                alt="Decoration"
                                className="h-full object-contain object-bottom mx-auto"
                                onError={(e) =>
                                    ((
                                        e.target as HTMLImageElement
                                    ).style.display = "none")
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Stack */}
                <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col gap-4">
                    {/* Students */}
                    <div className="bg-[#fde68a] rounded-xl p-4 flex-1 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-2">
                            <h6 className="font-semibold text-gray-800">
                                Students
                            </h6>
                            <FaEllipsisH className="text-gray-600 cursor-pointer" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            1,230
                        </h3>
                    </div>
                    {/* Teachers */}
                    <div className="bg-[#e9d5ff] rounded-xl p-4 flex-1 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-2">
                            <h6 className="font-semibold text-gray-800">
                                Teachers
                            </h6>
                            <FaEllipsisH className="text-gray-600 cursor-pointer" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            60
                        </h3>
                    </div>
                    {/* Employee */}
                    <div className="bg-[#fde68a] rounded-xl p-4 flex-1 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-2">
                            <h6 className="font-semibold text-gray-800">
                                Employee
                            </h6>
                            <FaEllipsisH className="text-gray-600 cursor-pointer" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            100
                        </h3>
                    </div>
                </div>

                {/* Calendar Placeholder */}
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="bg-white rounded-2xl shadow-sm h-full flex flex-col items-center justify-center p-6 text-center">
                        <div className="mb-4">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-full inline-flex">
                                <FaCalendarCheck size={32} />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-800">
                            Calendar
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            No events for today
                        </p>
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                            Manage Calendar
                        </button>
                    </div>
                </div>
            </div>

            {/* Row 2: Charts & Info */}
            <div className="grid grid-cols-12 gap-6 mb-6">
                {/* Students Doughnut/Knob */}
                <div className="col-span-12 md:col-span-4">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h5 className="font-semibold text-gray-800">
                                Students
                            </h5>
                            <FaEllipsisH className="text-gray-400 cursor-pointer" />
                        </div>
                        <div className="flex-1 flex justify-around items-center">
                            <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-4 border-[#B5A8FF] flex items-center justify-center text-xl font-bold text-gray-700">
                                    53%
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Boys
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-4 border-[#FFE79B] flex items-center justify-center text-xl font-bold text-gray-700">
                                    47%
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Girls
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 text-sm font-semibold">
                            <span className="text-blue-500">
                                Boys: 3,178
                            </span>
                            <span className="text-yellow-500">
                                Girls: 2,731
                            </span>
                        </div>
                    </div>
                </div>

                {/* Notice Board */}
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="font-semibold text-gray-800">
                                Notice Board
                            </h5>
                            <a
                                href="#"
                                className="text-blue-500 text-xs font-semibold hover:underline"
                            >
                                view all
                            </a>
                        </div>
                        <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px]">
                            {/* Notice 1 */}
                            <div className="p-3 bg-yellow-50 rounded-xl flex gap-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaBell className="text-yellow-500" />
                                </div>
                                <div>
                                    <h6 className="font-semibold text-sm text-gray-800">
                                        Sports Day
                                    </h6>
                                    <p className="text-xs text-gray-500">
                                        May 12, 2024
                                    </p>
                                </div>
                            </div>
                            {/* Notice 2 */}
                            <div className="p-3 bg-purple-50 rounded-xl flex gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaBell className="text-purple-500" />
                                </div>
                                <div>
                                    <h6 className="font-semibold text-sm text-gray-800">
                                        Summer Break
                                    </h6>
                                    <p className="text-xs text-gray-500">
                                        May 25, 2024
                                    </p>
                                </div>
                            </div>
                            {/* Notice 3 */}
                            <div className="p-3 bg-green-50 rounded-xl flex gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaBell className="text-green-500" />
                                </div>
                                <div>
                                    <h6 className="font-semibold text-sm text-gray-800">
                                        New Timetable
                                    </h6>
                                    <p className="text-xs text-gray-500">
                                        Check portal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Financial Overview */}
                <div className="col-span-12 md:col-span-4 lg:col-span-5">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
                        <div className="flex justify-between items-center mb-6">
                            <h5 className="font-semibold text-gray-800">
                                Financial Overview
                            </h5>
                            <select className="bg-gray-50 border-none text-xs rounded-md px-2 py-1 outline-none text-gray-600">
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Annual</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Income */}
                            <div className="bg-cyan-50 p-4 rounded-2xl relative">
                                <FaArrowUp className="absolute top-4 left-4 text-cyan-500 text-xl" />
                                <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">
                                    ↑ 12%
                                </span>
                                <div className="mt-8">
                                    <h4 className="text-xl font-bold text-gray-800">
                                        29.5M
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Total Income
                                    </p>
                                </div>
                            </div>
                            {/* Expense */}
                            <div className="bg-blue-50 p-4 rounded-2xl relative">
                                <FaArrowDown className="absolute top-4 left-4 text-blue-500 text-xl" />
                                <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full">
                                    ↓ 0.5%
                                </span>
                                <div className="mt-8">
                                    <h4 className="text-xl font-bold text-gray-800">
                                        19.2M
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Total Expenses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 3: Earning Chart & Fee Status */}
            <div className="grid grid-cols-12 gap-6">
                {/* Earning Chart */}
                <div className="col-span-12 lg:col-span-7">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-[400px] flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold text-gray-800">
                                Earning
                            </h4>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <FaCircle className="text-cyan-200" />{" "}
                                    Income
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <FaCircle className="text-indigo-200" />{" "}
                                    Expense
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full min-h-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={chartData}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <defs>
                                        <linearGradient
                                            id="colorIncome"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#c3ebfa"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#c3ebfa"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="colorExpense"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#cfceff"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#cfceff"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{
                                            fill: "#9ca3af",
                                            fontSize: 12,
                                        }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{
                                            fill: "#9ca3af",
                                            fontSize: 12,
                                        }}
                                    />
                                    <CartesianGrid
                                        vertical={false}
                                        stroke="#e5e7eb"
                                        strokeDasharray="3 3"
                                    />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="income"
                                        stroke="#7dd3fc"
                                        fillOpacity={1}
                                        fill="url(#colorIncome)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="expense"
                                        stroke="#a5b4fc"
                                        fillOpacity={1}
                                        fill="url(#colorExpense)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Fee Status */}
                <div className="col-span-12 md:col-span-6 lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="font-semibold text-gray-800">
                                Fee Status
                            </h6>
                            <FaEllipsisH className="text-gray-400 cursor-pointer" />
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                                <span className="text-green-700 text-sm font-medium">
                                    Paid
                                </span>
                                <span className="text-green-800 font-bold">
                                    $38k
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                                <span className="text-yellow-700 text-sm font-medium">
                                    Pending
                                </span>
                                <span className="text-yellow-800 font-bold">
                                    $6.7k
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-100">
                                <span className="text-red-700 text-sm font-medium">
                                    Overdue
                                </span>
                                <span className="text-red-800 font-bold">
                                    $1.4k
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <select className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2 outline-none">
                                <option>Annual 2024</option>
                                <option>Annual 2023</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="font-semibold text-gray-800">
                                Messages
                            </h6>
                            <FaEllipsisH className="text-gray-400 cursor-pointer" />
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 max-h-[300px]">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-3 pb-3 border-b border-gray-100 last:border-0"
                                >
                                    <img
                                        src={`https://ui-avatars.com/api/?name=User+${item}&background=random`}
                                        alt="User"
                                        className="w-10 h-10 rounded-full object-cover bg-gray-200"
                                    />
                                    <div>
                                        <div className="flex justify-between w-full">
                                            <h6 className="font-semibold text-sm text-gray-800">
                                                John Doe
                                            </h6>
                                            <span className="text-xs text-gray-400">
                                                10 min
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                            Meeting request regarding the
                                            quarterly review...
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
