"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function Input({ type, placeholder, value, onChange, label }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium" htmlFor={placeholder}>
        {label}
      </label>
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary")}
      />
    </div>
  );
}