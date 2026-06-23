"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import clsx from "clsx";

interface MetricCardProps {
  title: string;
  value?: string | number;
  numericValue?: number;
  unit?: string;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
  delay?: number;
}

function useCountUp(target: number, duration = 1200, delay = 0) {
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;
    const timer = setTimeout(() => {
      animatedRef.current = true;
      const steps = 60;
      const stepDuration = duration / steps;
      let current = 0;
      const increment = target / steps;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);
    }, delay);
    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return count;
}

export default function MetricCard({
  title,
  value,
  numericValue,
  unit,
  change,
  changeLabel,
  icon,
  gradient,
  iconBg,
  delay = 0,
}: MetricCardProps) {
  const animated = useCountUp(numericValue ?? 0, 1200, delay);
  const displayValue = typeof numericValue === "number" ? animated : value;

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl p-5 shadow-sm border border-white/60",
        "hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group",
        gradient
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-500"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium opacity-80 mb-0.5">{title}</p>
            <div className="flex items-end gap-1.5">
              <span className="text-3xl font-bold metric-value">
                {typeof displayValue === "number" ? displayValue.toLocaleString() : displayValue}
              </span>
              {unit && <span className="text-lg font-semibold opacity-70 mb-0.5">{unit}</span>}
            </div>
          </div>
          <div className={clsx("w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0", iconBg)}>
            {icon}
          </div>
        </div>

        {typeof change !== "undefined" && (
          <div className="flex items-center gap-1.5">
            {change > 0 ? (
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            ) : change < 0 ? (
              <TrendingDown className="w-3.5 h-3.5 text-red-400" />
            ) : (
              <Minus className="w-3.5 h-3.5 opacity-60" />
            )}
            <span
              className={clsx(
                "text-xs font-semibold",
                change > 0 ? "text-emerald-400" : change < 0 ? "text-red-400" : "opacity-60"
              )}
            >
              {change > 0 ? "+" : ""}{change}%
            </span>
            {changeLabel && (
              <span className="text-xs opacity-60">{changeLabel}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
