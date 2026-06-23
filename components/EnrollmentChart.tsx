"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Aug", students: 980, target: 1000 },
  { month: "Sep", students: 1045, target: 1050 },
  { month: "Oct", students: 1090, target: 1100 },
  { month: "Nov", students: 1120, target: 1150 },
  { month: "Dec", students: 1098, target: 1150 },
  { month: "Jan", students: 1156, target: 1200 },
  { month: "Feb", students: 1189, target: 1200 },
  { month: "Mar", students: 1201, target: 1250 },
  { month: "Apr", students: 1225, target: 1250 },
  { month: "May", students: 1240, target: 1300 },
  { month: "Jun", students: 1247, target: 1300 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-3 text-sm">
        <p className="font-semibold text-slate-700 mb-2">{label}</p>
        {payload.map((entry: { color: string; name: string; value: number }, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-slate-500 capitalize">{entry.name}:</span>
            <span className="font-semibold text-slate-800">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function EnrollmentChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-800">Student Enrollment Trend</h3>
          <p className="text-sm text-slate-500 mt-0.5">Academic year progress · All branches</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 rounded-full bg-blue-500 block" />
            <span className="text-slate-500">Enrolled</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 rounded-full bg-slate-300 block" />
            <span className="text-slate-500">Target</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#cbd5e1" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#cbd5e1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
            domain={[900, 1400]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#e2e8f0", strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#cbd5e1"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            fill="url(#targetGrad)"
            name="target"
          />
          <Area
            type="monotone"
            dataKey="students"
            stroke="#3b82f6"
            strokeWidth={2.5}
            fill="url(#enrollGrad)"
            name="students"
            dot={false}
            activeDot={{ r: 5, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
