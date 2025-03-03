
import React from "react";
import Layout from "@/components/layout/Layout";
import SymptomAnalyzer from "@/components/features/SymptomAnalyzer";
import { Activity, Brain, Check, ChevronRight } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";

const SymptomAnalysis = () => {
  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              AI-Powered
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Advanced Symptom Analysis
            </h1>
            <p className="text-gray-600">
              Our cutting-edge NLP technology helps identify potential health concerns
              by analyzing your symptoms and providing preliminary guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 animate-fade-up">
              <div className="h-[600px]">
                <SymptomAnalyzer />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-up animate-delay-100">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">NLP Technology</h3>
                    <p className="text-gray-600">
                      Our advanced Natural Language Processing algorithms understand your symptom descriptions
                      in natural language and context.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Analysis</h3>
                    <p className="text-gray-600">
                      The system analyzes multiple symptoms collectively, considering their interactions
                      and possible conditions they might indicate.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                    <p className="text-gray-600">
                      Receive tailored recommendations based on your symptoms, including self-care
                      advice or when to seek professional medical attention.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-500 italic mb-4">
                  Note: This tool is for informational purposes only and does not replace professional medical advice.
                  Always consult with a healthcare provider for proper diagnosis and treatment.
                </p>
                
                <AnimatedButton
                  icon={<ChevronRight size={18} />}
                  iconPosition="right"
                >
                  Learn More About The Technology
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SymptomAnalysis;
