"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "rounded-lg focus:outline-none transition duration-200";
  const variantStyles = variant === "primary" ? "bg-primary text-white" : variant === "secondary" ? "bg-secondary text-black" : "border border-gray-300 text-gray-700";
  const sizeStyles = size === "lg" ? "py-3 px-6 text-lg" : size === "sm" ? "py-1 px-3 text-sm" : "py-2 px-4 text-base";

  return (
    <button className={cn(baseStyles, variantStyles, sizeStyles, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
}