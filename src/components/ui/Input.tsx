import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  touched?: boolean
}

export default function Input({ label, error, touched, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-md border transition-colors duration-200",
          error && touched ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && touched && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  )
}