"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import EnrollmentChart from "@/components/EnrollmentChart";
import AttendanceChart from "@/components/AttendanceChart";
import StudentManagement from "@/components/StudentManagement";
import TeacherCenter from "@/components/TeacherCenter";
import ParentMonitoring from "@/components/ParentMonitoring";
import BillingCenter from "@/components/BillingCenter";
import {
  GraduationCap,
  Users,
  BookOpen,
  TrendingUp,
  Bell,
  Search,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building2,
  Award,
  Calendar,
  MessageSquare,
  BarChart2,
  Megaphone,
  Settings,
} from "lucide-react";

const recentActivities = [
  { icon: GraduationCap, color: "text-blue-500 bg-blue-50", text: "12 new students enrolled", sub: "Bimba Ceria Branch · 2 minutes ago", status: "new" },
  { icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50", text: "Attendance recorded — SD Kelas 3A", sub: "94% present · Today 08:15 AM", status: "ok" },
  { icon: AlertCircle, color: "text-amber-500 bg-amber-50", text: "3 students absent without notice", sub: "TK Branch Sudirman · Requires follow-up", status: "warn" },
  { icon: CreditCardIcon, color: "text-violet-500 bg-violet-50", text: "Monthly billing processed", sub: "Rp 48.5M collected · 92% on time", status: "ok" },
  { icon: MessageSquare, color: "text-sky-500 bg-sky-50", text: "Parent meeting scheduled", sub: "23 confirmations · Tomorrow 14:00", status: "new" },
  { icon: Award, color: "text-orange-500 bg-orange-50", text: "End-term report cards ready", sub: "SD Kelas 5 & 6 · Awaiting signature", status: "ok" },
];

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

const branches = [
  { name: "Bimba Ceria Pusat", students: 312, teachers: 14, rate: 96, status: "excellent" },
  { name: "Bimba Sudirman", students: 287, teachers: 12, rate: 94, status: "good" },
  { name: "Bimba Kelapa Gading", students: 245, teachers: 10, rate: 91, status: "good" },
  { name: "Bimba BSD City", students: 221, teachers: 9, rate: 88, status: "fair" },
  { name: "Bimba Depok", students: 182, teachers: 8, rate: 93, status: "good" },
];

const statusColor: Record<string, string> = {
  excellent: "bg-emerald-100 text-emerald-700",
  good: "bg-blue-100 text-blue-700",
  fair: "bg-amber-100 text-amber-700",
};

const pageMeta: Record<string, { title: string; subtitle: string }> = {
  "Command Center": { title: "Command Center", subtitle: "Monday, 23 June 2025 · Academic Year 2024/2025" },
  "Student Management": { title: "Student Management", subtitle: "Manage student profiles, enrollment & class assignments" },
  "Teacher Center": { title: "Teacher Center", subtitle: "Manage teaching staff, schedules & performance reviews" },
  "Parent Monitoring": { title: "Parent Monitoring", subtitle: "Track parent engagement & communication history" },
  "Billing Center": { title: "Billing Center", subtitle: "Tuition fees, invoices & payment tracking" },
  "Attendance Center": { title: "Attendance Center", subtitle: "Daily attendance recording & absence reports" },
  "Report Center": { title: "Report Center", subtitle: "Academic reports, grades & progress analytics" },
  "Announcement Center": { title: "Announcement Center", subtitle: "School notices, events & parent broadcasts" },
  "Settings": { title: "Settings", subtitle: "Platform configuration & user permissions" },
};

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("Command Center");
  const meta = pageMeta[activeItem] ?? pageMeta["Command Center"];

  return (
    <div className="flex h-screen overflow-hidden edu-bg-pattern">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur border-b border-slate-200 flex-shrink-0">
          <div>
            <h1 className="text-lg font-bold text-slate-800">{meta.title}</h1>
            <p className="text-xs text-slate-500">{meta.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 w-64">
              <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search students, teachers..."
                className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full"
              />
            </div>
            {/* Notifications */}
            <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
              <Bell className="w-4.5 h-4.5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm font-bold shadow-sm">
              AD
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeItem === "Command Center" && (
            <div className="animate-fade-in">
              {/* Welcome Banner */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6] p-6 shadow-lg">
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-12 right-24 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute top-0 right-0 w-full h-full opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                        Academic Year 2024/2025
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Good Morning, Administrator! 👋
                    </h2>
                    <p className="text-blue-200 text-sm max-w-lg">
                      Today&apos;s attendance is tracking at <strong className="text-white">94.2%</strong> across all branches.
                      You have <strong className="text-white">3 urgent items</strong> requiring attention.
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <button className="bg-white text-blue-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-1.5">
                        View Reports <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="border border-white/30 text-white font-medium text-sm px-4 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        Schedule
                      </button>
                    </div>
                  </div>
                  {/* Illustration placeholder */}
                  <div className="hidden lg:flex items-center justify-center w-40 h-32">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-white/80" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400/80 flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-900" />
                      </div>
                      <div className="absolute -bottom-1 -left-3 w-7 h-7 rounded-full bg-emerald-400/80 flex items-center justify-center">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KPI Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <MetricCard
                  title="Active Students"
                  numericValue={1247}
                  change={8.4}
                  changeLabel="vs last month"
                  icon={<GraduationCap className="w-5 h-5 text-blue-600" />}
                  gradient="bg-gradient-to-br from-blue-50 to-blue-100/60 text-blue-900"
                  iconBg="bg-blue-100"
                  delay={0}
                />
                <MetricCard
                  title="Attendance Rate"
                  value="94.2"
                  unit="%"
                  change={2.1}
                  changeLabel="vs last week"
                  icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  gradient="bg-gradient-to-br from-emerald-50 to-emerald-100/60 text-emerald-900"
                  iconBg="bg-emerald-100"
                  delay={100}
                />
                <MetricCard
                  title="Active Teachers"
                  numericValue={48}
                  change={4.3}
                  changeLabel="vs last month"
                  icon={<BookOpen className="w-5 h-5 text-violet-600" />}
                  gradient="bg-gradient-to-br from-violet-50 to-violet-100/60 text-violet-900"
                  iconBg="bg-violet-100"
                  delay={200}
                />
                <MetricCard
                  title="Parent Engagement"
                  value="78.5"
                  unit="%"
                  change={5.2}
                  changeLabel="vs last month"
                  icon={<Users className="w-5 h-5 text-amber-600" />}
                  gradient="bg-gradient-to-br from-amber-50 to-amber-100/60 text-amber-900"
                  iconBg="bg-amber-100"
                  delay={300}
                />
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Branches", value: "5", icon: Building2, color: "text-slate-600" },
                  { label: "Student Growth", value: "+127", icon: TrendingUp, color: "text-emerald-600" },
                  { label: "Avg Class Size", value: "28", icon: GraduationCap, color: "text-blue-600" },
                  { label: "Teacher Rating", value: "4.8★", icon: Star, color: "text-amber-500" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                        <p className="text-xl font-bold text-slate-800">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <EnrollmentChart />
                <AttendanceChart />
              </div>

              {/* Bottom Row: Activity + Branch Performance */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">Recent Activity</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Live updates from all branches</p>
                    </div>
                    <button className="text-xs text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                      View All <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {recentActivities.map((activity, i) => {
                      const Icon = activity.icon;
                      return (
                        <div key={i} className="flex items-start gap-3 p-4 hover:bg-slate-50/50 transition-colors">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-700 leading-tight">{activity.text}</p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <p className="text-xs text-slate-400">{activity.sub}</p>
                            </div>
                          </div>
                          {activity.status === "new" && (
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full flex-shrink-0">NEW</span>
                          )}
                          {activity.status === "warn" && (
                            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full flex-shrink-0">ACTION</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Branch Performance */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">Branch Performance</h3>
                      <p className="text-xs text-slate-500 mt-0.5">This month ranking</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">5 Branches</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {branches.map((branch, i) => (
                      <div key={branch.name} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 w-4">{i + 1}</span>
                            <div>
                              <p className="text-sm font-semibold text-slate-700 leading-tight">{branch.name}</p>
                              <p className="text-xs text-slate-400">{branch.students} students · {branch.teachers} teachers</p>
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${statusColor[branch.status]}`}>
                            {branch.rate}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden ml-6">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${branch.rate}%`,
                              background: branch.rate >= 95 ? "#059669" : branch.rate >= 90 ? "#3b82f6" : "#f59e0b"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="mx-4 mb-4 p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50">
                    <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Network Summary</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-lg font-bold text-slate-800">1,247</p>
                        <p className="text-xs text-slate-500">Total Students</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-800">48</p>
                        <p className="text-xs text-slate-500">Educators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeItem === "Student Management" && <StudentManagement />}

          {activeItem === "Teacher Center" && <TeacherCenter />}

          {activeItem === "Parent Monitoring" && <ParentMonitoring />}

          {activeItem === "Billing Center" && <BillingCenter />}

          {activeItem !== "Command Center" && activeItem !== "Student Management" && activeItem !== "Teacher Center" && activeItem !== "Parent Monitoring" && activeItem !== "Billing Center" && (
            <div className="animate-fade-in flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                {activeItem === "Student Management" && <GraduationCap className="w-10 h-10 text-white" />}
                {activeItem === "Teacher Center" && <BookOpen className="w-10 h-10 text-white" />}
                {activeItem === "Parent Monitoring" && <Users className="w-10 h-10 text-white" />}
                {activeItem === "Billing Center" && <CreditCardIcon className="w-10 h-10 text-white" />}
                {activeItem === "Attendance Center" && <CheckCircle2 className="w-10 h-10 text-white" />}
                {activeItem === "Report Center" && <BarChart2 className="w-10 h-10 text-white" />}
                {activeItem === "Announcement Center" && <Megaphone className="w-10 h-10 text-white" />}
                {activeItem === "Settings" && <Settings className="w-10 h-10 text-white" />}
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">{meta.title}</h2>
              <p className="text-sm text-slate-500 text-center max-w-md mb-6">{meta.subtitle}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Module ready for configuration
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
