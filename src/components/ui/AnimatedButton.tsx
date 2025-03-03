
import React from "react";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
};

const AnimatedButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
}: AnimatedButtonProps) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300 rounded-full font-medium flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-health-primary to-health-secondary text-white hover:shadow-lg hover:shadow-health-primary/20 focus:shadow-health-primary/30 active:scale-[0.98]",
    secondary: "bg-health-muted text-health-primary hover:bg-health-muted/80 focus:ring-2 focus:ring-health-primary/30 active:scale-[0.98]",
    outline: "bg-transparent border-2 border-health-primary text-health-primary hover:bg-health-muted/50 focus:ring-2 focus:ring-health-primary/30 active:scale-[0.98]",
    ghost: "bg-transparent text-health-primary hover:bg-health-muted/50 focus:ring-2 focus:ring-health-primary/30 active:scale-[0.98]",
  };
  
  const sizeStyles = {
    sm: "text-sm py-1.5 px-4",
    md: "text-base py-2.5 px-6",
    lg: "text-lg py-3 px-8",
  };
  
  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
      
      <span className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="absolute inset-0 bg-gradient-to-r from-health-secondary to-health-primary"></span>
      </span>
    </button>
  );
};

export default AnimatedButton;
