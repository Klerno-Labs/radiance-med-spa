import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  asChild?: boolean
  isLoading?: boolean
  href?: string
  target?: string
  rel?: string
}

export default function Button({
  children,
  variant = 'primary',
  asChild = false,
  isLoading = false,
  className,
  href,
  target,
  rel,
  disabled,
  ...props
}: ButtonProps) {
  const BaseClasses = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const Variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-card hover:shadow-hover",
    secondary: "bg-secondary text-slate-900 hover:bg-yellow-400 shadow-card hover:shadow-hover",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10",
  }

  const widthClasses = props.className?.includes('w-full') ? 'w-full' : ''
  const commonClasses = cn(BaseClasses, Variants[variant], widthClasses, className)

  const content = (
    <>
      {children}
      {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
    </>
  )

  if (asChild && href) {
    // This shouldn&apos;t happen if we strictly separate buttons and links, 
    // but included for robustness if internal Link needs button styling
    return <Link href={href} className={commonClasses}>{content}</Link>
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={commonClasses}
        target={target}
        rel={rel}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button 
      disabled={disabled || isLoading} 
      className={commonClasses}
      {...props}
    >
      {content}
    </button>
  )
}