import { cn } from "@/lib/cn";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = "primary", children, onClick }: ButtonProps) {
  const baseStyles = "py-2 px-4 rounded-md";
  const variantStyles = {
    primary: "bg-accent text-white",
    secondary: "bg-white text-accent border border-accent",
    outline: "border border-accent text-accent",
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant])} onClick={onClick}>
      {children}
    </button>
  );
}