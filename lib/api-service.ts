/**
 * Centralized API Service for Backend Readiness.
 * This service handles all data fetching and mutation logic for the entire Aldermin Admin project.
 * Currently uses Mock Data, but is structured to easily switch to real API calls.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  // Generic handler for real backend
  /*
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!response.ok) throw new Error("API Error");
  return response.json();
  */
  console.log(`[Mock API Call] ${options.method || "GET"} to ${endpoint}`);
  await delay(800);
  return {} as T;
}

export const apiService = {
  // --- Student Information Module ---
  students: {
    getAll: async () => {
      await delay(600);
      return [
        {
          id: 1,
          admissionNo: "SIS-23-001",
          name: "Mohammad Ali",
          fatherName: "Faizan Ali",
          dob: "2010-05-15",
          className: "Class 10-A",
          gender: "Male",
          category: "General",
        },
        {
          id: 2,
          admissionNo: "SIS-23-042",
          name: "Fatima Zehra",
          fatherName: "Syed Abbas",
          dob: "2011-02-28",
          className: "Class 10-A",
          gender: "Female",
          category: "Scholarship",
        },
      ];
    },
    create: async (data: any) => {
      await delay(1000);
      return { success: true, data: { id: Math.random(), ...data } };
    },
    delete: async (id: number | string) => {
      await delay(500);
      return { success: true };
    },
  },

  categories: {
    getAll: async () => {
      await delay(400);
      return [
        { id: 1, name: "General", grade: "All", section: "All" },
        { id: 2, name: "Scholarship", grade: "All", section: "All" },
      ];
    },
    create: async (name: string) => {
      await delay(700);
      return { id: Math.random(), name, grade: "All", section: "All" };
    },
  },

  // --- Fees Module ---
  fees: {
    getCollection: async () => {
      await delay(800);
      return [
        {
          id: 1,
          invoiceId: "INV-1001",
          studentName: "Mohammad Ali",
          amount: "5,000",
          date: "2023-10-01",
          status: "Paid",
        },
        {
          id: 2,
          invoiceId: "INV-1002",
          studentName: "Fatima Zehra",
          amount: "4,500",
          date: "2023-10-02",
          status: "Unpaid",
        },
      ];
    },
    getTypes: async () => {
      await delay(400);
      return [
        { id: 1, name: "Tuition Fee", code: "TFE", amount: "4,000" },
        { id: 2, name: "Library Fee", code: "LIB", amount: "500" },
      ];
    },
    getFeeGroups: async () => {
      await delay(300);
      return [
        {
          id: 1,
          group: "General Fees",
          description: "Standard fees applicable to all students.",
        },
        {
          id: 2,
          group: "Academic Fees",
          description: "Fees related to course materials and labs.",
        },
      ];
    },
    getFeeCarryForward: async () => {
      await delay(600);
      return [
        {
          id: 1,
          name: "Marcus Aurelius",
          admissionNo: "ADM001",
          prevBalance: "1200",
          carryAmount: "1200",
          status: "Unprocessed",
        },
        {
          id: 2,
          name: "Seneca Minor",
          admissionNo: "ADM042",
          prevBalance: "450",
          carryAmount: "450",
          status: "Forwarded",
        },
      ];
    },
  },

  // --- HR (Human Resource) Module ---
  hr: {
    getStaff: async () => {
      await delay(900);
      return [
        {
          id: 1,
          staffId: "STF-001",
          name: "Zia Khan",
          role: "Manager",
          department: "Academic",
          phone: "0300-1234567",
        },
        {
          id: 2,
          staffId: "STF-002",
          name: "Sara Ahmed",
          role: "Teacher",
          department: "Academic",
          phone: "0300-7654321",
        },
      ];
    },
    getAttendance: async (date: string) => {
      await delay(500);
      return [
        { id: 1, name: "Zia Khan", status: "Present" },
        { id: 2, name: "Sara Ahmed", status: "Absent" },
      ];
    },
    getDepartments: async () => {
      await delay(300);
      return [
        { id: 1, title: "Academic Department" },
        { id: 2, title: "Administration" },
        { id: 3, title: "Finance" },
      ];
    },
    getDesignations: async () => {
      await delay(300);
      return [
        { id: 1, title: "Principal" },
        { id: 2, title: "Professor" },
        { id: 3, title: "Accountant" },
      ];
    },
    getPayroll: async () => {
      await delay(600);
      return [
        {
          id: 1,
          staffName: "Marcus Aurelius",
          role: "Lead Teacher",
          department: "Academic",
          month: "December",
          year: "2023",
          grossSalary: "4500",
          netSalary: "4200",
          status: "Paid",
        },
        {
          id: 2,
          staffName: "Seneca Minor",
          role: "Accountant",
          department: "Finance",
          month: "December",
          year: "2023",
          grossSalary: "3800",
          netSalary: "3500",
          status: "Generated",
        },
        {
          id: 3,
          staffName: "Epictetus Slave",
          role: "Librarian",
          department: "Library",
          month: "December",
          year: "2023",
          grossSalary: "3200",
          netSalary: "3000",
          status: "Processing",
        },
      ];
    },
    getRoles: async () => {
      await delay(300);
      return ["Teacher", "Administrator", "Librarian", "Accountant"];
    },
    createStaff: async (data: any) => {
      await delay(1500);
      return { success: true, id: Math.random() };
    },
  },

  // --- Academics Module ---
  academics: {
    getClasses: async () => {
      await delay(400);
      return ["Class 9", "Class 10", "Class 11", "Class 12"];
    },
    getSections: async () => {
      await delay(300);
      return ["A", "B", "C", "D"];
    },
    getSubjects: async () => {
      await delay(500);
      return [
        { id: 1, name: "Mathematics", code: "MATH101", type: "Theory" },
        { id: 2, name: "Physics Lab", code: "PHYS101L", type: "Practical" },
        { id: 3, name: "Chemistry", code: "CHEM201", type: "Theory" },
      ];
    },
    getClassRooms: async () => {
      await delay(400);
      return [
        { id: 1, roomNumber: "101", capacity: "40" },
        { id: 2, roomNumber: "102", capacity: "35" },
        { id: 3, roomNumber: "201", capacity: "50" },
      ];
    },
    getTeacherAssignments: async () => {
      await delay(500);
      return [
        { id: 1, class: "Class 10-A", section: "A", teacher: "Zia Khan" },
        { id: 2, class: "Class 9-B", section: "B", teacher: "Sara Ahmed" },
      ];
    },
    getSubjectAssignments: async () => {
      await delay(500);
      return [
        { id: 1, subject: "Mathematics", section: "A", teacher: "Zia Khan" },
        { id: 2, subject: "Physics", section: "B", teacher: "Sara Ahmed" },
      ];
    },
    getRoutines: async () => {
      await delay(700);
      return [
        {
          id: 1,
          class: "Class 10-A",
          section: "A",
          day: "Monday",
          startTime: "08:00",
          endTime: "08:40",
          subject: "Mathematics",
          teacher: "Zia Khan",
          room: "101",
        },
      ];
    },
  },

  // --- Library Module ---
  library: {
    getBooks: async () => {
      await delay(700);
      return [
        {
          id: 1,
          title: "Modern Physics",
          author: "H.C. Verma",
          isbn: "123-456",
          category: "Science",
          quantity: 10,
        },
        {
          id: 2,
          title: "Pure Mathematics",
          author: "P.K. Jain",
          isbn: "789-012",
          category: "Math",
          quantity: 5,
        },
      ];
    },
  },

  // --- Accounts & Inventory Module ---
  accounts: {
    getChartOfAccounts: async () => {
      await delay(600);
      return [
        {
          id: 1,
          code: "1000",
          name: "Assets",
          type: "Asset",
          balance: "500,000",
        },
        {
          id: 2,
          code: "2000",
          name: "Liabilities",
          type: "Liability",
          balance: "150,000",
        },
        {
          id: 3,
          code: "3000",
          name: "Equity",
          type: "Equity",
          balance: "350,000",
        },
        {
          id: 4,
          code: "4000",
          name: "Income",
          type: "Income",
          balance: "75,000",
        },
        {
          id: 5,
          code: "5000",
          name: "Expenses",
          type: "Expense",
          balance: "45,000",
        },
      ];
    },
    getInventory: async () => {
      await delay(800);
      return [
        {
          id: 1,
          item: "Whiteboard Markers",
          category: "Stationery",
          qty: 45,
          unit: "Pcs",
        },
        {
          id: 2,
          item: "A4 Printing Paper",
          category: "Stationery",
          qty: 12,
          unit: "Reams",
        },
      ];
    },
  },

  // --- Examination Module ---
  examination: {
    getMarksRegister: async (examId?: string, classId?: string) => {
      await delay(900);
      return [
        {
          id: 1,
          admissionNo: "ADM-2023-001",
          rollNo: "10",
          name: "Avery Sterling",
          marks: 85,
          remarks: "Excellent",
          isPresent: true,
        },
        {
          id: 2,
          admissionNo: "ADM-2023-042",
          rollNo: "15",
          name: "Elara Vance",
          marks: 42,
          remarks: "Medical issue",
          isPresent: true,
        },
      ];
    },
    getSchedules: async () => {
      await delay(700);
      return [
        {
          id: 1,
          title: "Final Term 2023",
          startDate: "2023-12-10",
          status: "Upcoming",
        },
        {
          id: 2,
          title: "Mid Term 2023",
          startDate: "2023-06-15",
          status: "Completed",
        },
      ];
    },
  },
};
