"use client";

import { useState, useMemo } from "react";
import {
  GraduationCap,
  Search,
  Plus,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  UserCheck,
  TrendingUp,
  X,
  Phone,
  Calendar,
  Award,
  Users as UsersIcon,
  BookOpen,
  Clock,
  MapPin,
  Mail,
  CheckCircle2,
  XCircle,
  Heart,
  FileText,
  AlertCircle,
  Building2,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText as FilePdf,
  StickyNote,
  BarChart3,
  CreditCard,
  CalendarCheck,
} from "lucide-react";
import clsx from "clsx";

interface TeacherNote {
  date: string;
  teacher: string;
  content: string;
}

interface PaymentRecord {
  month: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
}

interface AttendanceDay {
  date: string;
  status: "Present" | "Absent" | "Sick" | "Permission" | "Late";
}

interface Student {
  id: string;
  name: string;
  class: string;
  branch: string;
  program: string;
  guardian: string;
  fatherName: string;
  motherName: string;
  phone: string;
  email: string;
  status: "Active" | "Inactive" | "Graduated" | "Pending Payment";
  enrollmentDate: string;
  dob: string;
  gender: string;
  address: string;
  attendance: number;
  attendanceBreakdown: { present: number; absent: number; sick: number; permission: number; late: number };
  attendanceHistory: AttendanceDay[];
  gpa: number;
  avatarColor: string;
  age: number;
  paymentStatus: "Paid" | "Pending" | "Overdue";
  outstandingBalance: string;
  paymentHistory: PaymentRecord[];
  academic: { reading: number; writing: number; math: number; overall: number };
  teacherNotes: TeacherNote[];
  statusHistory: { date: string; status: string; note: string }[];
}

