"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectGroup {
  group: string;
  options: SelectOption[];
}

export type SelectItem = SelectOption | SelectGroup;

function isGroup(item: SelectItem): item is SelectGroup {
  return "group" in item;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  items: SelectItem[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  hasError?: boolean;
}

export default function CustomSelect({
  value,
  onChange,
  items,
  placeholder = "Select...",
  className,
  disabled,
  hasError,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const findLabel = (): string => {
    for (const item of items) {
      if (isGroup(item)) {
        const found = item.options.find((o) => o.value === value);
        if (found) return found.label;
      } else {
        if (item.value === value) return item.label;
      }
    }
    return "";
  };

  const displayLabel = value ? findLabel() : "";

  const handleOptionClick = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  const renderOption = (opt: SelectOption) => (
    <button
      key={opt.value}
      type="button"
      onClick={() => handleOptionClick(opt.value)}
      className={cn(
        "w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 cursor-pointer transition-colors",
        "hover:bg-[#0A4F5C]/10 dark:hover:bg-teal-500/15",
        value === opt.value
          ? "text-[#0A4F5C] dark:text-teal-300 font-semibold bg-[#0A4F5C]/5 dark:bg-teal-500/10"
          : "text-gray-700 dark:text-[#E2E8F0]"
      )}
    >
      <span className="flex-1">{opt.label}</span>
      {value === opt.value && (
        <Check size={14} className="shrink-0 text-[#0A4F5C] dark:text-teal-300" />
      )}
    </button>
  );

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "w-full px-4 py-2.5 rounded-lg border text-sm text-left flex items-center justify-between gap-2 transition-all",
          "bg-white dark:bg-[#0F172A]",
          "text-gray-900 dark:text-[#E2E8F0]",
          "focus:outline-none",
          open || hasError
            ? hasError
              ? "border-red-400 dark:border-red-500 ring-2 ring-red-300/40"
              : "border-[#0A4F5C] dark:border-teal-500 ring-2 ring-[#0A4F5C]/20 dark:ring-teal-500/20"
            : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500",
          "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={cn(!displayLabel && "text-gray-400 dark:text-gray-500")}>
          {displayLabel || placeholder}
        </span>
        <ChevronDown
          size={15}
          className={cn(
            "shrink-0 text-gray-400 transition-transform duration-200",
            open && "rotate-180 text-[#0A4F5C] dark:text-teal-400"
          )}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          className={cn(
            "absolute z-50 mt-1 w-full rounded-xl border shadow-xl overflow-hidden",
            "bg-white dark:bg-[#1E293B]",
            "border-gray-200 dark:border-gray-600/80"
          )}
        >
          <div className="max-h-64 overflow-y-auto py-1 scrollbar-hide">
            {items.map((item, idx) => {
              if (isGroup(item)) {
                return (
                  <div key={idx}>
                    <div className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      {item.group}
                    </div>
                    {item.options.map(renderOption)}
                  </div>
                );
              }
              return renderOption(item);
            })}
          </div>
        </div>
      )}
    </div>
  );
}
