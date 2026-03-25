import { cn } from "@/lib/cn";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Input({ type, name, placeholder, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn("border rounded-md p-2 w-full")}
    />
  );
}