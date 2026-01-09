"use client";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-cyan-400 h-16 shadow-md flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4">
        {/* Toggle (Visible on mobile) */}
        <button className="text-white text-xl md:hidden">
          <FaBars />
        </button>
        {/* Search */}
        <div className="hidden md:flex items-center bg-white/20 rounded-full px-4 py-1.5 focus-within:bg-white/30 transition-colors">
          <input
            type="text"
            placeholder="Search & enter"
            className="bg-transparent border-none outline-none text-white placeholder-white/70 text-sm w-48"
          />
          <FaSearch className="text-white/70" />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative cursor-pointer text-white">
          <FaBell className="text-lg" />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </div>

        {/* Messages */}
        <div className="relative cursor-pointer text-white">
          <FaEnvelope className="text-lg" />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/assets/images/users/d5.jpg"
            alt="User"
            className="w-9 h-9 rounded-full border-2 border-white object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://ui-avatars.com/api/?name=Admin+User";
            }}
          />
          <span className="text-white font-medium text-sm hidden md:block">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
