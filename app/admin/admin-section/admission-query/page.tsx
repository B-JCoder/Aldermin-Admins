"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

export default function AdmissionQueryPage() {
  const [searchParams, setSearchParams] = useState({
    dateFrom: "",
    dateTo: "",
    source: "",
    status: "",
  });

  // Mock data for the table
  const [queries, setQueries] = useState([
    {
      id: 1,
      admissionNo: "ADM001",
      name: "John Doe",
      fatherName: "Mr. Doe",
      dob: "2010-01-01",
      class: "10th",
    },
    {
      id: 2,
      admissionNo: "ADM002",
      name: "Jane Smith",
      fatherName: "Mr. Smith",
      dob: "2011-05-15",
      class: "9th",
    },
  ]);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search params:", searchParams);
    // Add logic to fetch filtered data
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      console.log("Delete query", id);
      // Add logic to delete data
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800">Admission Query</h4>
        <nav className="text-sm">
          <Link
            href="/admin/admin-section/admission-query/create" // Assuming this route exists or will exist
            className="flex items-center rounded bg-cyan-500 px-3 py-2 text-white hover:bg-cyan-600"
          >
            <FaPlus className="mr-2" /> Add Admission Query
          </Link>
        </nav>
      </div>

      {/* Search Section */}
      <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h4 className="mb-4 text-lg font-semibold text-gray-700">
          Search Student
        </h4>
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date From
              </label>
              <input
                type="date"
                name="dateFrom"
                value={searchParams.dateFrom}
                onChange={handleSearchChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date To
              </label>
              <input
                type="date"
                name="dateTo"
                value={searchParams.dateTo}
                onChange={handleSearchChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Source
              </label>
              <select
                name="source"
                value={searchParams.source}
                onChange={handleSearchChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Online">Online</option>
                <option value="Referral">Referral</option>
                <option value="Walk-in">Walk-in</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={searchParams.status}
                onChange={handleSearchChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h4 className="mb-4 text-lg font-semibold text-gray-700">
          Admission Query List
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  SN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Admission No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Father Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date of Birth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Class
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {queries.map((item, index) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {item.admissionNo}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {item.fatherName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {item.dob}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {item.class}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
