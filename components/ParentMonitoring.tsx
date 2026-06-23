"use client";

import { useState } from "react";
import {
  GraduationCap,
  TrendingUp,
  TrendingDown,
  Calendar,
  Award,
  Star,
  BookOpen,
  PenTool,
  Calculator,
  Music,
  Palette,
  Heart,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  CreditCard,
  MessageSquare,
  Bell,
  ChevronRight,
  Users,
  MapPin,
  Phone,
  Mail,
  Building2,
  Sparkles,
  Smile,
  Brain,
  Hand,
  Languages,
  Activity,
  StickyNote,
  ChevronDown,
  ChevronLeft,
  Download,
  FileText,
} from "lucide-react";
import clsx from "clsx";

interface SkillProgress {
  subject: string;
  icon: typeof BookOpen;
  score: number;
  prevScore: number;
  color: string;
  bgColor: string;
  description: string;
}

interface MonthlyGrade {
  month: string;
  score: number;
}

interface AttitudeMetric {
  label: string;
  icon: typeof Smile;
  score: number;
  color: string;
}

interface TeacherNote {
  date: string;
  teacher: string;
  content: string;
  category: "Academic" | "Behavior" | "Achievement";
}

interface PaymentInfo {
  month: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  dueDate: string;
}

interface AttendanceDay {
  date: string;
  status: "Present" | "Absent" | "Sick" | "Late" | "Permission";
}

interface Child {
  id: string;
  name: string;
  class: string;
  branch: string;
  program: string;
  photo: string;
  dob: string;
  age: number;
  gender: string;
  address: string;
  enrollmentDate: string;
  attendance: number;
  attendanceBreakdown: { present: number; absent: number; sick: number; late: number; permission: number };
  attendanceHistory: AttendanceDay[];
  gpa: number;
  academicScore: number;
  skills: SkillProgress[];
  monthlyGrades: MonthlyGrade[];
  attitude: AttitudeMetric[];
  teacherNotes: TeacherNote[];
  payments: PaymentInfo[];
  achievements: { title: string; date: string; icon: typeof Award }[];
}

interface ParentProfile {
  name: string;
  photo: string;
  occupation: string;
  phone: string;
  email: string;
  address: string;
  branch: string;
  children: Child[];
}

