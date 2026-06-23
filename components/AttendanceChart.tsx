"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { class: "TK A", rate: 97, total: 28 },
  { class: "TK B", rate: 94, total: 30 },
  { class: "SD 1", rate: 91, total: 35 },
  { class: "SD 2", rate: 96, total: 33 },
  { class: "SD 3", rate: 88, total: 32 },
  { class: "SD 4", rate: 93, total: 31 },
  { class: "SD 5", rate: 95, total: 29 },
];

const getBarColor = (rate: number) => {
  if (rate >= 95) return "#059669";
  if (rate >= 90) return "#3b82f6";
  return "#f59e0b";
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const rate = payload[0].value;
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-3 text-sm">
        <p className="font-semibold text-slate-700 mb-1.5">{label}</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getBarColor(rate) }} />
          <span className="text-slate-500">Attendance:</span>
          <span className="font-bold" style={{ color: getBarColor(rate) }}>{rate}%</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Total: {payload[0]?.payload?.total} students</p>
      </div>
    );
  }
  return null;
};

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-800">Attendance by Class</h3>
          <p className="text-sm text-slate-500 mt-0.5">This week · All branches</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-500">≥95%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-slate-500">90–94%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-500">&lt;90%</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="class"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
            domain={[80, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc" }} />
          <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.rate)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
