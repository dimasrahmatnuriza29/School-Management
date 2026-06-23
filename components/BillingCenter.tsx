"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Receipt,
  FileText,
  Printer,
  FileSpreadsheet,
  Building2,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Shirt,
  Trophy,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  BarChart3,
  Send,
  Eye,
  Sparkles,
  Filter,
} from "lucide-react";
import clsx from "clsx";

interface Invoice {
  id: string;
  studentName: string;
  studentId: string;
  branch: string;
  class: string;
  type: "SPP" | "Uang Buku" | "Uang Kegiatan" | "Uang Seragam" | "Biaya Lainnya";
  amount: number;
  amountFormatted: string;
  dueDate: string;
  issueDate: string;
  status: "Paid" | "Pending" | "Overdue" | "Partial";
  paidAmount?: number;
  paidDate?: string;
  method?: "Transfer" | "Cash" | "QRIS" | "Credit Card";
}

const invoices: Invoice[] = [
  { id: "INV-2025-001", studentName: "Aisha Putri Maharani", studentId: "STD-2025-001", branch: "Bimba Ceria Pusat", class: "TK A", type: "SPP", amount: 1500000, amountFormatted: "Rp 1.500.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 1500000, paidDate: "28 May 2025", method: "Transfer" },
  { id: "INV-2025-002", studentName: "Aisha Putri Maharani", studentId: "STD-2025-001", branch: "Bimba Ceria Pusat", class: "TK A", type: "Uang Buku", amount: 350000, amountFormatted: "Rp 350.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 350000, paidDate: "28 May 2025", method: "Transfer" },
  { id: "INV-2025-003", studentName: "Raka Pratama Wijaya", studentId: "STD-2025-002", branch: "Bimba Sudirman", class: "SD 3", type: "SPP", amount: 2000000, amountFormatted: "Rp 2.000.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 2000000, paidDate: "30 May 2025", method: "QRIS" },
  { id: "INV-2025-004", studentName: "Nayla Zahra Hakim", studentId: "STD-2025-003", branch: "Bimba Ceria Pusat", class: "TK B", type: "SPP", amount: 1800000, amountFormatted: "Rp 1.800.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 1800000, paidDate: "27 May 2025", method: "Transfer" },
  { id: "INV-2025-005", studentName: "Nayla Zahra Hakim", studentId: "STD-2025-003", branch: "Bimba Ceria Pusat", class: "TK B", type: "Uang Kegiatan", amount: 500000, amountFormatted: "Rp 500.000", dueDate: "10 Jun 2025", issueDate: "01 Jun 2025", status: "Paid", paidAmount: 500000, paidDate: "05 Jun 2025", method: "Cash" },
  { id: "INV-2025-006", studentName: "Arvin Kusuma Dewa", studentId: "STD-2025-004", branch: "Bimba Kelapa Gading", class: "SD 5", type: "SPP", amount: 2200000, amountFormatted: "Rp 2.200.000", dueDate: "01 May 2025", issueDate: "25 Apr 2025", status: "Overdue" },
  { id: "INV-2025-007", studentName: "Arvin Kusuma Dewa", studentId: "STD-2025-004", branch: "Bimba Kelapa Gading", class: "SD 5", type: "Uang Seragam", amount: 750000, amountFormatted: "Rp 750.000", dueDate: "15 Jun 2025", issueDate: "01 Jun 2025", status: "Overdue" },
  { id: "INV-2025-008", studentName: "Kayla Azzahra Putri", studentId: "STD-2025-005", branch: "Bimba BSD City", class: "SD 1", type: "SPP", amount: 1800000, amountFormatted: "Rp 1.800.000", dueDate: "01 Jul 2025", issueDate: "25 Jun 2025", status: "Pending" },
  { id: "INV-2025-009", studentName: "Zidane Maulana Akbar", studentId: "STD-2025-006", branch: "Bimba Depok", class: "SD 4", type: "SPP", amount: 2000000, amountFormatted: "Rp 2.000.000", dueDate: "01 May 2025", issueDate: "25 Apr 2025", status: "Overdue" },
  { id: "INV-2025-010", studentName: "Zidane Maulana Akbar", studentId: "STD-2025-006", branch: "Bimba Depok", class: "SD 4", type: "SPP", amount: 2000000, amountFormatted: "Rp 2.000.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Overdue" },
  { id: "INV-2025-011", studentName: "Alyssa Safira Indah", studentId: "STD-2025-007", branch: "Bimba Sudirman", class: "TK A", type: "SPP", amount: 1500000, amountFormatted: "Rp 1.500.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 1500000, paidDate: "29 May 2025", method: "Transfer" },
  { id: "INV-2025-012", studentName: "Bagas Wibisono", studentId: "STD-2025-008", branch: "Bimba Ceria Pusat", class: "SD 2", type: "SPP", amount: 1800000, amountFormatted: "Rp 1.800.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 1800000, paidDate: "31 May 2025", method: "QRIS" },
  { id: "INV-2025-013", studentName: "Cinta Dewi Anggraini", studentId: "STD-2025-009", branch: "Bimba Kelapa Gading", class: "SD 6", type: "SPP", amount: 2200000, amountFormatted: "Rp 2.200.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 2200000, paidDate: "26 May 2025", method: "Transfer" },
  { id: "INV-2025-014", studentName: "Cinta Dewi Anggraini", studentId: "STD-2025-009", branch: "Bimba Kelapa Gading", class: "SD 6", type: "Uang Kegiatan", amount: 800000, amountFormatted: "Rp 800.000", dueDate: "15 Jun 2025", issueDate: "01 Jun 2025", status: "Paid", paidAmount: 800000, paidDate: "10 Jun 2025", method: "Cash" },
  { id: "INV-2025-015", studentName: "Damar Sapta Utama", studentId: "STD-2025-010", branch: "Bimba BSD City", class: "SD 3", type: "SPP", amount: 2000000, amountFormatted: "Rp 2.000.000", dueDate: "01 Jul 2025", issueDate: "25 Jun 2025", status: "Pending" },
  { id: "INV-2025-016", studentName: "Elya Khaerunnisa", studentId: "STD-2025-011", branch: "Bimba Depok", class: "TK B", type: "SPP", amount: 1700000, amountFormatted: "Rp 1.700.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 1700000, paidDate: "28 May 2025", method: "Transfer" },
  { id: "INV-2025-017", studentName: "Fauzan Aditya Rahman", studentId: "STD-2025-012", branch: "Bimba Sudirman", class: "SD 5", type: "SPP", amount: 2000000, amountFormatted: "Rp 2.000.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 2000000, paidDate: "27 May 2025", method: "Transfer" },
  { id: "INV-2025-018", studentName: "Fauzan Aditya Rahman", studentId: "STD-2025-012", branch: "Bimba Sudirman", class: "SD 5", type: "Uang Buku", amount: 450000, amountFormatted: "Rp 450.000", dueDate: "01 Jun 2025", issueDate: "25 May 2025", status: "Paid", paidAmount: 450000, paidDate: "27 May 2025", method: "Transfer" },
  { id: "INV-2025-019", studentName: "Aisha Putri Maharani", studentId: "STD-2025-001", branch: "Bimba Ceria Pusat", class: "TK A", type: "SPP", amount: 1500000, amountFormatted: "Rp 1.500.000", dueDate: "01 Jul 2025", issueDate: "25 Jun 2025", status: "Pending" },
  { id: "INV-2025-020", studentName: "Raka Pratama Wijaya", studentId: "STD-2025-002", branch: "Bimba Sudirman", class: "SD 3", type: "Uang Seragam", amount: 650000, amountFormatted: "Rp 650.000", dueDate: "10 Jul 2025", issueDate: "25 Jun 2025", status: "Pending" },
  { id: "INV-2025-021", studentName: "Nayla Zahra Hakim", studentId: "STD-2025-003", branch: "Bimba Ceria Pusat", class: "TK B", type: "SPP", amount: 1800000, amountFormatted: "Rp 1.800.000", dueDate: "01 Jul 2025", issueDate: "25 Jun 2025", status: "Pending" },
  { id: "INV-2025-022", studentName: "Bagas Wibisono", studentId: "STD-2025-008", branch: "Bimba Ceria Pusat", class: "SD 2", type: "Biaya Lainnya", amount: 300000, amountFormatted: "Rp 300.000", dueDate: "20 Jun 2025", issueDate: "10 Jun 2025", status: "Partial", paidAmount: 150000, paidDate: "15 Jun 2025", method: "Cash" },
  { id: "INV-2025-023", studentName: "Kayla Azzahra Putri", studentId: "STD-2025-005", branch: "Bimba BSD City", class: "SD 1", type: "Uang Kegiatan", amount: 400000, amountFormatted: "Rp 400.000", dueDate: "15 Jun 2025", issueDate: "01 Jun 2025", status: "Paid", paidAmount: 400000, paidDate: "12 Jun 2025", method: "QRIS" },
  { id: "INV-2025-024", studentName: "Elya Khaerunnisa", studentId: "STD-2025-011", branch: "Bimba Depok", class: "TK B", type: "Uang Buku", amount: 300000, amountFormatted: "Rp 300.000", dueDate: "01 Jul 2025", issueDate: "25 Jun 2025", status: "Pending" },
];

const branchOptions = ["All Branches", "Bimba Ceria Pusat", "Bimba Sudirman", "Bimba Kelapa Gading", "Bimba BSD City", "Bimba Depok"];
const statusOptions = ["All Status", "Paid", "Pending", "Overdue", "Partial"];
const typeOptions = ["All Types", "SPP", "Uang Buku", "Uang Kegiatan", "Uang Seragam", "Biaya Lainnya"];
const sortOptions = ["Due Date (Nearest)", "Amount (Highest)", "Amount (Lowest)", "Student (A-Z)"];

const statusBadge: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-700",
  Partial: "bg-blue-100 text-blue-700",
};

const typeIcon: Record<string, typeof BookOpen> = {
  "SPP": Wallet,
  "Uang Buku": BookOpen,
  "Uang Kegiatan": Trophy,
  "Uang Seragam": Shirt,
  "Biaya Lainnya": Package,
};

const typeColor: Record<string, string> = {
  "SPP": "bg-blue-100 text-blue-600",
  "Uang Buku": "bg-violet-100 text-violet-600",
  "Uang Kegiatan": "bg-amber-100 text-amber-600",
  "Uang Seragam": "bg-rose-100 text-rose-600",
  "Biaya Lainnya": "bg-teal-100 text-teal-600",
};

const formatRupiah = (val: number) => `Rp ${val.toLocaleString("id-ID")}`;

type TabKey = "dashboard" | "invoices" | "payments" | "outstanding" | "branch_revenue" | "reports";

const tabs: { key: TabKey; label: string; icon: typeof Wallet }[] = [
  { key: "dashboard", label: "Dashboard", icon: BarChart3 },
  { key: "invoices", label: "Invoices", icon: FileText },
  { key: "payments", label: "Payments", icon: CheckCircle2 },
  { key: "outstanding", label: "Outstanding", icon: AlertCircle },
  { key: "branch_revenue", label: "Branch Revenue", icon: Building2 },
  { key: "reports", label: "Reports", icon: Receipt },
];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export default function BillingCenter() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [sortBy, setSortBy] = useState("Due Date (Nearest)");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const itemsPerPage = 8;

  const filtered = useMemo(() => {
    let result = invoices.filter((inv) => {
      const matchSearch = inv.studentName.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase()) || inv.studentId.toLowerCase().includes(search.toLowerCase());
      const matchBranch = branchFilter === "All Branches" || inv.branch === branchFilter;
      const matchStatus = statusFilter === "All Status" || inv.status === statusFilter;
      const matchType = typeFilter === "All Types" || inv.type === typeFilter;
      return matchSearch && matchBranch && matchStatus && matchType;
    });
    if (sortBy === "Due Date (Nearest)") result = [...result].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    if (sortBy === "Amount (Highest)") result = [...result].sort((a, b) => b.amount - a.amount);
    if (sortBy === "Amount (Lowest)") result = [...result].sort((a, b) => a.amount - b.amount);
    if (sortBy === "Student (A-Z)") result = [...result].sort((a, b) => a.studentName.localeCompare(b.studentName));
    return result;
  }, [search, branchFilter, statusFilter, typeFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const stats = useMemo(() => {
    const pool = branchFilter === "All Branches" ? invoices : invoices.filter((i) => i.branch === branchFilter);
    const totalRevenue = pool.filter((i) => i.status === "Paid").reduce((sum, i) => sum + (i.paidAmount || 0), 0);
    const outstanding = pool.filter((i) => i.status === "Pending" || i.status === "Overdue" || i.status === "Partial").reduce((sum, i) => sum + (i.amount - (i.paidAmount || 0)), 0);
    const paidCount = pool.filter((i) => i.status === "Paid").length;
    const overdueCount = new Set(pool.filter((i) => i.status === "Overdue").map((i) => i.studentId)).size;
    return { totalRevenue, outstanding, paidCount, overdueCount };
  }, [branchFilter]);

  const branchRevenue = useMemo(() => {
    return branchOptions.slice(1).map((branch) => {
      const branchInvs = invoices.filter((i) => i.branch === branch);
      const revenue = branchInvs.filter((i) => i.status === "Paid").reduce((sum, i) => sum + (i.paidAmount || 0), 0);
      const outstanding = branchInvs.filter((i) => i.status !== "Paid").reduce((sum, i) => sum + (i.amount - (i.paidAmount || 0)), 0);
      const paidCount = branchInvs.filter((i) => i.status === "Paid").length;
      const totalCount = new Set(branchInvs.map((i) => i.studentId)).size;
      return { branch, revenue, outstanding, paidCount, totalCount };
    }).sort((a, b) => b.revenue - a.revenue);
  }, []);

  const outstandingList = useMemo(() => {
    const pool = branchFilter === "All Branches" ? invoices : invoices.filter((i) => i.branch === branchFilter);
    const overdue = pool.filter((i) => i.status === "Overdue" || i.status === "Partial" || i.status === "Pending");
    const byStudent = new Map<string, { studentName: string; studentId: string; branch: string; class: string; totalOutstanding: number; invoiceCount: number; oldestDue: string }>();
    overdue.forEach((inv) => {
      const existing = byStudent.get(inv.studentId);
      const remaining = inv.amount - (inv.paidAmount || 0);
      if (existing) {
        existing.totalOutstanding += remaining;
        existing.invoiceCount += 1;
        if (inv.dueDate < existing.oldestDue) existing.oldestDue = inv.dueDate;
      } else {
        byStudent.set(inv.studentId, { studentName: inv.studentName, studentId: inv.studentId, branch: inv.branch, class: inv.class, totalOutstanding: remaining, invoiceCount: 1, oldestDue: inv.dueDate });
      }
    });
    return Array.from(byStudent.values()).sort((a, b) => b.totalOutstanding - a.totalOutstanding);
  }, [branchFilter]);

  const paymentList = useMemo(() => {
    return invoices.filter((i) => i.status === "Paid" || i.status === "Partial");
  }, []);

  const revenueTrend = [
    { month: "Jan", revenue: 380, outstanding: 45 },
    { month: "Feb", revenue: 395, outstanding: 38 },
    { month: "Mar", revenue: 410, outstanding: 35 },
    { month: "Apr", revenue: 405, outstanding: 40 },
    { month: "May", revenue: 420, outstanding: 32 },
    { month: "Jun", revenue: 425, outstanding: 28 },
  ];

  const collectionRate = [
    { month: "Jan", rate: 89 }, { month: "Feb", rate: 91 }, { month: "Mar", rate: 92 },
    { month: "Apr", rate: 91 }, { month: "May", rate: 93 }, { month: "Jun", rate: 94 },
  ];

  const statusDistribution = useMemo(() => {
    const pool = branchFilter === "All Branches" ? invoices : invoices.filter((i) => i.branch === branchFilter);
    return [
      { label: "Paid", count: pool.filter((i) => i.status === "Paid").length, color: "#059669", pct: 0 },
      { label: "Pending", count: pool.filter((i) => i.status === "Pending").length, color: "#f59e0b", pct: 0 },
      { label: "Overdue", count: pool.filter((i) => i.status === "Overdue").length, color: "#ef4444", pct: 0 },
      { label: "Partial", count: pool.filter((i) => i.status === "Partial").length, color: "#3b82f6", pct: 0 },
    ].map((s) => ({ ...s, pct: pool.length > 0 ? Math.round((s.count / pool.length) * 100) : 0 }));
  }, [branchFilter]);

  const maxRevenue = Math.max(...revenueTrend.map((d) => d.revenue));
  const totalRevForChart = revenueTrend.reduce((sum, d) => sum + d.revenue, 0);

  return (
    <div className="animate-fade-in space-y-5">
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-1.5 flex items-center gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button key={tab.key} onClick={() => { setActiveTab(tab.key); setCurrentPage(1); }}
              className={clsx("flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.key ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700")}>
              <Icon className="w-4 h-4" />{tab.label}
            </button>
          );
        })}
      </div>

      {/* ============ DASHBOARD TAB ============ */}
      {activeTab === "dashboard" && (
        <div className="space-y-5 animate-fade-in">
          {/* Branch Filter for Dashboard */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Filter:</span>
            {branchOptions.map((b) => (
              <button key={b} onClick={() => setBranchFilter(b)}
                className={clsx("text-xs font-semibold px-3 py-1.5 rounded-lg transition-all",
                  branchFilter === b ? "bg-blue-600 text-white" : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300")}>
                {b === "All Branches" ? "All Branches" : b.replace("Bimba ", "")}
              </button>
            ))}
          </div>

          {/* Financial Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Wallet className="w-5 h-5" /></div>
                <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-0.5"><TrendingUp className="w-3 h-3" />+12.5%</span>
              </div>
              <p className="text-2xl font-bold">{formatRupiah(stats.totalRevenue)}</p>
              <p className="text-xs text-emerald-200 mt-0.5">Total Revenue (Paid)</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><AlertCircle className="w-5 h-5" /></div>
                <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-0.5"><TrendingDown className="w-3 h-3" />-8.2%</span>
              </div>
              <p className="text-2xl font-bold">{formatRupiah(stats.outstanding)}</p>
              <p className="text-xs text-red-200 mt-0.5">Outstanding Payments</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">{stats.paidCount} invoices</span>
              </div>
              <p className="text-2xl font-bold">{stats.paidCount}</p>
              <p className="text-xs text-blue-200 mt-0.5">Paid This Month</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Users className="w-5 h-5" /></div>
                <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">Needs attention</span>
              </div>
              <p className="text-2xl font-bold">{stats.overdueCount}</p>
              <p className="text-xs text-amber-200 mt-0.5">Overdue Students</p>
            </div>
          </div>

          {/* Revenue Trend + Collection Rate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-600" />Revenue Trend</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Monthly revenue (in millions Rp)</p>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Total: Rp {totalRevForChart}M</span>
              </div>
              <div className="flex items-end justify-between gap-3 h-44 bg-slate-50 rounded-xl p-4">
                {revenueTrend.map((d) => (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-600">{d.revenue}M</span>
                    <div className="w-full bg-slate-100 rounded-t-md overflow-hidden flex items-end" style={{ height: "110px" }}>
                      <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md transition-all duration-1000" style={{ height: `${(d.revenue / maxRevenue) * 100}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{d.month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-blue-600" />Collection Rate</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Percentage of invoices paid on time</p>
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Avg: 91.7%</span>
              </div>
              <div className="flex items-end justify-between gap-3 h-44 bg-slate-50 rounded-xl p-4">
                {collectionRate.map((d) => (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-600">{d.rate}%</span>
                    <div className="w-full bg-slate-100 rounded-t-md overflow-hidden flex items-end" style={{ height: "110px" }}>
                      <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md transition-all duration-1000" style={{ height: `${d.rate}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{d.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outstanding Trend + Status Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><TrendingDown className="w-4 h-4 text-red-500" />Outstanding Trend</h3>
              <p className="text-xs text-slate-500 mb-4">Outstanding payments per month (in millions Rp)</p>
              <div className="flex items-end justify-between gap-3 h-40 bg-slate-50 rounded-xl p-4">
                {revenueTrend.map((d) => (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-600">{d.outstanding}M</span>
                    <div className="w-full bg-slate-100 rounded-t-md overflow-hidden flex items-end" style={{ height: "100px" }}>
                      <div className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t-md transition-all duration-1000" style={{ height: `${(d.outstanding / 50) * 100}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{d.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 p-3 rounded-xl bg-emerald-50">
                <TrendingDown className="w-4 h-4 text-emerald-600" />
                <p className="text-xs text-slate-600">Outstanding decreased <strong className="text-emerald-700">37.8%</strong> from Jan to Jun</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><PieChart className="w-4 h-4 text-violet-600" />Payment Status Distribution</h3>
              <p className="text-xs text-slate-500 mb-4">Current invoice status breakdown</p>
              <div className="space-y-3">
                {statusDistribution.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                        <span className="text-sm font-semibold text-slate-600">{s.label}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700">{s.count} <span className="text-xs text-slate-400 font-normal">({s.pct}%)</span></span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <div className="text-center p-2.5 rounded-xl bg-slate-50">
                  <p className="text-lg font-bold text-slate-700">{invoices.length}</p>
                  <p className="text-[10px] text-slate-400">Total Invoices</p>
                </div>
                <div className="text-center p-2.5 rounded-xl bg-slate-50">
                  <p className="text-lg font-bold text-slate-700">{new Set(invoices.map((i) => i.studentId)).size}</p>
                  <p className="text-[10px] text-slate-400">Students Billed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4"><Sparkles className="w-4 h-4 text-amber-500" />Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { label: "Create SPP Invoice", icon: Wallet, color: "from-blue-500 to-blue-600" },
                { label: "Book Fee Invoice", icon: BookOpen, color: "from-violet-500 to-violet-600" },
                { label: "Activity Fee", icon: Trophy, color: "from-amber-500 to-amber-600" },
                { label: "Uniform Fee", icon: Shirt, color: "from-rose-500 to-rose-600" },
                { label: "Other Fee", icon: Package, color: "from-teal-500 to-teal-600" },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button key={action.label} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                    <div className={clsx("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform", action.color)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 text-center">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============ INVOICES TAB ============ */}
      {activeTab === "invoices" && (
        <div className="space-y-4 animate-fade-in">
          {/* Toolbar */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-3 p-4">
              <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 flex-1">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} placeholder="Search by student, invoice ID, or student ID..." className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full" />
                {search && <button onClick={() => setSearch("")} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>}
              </div>
              <div className="flex gap-2 flex-wrap">
                <select value={branchFilter} onChange={(e) => { setBranchFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 border-0">{branchOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
                <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 border-0">{typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
                <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 border-0">{statusOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-slate-100 text-sm text-slate-600 rounded-xl px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 border-0">{sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
              </div>
              <div className="flex gap-2 relative">
                <div className="relative">
                  <button onClick={() => setShowExportMenu(!showExportMenu)} className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl px-3 py-2 transition-colors">
                    <Download className="w-4 h-4" /><span className="hidden sm:inline">Export</span><ChevronDown className="w-3 h-3" />
                  </button>
                  {showExportMenu && (
                    <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 w-48 z-30 animate-fade-in">
                      <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FileText className="w-4 h-4 text-red-500" /> Invoice Report (PDF)</button>
                      <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><FileSpreadsheet className="w-4 h-4 text-emerald-500" /> Excel Export</button>
                      <button className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"><Printer className="w-4 h-4 text-slate-500" /> Print</button>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button onClick={() => setShowCreateMenu(!showCreateMenu)} className="flex items-center gap-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-3 py-2 transition-colors shadow-sm">
                    <Plus className="w-4 h-4" /><span className="hidden sm:inline">Create Invoice</span><ChevronDown className="w-3 h-3" />
                  </button>
                  {showCreateMenu && (
                    <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 w-48 z-30 animate-fade-in">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Invoice Type</p>
                      {[
                        { type: "SPP", icon: Wallet, color: "text-blue-600" },
                        { type: "Uang Buku", icon: BookOpen, color: "text-violet-600" },
                        { type: "Uang Kegiatan", icon: Trophy, color: "text-amber-600" },
                        { type: "Uang Seragam", icon: Shirt, color: "text-rose-600" },
                        { type: "Biaya Lainnya", icon: Package, color: "text-teal-600" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <button key={item.type} className="w-full text-left px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                            <Icon className={clsx("w-4 h-4", item.color)} /> {item.type}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="px-4 pb-3 flex items-center justify-between text-xs text-slate-500">
              <span>Showing <strong className="text-slate-700">{paginated.length}</strong> of <strong className="text-slate-700">{filtered.length}</strong> invoices</span>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Invoice</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Student</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Type</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Amount</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Due Date</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {paginated.map((inv) => {
                    const Icon = typeIcon[inv.type];
                    return (
                      <tr key={inv.id} onClick={() => setSelectedInvoice(inv)} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                        <td className="px-5 py-3.5">
                          <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{inv.id}</p>
                          <p className="text-xs text-slate-400">{inv.issueDate}</p>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{getInitials(inv.studentName)}</div>
                            <div className="min-w-0"><p className="text-sm font-medium text-slate-600 truncate max-w-[120px]">{inv.studentName}</p><p className="text-xs text-slate-400">{inv.class} · {inv.branch.replace("Bimba ", "")}</p></div>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className={clsx("inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full", typeColor[inv.type])}>
                            <Icon className="w-3 h-3" />{inv.type}
                          </span>
                        </td>
                        <td className="px-5 py-3.5"><p className="text-sm font-bold text-slate-700">{inv.amountFormatted}</p>{inv.status === "Partial" && <p className="text-[10px] text-blue-500">Paid: {formatRupiah(inv.paidAmount || 0)}</p>}</td>
                        <td className="px-5 py-3.5 hidden sm:table-cell"><p className="text-xs text-slate-500">{inv.dueDate}</p></td>
                        <td className="px-5 py-3.5"><span className={clsx("text-[10px] font-bold px-2 py-1 rounded-full", statusBadge[inv.status])}>{inv.status}</span></td>
                        <td className="px-5 py-3.5"><button onClick={(e) => { e.stopPropagation(); setSelectedInvoice(inv); }} className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><MoreVertical className="w-4 h-4" /></button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4"><Search className="w-8 h-8 text-slate-300" /></div>
                <p className="text-sm font-semibold text-slate-600">No invoices found</p>
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
        </div>
      )}

      {/* ============ PAYMENTS TAB ============ */}
      {activeTab === "payments" && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
              <p className="text-2xl font-bold text-slate-800">{paymentList.filter((p) => p.status === "Paid").length}</p>
              <p className="text-xs text-slate-500 mt-0.5">Fully Paid</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3"><CreditCard className="w-5 h-5 text-blue-600" /></div>
              <p className="text-2xl font-bold text-slate-800">{paymentList.filter((p) => p.method === "Transfer").length}</p>
              <p className="text-xs text-slate-500 mt-0.5">Transfer</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3"><Receipt className="w-5 h-5 text-amber-600" /></div>
              <p className="text-2xl font-bold text-slate-800">{paymentList.filter((p) => p.method === "Cash").length}</p>
              <p className="text-xs text-slate-500 mt-0.5">Cash Payment</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-3"><Wallet className="w-5 h-5 text-violet-600" /></div>
              <p className="text-2xl font-bold text-slate-800">{paymentList.filter((p) => p.method === "QRIS").length}</p>
              <p className="text-xs text-slate-500 mt-0.5">QRIS</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-800">Payment History</h3>
              <p className="text-xs text-slate-500 mt-0.5">All completed and partial payments</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Receipt</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Student</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Type</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Amount Paid</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Method</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Paid Date</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {paymentList.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-3.5"><p className="text-sm font-semibold text-slate-700">REC-{inv.id.split("-")[2]}</p><p className="text-xs text-slate-400">{inv.id}</p></td>
                      <td className="px-5 py-3.5 hidden md:table-cell"><p className="text-sm font-medium text-slate-600 truncate max-w-[120px]">{inv.studentName}</p><p className="text-xs text-slate-400">{inv.class}</p></td>
                      <td className="px-5 py-3.5"><span className={clsx("text-[10px] font-bold px-2 py-1 rounded-full", typeColor[inv.type])}>{inv.type}</span></td>
                      <td className="px-5 py-3.5"><p className="text-sm font-bold text-slate-700">{formatRupiah(inv.paidAmount || 0)}</p>{inv.status === "Partial" && <p className="text-[10px] text-amber-500">Remaining: {formatRupiah(inv.amount - (inv.paidAmount || 0))}</p>}</td>
                      <td className="px-5 py-3.5 hidden sm:table-cell"><span className="text-xs font-medium text-slate-600">{inv.method}</span></td>
                      <td className="px-5 py-3.5 hidden sm:table-cell"><span className="text-xs text-slate-500">{inv.paidDate}</span></td>
                      <td className="px-5 py-3.5"><span className={clsx("text-[10px] font-bold px-2 py-1 rounded-full", statusBadge[inv.status])}>{inv.status}</span></td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1">
                          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition-colors" title="Download Receipt"><Download className="w-4 h-4" /></button>
                          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" title="Print"><Printer className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============ OUTSTANDING TAB ============ */}
      {activeTab === "outstanding" && (
        <div className="space-y-4 animate-fade-in">
          {/* Outstanding Summary */}
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 text-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4" />Outstanding Payment Center</h3>
                <p className="text-xs text-red-200 mt-0.5">Students with unpaid invoices</p>
              </div>
              <button className="text-xs font-semibold bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" /> Send Reminders
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-3xl font-bold">{outstandingList.length}</p>
                <p className="text-xs text-red-200 mt-0.5">Students</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-3xl font-bold">{formatRupiah(stats.outstanding)}</p>
                <p className="text-xs text-red-200 mt-0.5">Total Outstanding</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-3xl font-bold">{outstandingList.filter((s) => s.totalOutstanding > 2000000).length}</p>
                <p className="text-xs text-red-200 mt-0.5">High Priority</p>
              </div>
            </div>
          </div>

          {/* Outstanding List */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Outstanding by Student</h3>
              <div className="flex gap-2">
                <select value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className="bg-slate-100 text-xs text-slate-600 rounded-lg px-3 py-1.5 outline-none cursor-pointer border-0">{branchOptions.map((o) => <option key={o} value={o}>{o}</option>)}</select>
                <button className="text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"><FileSpreadsheet className="w-3.5 h-3.5" /> Export</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Student</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Branch</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Outstanding</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Invoices</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Oldest Due</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Priority</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {outstandingList.map((student) => {
                    const isHigh = student.totalOutstanding > 2000000;
                    const isOverdue = student.oldestDue < "01 Jun 2025";
                    return (
                      <tr key={student.studentId} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{getInitials(student.studentName)}</div>
                            <div className="min-w-0"><p className="text-sm font-semibold text-slate-700 truncate max-w-[120px]">{student.studentName}</p><p className="text-xs text-slate-400">{student.studentId} · {student.class}</p></div>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell"><p className="text-xs text-slate-500">{student.branch.replace("Bimba ", "")}</p></td>
                        <td className="px-5 py-3.5"><p className="text-sm font-bold text-red-600">{formatRupiah(student.totalOutstanding)}</p></td>
                        <td className="px-5 py-3.5 hidden sm:table-cell"><p className="text-xs text-slate-500">{student.invoiceCount} invoice(s)</p></td>
                        <td className="px-5 py-3.5 hidden sm:table-cell"><p className={clsx("text-xs", isOverdue ? "text-red-500 font-semibold" : "text-slate-500")}>{student.oldestDue}</p></td>
                        <td className="px-5 py-3.5">
                          <span className={clsx("text-[10px] font-bold px-2 py-1 rounded-full",
                            isHigh ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700")}>
                            {isHigh ? "High" : "Medium"}
                          </span>
                        </td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-1">
                            <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Send Reminder"><Send className="w-4 h-4" /></button>
                            <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" title="View Details"><Eye className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {outstandingList.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4"><CheckCircle2 className="w-8 h-8 text-emerald-500" /></div>
                <p className="text-sm font-semibold text-slate-600">All payments cleared!</p>
                <p className="text-xs text-slate-400 mt-1">No outstanding payments for this branch</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============ BRANCH REVENUE TAB ============ */}
      {activeTab === "branch_revenue" && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><Building2 className="w-4 h-4 text-blue-600" />Branch Revenue Monitoring</h3>
            <p className="text-xs text-slate-500 mb-5">Revenue comparison across all branches</p>

            {/* Branch Revenue Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {branchRevenue.map((br, i) => {
                const maxRev = Math.max(...branchRevenue.map((b) => b.revenue));
                const pct = maxRev > 0 ? Math.round((br.revenue / maxRev) * 100) : 0;
                const isTop = i === 0;
                return (
                  <div key={br.branch} className={clsx("rounded-2xl p-5 border transition-all hover:shadow-md",
                    isTop ? "bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200" : "bg-white border-slate-100")}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={clsx("w-9 h-9 rounded-xl flex items-center justify-center", isTop ? "bg-amber-200" : "bg-slate-100")}>
                          <Building2 className={clsx("w-4.5 h-4.5", isTop ? "text-amber-700" : "text-slate-500")} />
                        </div>
                        <div><p className="text-sm font-bold text-slate-700">{br.branch.replace("Bimba ", "")}</p><p className="text-[10px] text-slate-400">{br.totalCount} students</p></div>
                      </div>
                      {isTop && <span className="text-[10px] font-bold text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full flex items-center gap-0.5"><Sparkles className="w-3 h-3" />Top Branch</span>}
                    </div>
                    <p className="text-2xl font-bold text-slate-800">{formatRupiah(br.revenue)}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Revenue (Paid)</p>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
                      <div className={clsx("h-full rounded-full transition-all duration-1000", isTop ? "bg-amber-500" : "bg-blue-500")} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="flex items-center justify-between mt-3 text-xs">
                      <span className="text-slate-500">{br.paidCount} paid invoices</span>
                      <span className="text-red-500 font-medium">{formatRupiah(br.outstanding)} outstanding</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Revenue Comparison Bar Chart */}
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Revenue Comparison Chart</h4>
              <div className="flex items-end justify-between gap-4 h-48 bg-slate-50 rounded-xl p-5">
                {branchRevenue.map((br) => {
                  const maxRev = Math.max(...branchRevenue.map((b) => b.revenue));
                  const heightPct = maxRev > 0 ? (br.revenue / maxRev) * 100 : 0;
                  return (
                    <div key={br.branch} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-600">{Math.round(br.revenue / 1000000)}M</span>
                      <div className="w-full bg-slate-100 rounded-t-md overflow-hidden flex items-end" style={{ height: "120px" }}>
                        <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md transition-all duration-1000" style={{ height: `${heightPct}%` }} />
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium text-center truncate w-full">{br.branch.replace("Bimba ", "")}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="text-xs text-slate-500">Total Revenue (All Branches)</p>
                <p className="text-xl font-bold text-emerald-700 mt-1">{formatRupiah(branchRevenue.reduce((sum, b) => sum + b.revenue, 0))}</p>
              </div>
              <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                <p className="text-xs text-slate-500">Total Outstanding (All Branches)</p>
                <p className="text-xl font-bold text-red-600 mt-1">{formatRupiah(branchRevenue.reduce((sum, b) => sum + b.outstanding, 0))}</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs text-slate-500">Collection Rate</p>
                <p className="text-xl font-bold text-blue-700 mt-1">
                  {Math.round((branchRevenue.reduce((sum, b) => sum + b.revenue, 0) / (branchRevenue.reduce((sum, b) => sum + b.revenue, 0) + branchRevenue.reduce((sum, b) => sum + b.outstanding, 0))) * 100)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ REPORTS TAB ============ */}
      {activeTab === "reports" && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1"><Receipt className="w-4 h-4 text-violet-600" />Financial Reports</h3>
            <p className="text-xs text-slate-500 mb-5">Generate and download financial reports</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Revenue Report", desc: "Monthly & yearly revenue breakdown", icon: TrendingUp, color: "from-emerald-500 to-emerald-600", formats: ["PDF", "Excel", "Print"] },
                { title: "Outstanding Report", desc: "All unpaid invoices by student", icon: AlertCircle, color: "from-red-500 to-red-600", formats: ["PDF", "Excel", "Print"] },
                { title: "Collection Report", desc: "Payment collection rate & trends", icon: BarChart3, color: "from-blue-500 to-blue-600", formats: ["PDF", "Excel", "Print"] },
                { title: "Branch Revenue", desc: "Revenue comparison per branch", icon: Building2, color: "from-violet-500 to-violet-600", formats: ["PDF", "Excel", "Print"] },
                { title: "Invoice Summary", desc: "All invoices with status breakdown", icon: FileText, color: "from-amber-500 to-amber-600", formats: ["PDF", "Excel", "Print"] },
                { title: "Payment Receipt", desc: "Generate individual receipts", icon: Receipt, color: "from-teal-500 to-teal-600", formats: ["PDF", "Print"] },
              ].map((report) => {
                const Icon = report.icon;
                return (
                  <div key={report.title} className="p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all">
                    <div className={clsx("w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-sm mb-3", report.color)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800">{report.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 mb-3">{report.desc}</p>
                    <div className="flex items-center gap-1.5">
                      {report.formats.map((fmt) => (
                        <button key={fmt} className="text-[10px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                          {fmt === "PDF" && <FileText className="w-3 h-3 text-red-500" />}
                          {fmt === "Excel" && <FileSpreadsheet className="w-3 h-3 text-emerald-500" />}
                          {fmt === "Print" && <Printer className="w-3 h-3 text-slate-500" />}
                          {fmt}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Monthly Summary Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-800">Monthly Financial Summary</h3>
              <p className="text-xs text-slate-500 mt-0.5">Last 6 months overview</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Month</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Revenue</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Outstanding</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Collection Rate</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {revenueTrend.map((d, i) => {
                    const rate = collectionRate[i];
                    const prevRev = i > 0 ? revenueTrend[i - 1].revenue : d.revenue;
                    const isUp = d.revenue >= prevRev;
                    return (
                      <tr key={d.month} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-3.5"><p className="text-sm font-semibold text-slate-700">{d.month} 2025</p></td>
                        <td className="px-5 py-3.5"><p className="text-sm font-bold text-emerald-600">Rp {d.revenue}.000.000</p></td>
                        <td className="px-5 py-3.5"><p className="text-sm font-bold text-red-500">Rp {d.outstanding}.500.000</p></td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${rate.rate}%` }} /></div>
                            <span className="text-xs font-semibold text-slate-600">{rate.rate}%</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className={clsx("text-xs font-semibold flex items-center gap-0.5", isUp ? "text-emerald-600" : "text-red-500")}>
                            {isUp ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                            {isUp ? "+" : ""}{d.revenue - prevRev}M
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============ INVOICE DETAIL DRAWER ============ */}
      {selectedInvoice && (
        <>
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 animate-fade-in" onClick={() => setSelectedInvoice(null)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-6 sticky top-0 z-10">
              <button onClick={() => setSelectedInvoice(null)} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"><X className="w-4 h-4" /></button>
              <div className="flex items-center gap-3 mb-4">
                <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center text-white", typeColor[selectedInvoice.type].replace("text-", "bg-").replace("-600", "-500"))}>
                  {(() => { const Icon = typeIcon[selectedInvoice.type]; return <Icon className="w-6 h-6" />; })()}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{selectedInvoice.id}</h2>
                  <p className="text-sm text-blue-200">{selectedInvoice.type}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedInvoice.amountFormatted}</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">Amount</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-base font-bold text-white">{selectedInvoice.dueDate}</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">Due Date</p></div>
                <div className="bg-white/10 rounded-xl p-2 text-center"><p className="text-sm font-bold text-white">{selectedInvoice.status}</p><p className="text-[9px] text-blue-200 uppercase tracking-wider">Status</p></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Student Info */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Student Information</h3>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">{getInitials(selectedInvoice.studentName)}</div>
                  <div><p className="text-sm font-semibold text-slate-700">{selectedInvoice.studentName}</p><p className="text-xs text-slate-400">{selectedInvoice.studentId} · {selectedInvoice.class}</p></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2.5 rounded-xl bg-slate-50"><p className="text-[10px] text-slate-400">Branch</p><p className="text-sm font-semibold text-slate-600">{selectedInvoice.branch.replace("Bimba ", "")}</p></div>
                  <div className="p-2.5 rounded-xl bg-slate-50"><p className="text-[10px] text-slate-400">Issue Date</p><p className="text-sm font-semibold text-slate-600">{selectedInvoice.issueDate}</p></div>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Payment Details</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <span className="text-sm text-slate-500">Total Amount</span>
                    <span className="text-sm font-bold text-slate-700">{selectedInvoice.amountFormatted}</span>
                  </div>
                  {selectedInvoice.paidAmount !== undefined && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50">
                      <span className="text-sm text-slate-500">Paid Amount</span>
                      <span className="text-sm font-bold text-emerald-700">{formatRupiah(selectedInvoice.paidAmount)}</span>
                    </div>
                  )}
                  {selectedInvoice.status === "Partial" && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50">
                      <span className="text-sm text-slate-500">Remaining</span>
                      <span className="text-sm font-bold text-amber-700">{formatRupiah(selectedInvoice.amount - (selectedInvoice.paidAmount || 0))}</span>
                    </div>
                  )}
                  {selectedInvoice.paidDate && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <span className="text-sm text-slate-500">Paid Date</span>
                      <span className="text-sm font-semibold text-slate-600">{selectedInvoice.paidDate}</span>
                    </div>
                  )}
                  {selectedInvoice.method && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <span className="text-sm text-slate-500">Payment Method</span>
                      <span className="text-sm font-semibold text-slate-600">{selectedInvoice.method}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                {selectedInvoice.status !== "Paid" && (
                  <button className="w-full bg-blue-600 text-white text-sm font-semibold rounded-xl py-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <CreditCard className="w-4 h-4" /> Record Payment
                  </button>
                )}
                <div className="grid grid-cols-3 gap-2">
                  <button className="bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl py-2.5 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"><FileText className="w-3.5 h-3.5" /> PDF</button>
                  <button className="bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl py-2.5 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"><FileSpreadsheet className="w-3.5 h-3.5" /> Excel</button>
                  <button className="bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl py-2.5 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"><Printer className="w-3.5 h-3.5" /> Print</button>
                </div>
                {selectedInvoice.status !== "Paid" && (
                  <button className="w-full bg-amber-50 text-amber-700 text-sm font-semibold rounded-xl py-2.5 hover:bg-amber-100 transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Payment Reminder
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
