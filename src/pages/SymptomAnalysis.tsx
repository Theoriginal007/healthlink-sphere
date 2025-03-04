
import React from "react";
import Layout from "@/components/layout/Layout";
import SymptomCheckerForm from "@/components/features/SymptomCheckerForm";
import { Activity, Brain, Check, ChevronRight, BookOpen, AlertTriangle } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          
          <Tabs defaultValue="symptom-checker" className="w-full mb-16">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="symptom-checker">Symptom Checker</TabsTrigger>
              <TabsTrigger value="symptom-tracker">Symptom Tracker</TabsTrigger>
            </TabsList>
            
            <TabsContent value="symptom-checker">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1 animate-fade-up">
                  <SymptomCheckerForm />
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
                  
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                        <p className="text-xs text-yellow-700 mt-1">
                          This tool is for informational purposes only and does not replace professional medical advice.
                          Always consult with a healthcare provider for proper diagnosis and treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <AnimatedButton
                      icon={<BookOpen size={18} />}
                      iconPosition="left"
                    >
                      Learn About Common Symptoms
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="symptom-tracker">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <Activity className="h-12 w-12 text-health-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Symptom Tracking</h2>
                  <p className="text-gray-600">
                    Monitor your symptoms over time to identify patterns and trends. This information
                    can be valuable for healthcare providers in diagnosing and treating conditions.
                  </p>
                </div>
                
                <div className="text-center py-12 border rounded-lg border-dashed">
                  <h3 className="text-xl font-medium mb-3">Coming Soon</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    Our symptom tracking feature is currently under development. Sign up to be notified
                    when it's available.
                  </p>
                  <AnimatedButton>
                    Get Notified
                  </AnimatedButton>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Track Multiple Symptoms
                    </h4>
                    <p className="text-sm text-gray-600">
                      Record various symptoms and their severity over time to identify patterns.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Set Reminders
                    </h4>
                    <p className="text-sm text-gray-600">
                      Get notifications to log your symptoms at regular intervals for consistent tracking.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Visualize Trends
                    </h4>
                    <p className="text-sm text-gray-600">
                      View charts and graphs of your symptom history to identify patterns and triggers.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Share with Providers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Generate reports to share with your healthcare providers for better diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-left mt-8">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Is this a substitute for seeing a doctor?</h3>
                <p className="text-sm text-gray-600 mt-2">
                  No, this tool is for informational purposes only and does not replace professional medical advice, 
                  diagnosis, or treatment. Always consult with a qualified healthcare provider.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">How accurate is the symptom analysis?</h3>
                <p className="text-sm text-gray-600 mt-2">
                  The analysis provides potential conditions based on reported symptoms, but it's not a diagnosis. 
                  Accuracy depends on the information provided and the complexity of symptoms.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Is my health information secure?</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Yes, we take privacy and security seriously. All data is encrypted and handled in accordance 
                  with healthcare privacy standards. We do not share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SymptomAnalysis;
