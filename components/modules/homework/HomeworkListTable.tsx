import { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FaLayerGroup,
  FaFileDownload,
  FaCalendarDay,
  FaClipboardCheck,
} from "react-icons/fa";

interface Homework {
  id: number;
  class: string;
  subject: string;
  marks: number;
  homeworkDate: string;
  submissionDate: string;
  evaluationDate: string;
  fileName: string;
}

interface HomeworkListTableProps {
  homeworkList: Homework[];
}

export function HomeworkListTable({
  homeworkList: initialList,
}: HomeworkListTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredList = initialList.filter(
    (h) =>
      h.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredList.length / pageSize);
  const paginatedList = filteredList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search assignments..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Published Interaction stream
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">SN</TableHead>
                <TableHead>Node Info</TableHead>
                <TableHead className="text-center">Merit</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead className="text-center">Asset</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedList.map((h, index) => (
                <TableRow key={h.id} className="group">
                  <TableCell className=" text-xs text-gray-500 ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-foreground text-sm   tracking-tight leading-none mb-1">
                      {h.subject}
                    </div>
                    <div className="text-[10px] font-bold text-secondary   flex items-center gap-2">
                      <FaLayerGroup size={10} /> {h.class}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="inline-flex flex-col items-center p-2 rounded-xl bg-secondary/5 border border-secondary/10 min-w-[60px] shadow-sm">
                      <span className="text-xs font-semibold  text-secondary leading-none">
                        {h.marks}
                      </span>
                      <span className="text-[7px] font-semibold  text-gray-500 mt-1 ">
                        Valence
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <FaCalendarDay
                          className="text-secondary/40"
                          size={10}
                        />
                        <span className="font-semibold  tracking-tighter w-12">
                          Start:
                        </span>
                        <span className=" font-bold">
                          {h.homeworkDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <FaClipboardCheck
                          className="text-secondary/40"
                          size={10}
                        />
                        <span className="font-semibold  tracking-tighter w-12">
                          End:
                        </span>
                        <span className=" font-bold text-secondary">
                          {h.submissionDate}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center gap-1 cursor-pointer group/asset transition-colors hover:text-secondary">
                      <FaFileDownload
                        size={16}
                        className="text-gray-500/30 group-hover/asset:text-secondary"
                      />
                      <span className="text-[9px]  font-bold  text-gray-500 group-hover/asset:text-secondary truncate max-w-[100px]">
                        {h.fileName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => console.log("Delete")}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedList.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matching assignments in registry.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredList.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredList.length}
            pageSize={pageSize}
          />
        )}
      </AdminCard>
    </div>
  );
}