const students: Student[] = [
  {
    id: "STD-2025-001", name: "Aisha Putri Maharani", class: "TK A", branch: "Bimba Ceria Pusat", program: "Playgroup",
    guardian: "Budi Maharani", fatherName: "Budi Maharani", motherName: "Sari Maharani", phone: "0812-3456-7890", email: "budi.maharani@email.com",
    status: "Active", enrollmentDate: "15 Aug 2024", dob: "12 Mar 2020", gender: "Female", address: "Jl. Melati No. 12, Jakarta Selatan",
    attendance: 97, attendanceBreakdown: { present: 92, absent: 1, sick: 2, permission: 1, late: 3 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Late" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Sick" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 4.2, avatarColor: "from-blue-500 to-blue-600", age: 5,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 1,500,000", status: "Paid", date: "01 Jun 2025" },
      { month: "May 2025", amount: "Rp 1,500,000", status: "Paid", date: "01 May 2025" },
      { month: "April 2025", amount: "Rp 1,500,000", status: "Paid", date: "03 Apr 2025" },
    ],
    academic: { reading: 85, writing: 78, math: 82, overall: 82 },
    teacherNotes: [
      { date: "20 Jun 2025", teacher: "Ms. Ratna", content: "Aisha menunjukkan kemajuan yang baik dalam membaca huruf vokal. Sangat antusias di kelas." },
      { date: "10 Jun 2025", teacher: "Ms. Ratna", content: "Mulai berani bertanya saat sesi storytelling. Perlu dorongan untuk sosialisasi dengan teman." },
      { date: "28 May 2025", teacher: "Mr. Andi", content: "Kemampuan menghitung 1-10 sudah sangat baik. Lanjut ke 11-20." },
    ],
    statusHistory: [{ date: "15 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-002", name: "Raka Pratama Wijaya", class: "SD 3", branch: "Bimba Sudirman", program: "SD",
    guardian: "Sri Wijaya", fatherName: "Agus Wijaya", motherName: "Sri Wijaya", phone: "0813-2222-1111", email: "sri.wijaya@email.com",
    status: "Active", enrollmentDate: "16 Aug 2024", dob: "05 Jul 2016", gender: "Male", address: "Jl. Sudirman No. 45, Jakarta Pusat",
    attendance: 94, attendanceBreakdown: { present: 89, absent: 2, sick: 3, permission: 1, late: 2 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Permission" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Late" },
    ],
    gpa: 3.8, avatarColor: "from-emerald-500 to-emerald-600", age: 9,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 2,000,000", status: "Paid", date: "01 Jun 2025" },
      { month: "May 2025", amount: "Rp 2,000,000", status: "Paid", date: "02 May 2025" },
    ],
    academic: { reading: 78, writing: 82, math: 88, overall: 83 },
    teacherNotes: [
      { date: "18 Jun 2025", teacher: "Ms. Dewi", content: "Raka sangat baik dalam matematika. Nilai ulangan terbaru 90." },
      { date: "05 Jun 2025", teacher: "Mr. Budi", content: "Perlu lebih fokus saat pelajaran bahasa Indonesia. Sering ngobrol dengan teman." },
    ],
    statusHistory: [{ date: "16 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-003", name: "Nayla Zahra Hakim", class: "TK B", branch: "Bimba Ceria Pusat", program: "Kindergarten",
    guardian: "Ahmad Hakim", fatherName: "Ahmad Hakim", motherName: "Fatma Hakim", phone: "0815-9999-3333", email: "ahmad.hakim@email.com",
    status: "Active", enrollmentDate: "20 Aug 2024", dob: "22 Jan 2019", gender: "Female", address: "Jl. Anggrek No. 8, Jakarta Selatan",
    attendance: 99, attendanceBreakdown: { present: 95, absent: 0, sick: 1, permission: 0, late: 1 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Sick" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 4.5, avatarColor: "from-violet-500 to-violet-600", age: 6,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 1,800,000", status: "Paid", date: "01 Jun 2025" },
      { month: "May 2025", amount: "Rp 1,800,000", status: "Paid", date: "01 May 2025" },
      { month: "April 2025", amount: "Rp 1,800,000", status: "Paid", date: "02 Apr 2025" },
    ],
    academic: { reading: 92, writing: 88, math: 90, overall: 90 },
    teacherNotes: [
      { date: "21 Jun 2025", teacher: "Ms. Ratna", content: "Nayla siswa teladan. Membaca lancar, sopan, dan suka menolong teman." },
    ],
    statusHistory: [{ date: "20 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-004", name: "Arvin Kusuma Dewa", class: "SD 5", branch: "Bimba Kelapa Gading", program: "SD",
    guardian: "Dewa Saputra", fatherName: "Dewa Saputra", motherName: "Lina Saputra", phone: "0817-4444-5555", email: "dewa.saputra@email.com",
    status: "Pending Payment", enrollmentDate: "10 Jul 2024", dob: "15 Sep 2014", gender: "Male", address: "Jl. Kelapa Gading No. 22, Jakarta Utara",
    attendance: 88, attendanceBreakdown: { present: 82, absent: 5, sick: 2, permission: 3, late: 3 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Absent" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Late" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Permission" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 3.5, avatarColor: "from-amber-500 to-amber-600", age: 11,
    paymentStatus: "Overdue", outstandingBalance: "Rp 2,000,000",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 2,200,000", status: "Overdue", date: "Due 01 Jun 2025" },
      { month: "May 2025", amount: "Rp 2,200,000", status: "Paid", date: "03 May 2025" },
      { month: "April 2025", amount: "Rp 2,200,000", status: "Paid", date: "02 Apr 2025" },
    ],
    academic: { reading: 70, writing: 75, math: 72, overall: 72 },
    teacherNotes: [
      { date: "15 Jun 2025", teacher: "Mr. Hendra", content: "Arvin perlu meningkatkan motivasi belajar. Nilai menurun dibanding semester lalu." },
      { date: "01 Jun 2025", teacher: "Ms. Rina", content: "Sering terlambat. Orang tua perlu dihubungi untuk koordinasi." },
    ],
    statusHistory: [
      { date: "10 Jul 2024", status: "Active", note: "Student enrolled" },
      { date: "01 Jun 2025", status: "Pending Payment", note: "June tuition overdue" },
    ],
  },
  {
    id: "STD-2025-005", name: "Kayla Azzahra Putri", class: "SD 1", branch: "Bimba BSD City", program: "SD",
    guardian: "Rini Putri", fatherName: "Joko Putri", motherName: "Rini Putri", phone: "0818-7777-2222", email: "rini.putri@email.com",
    status: "Active", enrollmentDate: "22 Aug 2024", dob: "30 Nov 2018", gender: "Female", address: "Jl. BSD No. 15, Tangerang Selatan",
    attendance: 92, attendanceBreakdown: { present: 87, absent: 2, sick: 3, permission: 1, late: 2 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Sick" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 4.0, avatarColor: "from-pink-500 to-pink-600", age: 7,
    paymentStatus: "Pending", outstandingBalance: "Rp 1,800,000",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 1,800,000", status: "Pending", date: "Due 25 Jun 2025" },
      { month: "May 2025", amount: "Rp 1,800,000", status: "Paid", date: "01 May 2025" },
    ],
    academic: { reading: 80, writing: 85, math: 78, overall: 81 },
    teacherNotes: [
      { date: "19 Jun 2025", teacher: "Ms. Tara", content: "Kayla sangat kreatif dalam seni menggambar. Perlu latihan lebih dalam menulis." },
    ],
    statusHistory: [{ date: "22 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-006", name: "Zidane Maulana Akbar", class: "SD 4", branch: "Bimba Depok", program: "SD",
    guardian: "Joko Akbar", fatherName: "Joko Akbar", motherName: "Tini Akbar", phone: "0819-1234-5678", email: "joko.akbar@email.com",
    status: "Inactive", enrollmentDate: "05 Jul 2024", dob: "18 Feb 2015", gender: "Male", address: "Jl. Margonda No. 33, Depok",
    attendance: 76, attendanceBreakdown: { present: 68, absent: 12, sick: 4, permission: 5, late: 3 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Absent" }, { date: "Fri, 20 Jun", status: "Absent" }, { date: "Thu, 19 Jun", status: "Permission" },
      { date: "Wed, 18 Jun", status: "Absent" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Absent" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 3.2, avatarColor: "from-sky-500 to-sky-600", age: 10,
    paymentStatus: "Overdue", outstandingBalance: "Rp 4,400,000",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 2,200,000", status: "Overdue", date: "Due 01 Jun 2025" },
      { month: "May 2025", amount: "Rp 2,200,000", status: "Overdue", date: "Due 01 May 2025" },
    ],
    academic: { reading: 65, writing: 60, math: 68, overall: 64 },
    teacherNotes: [
      { date: "10 Jun 2025", teacher: "Mr. Fajar", content: "Zidane jarang masuk. Perlu komunikasi dengan orang tua segera." },
    ],
    statusHistory: [
      { date: "05 Jul 2024", status: "Active", note: "Student enrolled" },
      { date: "15 May 2025", status: "Inactive", note: "Inactive due to prolonged absence" },
    ],
  },
  {
    id: "STD-2025-007", name: "Alyssa Safira Indah", class: "TK A", branch: "Bimba Sudirman", program: "Playgroup",
    guardian: "Maya Indah", fatherName: "Rama Indah", motherName: "Maya Indah", phone: "0812-8765-4321", email: "maya.indah@email.com",
    status: "Active", enrollmentDate: "25 Aug 2024", dob: "08 Aug 2020", gender: "Female", address: "Jl. Sudirman No. 78, Jakarta Pusat",
    attendance: 96, attendanceBreakdown: { present: 91, absent: 1, sick: 2, permission: 1, late: 2 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Late" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 4.3, avatarColor: "from-rose-500 to-rose-600", age: 5,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 1,500,000", status: "Paid", date: "01 Jun 2025" },
      { month: "May 2025", amount: "Rp 1,500,000", status: "Paid", date: "01 May 2025" },
    ],
    academic: { reading: 88, writing: 82, math: 85, overall: 85 },
    teacherNotes: [
      { date: "22 Jun 2025", teacher: "Ms. Ratna", content: "Alyssa cepat menangkap instruksi. Sangat potensial untuk kelas lanjutan." },
    ],
    statusHistory: [{ date: "25 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-008", name: "Bagas Wibisono", class: "SD 2", branch: "Bimba Ceria Pusat", program: "SD",
    guardian: "Andi Wibisono", fatherName: "Andi Wibisono", motherName: "Dewi Wibisono", phone: "0813-5555-9999", email: "andi.wibisono@email.com",
    status: "Active", enrollmentDate: "18 Aug 2024", dob: "12 Dec 2017", gender: "Male", address: "Jl. Melati No. 20, Jakarta Selatan",
    attendance: 91, attendanceBreakdown: { present: 86, absent: 2, sick: 3, permission: 1, late: 3 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Late" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Sick" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 3.7, avatarColor: "from-indigo-500 to-indigo-600", age: 8,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 1,800,000", status: "Paid", date: "01 Jun 2025" },
      { month: "May 2025", amount: "Rp 1,800,000", status: "Paid", date: "02 May 2025" },
    ],
    academic: { reading: 75, writing: 80, math: 82, overall: 79 },
    teacherNotes: [
      { date: "17 Jun 2025", teacher: "Ms. Dewi", content: "Bagas aktif di kelas tapi perlu lebih teliti dalam mengerjakan soal." },
    ],
    statusHistory: [{ date: "18 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-009", name: "Cinta Dewi Anggraini", class: "SD 6", branch: "Bimba Kelapa Gading", program: "SD",
    guardian: "Rudi Anggraini", fatherName: "Rudi Anggraini", motherName: "Sinta Anggraini", phone: "0814-3333-8888", email: "rudi.anggraini@email.com",
    status: "Graduated", enrollmentDate: "12 Aug 2024", dob: "25 Feb 2013", gender: "Female", address: "Jl. Gading No. 5, Jakarta Utara",
    attendance: 95, attendanceBreakdown: { present: 90, absent: 1, sick: 2, permission: 1, late: 3 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Late" },
    ],
    gpa: 4.1, avatarColor: "from-teal-500 to-teal-600", age: 12,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [{ month: "June 2025", amount: "Rp 2,200,000", status: "Paid", date: "01 Jun 2025" }],
    academic: { reading: 90, writing: 88, math: 85, overall: 88 },
    teacherNotes: [
      { date: "20 Jun 2025", teacher: "Mr. Hendra", content: "Cinta siap untuk kelulusan. Nilai sangat memuaskan di semua mata pelajaran." },
    ],
    statusHistory: [
      { date: "12 Aug 2024", status: "Active", note: "Student enrolled" },
      { date: "20 Jun 2025", status: "Graduated", note: "Completed SD 6 with excellent grades" },
    ],
  },
  {
    id: "STD-2025-010", name: "Damar Sapta Utama", class: "SD 3", branch: "Bimba BSD City", program: "SD",
    guardian: "Lina Utama", fatherName: "Sapta Utama", motherName: "Lina Utama", phone: "0816-6666-1234", email: "lina.utama@email.com",
    status: "Active", enrollmentDate: "14 Aug 2024", dob: "03 Oct 2016", gender: "Male", address: "Jl. BSD No. 28, Tangerang Selatan",
    attendance: 89, attendanceBreakdown: { present: 84, absent: 3, sick: 2, permission: 2, late: 4 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Late" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Absent" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Late" },
    ],
    gpa: 3.6, avatarColor: "from-orange-500 to-orange-600", age: 9,
    paymentStatus: "Pending", outstandingBalance: "Rp 2,000,000",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 2,000,000", status: "Pending", date: "Due 28 Jun 2025" },
      { month: "May 2025", amount: "Rp 2,000,000", status: "Paid", date: "01 May 2025" },
    ],
    academic: { reading: 72, writing: 74, math: 80, overall: 75 },
    teacherNotes: [
      { date: "18 Jun 2025", teacher: "Ms. Tara", content: "Damar sering terlambat. Perlu koordinasi dengan orang tua untuk jadwal antar-jemput." },
    ],
    statusHistory: [{ date: "14 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-011", name: "Elya Khaerunnisa", class: "TK B", branch: "Bimba Depok", program: "Kindergarten",
    guardian: "Fajar Khaerun", fatherName: "Fajar Khaerun", motherName: "Nur Khaerun", phone: "0811-2345-6789", email: "fajar.khaerun@email.com",
    status: "Active", enrollmentDate: "19 Aug 2024", dob: "14 Apr 2019", gender: "Female", address: "Jl. Margonda No. 41, Depok",
    attendance: 93, attendanceBreakdown: { present: 88, absent: 2, sick: 3, permission: 1, late: 3 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Sick" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Late" },
    ],
    gpa: 3.9, avatarColor: "from-fuchsia-500 to-fuchsia-600", age: 6,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [
      { month: "June 2025", amount: "Rp 1,700,000", status: "Paid", date: "01 Jun 2025" },
      { month: "May 2025", amount: "Rp 1,700,000", status: "Paid", date: "01 May 2025" },
    ],
    academic: { reading: 82, writing: 80, math: 78, overall: 80 },
    teacherNotes: [
      { date: "21 Jun 2025", teacher: "Ms. Ratna", content: "Elya sangat mandiri. Sudah bisa merapikan mainan sendiri setelah digunakan." },
    ],
    statusHistory: [{ date: "19 Aug 2024", status: "Active", note: "Student enrolled" }],
  },
  {
    id: "STD-2025-012", name: "Fauzan Aditya Rahman", class: "SD 5", branch: "Bimba Sudirman", program: "SD",
    guardian: "Hendra Rahman", fatherName: "Hendra Rahman", motherName: "Citra Rahman", phone: "0812-1111-2222", email: "hendra.rahman@email.com",
    status: "Graduated", enrollmentDate: "10 Jun 2023", dob: "20 May 2013", gender: "Male", address: "Jl. Sudirman No. 90, Jakarta Pusat",
    attendance: 98, attendanceBreakdown: { present: 95, absent: 0, sick: 1, permission: 0, late: 2 },
    attendanceHistory: [
      { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" }, { date: "Thu, 19 Jun", status: "Present" },
      { date: "Wed, 18 Jun", status: "Present" }, { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Present" },
      { date: "Fri, 13 Jun", status: "Present" },
    ],
    gpa: 4.4, avatarColor: "from-cyan-500 to-cyan-600", age: 12,
    paymentStatus: "Paid", outstandingBalance: "Rp 0",
    paymentHistory: [{ month: "June 2025", amount: "Rp 2,000,000", status: "Paid", date: "01 Jun 2025" }],
    academic: { reading: 92, writing: 90, math: 95, overall: 92 },
    teacherNotes: [
      { date: "22 Jun 2025", teacher: "Mr. Budi", content: "Fauzan lulus dengan predikat terbaik. Sangat direkomendasikan untuk SMP unggulan." },
    ],
    statusHistory: [
      { date: "10 Jun 2023", status: "Active", note: "Student enrolled" },
      { date: "15 Jun 2025", status: "Graduated", note: "Graduated with honors" },
    ],
  },
];

const branchOptions = ["All Branches", "Bimba Ceria Pusat", "Bimba Sudirman", "Bimba Kelapa Gading", "Bimba BSD City", "Bimba Depok"];
const classOptions = ["All Classes", "TK A", "TK B", "SD 1", "SD 2", "SD 3", "SD 4", "SD 5", "SD 6"];
const programOptions = ["All Programs", "Playgroup", "Kindergarten", "SD"];
const statusOptions = ["All Status", "Active", "Inactive", "Graduated", "Pending Payment"];
const sortOptions = ["Name (A-Z)", "Name (Z-A)", "Enrollment (Newest)", "Enrollment (Oldest)"];

const statusBadge: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-amber-100 text-amber-700",
  Graduated: "bg-blue-100 text-blue-700",
  "Pending Payment": "bg-red-100 text-red-700",
};

const paymentBadge: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-700",
};

const attendanceStatusStyle: Record<string, string> = {
  Present: "bg-emerald-100 text-emerald-700",
  Absent: "bg-red-100 text-red-700",
  Sick: "bg-amber-100 text-amber-700",
  Permission: "bg-blue-100 text-blue-700",
  Late: "bg-violet-100 text-violet-700",
};

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

function attendanceColor(rate: number) {
  if (rate >= 95) return { bar: "#059669", text: "text-emerald-600" };
  if (rate >= 90) return { bar: "#3b82f6", text: "text-blue-600" };
  return { bar: "#f59e0b", text: "text-amber-600" };
}

type TabKey = "profile" | "attendance" | "payment" | "academic";

export default function StudentManagement() {
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [programFilter, setProgramFilter] = useState("All Programs");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortBy, setSortBy] = useState("Name (A-Z)");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [showExportMenu, setShowExportMenu] = useState(false);
  const itemsPerPage = 8;

  const filtered = useMemo(() => {
    let result = students.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase());
      const matchBranch = branchFilter === "All Branches" || s.branch === branchFilter;
      const matchClass = classFilter === "All Classes" || s.class === classFilter;
      const matchProgram = programFilter === "All Programs" || s.program === programFilter;
      const matchStatus = statusFilter === "All Status" || s.status === statusFilter;
      return matchSearch && matchBranch && matchClass && matchProgram && matchStatus;
    });
    if (sortBy === "Name (A-Z)") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "Name (Z-A)") result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "Enrollment (Newest)") result = [...result].sort((a, b) => b.enrollmentDate.localeCompare(a.enrollmentDate));
    if (sortBy === "Enrollment (Oldest)") result = [...result].sort((a, b) => a.enrollmentDate.localeCompare(b.enrollmentDate));
    return result;
  }, [search, branchFilter, classFilter, programFilter, statusFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const branchStats = useMemo(() => {
    const allBranches = students;
    const allStats = {
      name: "All Branches", total: allBranches.length,
      active: allBranches.filter((s) => s.status === "Active").length,
      inactive: allBranches.filter((s) => s.status === "Inactive").length,
      graduated: allBranches.filter((s) => s.status === "Graduated").length,
      pending: allBranches.filter((s) => s.status === "Pending Payment").length,
    };
    const perBranch = branchOptions.slice(1).map((branch) => {
      const bs = students.filter((s) => s.branch === branch);
      return {
        name: branch, total: bs.length,
        active: bs.filter((s) => s.status === "Active").length,
        inactive: bs.filter((s) => s.status === "Inactive").length,
        graduated: bs.filter((s) => s.status === "Graduated").length,
        pending: bs.filter((s) => s.status === "Pending Payment").length,
      };
    });
    return [allStats, ...perBranch];
  }, []);

  const stats = useMemo(() => {
    const pool = branchFilter === "All Branches" ? students : students.filter((s) => s.branch === branchFilter);
    const total = pool.length;
    const active = pool.filter((s) => s.status === "Active").length;
    const pending = pool.filter((s) => s.status === "Pending Payment").length;
    const avgGPA = pool.length > 0 ? (pool.reduce((sum, s) => sum + s.gpa, 0) / pool.length).toFixed(1) : "0";
    return [
      { label: "Total Students", value: total.toString(), change: "+8.4%", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-100" },
      { label: "Active Students", value: active.toString(), change: "+3.2%", icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-100" },
      { label: "Pending Payment", value: pending.toString(), change: pending > 0 ? "-5%" : "0%", icon: CreditCard, color: "text-red-600", bg: "bg-red-100" },
      { label: "Avg GPA", value: avgGPA, change: "+0.2", icon: Award, color: "text-amber-600", bg: "bg-amber-100" },
    ];
  }, [branchFilter]);

  const openProfile = (student: Student) => { setSelectedStudent(student); setActiveTab("profile"); };

  const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
    { key: "profile", label: "Profile", icon: BookOpen },
    { key: "attendance", label: "Attendance", icon: CalendarCheck },
    { key: "payment", label: "Payment", icon: CreditCard },
    { key: "academic", label: "Academic", icon: BarChart3 },
  ];

  return (
    <div className="animate-fade-in relative">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}><Icon className={`w-5 h-5 ${stat.color}`} /></div>
                <span className={clsx("text-xs font-semibold flex items-center gap-0.5", stat.change.startsWith("-") ? "text-red-500" : "text-emerald-600")}>
                  <TrendingUp className="w-3 h-3" />{stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Branch Filtering */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mb-4 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2"><Building2 className="w-4 h-4 text-blue-600" />Branch Overview</h3>
            <p className="text-xs text-slate-500 mt-0.5">Select a branch to filter all data below</p>
          </div>
          {branchFilter !== "All Branches" && (
            <button onClick={() => { setBranchFilter("All Branches"); setCurrentPage(1); }} className="text-xs text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
              <X className="w-3 h-3" /> Clear filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {branchStats.map((bs) => {
            const isAll = bs.name === "All Branches";
            const isSelected = branchFilter === bs.name;
            return (
              <button key={bs.name} onClick={() => { setBranchFilter(bs.name); setCurrentPage(1); }}
                className={clsx("text-left p-3 rounded-xl border transition-all duration-200 hover:shadow-sm relative",
                  isSelected ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100" : isAll ? "border-slate-300 bg-slate-50" : "border-slate-100 hover:border-slate-200")}>
                {isSelected && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500" />}
                <p className={clsx("text-xs font-semibold truncate", isAll ? "text-slate-700" : "text-slate-500")}>{isAll ? "All Branches" : bs.name.replace("Bimba ", "")}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{bs.total}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-2 text-[10px]">
                  <span className="text-emerald-600 font-medium">{bs.active} Active</span>
                  {bs.inactive > 0 && <span className="text-amber-600 font-medium">{bs.inactive} Inactive</span>}
                  {bs.graduated > 0 && <span className="text-blue-600 font-medium">{bs.graduated} Grad</span>}
                  {bs.pending > 0 && <span className="text-red-500 font-medium">{bs.pending} Pending</span>}
                </div>
              </button>
            );
          })}
        </div>
        {/* Active filter indicator */}
        {branchFilter !== "All Branches" && (
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 bg-blue-50 rounded-lg px-3 py-2">
            <Building2 className="w-3.5 h-3.5 text-blue-500" />
            <span>Filtering by: <strong className="text-blue-700">{branchFilter}</strong> — showing {filtered.length} students</span>
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mb-4">
        <div className="flex flex-col lg:flex-row gap-3 p-4">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 flex-1">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} placeholder="Search by student name or ID..." className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full" />
            {search && <button onClick={() => setSearch("")} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>}
          </div>
          <div className="flex gap-2 flex-wrap">
            <select value={branchFilter} onChange={(e) => { setBranchFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{branchOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
            <select value={classFilter} onChange={(e) => { setClassFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{classOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
            <select value={programFilter} onChange={(e) => { setProgramFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{programOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
            <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{statusOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
          </div>
          <div className="flex gap-2 relative">
            <div className="relative">
              <button onClick={() => setShowExportMenu(!showExportMenu)} className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl px-3 py-2 transition-colors">
                <Download className="w-4 h-4" /><span className="hidden sm:inline">Export</span><ChevronDown className="w-3 h-3" />
              </button>
              {showExportMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 w-48 z-30 animate-fade-in">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Report Type</p>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Student Profile</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Attendance Report</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Academic Progress</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Payment Report</button>
                  <div className="border-t border-slate-100 my-1" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Format</p>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FileSpreadsheet className="w-4 h-4 text-emerald-500" /> Excel</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><Printer className="w-4 h-4 text-slate-500" /> Print</button>
                </div>
              )}
            </div>
            <button className="flex items-center gap-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-3 py-2 transition-colors shadow-sm"><Plus className="w-4 h-4" /><span className="hidden sm:inline">Add Student</span></button>
          </div>
        </div>
        <div className="px-4 pb-3 flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong className="text-slate-700">{paginated.length}</strong> of <strong className="text-slate-700">{filtered.length}</strong> students{filtered.length !== students.length && ` (filtered from ${students.length})`}</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Student</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Class / Branch</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Program</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden xl:table-cell">Enrolled</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Attendance</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">GPA</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paginated.map((student) => {
                const att = attendanceColor(student.attendance);
                return (
                  <tr key={student.id} onClick={() => openProfile(student)} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${student.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{getInitials(student.name)}</div>
                        <div className="min-w-0"><p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors truncate">{student.name}</p><p className="text-xs text-slate-400">{student.id}</p></div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell"><p className="text-sm font-medium text-slate-600">{student.class}</p><p className="text-xs text-slate-400 truncate max-w-[140px]">{student.branch}</p></td>
                    <td className="px-5 py-3.5 hidden lg:table-cell"><span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">{student.program}</span></td>
                    <td className="px-5 py-3.5 hidden xl:table-cell"><p className="text-sm text-slate-600">{student.enrollmentDate}</p></td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-700" style={{ width: `${student.attendance}%`, background: att.bar }} /></div>
                        <span className={`text-xs font-semibold ${att.text}`}>{student.attendance}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell"><div className="flex items-center gap-1"><span className="text-sm font-bold text-slate-700">{student.gpa.toFixed(1)}</span>{student.gpa >= 4.0 && <Award className="w-3.5 h-3.5 text-amber-400" />}</div></td>
                    <td className="px-5 py-3.5"><span className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusBadge[student.status]}`}>{student.status}</span></td>
                    <td className="px-5 py-3.5"><button onClick={(e) => { e.stopPropagation(); openProfile(student); }} className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><MoreVertical className="w-4 h-4" /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4"><Search className="w-8 h-8 text-slate-300" /></div>
            <p className="text-sm font-semibold text-slate-600">No students found</p>
            <p className="text-xs text-slate-400 mt-1">Try adjusting your search or filters</p>
          </div>
        )}
        {filtered.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
            <p className="text-xs text-slate-500">Page {currentPage} of {totalPages}</p>
            <div className="flex items-center gap-1">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"><ChevronLeft className="w-4 h-4" /></button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className={clsx("w-8 h-8 rounded-lg text-xs font-semibold transition-colors", currentPage === page ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100")}>{page}</button>
              ))}
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Drawer */}
      {selectedStudent && (
        <>
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 animate-fade-in" onClick={() => setSelectedStudent(null)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-6 sticky top-0 z-10">
              <button onClick={() => setSelectedStudent(null)} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"><X className="w-4 h-4" /></button>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedStudent.avatarColor} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>{getInitials(selectedStudent.name)}</div>
                <div>
                  <h2 className="text-lg font-bold text-white">{selectedStudent.name}</h2>
                  <p className="text-sm text-blue-200">{selectedStudent.id}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusBadge[selectedStudent.status]}`}>{selectedStudent.status}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${paymentBadge[selectedStudent.paymentStatus]}`}>{selectedStudent.paymentStatus}</span>
                  </div>
                </div>
              </div>
              {/* Quick Summary */}
              <div className="grid grid-cols-4 gap-2 mt-5">
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedStudent.attendance}%</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">Attend</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedStudent.gpa.toFixed(1)}</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">GPA</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedStudent.academic.overall}%</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">Academic</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-[10px] font-bold text-white leading-tight">{selectedStudent.paymentStatus}</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">Payment</p></div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 sticky top-[176px] bg-white z-10">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={clsx("flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors relative", activeTab === tab.key ? "text-blue-600" : "text-slate-400 hover:text-slate-600")}>
                    <Icon className="w-4 h-4" />{tab.label}
                    {activeTab === tab.key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "profile" && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Student Information</h3>
                    <div className="space-y-2.5">
                      {[
                        { icon: GraduationCap, label: "Student ID", value: selectedStudent.id },
                        { icon: UsersIcon, label: "Gender", value: selectedStudent.gender },
                        { icon: Calendar, label: "Date of Birth", value: `${selectedStudent.dob} (${selectedStudent.age} years)` },
                        { icon: BookOpen, label: "Class", value: `${selectedStudent.class} · ${selectedStudent.program}` },
                        { icon: Building2, label: "Branch", value: selectedStudent.branch },
                        { icon: Calendar, label: "Enrollment Date", value: selectedStudent.enrollmentDate },
                        { icon: MapPin, label: "Address", value: selectedStudent.address },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-slate-500" /></div>
                            <div className="flex-1 min-w-0"><p className="text-xs text-slate-400">{item.label}</p><p className="text-sm font-semibold text-slate-700">{item.value}</p></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Parent Information</h3>
                    <div className="space-y-2.5">
                      {[
                        { icon: UsersIcon, label: "Father Name", value: selectedStudent.fatherName },
                        { icon: UsersIcon, label: "Mother Name", value: selectedStudent.motherName },
                        { icon: Phone, label: "Contact Number", value: selectedStudent.phone },
                        { icon: Mail, label: "Email", value: selectedStudent.email },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-slate-500" /></div>
                            <div className="flex-1 min-w-0"><p className="text-xs text-slate-400">{item.label}</p><p className="text-sm font-semibold text-slate-700 truncate">{item.value}</p></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Status History</h3>
                    <div className="space-y-2">
                      {selectedStudent.statusHistory.map((sh, i) => (
                        <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${statusBadge[sh.status] || "bg-slate-100 text-slate-600"}`}>{sh.status}</span>
                              <span className="text-xs text-slate-400">{sh.date}</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{sh.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "attendance" && (
                <div className="space-y-5 animate-fade-in">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 text-center border border-blue-100">
                    <p className="text-4xl font-bold text-blue-700">{selectedStudent.attendance}%</p>
                    <p className="text-xs text-blue-500 font-medium uppercase tracking-wider mt-1">Overall Attendance Rate</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Attendance Breakdown</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { label: "Present", value: selectedStudent.attendanceBreakdown.present, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
                        { label: "Absent", value: selectedStudent.attendanceBreakdown.absent, icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
                        { label: "Sick", value: selectedStudent.attendanceBreakdown.sick, icon: Heart, color: "text-amber-600", bg: "bg-amber-50" },
                        { label: "Permission", value: selectedStudent.attendanceBreakdown.permission, icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
                        { label: "Late", value: selectedStudent.attendanceBreakdown.late, icon: Clock, color: "text-violet-600", bg: "bg-violet-50" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className={`${item.bg} rounded-xl p-2.5 text-center`}>
                            <Icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
                            <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
                            <p className="text-[9px] text-slate-500 font-medium">{item.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recent Attendance History</h3>
                    <div className="space-y-1.5">
                      {selectedStudent.attendanceHistory.map((day, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                          <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-600">{day.date}</span></div>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${attendanceStatusStyle[day.status]}`}>{day.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "payment" && (
                <div className="space-y-5 animate-fade-in">
                  <div className={clsx("rounded-2xl p-5 border", selectedStudent.paymentStatus === "Paid" ? "bg-emerald-50 border-emerald-100" : selectedStudent.paymentStatus === "Pending" ? "bg-amber-50 border-amber-100" : "bg-red-50 border-red-100")}>
                    <div className="flex items-center justify-between">
                      <div><p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Month</p><p className="text-2xl font-bold text-slate-800 mt-1">{selectedStudent.paymentStatus}</p></div>
                      <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center", selectedStudent.paymentStatus === "Paid" ? "bg-emerald-100" : selectedStudent.paymentStatus === "Pending" ? "bg-amber-100" : "bg-red-100")}>
                        {selectedStudent.paymentStatus === "Paid" ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : selectedStudent.paymentStatus === "Pending" ? <Clock className="w-6 h-6 text-amber-600" /> : <AlertCircle className="w-6 h-6 text-red-600" />}
                      </div>
                    </div>
                    {selectedStudent.outstandingBalance !== "Rp 0" && (
                      <div className="mt-3 pt-3 border-t border-slate-200/50"><p className="text-xs text-slate-500">Outstanding Balance</p><p className="text-lg font-bold text-red-600">{selectedStudent.outstandingBalance}</p></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Payment History</h3>
                    <div className="space-y-2">
                      {selectedStudent.paymentHistory.map((payment, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                          <div><p className="text-sm font-semibold text-slate-700">{payment.month}</p><p className="text-xs text-slate-400">{payment.date}</p></div>
                          <div className="text-right"><p className="text-sm font-bold text-slate-700">{payment.amount}</p><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${paymentBadge[payment.status]}`}>{payment.status}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "academic" && (
                <div className="space-y-5 animate-fade-in">
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-2xl p-5 text-center border border-violet-100">
                    <p className="text-4xl font-bold text-violet-700">{selectedStudent.academic.overall}%</p>
                    <p className="text-xs text-violet-500 font-medium uppercase tracking-wider mt-1">Overall Performance</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Subject Progress</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Reading", value: selectedStudent.academic.reading, color: "bg-blue-500" },
                        { label: "Writing", value: selectedStudent.academic.writing, color: "bg-emerald-500" },
                        { label: "Mathematics", value: selectedStudent.academic.math, color: "bg-violet-500" },
                      ].map((subject) => (
                        <div key={subject.label}>
                          <div className="flex items-center justify-between mb-1.5"><span className="text-sm font-medium text-slate-600">{subject.label}</span><span className="text-sm font-bold text-slate-700">{subject.value}%</span></div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className={clsx("h-full rounded-full transition-all duration-1000", subject.color)} style={{ width: `${subject.value}%` }} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><StickyNote className="w-3.5 h-3.5" />Teacher Notes</h3>
                    <div className="space-y-2.5">
                      {selectedStudent.teacherNotes.map((note, i) => (
                        <div key={i} className="p-3 rounded-xl bg-amber-50/50 border border-amber-100/50">
                          <div className="flex items-center justify-between mb-1.5"><span className="text-xs font-semibold text-slate-700">{note.teacher}</span><span className="text-xs text-slate-400">{note.date}</span></div>
                          <p className="text-sm text-slate-600 leading-relaxed">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50">
                    <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Latest Teacher Note</p>
                    <p className="text-sm text-slate-600 italic">&ldquo;{selectedStudent.teacherNotes[0]?.content}&rdquo;</p>
                    <p className="text-xs text-slate-400 mt-2">— {selectedStudent.teacherNotes[0]?.teacher}, {selectedStudent.teacherNotes[0]?.date}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4 mt-4 border-t border-slate-100">
                <button className="flex-1 bg-blue-600 text-white text-sm font-semibold rounded-xl py-2.5 hover:bg-blue-700 transition-colors">Edit Profile</button>
                <button className="flex-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-xl py-2.5 hover:bg-slate-200 transition-colors">View Full Report</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
