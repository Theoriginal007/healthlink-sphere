
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  className?: string;
  index?: number;
}

const FeatureCard = ({
  title,
  description,
  icon,
  image,
  className,
  index = 0,
}: FeatureCardProps) => {
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className={cn(
        "glass-card group p-6 h-full animate-fade-up", 
        className
      )}
      style={{ animationDelay }}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="mb-5 flex items-center">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-health-primary to-health-secondary flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-4 text-gray-800">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-5">{description}</p>
        
        {/* Image */}
        {image && (
          <div className="mt-auto rounded-xl overflow-hidden w-full transition-transform duration-300 group-hover:translate-y-[-5px]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover object-center"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-health-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
