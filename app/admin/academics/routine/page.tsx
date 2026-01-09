"use client";

export default function ClassRoutinePage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* ===== Form ===== */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Add Class Routine</h2>

          <form className="space-y-4">
            <select className="w-full border rounded px-3 py-2">
              <option>Select Class</option>
            </select>

            <select className="w-full border rounded px-3 py-2">
              <option>Select Section</option>
            </select>

            <select className="w-full border rounded px-3 py-2">
              <option>Select Day</option>
            </select>

            <div className="grid grid-cols-2 gap-2">
              <input type="time" className="border rounded px-3 py-2" />
              <input type="time" className="border rounded px-3 py-2" />
            </div>

            <select className="w-full border rounded px-3 py-2">
              <option>Select Subject</option>
            </select>

            <select className="w-full border rounded px-3 py-2">
              <option>Select Teacher</option>
            </select>

            <input
              type="text"
              placeholder="Room / Lab"
              className="w-full border rounded px-3 py-2"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </form>
        </div>
      </div>

      {/* ===== Table ===== */}
      <div className="col-span-12 lg:col-span-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Class Routine List</h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">SN</th>
                  <th className="border p-2">Class</th>
                  <th className="border p-2">Section</th>
                  <th className="border p-2">Day</th>
                  <th className="border p-2">Time</th>
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Teacher</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Class 5</td>
                  <td className="border p-2">A</td>
                  <td className="border p-2">Monday</td>
                  <td className="border p-2">08:00 - 08:40</td>
                  <td className="border p-2">Math</td>
                  <td className="border p-2">Sir Ahmed</td>
                  <td className="border p-2 text-center">
                    <button className="text-blue-600 mr-3">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
