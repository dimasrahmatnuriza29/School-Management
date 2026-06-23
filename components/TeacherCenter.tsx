"use client";

import { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Plus,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  TrendingUp,
  X,
  Phone,
  Calendar,
  Award,
  Star,
  Clock,
  MapPin,
  Mail,
  Building2,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText as FilePdf,
  StickyNote,
  BarChart3,
  GraduationCap,
  Users as UsersIcon,
  CalendarCheck,
  Coffee,
  Briefcase,
} from "lucide-react";
import clsx from "clsx";

interface ScheduleSlot {
  day: string;
  time: string;
  className: string;
  branch: string;
  subject: string;
}

interface FeedbackNote {
  date: string;
  author: string;
  role: string;
  content: string;
  type: "supervisor" | "parent" | "self";
}

interface MonthlyRating {
  month: string;
  rating: number;
}

interface Teacher {
  id: string;
  name: string;
  subject: string;
  branch: string;
  classes: string[];
  status: "Active" | "Inactive" | "On Leave";
  joinDate: string;
  dob: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  qualification: string;
  certification: string;
  rating: number;
  avatarColor: string;
  schedule: ScheduleSlot[];
  monthlyRatings: MonthlyRating[];
  classPerformance: { className: string; avgScore: number; students: number }[];
  notes: FeedbackNote[];
}

