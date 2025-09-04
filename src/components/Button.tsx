import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "",
  onClick 
}: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl font-inter";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105",
    secondary: "border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:scale-105"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
