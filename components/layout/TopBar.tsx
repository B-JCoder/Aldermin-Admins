"use client";
import { FaBars, FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

interface TopBarProps {
  onToggleSidebar?: () => void;
}

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className="h-16 flex items-center justify-between px-6 z-10 bg-white border-b border-gray-100 sticky top-0">
      <div className="flex items-center gap-4">
        {/* Toggle (Visible on mobile) */}
        <button
          className="text-gray-600 text-xl md:hidden hover:text-gray-900 transition-colors p-2"
          onClick={onToggleSidebar}
        >
          <FaBars />
        </button>
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100/50 rounded-xl px-4 py-2 border border-black/5 focus-within:bg-white focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-sm w-64"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-secondary transition-colors p-2 rounded-full hover:bg-gray-100/50">
          <FaBell className="text-lg" />
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </button>

        {/* Messages */}
        <button className="relative text-gray-500 hover:text-secondary transition-colors p-2 rounded-full hover:bg-gray-100/50">
          <FaEnvelope className="text-lg" />
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer p-1 pr-3 rounded-full hover:bg-gray-100/50 transition-colors border border-transparent hover:border-gray-200">
          <img
            src="/assets/images/users/d5.jpg"
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-200 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://ui-avatars.com/api/?name=Admin+User&background=006D5F&color=fff";
            }}
          />
          <span className="text-gray-700 font-medium text-sm hidden md:block">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