const parent: ParentProfile = {
  name: "Budi Maharani",
  photo: "",
  occupation: "Entrepreneur",
  phone: "0812-3456-7890",
  email: "budi.maharani@email.com",
  address: "Jl. Melati No. 12, Jakarta Selatan",
  branch: "Bimba Ceria Pusat",
  children: [
    {
      id: "STD-2025-001",
      name: "Aisha Putri Maharani",
      class: "TK A",
      branch: "Bimba Ceria Pusat",
      program: "Playgroup",
      photo: "",
      dob: "12 March 2020",
      age: 5,
      gender: "Female",
      address: "Jl. Melati No. 12, Jakarta Selatan",
      enrollmentDate: "15 August 2024",
      attendance: 97,
      attendanceBreakdown: { present: 92, absent: 1, sick: 2, late: 3, permission: 1 },
      attendanceHistory: [
        { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" },
        { date: "Thu, 19 Jun", status: "Late" }, { date: "Wed, 18 Jun", status: "Present" },
        { date: "Tue, 17 Jun", status: "Sick" }, { date: "Mon, 16 Jun", status: "Present" },
        { date: "Fri, 13 Jun", status: "Present" }, { date: "Thu, 12 Jun", status: "Present" },
        { date: "Wed, 11 Jun", status: "Present" }, { date: "Tue, 10 Jun", status: "Present" },
      ],
      gpa: 4.2,
      academicScore: 82,
      skills: [
        { subject: "Reading", icon: BookOpen, score: 85, prevScore: 78, color: "text-blue-600", bgColor: "bg-blue-500", description: "Membaca huruf vokal & suku kata sederhana" },
        { subject: "Writing", icon: PenTool, score: 78, prevScore: 70, color: "text-emerald-600", bgColor: "bg-emerald-500", description: "Menulis huruf & nama sendiri" },
        { subject: "Mathematics", icon: Calculator, score: 82, prevScore: 75, color: "text-violet-600", bgColor: "bg-violet-500", description: "Berhitung 1-20, pengenalan bentuk" },
        { subject: "Motor Skills", icon: Hand, score: 88, prevScore: 82, color: "text-amber-600", bgColor: "bg-amber-500", description: "Menggunting, mewarnai, menyusun balok" },
        { subject: "Social", icon: Users, score: 75, prevScore: 68, color: "text-rose-600", bgColor: "bg-rose-500", description: "Interaksi teman, berbagi, kerjasama" },
        { subject: "Language", icon: Languages, score: 80, prevScore: 72, color: "text-cyan-600", bgColor: "bg-cyan-500", description: "Kosakata, bercerita, menyimak" },
        { subject: "Music & Arts", icon: Music, score: 90, prevScore: 85, color: "text-fuchsia-600", bgColor: "bg-fuchsia-500", description: "Bernyanyi, mengikuti irama, menggambar" },
        { subject: "Independence", icon: Sparkles, score: 84, prevScore: 76, color: "text-teal-600", bgColor: "bg-teal-500", description: "Mandi, makan, rapikan mainan sendiri" },
      ],
      monthlyGrades: [
        { month: "Jan", score: 72 }, { month: "Feb", score: 75 }, { month: "Mar", score: 78 },
        { month: "Apr", score: 80 }, { month: "May", score: 81 }, { month: "Jun", score: 82 },
      ],
      attitude: [
        { label: "Discipline", icon: CheckCircle2, score: 90, color: "text-emerald-600" },
        { label: "Enthusiasm", icon: Sparkles, score: 95, color: "text-amber-600" },
        { label: "Friendliness", icon: Smile, score: 78, color: "text-rose-600" },
        { label: "Confidence", icon: Brain, score: 82, color: "text-violet-600" },
        { label: "Creativity", icon: Palette, score: 92, color: "text-fuchsia-600" },
        { label: "Responsibility", icon: Heart, score: 80, color: "text-blue-600" },
      ],
      teacherNotes: [
        { date: "20 Jun 2025", teacher: "Ms. Ratna", content: "Aisha menunjukkan kemajuan yang sangat baik dalam membaca huruf vokal. Sangat antusias di kelas dan mulai berani bertanya saat storytelling.", category: "Academic" },
        { date: "14 Jun 2025", teacher: "Ms. Ratna", content: "Mulai berani bertanya saat sesi storytelling. Perlu dorongan untuk lebih sosialisasi dengan teman baru.", category: "Behavior" },
        { date: "10 Jun 2025", teacher: "Mr. Andi", content: "Kemampuan menghitung 1-10 sudah sangat baik. Mulai diperkenalkan ke 11-20. Aisha cepat menangkap.", category: "Academic" },
        { date: "03 Jun 2025", teacher: "Ms. Ratna", content: "Aisha mendapat penghargaan 'Most Enthusiastic Student' minggu ini. Selalu semangat mengikuti semua aktivitas.", category: "Achievement" },
        { date: "28 May 2025", teacher: "Mr. Andi", content: "Kemampuan mewarnai sangat bagus. Karya Aisha dipajang di papan display kelas.", category: "Achievement" },
      ],
      payments: [
        { month: "June 2025", amount: "Rp 1,500,000", status: "Paid", dueDate: "01 Jun 2025" },
        { month: "May 2025", amount: "Rp 1,500,000", status: "Paid", dueDate: "01 May 2025" },
        { month: "April 2025", amount: "Rp 1,500,000", status: "Paid", dueDate: "03 Apr 2025" },
        { month: "July 2025", amount: "Rp 1,500,000", status: "Pending", dueDate: "01 Jul 2025" },
      ],
      achievements: [
        { title: "Most Enthusiastic Student", date: "03 Jun 2025", icon: Sparkles },
        { title: "Best Reading Progress", date: "15 May 2025", icon: BookOpen },
        { title: "Star of the Week", date: "28 Apr 2025", icon: Star },
        { title: "Art Showcase Winner", date: "10 Apr 2025", icon: Palette },
      ],
    },
    {
      id: "STD-2025-003",
      name: "Nayla Zahra Hakim",
      class: "TK B",
      branch: "Bimba Ceria Pusat",
      program: "Kindergarten",
      photo: "",
      dob: "22 January 2019",
      age: 6,
      gender: "Female",
      address: "Jl. Anggrek No. 8, Jakarta Selatan",
      enrollmentDate: "20 August 2024",
      attendance: 99,
      attendanceBreakdown: { present: 95, absent: 0, sick: 1, late: 1, permission: 0 },
      attendanceHistory: [
        { date: "Mon, 23 Jun", status: "Present" }, { date: "Fri, 20 Jun", status: "Present" },
        { date: "Thu, 19 Jun", status: "Present" }, { date: "Wed, 18 Jun", status: "Present" },
        { date: "Tue, 17 Jun", status: "Present" }, { date: "Mon, 16 Jun", status: "Sick" },
        { date: "Fri, 13 Jun", status: "Present" }, { date: "Thu, 12 Jun", status: "Present" },
        { date: "Wed, 11 Jun", status: "Present" }, { date: "Tue, 10 Jun", status: "Present" },
      ],
      gpa: 4.5,
      academicScore: 90,
      skills: [
        { subject: "Reading", icon: BookOpen, score: 92, prevScore: 85, color: "text-blue-600", bgColor: "bg-blue-500", description: "Membaca lancar, mulai membaca kalimat sederhana" },
        { subject: "Writing", icon: PenTool, score: 88, prevScore: 80, color: "text-emerald-600", bgColor: "bg-emerald-500", description: "Menulis kata & kalimat pendek" },
        { subject: "Mathematics", icon: Calculator, score: 90, prevScore: 82, color: "text-violet-600", bgColor: "bg-violet-500", description: "Penjumlahan sederhana, pengenalan waktu" },
        { subject: "Motor Skills", icon: Hand, score: 92, prevScore: 88, color: "text-amber-600", bgColor: "bg-amber-500", description: "Menulis rapi, menggunting presisi" },
        { subject: "Social", icon: Users, score: 95, prevScore: 90, color: "text-rose-600", bgColor: "bg-rose-500", description: "Suka menolong teman, pemimpin kelompok" },
        { subject: "Language", icon: Languages, score: 90, prevScore: 85, color: "text-cyan-600", bgColor: "bg-cyan-500", description: "Bercerita dengan lancar, kosakata luas" },
        { subject: "Music & Arts", icon: Music, score: 88, prevScore: 84, color: "text-fuchsia-600", bgColor: "bg-fuchsia-500", description: "Menyanyi, menari, menggambar ekspresif" },
        { subject: "Independence", icon: Sparkles, score: 95, prevScore: 90, color: "text-teal-600", bgColor: "bg-teal-500", description: "Mandiri penuh, membantu teman" },
      ],
      monthlyGrades: [
        { month: "Jan", score: 82 }, { month: "Feb", score: 85 }, { month: "Mar", score: 87 },
        { month: "Apr", score: 88 }, { month: "May", score: 89 }, { month: "Jun", score: 90 },
      ],
      attitude: [
        { label: "Discipline", icon: CheckCircle2, score: 98, color: "text-emerald-600" },
        { label: "Enthusiasm", icon: Sparkles, score: 95, color: "text-amber-600" },
        { label: "Friendliness", icon: Smile, score: 96, color: "text-rose-600" },
        { label: "Confidence", icon: Brain, score: 92, color: "text-violet-600" },
        { label: "Creativity", icon: Palette, score: 90, color: "text-fuchsia-600" },
        { label: "Responsibility", icon: Heart, score: 95, color: "text-blue-600" },
      ],
      teacherNotes: [
        { date: "21 Jun 2025", teacher: "Ms. Ratna", content: "Nayla siswa teladan. Membaca sudah lancar, sopan, dan suka menolong teman. Direkomendasikan untuk program advanced.", category: "Achievement" },
        { date: "15 Jun 2025", teacher: "Ms. Ratna", content: "Kemampuan bercerita sangat baik. Nayla bisa menceritakan kembali isi buku dengan struktur yang runtut.", category: "Academic" },
        { date: "08 Jun 2025", teacher: "Mr. Andi", content: "Mulai belajar penjumlahan sederhana. Nayla sangat cepat memahami konsep.", category: "Academic" },
      ],
      payments: [
        { month: "June 2025", amount: "Rp 1,800,000", status: "Paid", dueDate: "01 Jun 2025" },
        { month: "May 2025", amount: "Rp 1,800,000", status: "Paid", dueDate: "01 May 2025" },
        { month: "July 2025", amount: "Rp 1,800,000", status: "Pending", dueDate: "01 Jul 2025" },
      ],
      achievements: [
        { title: "Student of the Month", date: "22 Jun 2025", icon: Award },
        { title: "Best Reader TK B", date: "10 Jun 2025", icon: BookOpen },
        { title: "Math Champion", date: "01 Jun 2025", icon: Calculator },
        { title: "Perfect Attendance", date: "15 May 2025", icon: Calendar },
      ],
    },
  ],
};

const attendanceStatusStyle: Record<string, string> = {
  Present: "bg-emerald-100 text-emerald-700",
  Absent: "bg-red-100 text-red-700",
  Sick: "bg-amber-100 text-amber-700",
  Late: "bg-violet-100 text-violet-700",
  Permission: "bg-blue-100 text-blue-700",
};

const paymentStatusBadge: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-700",
};

