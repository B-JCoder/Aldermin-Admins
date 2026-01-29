import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import {
  FaCheck,
  FaBookOpen,
  FaLayerGroup,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaInfoCircle,
  FaStar,
} from "react-icons/fa";

export default function AddHomeworkPage() {
  return (
    <div className="container mx-auto space-y-12 pb-20">
      <PageHeader
        title="Curricular Registry"
        subtitle="Authorize New Assignment"
        backUrl="/admin/homework/list"
      />

      <div className="max-w-4xl mx-auto w-full">
        <AdminCard className="p-10 bg-gradient-to-br from-white to-secondary/5 relative overflow-hidden">
          <h4 className="mb-10 text-xs font-semibold text-gray-500  tracking-[0.3em] leading-none flex items-center justify-between">
            Assignment Blueprint
            <div className="h-1 w-24 bg-secondary/10 rounded-full"></div>
          </h4>

          <form className="space-y-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                    Class Tier <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaLayerGroup
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Select Class</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                    Subject Domain <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaBookOpen
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Select Subject</option>
                      <option>Advanced Physics</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                      Homework Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={12}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-[10px] font-bold focus:bg-white outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                      Merit Points
                    </label>
                    <div className="relative">
                      <FaStar
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/40"
                        size={12}
                      />
                      <input
                        type="number"
                        className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs  font-bold focus:bg-white outline-none transition-all shadow-sm"
                        placeholder="e.g. 25"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                    Sectional Unit <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUsers
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Select Section</option>
                      <option>Alpha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                    Submission Deadline <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
                      size={12}
                    />
                    <input
                      type="date"
                      className="w-full rounded-2xl border-secondary/20 bg-secondary/5 p-4 pl-10 text-[10px] font-semibold focus:bg-white outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                    Digital Asset (PDF/Docs)
                  </label>
                  <div className="relative group">
                    <label className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white border border-dashed border-white/60 text-[10px] font-semibold text-gray-500   cursor-pointer group-hover:bg-white group-hover:border-secondary/40 transition-all shadow-sm">
                      <FaFileAlt
                        size={14}
                        className="text-gray-500/40 group-hover:text-secondary"
                      />
                      Attach Guidelines
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-gray-500   mb-3 px-1">
                Instructional Scope
              </label>
              <div className="relative">
                <FaInfoCircle
                  className="absolute left-4 top-4 text-gray-500/40"
                  size={12}
                />
                <textarea
                  className="w-full rounded-3xl border-gray-200 bg-white p-8 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[150px] leading-relaxed "
                  placeholder="Provide clear pedagogical instructions for this assignment..."
                ></textarea>
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-xl shadow-secondary/20 transition-all active:scale-95">
                <div className="flex items-center gap-3">
                  <FaCheck className="" />
                  Canonize Assignment
                </div>
              </Button>
            </div>
          </form>
        </AdminCard>
      </div>
    </div>
  );
}

