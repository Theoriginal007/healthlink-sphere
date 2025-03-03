
import React from "react";
import { images } from "@/assets/images";
import AnimatedButton from "./AnimatedButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-health-primary/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24 lg:py-32">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full animate-fade-in">
              Revolutionizing Healthcare in Kenya
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Health</span>
              <span>Sphere</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-600 animate-fade-in animate-delay-100">
              Advanced healthcare management powered by
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"> AI, ML, and NLP</span>
            </p>
            
            <p className="text-gray-500 max-w-xl mx-auto lg:mx-0 animate-fade-in animate-delay-200">
              HealthSphere bridges the gap in healthcare accessibility, delivering personalized health insights, 
              symptom analysis, and education tailored to Kenya's unique healthcare landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start animate-fade-in animate-delay-300">
              <AnimatedButton 
                size="lg" 
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Get Started
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg"
              >
                Learn More
              </AnimatedButton>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2 animate-fade-in animate-delay-400">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-3xl blur-lg opacity-30 animate-pulse-soft"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-feature animate-float">
                <img 
                  src={images.doctorWithTablet} 
                  alt="Doctor using HealthSphere tablet application"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                {/* Floating UI elements */}
                <div className="absolute top-6 right-6 glass-card p-4 rounded-xl shadow-soft animate-float">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Analysis Complete</p>
                      <p className="text-xs text-gray-500">98% accuracy</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 glass-card p-3 rounded-xl shadow-soft animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center text-white text-xs">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="font-medium text-xs">
                      Real-time monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