const noteCategoryStyle: Record<string, { bg: string; text: string; label: string }> = {
  Academic: { bg: "bg-blue-50", text: "text-blue-700", label: "Academic" },
  Behavior: { bg: "bg-amber-50", text: "text-amber-700", label: "Behavior" },
  Achievement: { bg: "bg-violet-50", text: "text-violet-700", label: "Achievement" },
};

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export default function ParentMonitoring() {
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const child = parent.children[selectedChildIndex];

  const scoreChange = (current: number, prev: number) => {
    const diff = current - prev;
    if (diff > 0) return { text: `+${diff}`, positive: true };
    if (diff < 0) return { text: `${diff}`, positive: false };
    return { text: "0", positive: true };
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Parent Profile Header */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              {getInitials(parent.name)}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">{parent.name}</h2>
              <p className="text-sm text-rose-200">{parent.occupation} · Parent Account</p>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-rose-100">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{parent.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{parent.email}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-rose-100 bg-white/10 rounded-xl px-3 py-2">
              <Building2 className="w-4 h-4" />
              <span>{parent.branch}</span>
            </div>
          </div>
        </div>

        {/* Child Selector */}
        <div className="flex items-center gap-2 p-4 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">My Children</span>
          {parent.children.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setSelectedChildIndex(i)}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all",
                i === selectedChildIndex
                  ? "bg-rose-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              <div className={clsx("w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold",
                i === selectedChildIndex ? "bg-white/20 text-white" : "bg-gradient-to-br from-rose-400 to-rose-500 text-white")}>
                {getInitials(c.name)}
              </div>
              {c.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Child Profile Card + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Child Profile */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
              {getInitials(child.name)}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">{child.name}</h3>
              <p className="text-xs text-slate-400">{child.id}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">{child.class}</span>
                <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{child.program}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-slate-600"><Calendar className="w-4 h-4 text-slate-400" /><span className="text-xs text-slate-400">DOB:</span><span className="font-medium">{child.dob} ({child.age} years)</span></div>
            <div className="flex items-center gap-2 text-slate-600"><Users className="w-4 h-4 text-slate-400" /><span className="text-xs text-slate-400">Gender:</span><span className="font-medium">{child.gender}</span></div>
            <div className="flex items-center gap-2 text-slate-600"><Building2 className="w-4 h-4 text-slate-400" /><span className="text-xs text-slate-400">Branch:</span><span className="font-medium">{child.branch}</span></div>
            <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4 text-slate-400" /><span className="text-xs text-slate-400">Address:</span><span className="font-medium text-xs">{child.address}</span></div>
            <div className="flex items-center gap-2 text-slate-600"><Calendar className="w-4 h-4 text-slate-400" /><span className="text-xs text-slate-400">Enrolled:</span><span className="font-medium">{child.enrollmentDate}</span></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {/* Overall Academic */}
          <div className="bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl p-5 text-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Award className="w-5 h-5" /></div>
              <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">+{child.academicScore - 72}%</span>
            </div>
            <p className="text-3xl font-bold">{child.academicScore}%</p>
            <p className="text-xs text-violet-200 mt-0.5">Overall Academic Score</p>
          </div>

          {/* Attendance */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-5 text-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
              <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">Excellent</span>
            </div>
            <p className="text-3xl font-bold">{child.attendance}%</p>
            <p className="text-xs text-emerald-200 mt-0.5">Attendance Rate</p>
          </div>

          {/* GPA */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-5 text-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Star className="w-5 h-5" /></div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => <Star key={i} className={clsx("w-3 h-3", i < Math.round(child.gpa) ? "text-amber-200 fill-amber-200" : "text-white/30")} />)}
              </div>
            </div>
            <p className="text-3xl font-bold">{child.gpa.toFixed(1)}</p>
            <p className="text-xs text-amber-200 mt-0.5">Grade Point Average</p>
          </div>

          {/* Payment Status */}
          <div className={clsx("rounded-2xl p-5 text-white shadow-sm",
            child.payments.find((p) => p.status === "Pending") ? "bg-gradient-to-br from-red-500 to-red-600" : "bg-gradient-to-br from-blue-500 to-blue-700")}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><CreditCard className="w-5 h-5" /></div>
              <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">
                {child.payments.find((p) => p.status === "Pending") ? "Pending" : "Clear"}
              </span>
            </div>
            <p className="text-2xl font-bold">
              {child.payments.find((p) => p.status === "Pending") ? child.payments.find((p) => p.status === "Pending")!.amount : "Rp 0"}
            </p>
            <p className="text-xs mt-0.5 opacity-90">
              {child.payments.find((p) => p.status === "Pending")
                ? `Due: ${child.payments.find((p) => p.status === "Pending")!.dueDate}`
                : "No outstanding balance"}
            </p>
          </div>
        </div>
      </div>

      {/* Academic Progress - Skills Development */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2"><Activity className="w-4 h-4 text-violet-600" />Skill Development Progress</h3>
            <p className="text-xs text-slate-500 mt-0.5">Detailed tracking of {child.name.split(" ")[0]}'s learning development</p>
          </div>
          <button className="text-xs text-violet-600 font-semibold hover:text-violet-700 flex items-center gap-1">
            <Download className="w-3.5 h-3.5" /> Export Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {child.skills.map((skill) => {
            const Icon = skill.icon;
            const change = scoreChange(skill.score, skill.prevScore);
            return (
              <div key={skill.subject} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100/70 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={clsx("w-9 h-9 rounded-xl flex items-center justify-center", skill.color.replace("text-", "bg-").replace("-600", "-100"))}>
                      <Icon className={clsx("w-4.5 h-4.5", skill.color)} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{skill.subject}</p>
                      <p className="text-[10px] text-slate-400">{skill.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-800">{skill.score}%</p>
                    <span className={clsx("text-[10px] font-semibold flex items-center gap-0.5 justify-end", change.positive ? "text-emerald-600" : "text-red-500")}>
                      {change.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {change.text}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className={clsx("h-full rounded-full transition-all duration-1000", skill.bgColor)} style={{ width: `${skill.score}%` }} />
                </div>
                <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-400">
                  <span>Previous: {skill.prevScore}%</span>
                  <span>Target: 100%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly Grade Trend + Attitude */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Monthly Grade Trend */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><TrendingUp className="w-4 h-4 text-blue-600" />Monthly Academic Trend</h3>
          <p className="text-xs text-slate-500 mb-4">Score progression over 6 months</p>
          <div className="flex items-end justify-between gap-3 h-40 bg-slate-50 rounded-xl p-4">
            {child.monthlyGrades.map((mg) => (
              <div key={mg.month} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-600">{mg.score}</span>
                <div className="w-full bg-slate-100 rounded-t-md overflow-hidden flex items-end" style={{ height: "100px" }}>
                  <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md transition-all duration-1000" style={{ height: `${mg.score}%` }} />
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{mg.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between p-3 rounded-xl bg-blue-50">
            <span className="text-xs text-slate-600">6-month improvement</span>
            <span className="text-sm font-bold text-blue-600">+{child.monthlyGrades[5].score - child.monthlyGrades[0].score} points</span>
          </div>
        </div>

        {/* Attitude & Character */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><Heart className="w-4 h-4 text-rose-600" />Attitude & Character</h3>
          <p className="text-xs text-slate-500 mb-4">Behavioral assessment by teachers</p>
          <div className="grid grid-cols-2 gap-3">
            {child.attitude.map((att) => {
              const Icon = att.icon;
              return (
                <div key={att.label} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50">
                  <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", att.color.replace("text-", "bg-").replace("-600", "-100"))}>
                    <Icon className={clsx("w-4 h-4", att.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-600">{att.label}</span>
                      <span className="text-xs font-bold text-slate-700">{att.score}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className={clsx("h-full rounded-full transition-all duration-1000", att.color.replace("text-", "bg-").replace("-600", "-500"))} style={{ width: `${att.score}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Attendance Summary + Payment Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Attendance */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><Calendar className="w-4 h-4 text-emerald-600" />Attendance Summary</h3>
          <p className="text-xs text-slate-500 mb-4">Last 10 school days</p>
          <div className="grid grid-cols-5 gap-3 mb-4">
            {[
              { label: "Present", value: child.attendanceBreakdown.present, color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Absent", value: child.attendanceBreakdown.absent, color: "text-red-600", bg: "bg-red-50" },
              { label: "Sick", value: child.attendanceBreakdown.sick, color: "text-amber-600", bg: "bg-amber-50" },
              { label: "Late", value: child.attendanceBreakdown.late, color: "text-violet-600", bg: "bg-violet-50" },
              { label: "Permission", value: child.attendanceBreakdown.permission, color: "text-blue-600", bg: "bg-blue-50" },
            ].map((item) => (
              <div key={item.label} className={clsx("rounded-xl p-3 text-center", item.bg)}>
                <p className={clsx("text-xl font-bold", item.color)}>{item.value}</p>
                <p className="text-[9px] text-slate-500 font-medium mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            {child.attendanceHistory.map((day, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <span className="text-sm text-slate-600">{day.date}</span>
                <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", attendanceStatusStyle[day.status])}>{day.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Status */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><CreditCard className="w-4 h-4 text-blue-600" />Payment Status</h3>
          <p className="text-xs text-slate-500 mb-4">Tuition payment history & upcoming</p>
          <div className="space-y-2.5">
            {child.payments.map((payment, i) => (
              <div key={i} className={clsx("flex items-center justify-between p-3.5 rounded-xl border",
                payment.status === "Paid" ? "bg-emerald-50/50 border-emerald-100" :
                payment.status === "Pending" ? "bg-amber-50/50 border-amber-100" : "bg-red-50/50 border-red-100")}>
                <div>
                  <p className="text-sm font-semibold text-slate-700">{payment.month}</p>
                  <p className="text-xs text-slate-400">Due: {payment.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-700">{payment.amount}</p>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", paymentStatusBadge[payment.status])}>{payment.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 rounded-xl bg-blue-50 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <p className="text-xs text-slate-600">Next payment due <strong className="text-blue-700">01 July 2025</strong>. Please pay before due date.</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4"><Award className="w-4 h-4 text-amber-500" />Achievements & Awards</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {child.achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            return (
              <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-100/50 text-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-bold text-slate-700">{achievement.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{achievement.date}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Teacher Notes & Feedback */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><StickyNote className="w-4 h-4 text-amber-500" />Teacher Notes & Feedback</h3>
        <p className="text-xs text-slate-500 mb-4">Observations from {child.name.split(" ")[0]}'s teachers</p>
        <div className="space-y-3">
          {child.teacherNotes.map((note, i) => {
            const style = noteCategoryStyle[note.category];
            return (
              <div key={i} className={clsx("p-4 rounded-xl border", style.bg, "border-slate-100")}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/60", style.text)}>{style.label}</span>
                    <span className="text-xs font-semibold text-slate-700">{note.teacher}</span>
                  </div>
                  <span className="text-xs text-slate-400">{note.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{note.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Latest Summary Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold">Quick Development Summary</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-2xl font-bold">{child.academicScore}%</p>
            <p className="text-xs text-slate-400 mt-0.5">Academic Score</p>
            <p className="text-[10px] text-emerald-400 mt-1">↑ Improving consistently</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{child.attendance}%</p>
            <p className="text-xs text-slate-400 mt-0.5">Attendance</p>
            <p className="text-[10px] text-emerald-400 mt-1">↑ Excellent record</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{child.attitude.reduce((sum, a) => sum + a.score, 0) / child.attitude.length}%</p>
            <p className="text-xs text-slate-400 mt-0.5">Attitude Score</p>
            <p className="text-[10px] text-emerald-400 mt-1">↑ Positive behavior</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{child.achievements.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">Achievements</p>
            <p className="text-[10px] text-amber-400 mt-1">★ {child.achievements[0].title}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Latest teacher note:</strong> &ldquo;{child.teacherNotes[0].content}&rdquo;
          </p>
          <p className="text-[10px] text-slate-500 mt-1.5">— {child.teacherNotes[0].teacher}, {child.teacherNotes[0].date}</p>
        </div>
      </div>
    </div>
  );
}