const teachers: Teacher[] = [
  {
    id: "TCH-2024-001", name: "Ratna Dewi Lestari", subject: "Playgroup & Kindergarten", branch: "Bimba Ceria Pusat",
    classes: ["TK A", "TK B"], status: "Active", joinDate: "10 Aug 2022", dob: "15 Mar 1988", gender: "Female",
    address: "Jl. Melati No. 5, Jakarta Selatan", phone: "0812-1111-2222", email: "ratna.dewi@bimba.edu",
    qualification: "S1 Pendidikan Anak Usia Dini", certification: "Montessori Certified, PAUD Trainer",
    rating: 4.9, avatarColor: "from-blue-500 to-blue-600",
    schedule: [
      { day: "Mon", time: "08:00-10:00", className: "TK A", branch: "Ceria Pusat", subject: "Playgroup" },
      { day: "Mon", time: "10:30-12:00", className: "TK B", branch: "Ceria Pusat", subject: "Kindergarten" },
      { day: "Tue", time: "08:00-10:00", className: "TK A", branch: "Ceria Pusat", subject: "Playgroup" },
      { day: "Wed", time: "08:00-10:00", className: "TK B", branch: "Ceria Pusat", subject: "Kindergarten" },
      { day: "Thu", time: "10:30-12:00", className: "TK A", branch: "Ceria Pusat", subject: "Playgroup" },
      { day: "Fri", time: "08:00-10:00", className: "TK B", branch: "Ceria Pusat", subject: "Kindergarten" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.7 }, { month: "Feb", rating: 4.8 }, { month: "Mar", rating: 4.8 },
      { month: "Apr", rating: 4.9 }, { month: "May", rating: 4.9 }, { month: "Jun", rating: 4.9 },
    ],
    classPerformance: [
      { className: "TK A", avgScore: 85, students: 18 },
      { className: "TK B", avgScore: 90, students: 15 },
    ],
    notes: [
      { date: "20 Jun 2025", author: "Ms. Sari (Supervisor)", role: "supervisor", content: "Ratna sangat baik dalam mengelola kelas TK A. Anak-anak selalu antusias. Pertahankan metode storytelling.", type: "supervisor" },
      { date: "15 Jun 2025", author: "Ibu Maya (Parent)", role: "parent", content: "Anak saya suka sekali dengan Bu Ratna. Dia sabar dan kreatif. Terima kasih!", type: "parent" },
      { date: "10 Jun 2025", author: "Ratna Dewi", role: "self", content: "Minggu ini fokus pada pengenalan huruf vokal. Beberapa anak sudah bisa membaca suku kata sederhana.", type: "self" },
    ],
  },
  {
    id: "TCH-2024-002", name: "Andi Pratama Wibowo", subject: "Mathematics & Science", branch: "Bimba Sudirman",
    classes: ["SD 3", "SD 4", "SD 5"], status: "Active", joinDate: "05 Sep 2021", dob: "22 Jul 1990", gender: "Male",
    address: "Jl. Sudirman No. 12, Jakarta Pusat", phone: "0813-3333-4444", email: "andi.pratama@bimba.edu",
    qualification: "S1 Pendidikan Matematika", certification: "Cambridge Math Teacher, STEM Certified",
    rating: 4.7, avatarColor: "from-emerald-500 to-emerald-600",
    schedule: [
      { day: "Mon", time: "07:30-09:00", className: "SD 3", branch: "Sudirman", subject: "Mathematics" },
      { day: "Mon", time: "09:30-11:00", className: "SD 5", branch: "Sudirman", subject: "Science" },
      { day: "Tue", time: "07:30-09:00", className: "SD 4", branch: "Sudirman", subject: "Mathematics" },
      { day: "Wed", time: "09:30-11:00", className: "SD 3", branch: "Sudirman", subject: "Science" },
      { day: "Thu", time: "07:30-09:00", className: "SD 5", branch: "Sudirman", subject: "Mathematics" },
      { day: "Fri", time: "09:30-11:00", className: "SD 4", branch: "Sudirman", subject: "Science" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.5 }, { month: "Feb", rating: 4.6 }, { month: "Mar", rating: 4.6 },
      { month: "Apr", rating: 4.7 }, { month: "May", rating: 4.7 }, { month: "Jun", rating: 4.7 },
    ],
    classPerformance: [
      { className: "SD 3", avgScore: 88, students: 22 },
      { className: "SD 4", avgScore: 82, students: 20 },
      { className: "SD 5", avgScore: 85, students: 18 },
    ],
    notes: [
      { date: "18 Jun 2025", author: "Mr. Budi (Supervisor)", role: "supervisor", content: "Andi memiliki metode mengajar matematika yang sangat efektif. Nilai siswa SD 3 meningkat 15%.", type: "supervisor" },
      { date: "12 Jun 2025", author: "Bapak Agus (Parent)", role: "parent", content: "Anak saya jadi suka matematika setelah diajar Pak Andi. Terima kasih atas dedikasinya.", type: "parent" },
    ],
  },
  {
    id: "TCH-2024-003", name: "Dewi Sartika Putri", subject: "Language & Bahasa Indonesia", branch: "Bimba Ceria Pusat",
    classes: ["SD 1", "SD 2"], status: "Active", joinDate: "15 Aug 2023", dob: "08 Dec 1992", gender: "Female",
    address: "Jl. Anggrek No. 10, Jakarta Selatan", phone: "0815-5555-6666", email: "dewi.sartika@bimba.edu",
    qualification: "S1 Sastra Indonesia", certification: "Teaching Indonesian as Second Language",
    rating: 4.8, avatarColor: "from-violet-500 to-violet-600",
    schedule: [
      { day: "Mon", time: "10:00-11:30", className: "SD 1", branch: "Ceria Pusat", subject: "Bahasa Indonesia" },
      { day: "Tue", time: "08:00-09:30", className: "SD 2", branch: "Ceria Pusat", subject: "Bahasa Indonesia" },
      { day: "Wed", time: "10:00-11:30", className: "SD 1", branch: "Ceria Pusat", subject: "Reading" },
      { day: "Thu", time: "08:00-09:30", className: "SD 2", branch: "Ceria Pusat", subject: "Writing" },
      { day: "Fri", time: "10:00-11:30", className: "SD 1", branch: "Ceria Pusat", subject: "Bahasa Indonesia" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.6 }, { month: "Feb", rating: 4.7 }, { month: "Mar", rating: 4.7 },
      { month: "Apr", rating: 4.8 }, { month: "May", rating: 4.8 }, { month: "Jun", rating: 4.8 },
    ],
    classPerformance: [
      { className: "SD 1", avgScore: 82, students: 25 },
      { className: "SD 2", avgScore: 80, students: 23 },
    ],
    notes: [
      { date: "19 Jun 2025", author: "Ms. Sari (Supervisor)", role: "supervisor", content: "Dewi sangat detail dalam mengajar menulis. Anak-anak SD 1 menunjukkan kemajuan signifikan dalam penulisan huruf.", type: "supervisor" },
      { date: "14 Jun 2025", author: "Ibu Rini (Parent)", role: "parent", content: "Bu Dewi sabar sekali mengajar membaca. Anak saya yang tadinya malu sekarang berani baca di depan kelas.", type: "parent" },
      { date: "08 Jun 2025", author: "Dewi Sartika", role: "self", content: "Mulai introduce paragraph writing untuk SD 2. Beberapa anak sudah bisa menyusun kalimat sederhana dengan baik.", type: "self" },
    ],
  },
  {
    id: "TCH-2024-004", name: "Hendra Gunawan Saputra", subject: "Physical Education & Sports", branch: "Bimba Kelapa Gading",
    classes: ["SD 4", "SD 5", "SD 6"], status: "On Leave", joinDate: "01 Aug 2020", dob: "30 Apr 1985", gender: "Male",
    address: "Jl. Gading No. 8, Jakarta Utara", phone: "0817-7777-8888", email: "hendra.gunawan@bimba.edu",
    qualification: "S1 Olahraga", certification: "First Aid Certified, Sports Coaching License",
    rating: 4.6, avatarColor: "from-amber-500 to-amber-600",
    schedule: [
      { day: "Mon", time: "13:00-14:30", className: "SD 5", branch: "Kelapa Gading", subject: "PE" },
      { day: "Wed", time: "13:00-14:30", className: "SD 4", branch: "Kelapa Gading", subject: "PE" },
      { day: "Fri", time: "13:00-14:30", className: "SD 6", branch: "Kelapa Gading", subject: "Sports" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.5 }, { month: "Feb", rating: 4.5 }, { month: "Mar", rating: 4.6 },
      { month: "Apr", rating: 4.6 }, { month: "May", rating: 4.6 }, { month: "Jun", rating: 4.6 },
    ],
    classPerformance: [
      { className: "SD 4", avgScore: 78, students: 20 },
      { className: "SD 5", avgScore: 75, students: 18 },
      { className: "SD 6", avgScore: 80, students: 15 },
    ],
    notes: [
      { date: "22 Jun 2025", author: "Mr. Budi (Supervisor)", role: "supervisor", content: "Hendra sedang cuti sakit selama 2 minggu. Kelas PE sementara dihandle oleh substitusi.", type: "supervisor" },
      { date: "01 Jun 2025", author: "Hendra Gunawan", role: "self", content: "Persiapan sports day untuk SD 6. Fokus pada latihan lari dan bola basket.", type: "self" },
    ],
  },
  {
    id: "TCH-2024-005", name: "Tara Anjani Maharani", subject: "Arts & Creative", branch: "Bimba BSD City",
    classes: ["SD 1", "SD 2", "SD 3"], status: "Active", joinDate: "20 Aug 2023", dob: "12 Jun 1993", gender: "Female",
    address: "Jl. BSD No. 18, Tangerang Selatan", phone: "0818-2222-3333", email: "tara.anjani@bimba.edu",
    qualification: "S1 Seni Rupa", certification: "Creative Arts Teaching Certificate",
    rating: 4.9, avatarColor: "from-pink-500 to-pink-600",
    schedule: [
      { day: "Mon", time: "09:00-10:30", className: "SD 2", branch: "BSD City", subject: "Arts" },
      { day: "Tue", time: "09:00-10:30", className: "SD 1", branch: "BSD City", subject: "Drawing" },
      { day: "Thu", time: "09:00-10:30", className: "SD 3", branch: "BSD City", subject: "Creative" },
      { day: "Fri", time: "09:00-10:30", className: "SD 1", branch: "BSD City", subject: "Arts" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.8 }, { month: "Feb", rating: 4.8 }, { month: "Mar", rating: 4.9 },
      { month: "Apr", rating: 4.9 }, { month: "May", rating: 4.9 }, { month: "Jun", rating: 4.9 },
    ],
    classPerformance: [
      { className: "SD 1", avgScore: 88, students: 22 },
      { className: "SD 2", avgScore: 85, students: 20 },
      { className: "SD 3", avgScore: 87, students: 18 },
    ],
    notes: [
      { date: "21 Jun 2025", author: "Ms. Sari (Supervisor)", role: "supervisor", content: "Tara sangat kreatif. Hasil karya siswa SD 2 dipamerkan di lobi sekolah dan mendapat apresiasi orang tua.", type: "supervisor" },
      { date: "16 Jun 2025", author: "Ibu Lina (Parent)", role: "parent", content: "Anak saya jadi suka menggambar di rumah. Bu Tara sangat menginspirasi!", type: "parent" },
    ],
  },
  {
    id: "TCH-2024-006", name: "Fajar Nugroho Adi", subject: "Social Studies & Religion", branch: "Bimba Depok",
    classes: ["SD 3", "SD 4", "SD 5", "SD 6"], status: "Active", joinDate: "03 Aug 2022", dob: "25 Sep 1989", gender: "Male",
    address: "Jl. Margonda No. 15, Depok", phone: "0819-4444-5555", email: "fajar.nugroho@bimba.edu",
    qualification: "S1 Pendidikan Agama", certification: "Islamic Teaching Certificate",
    rating: 4.5, avatarColor: "from-sky-500 to-sky-600",
    schedule: [
      { day: "Mon", time: "08:00-09:30", className: "SD 4", branch: "Depok", subject: "Social Studies" },
      { day: "Tue", time: "10:00-11:30", className: "SD 5", branch: "Depok", subject: "Religion" },
      { day: "Wed", time: "08:00-09:30", className: "SD 3", branch: "Depok", subject: "Social Studies" },
      { day: "Thu", time: "10:00-11:30", className: "SD 6", branch: "Depok", subject: "Religion" },
      { day: "Fri", time: "08:00-09:30", className: "SD 5", branch: "Depok", subject: "Social Studies" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.3 }, { month: "Feb", rating: 4.4 }, { month: "Mar", rating: 4.4 },
      { month: "Apr", rating: 4.5 }, { month: "May", rating: 4.5 }, { month: "Jun", rating: 4.5 },
    ],
    classPerformance: [
      { className: "SD 3", avgScore: 80, students: 20 },
      { className: "SD 4", avgScore: 78, students: 18 },
      { className: "SD 5", avgScore: 82, students: 16 },
      { className: "SD 6", avgScore: 85, students: 14 },
    ],
    notes: [
      { date: "17 Jun 2025", author: "Mr. Budi (Supervisor)", role: "supervisor", content: "Fajar baik dalam mengajar agama. Perlu meningkatkan interaktivitas di kelas SD 4.", type: "supervisor" },
    ],
  },
  {
    id: "TCH-2024-007", name: "Rina Kusuma Astuti", subject: "English & International", branch: "Bimba Sudirman",
    classes: ["SD 2", "SD 3", "SD 4"], status: "Active", joinDate: "12 Aug 2023", dob: "18 Feb 1994", gender: "Female",
    address: "Jl. Sudirman No. 25, Jakarta Pusat", phone: "0812-6666-7777", email: "rina.kusuma@bimba.edu",
    qualification: "S1 English Education", certification: "TEFL Certified, IELTS 8.0",
    rating: 4.8, avatarColor: "from-rose-500 to-rose-600",
    schedule: [
      { day: "Mon", time: "09:30-11:00", className: "SD 3", branch: "Sudirman", subject: "English" },
      { day: "Tue", time: "09:30-11:00", className: "SD 2", branch: "Sudirman", subject: "English" },
      { day: "Wed", time: "07:30-09:00", className: "SD 4", branch: "Sudirman", subject: "English" },
      { day: "Thu", time: "09:30-11:00", className: "SD 3", branch: "Sudirman", subject: "Speaking" },
      { day: "Fri", time: "07:30-09:00", className: "SD 2", branch: "Sudirman", subject: "English" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.6 }, { month: "Feb", rating: 4.7 }, { month: "Mar", rating: 4.7 },
      { month: "Apr", rating: 4.8 }, { month: "May", rating: 4.8 }, { month: "Jun", rating: 4.8 },
    ],
    classPerformance: [
      { className: "SD 2", avgScore: 85, students: 24 },
      { className: "SD 3", avgScore: 88, students: 22 },
      { className: "SD 4", avgScore: 83, students: 20 },
    ],
    notes: [
      { date: "20 Jun 2025", author: "Mr. Budi (Supervisor)", role: "supervisor", content: "Rina excellent dalam mengajar English speaking. Siswa SD 3 sudah bisa conversation sederhana.", type: "supervisor" },
      { date: "11 Jun 2025", author: "Bapak Hendra (Parent)", role: "parent", content: "Anak saya sekarang lancar baca buku cerita bahasa Inggris. Terima kasih Bu Rina!", type: "parent" },
    ],
  },
  {
    id: "TCH-2024-008", name: "Budi Santoso Wijaya", subject: "Mathematics & Science", branch: "Bimba Kelapa Gading",
    classes: ["SD 3", "SD 6"], status: "Active", joinDate: "01 Aug 2021", dob: "10 Oct 1986", gender: "Male",
    address: "Jl. Gading No. 20, Jakarta Utara", phone: "0813-8888-9999", email: "budi.santoso@bimba.edu",
    qualification: "S1 Pendidikan Fisika", certification: "STEM Educator, Science Olympiad Trainer",
    rating: 4.7, avatarColor: "from-indigo-500 to-indigo-600",
    schedule: [
      { day: "Mon", time: "08:00-09:30", className: "SD 6", branch: "Kelapa Gading", subject: "Science" },
      { day: "Tue", time: "10:00-11:30", className: "SD 3", branch: "Kelapa Gading", subject: "Mathematics" },
      { day: "Wed", time: "08:00-09:30", className: "SD 6", branch: "Kelapa Gading", subject: "Mathematics" },
      { day: "Thu", time: "10:00-11:30", className: "SD 3", branch: "Kelapa Gading", subject: "Science" },
      { day: "Fri", time: "08:00-09:30", className: "SD 6", branch: "Kelapa Gading", subject: "Science" },
    ],
    monthlyRatings: [
      { month: "Jan", rating: 4.6 }, { month: "Feb", rating: 4.6 }, { month: "Mar", rating: 4.7 },
      { month: "Apr", rating: 4.7 }, { month: "May", rating: 4.7 }, { month: "Jun", rating: 4.7 },
    ],
    classPerformance: [
      { className: "SD 3", avgScore: 84, students: 20 },
      { className: "SD 6", avgScore: 90, students: 15 },
    ],
    notes: [
      { date: "22 Jun 2025", author: "Mr. Budi (Supervisor)", role: "supervisor", content: "Budi sangat baik mempersiapkan SD 6 untuk ujian kelulusan. Nilai rata-rata sains 90.", type: "supervisor" },
      { date: "15 Jun 2025", author: "Ibu Sinta (Parent)", role: "parent", content: "Anak saya siap ujian berkat Pak Budi. Penjelasannya sangat jelas dan sabar.", type: "parent" },
    ],
  },
];

const branchOptions = ["All Branches", "Bimba Ceria Pusat", "Bimba Sudirman", "Bimba Kelapa Gading", "Bimba BSD City", "Bimba Depok"];
const subjectOptions = ["All Subjects", "Playgroup & Kindergarten", "Mathematics & Science", "Language & Bahasa Indonesia", "Physical Education & Sports", "Arts & Creative", "Social Studies & Religion", "English & International"];
const statusOptions = ["All Status", "Active", "Inactive", "On Leave"];
const sortOptions = ["Name (A-Z)", "Name (Z-A)", "Rating (Highest)", "Join Date (Newest)"];

const statusBadge: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-amber-100 text-amber-700",
  "On Leave": "bg-blue-100 text-blue-700",
};

const noteTypeStyle: Record<string, { bg: string; text: string; label: string }> = {
  supervisor: { bg: "bg-blue-50", text: "text-blue-700", label: "Supervisor" },
  parent: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Parent" },
  self: { bg: "bg-amber-50", text: "text-amber-700", label: "Self Reflection" },
};

const subjectColors: Record<string, string> = {
  Playgroup: "bg-blue-100 text-blue-700",
  Kindergarten: "bg-violet-100 text-violet-700",
  Mathematics: "bg-emerald-100 text-emerald-700",
  Science: "bg-teal-100 text-teal-700",
  "Bahasa Indonesia": "bg-rose-100 text-rose-700",
  Reading: "bg-pink-100 text-pink-700",
  Writing: "bg-orange-100 text-orange-700",
  PE: "bg-amber-100 text-amber-700",
  Sports: "bg-orange-100 text-orange-700",
  Arts: "bg-fuchsia-100 text-fuchsia-700",
  Drawing: "bg-pink-100 text-pink-700",
  Creative: "bg-purple-100 text-purple-700",
  "Social Studies": "bg-sky-100 text-sky-700",
  Religion: "bg-cyan-100 text-cyan-700",
  English: "bg-rose-100 text-rose-700",
  Speaking: "bg-red-100 text-red-700",
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

type TabKey = "profile" | "schedule" | "performance" | "notes";

export default function TeacherCenter() {
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortBy, setSortBy] = useState("Name (A-Z)");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [showExportMenu, setShowExportMenu] = useState(false);
  const itemsPerPage = 8;

  const filtered = useMemo(() => {
    let result = teachers.filter((t) => {
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase());
      const matchBranch = branchFilter === "All Branches" || t.branch === branchFilter;
      const matchSubject = subjectFilter === "All Subjects" || t.subject === subjectFilter;
      const matchStatus = statusFilter === "All Status" || t.status === statusFilter;
      return matchSearch && matchBranch && matchSubject && matchStatus;
    });
    if (sortBy === "Name (A-Z)") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "Name (Z-A)") result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "Rating (Highest)") result = [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === "Join Date (Newest)") result = [...result].sort((a, b) => b.joinDate.localeCompare(a.joinDate));
    return result;
  }, [search, branchFilter, subjectFilter, statusFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const branchStats = useMemo(() => {
    const allStats = {
      name: "All Branches", total: teachers.length,
      active: teachers.filter((t) => t.status === "Active").length,
      onLeave: teachers.filter((t) => t.status === "On Leave").length,
      inactive: teachers.filter((t) => t.status === "Inactive").length,
    };
    const perBranch = branchOptions.slice(1).map((branch) => {
      const bt = teachers.filter((t) => t.branch === branch);
      return {
        name: branch, total: bt.length,
        active: bt.filter((t) => t.status === "Active").length,
        onLeave: bt.filter((t) => t.status === "On Leave").length,
        inactive: bt.filter((t) => t.status === "Inactive").length,
      };
    });
    return [allStats, ...perBranch];
  }, []);

  const stats = useMemo(() => {
    const pool = branchFilter === "All Branches" ? teachers : teachers.filter((t) => t.branch === branchFilter);
    const total = pool.length;
    const active = pool.filter((t) => t.status === "Active").length;
    const onLeave = pool.filter((t) => t.status === "On Leave").length;
    const avgRating = pool.length > 0 ? (pool.reduce((sum, t) => sum + t.rating, 0) / pool.length).toFixed(1) : "0";
    return [
      { label: "Total Teachers", value: total.toString(), change: "+4.3%", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-100" },
      { label: "Active Today", value: active.toString(), change: "+2.1%", icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-100" },
      { label: "On Leave", value: onLeave.toString(), change: onLeave > 0 ? "-1" : "0", icon: Coffee, color: "text-amber-600", bg: "bg-amber-100" },
      { label: "Avg Rating", value: `${avgRating}★`, change: "+0.1", icon: Star, color: "text-violet-600", bg: "bg-violet-100" },
    ];
  }, [branchFilter]);

  const openProfile = (teacher: Teacher) => { setSelectedTeacher(teacher); setActiveTab("profile"); };

  const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
    { key: "profile", label: "Profile", icon: BookOpen },
    { key: "schedule", label: "Schedule", icon: CalendarCheck },
    { key: "performance", label: "Performance", icon: BarChart3 },
    { key: "notes", label: "Feedback", icon: StickyNote },
  ];

  const today = "Mon";

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
                  {bs.onLeave > 0 && <span className="text-blue-600 font-medium">{bs.onLeave} Leave</span>}
                  {bs.inactive > 0 && <span className="text-amber-600 font-medium">{bs.inactive} Off</span>}
                </div>
              </button>
            );
          })}
        </div>
        {branchFilter !== "All Branches" && (
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 bg-blue-50 rounded-lg px-3 py-2">
            <Building2 className="w-3.5 h-3.5 text-blue-500" />
            <span>Filtering by: <strong className="text-blue-700">{branchFilter}</strong> — showing {filtered.length} teachers</span>
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mb-4">
        <div className="flex flex-col lg:flex-row gap-3 p-4">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 flex-1">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} placeholder="Search by teacher name or ID..." className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full" />
            {search && <button onClick={() => setSearch("")} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>}
          </div>
          <div className="flex gap-2 flex-wrap">
            <select value={branchFilter} onChange={(e) => { setBranchFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{branchOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
            <select value={subjectFilter} onChange={(e) => { setSubjectFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors border-0">{subjectOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
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
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Teacher Profile</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Schedule Report</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FilePdf className="w-4 h-4 text-red-500" /> Performance Report</button>
                  <div className="border-t border-slate-100 my-1" />
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FileSpreadsheet className="w-4 h-4 text-emerald-500" /> Excel</button>
                  <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><Printer className="w-4 h-4 text-slate-500" /> Print</button>
                </div>
              )}
            </div>
            <button className="flex items-center gap-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-3 py-2 transition-colors shadow-sm"><Plus className="w-4 h-4" /><span className="hidden sm:inline">Add Teacher</span></button>
          </div>
        </div>
        <div className="px-4 pb-3 flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong className="text-slate-700">{paginated.length}</strong> of <strong className="text-slate-700">{filtered.length}</strong> teachers{filtered.length !== teachers.length && ` (filtered from ${teachers.length})`}</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Teacher</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Subject</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Branch</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden xl:table-cell">Classes</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Rating</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paginated.map((teacher) => (
                <tr key={teacher.id} onClick={() => openProfile(teacher)} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${teacher.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{getInitials(teacher.name)}</div>
                      <div className="min-w-0"><p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors truncate">{teacher.name}</p><p className="text-xs text-slate-400">{teacher.id}</p></div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell"><p className="text-sm font-medium text-slate-600 truncate max-w-[160px]">{teacher.subject}</p></td>
                  <td className="px-5 py-3.5 hidden lg:table-cell"><p className="text-sm text-slate-600 truncate max-w-[120px]">{teacher.branch.replace("Bimba ", "")}</p></td>
                  <td className="px-5 py-3.5 hidden xl:table-cell"><div className="flex flex-wrap gap-1">{teacher.classes.slice(0, 3).map((c) => <span key={c} className="text-[10px] font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full">{c}</span>)}</div></td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-slate-700">{teacher.rating.toFixed(1)}</span>
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                  </td>
                  <td className="px-5 py-3.5"><span className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusBadge[teacher.status]}`}>{teacher.status}</span></td>
                  <td className="px-5 py-3.5"><button onClick={(e) => { e.stopPropagation(); openProfile(teacher); }} className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><MoreVertical className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4"><Search className="w-8 h-8 text-slate-300" /></div>
            <p className="text-sm font-semibold text-slate-600">No teachers found</p>
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
      {selectedTeacher && (
        <>
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 animate-fade-in" onClick={() => setSelectedTeacher(null)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-violet-600 to-violet-800 p-6 sticky top-0 z-10">
              <button onClick={() => setSelectedTeacher(null)} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"><X className="w-4 h-4" /></button>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedTeacher.avatarColor} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>{getInitials(selectedTeacher.name)}</div>
                <div>
                  <h2 className="text-lg font-bold text-white">{selectedTeacher.name}</h2>
                  <p className="text-sm text-violet-200">{selectedTeacher.id}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusBadge[selectedTeacher.status]}`}>{selectedTeacher.status}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">{selectedTeacher.subject}</span>
                  </div>
                </div>
              </div>
              {/* Quick Summary */}
              <div className="grid grid-cols-4 gap-2 mt-5">
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedTeacher.rating.toFixed(1)}★</p><p className="text-[9px] text-violet-200 uppercase tracking-wider">Rating</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedTeacher.schedule.filter((s) => s.day === today).length}</p><p className="text-[9px] text-violet-200 uppercase tracking-wider">Today</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedTeacher.classes.length}</p><p className="text-[9px] text-violet-200 uppercase tracking-wider">Classes</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-[10px] font-bold text-white leading-tight truncate">{selectedTeacher.branch.replace("Bimba ", "")}</p><p className="text-[9px] text-violet-200 uppercase tracking-wider">Branch</p></div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 sticky top-[176px] bg-white z-10">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={clsx("flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors relative", activeTab === tab.key ? "text-violet-600" : "text-slate-400 hover:text-slate-600")}>
                    <Icon className="w-4 h-4" />{tab.label}
                    {activeTab === tab.key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-t-full" />}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* PROFILE TAB */}
              {activeTab === "profile" && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Teacher Information</h3>
                    <div className="space-y-2.5">
                      {[
                        { icon: GraduationCap, label: "Teacher ID", value: selectedTeacher.id },
                        { icon: UsersIcon, label: "Gender", value: selectedTeacher.gender },
                        { icon: Calendar, label: "Date of Birth", value: selectedTeacher.dob },
                        { icon: BookOpen, label: "Subject", value: selectedTeacher.subject },
                        { icon: Building2, label: "Branch", value: selectedTeacher.branch },
                        { icon: Calendar, label: "Join Date", value: selectedTeacher.joinDate },
                        { icon: MapPin, label: "Address", value: selectedTeacher.address },
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
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Qualification & Certification</h3>
                    <div className="space-y-2.5">
                      {[
                        { icon: Briefcase, label: "Qualification", value: selectedTeacher.qualification },
                        { icon: Award, label: "Certification", value: selectedTeacher.certification },
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
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact Information</h3>
                    <div className="space-y-2.5">
                      {[
                        { icon: Phone, label: "Phone", value: selectedTeacher.phone },
                        { icon: Mail, label: "Email", value: selectedTeacher.email },
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
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Classes Teaching</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.classes.map((c) => (
                        <span key={c} className="text-xs font-semibold text-violet-700 bg-violet-100 px-3 py-1.5 rounded-xl">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SCHEDULE TAB */}
              {activeTab === "schedule" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-2xl p-4 border border-violet-100">
                    <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">Today&apos;s Classes ({today})</p>
                    {selectedTeacher.schedule.filter((s) => s.day === today).length > 0 ? (
                      <div className="space-y-2 mt-2">
                        {selectedTeacher.schedule.filter((s) => s.day === today).map((slot, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-violet-600" /></div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-slate-700">{slot.className} · {slot.subject}</p>
                              <p className="text-xs text-slate-400">{slot.time}</p>
                            </div>
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${subjectColors[slot.subject] || "bg-slate-100 text-slate-600"}`}>{slot.subject}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 mt-2">No classes scheduled today.</p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Weekly Schedule</h3>
                    <div className="space-y-2">
                      {days.map((day) => {
                        const daySlots = selectedTeacher.schedule.filter((s) => s.day === day);
                        return (
                          <div key={day} className="flex items-start gap-3">
                            <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold", day === today ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-500")}>{day}</div>
                            <div className="flex-1 space-y-1.5">
                              {daySlots.length > 0 ? daySlots.map((slot, i) => (
                                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                                  <span className="text-xs text-slate-400 font-medium w-20">{slot.time}</span>
                                  <span className="text-sm font-medium text-slate-700">{slot.className}</span>
                                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${subjectColors[slot.subject] || "bg-slate-100 text-slate-600"}`}>{slot.subject}</span>
                                </div>
                              )) : <p className="text-xs text-slate-400 py-2">Free day</p>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* PERFORMANCE TAB */}
              {activeTab === "performance" && (
                <div className="space-y-5 animate-fade-in">
                  {/* Overall Rating */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-5 text-center border border-amber-100">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className={clsx("w-5 h-5", i < Math.round(selectedTeacher.rating) ? "text-amber-400 fill-amber-400" : "text-slate-200")} />
                      ))}
                    </div>
                    <p className="text-3xl font-bold text-amber-700">{selectedTeacher.rating.toFixed(1)}</p>
                    <p className="text-xs text-amber-500 font-medium uppercase tracking-wider mt-1">Overall Teaching Rating</p>
                  </div>

                  {/* Monthly Rating Trend */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Monthly Rating Trend</h3>
                    <div className="flex items-end justify-between gap-2 h-32 bg-slate-50 rounded-xl p-3">
                      {selectedTeacher.monthlyRatings.map((mr) => (
                        <div key={mr.month} className="flex-1 flex flex-col items-center gap-1">
                          <span className="text-[10px] font-bold text-slate-600">{mr.rating}</span>
                          <div className="w-full bg-slate-100 rounded-t-md overflow-hidden flex items-end" style={{ height: "70px" }}>
                            <div className="w-full bg-gradient-to-t from-violet-500 to-violet-400 rounded-t-md transition-all duration-700" style={{ height: `${(mr.rating / 5) * 100}%` }} />
                          </div>
                          <span className="text-[10px] text-slate-400">{mr.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Class Performance */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Class Performance (Avg Student Score)</h3>
                    <div className="space-y-3">
                      {selectedTeacher.classPerformance.map((cp) => (
                        <div key={cp.className}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-slate-600">{cp.className}</span>
                              <span className="text-[10px] text-slate-400">{cp.students} students</span>
                            </div>
                            <span className="text-sm font-bold text-slate-700">{cp.avgScore}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={clsx("h-full rounded-full transition-all duration-1000", cp.avgScore >= 85 ? "bg-emerald-500" : cp.avgScore >= 80 ? "bg-blue-500" : "bg-amber-500")} style={{ width: `${cp.avgScore}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* NOTES TAB */}
              {activeTab === "notes" && (
                <div className="space-y-3 animate-fade-in">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Notes & Feedback</h3>
                  {selectedTeacher.notes.map((note, i) => {
                    const style = noteTypeStyle[note.type];
                    return (
                      <div key={i} className={`p-3.5 rounded-xl border ${style.bg} border-slate-100`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${style.text} bg-white/60`}>{style.label}</span>
                            <span className="text-xs font-semibold text-slate-700">{note.author}</span>
                          </div>
                          <span className="text-xs text-slate-400">{note.date}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{note.content}</p>
                      </div>
                    );
                  })}
                  {/* Latest Note Quick Summary */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50">
                    <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Latest Feedback</p>
                    <p className="text-sm text-slate-600 italic">&ldquo;{selectedTeacher.notes[0]?.content}&rdquo;</p>
                    <p className="text-xs text-slate-400 mt-2">— {selectedTeacher.notes[0]?.author}, {selectedTeacher.notes[0]?.date}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4 mt-4 border-t border-slate-100">
                <button className="flex-1 bg-violet-600 text-white text-sm font-semibold rounded-xl py-2.5 hover:bg-violet-700 transition-colors">Edit Profile</button>
                <button className="flex-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-xl py-2.5 hover:bg-slate-200 transition-colors">View Full Report</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
