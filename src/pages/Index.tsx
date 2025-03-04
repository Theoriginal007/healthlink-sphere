
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/Hero";
import FeatureCard from "@/components/ui/FeatureCard";
import SymptomAnalyzer from "@/components/features/SymptomAnalyzer";
import HealthTracker from "@/components/features/HealthTracker";
import EducationHub from "@/components/features/EducationHub";
import { images } from "@/assets/images";
import { Brain, Activity, BookOpen, Video, ArrowRight, Check, Shield, Globe } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Key Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--tw-gradient-stops))] from-health-muted/60 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Advanced Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Comprehensive Healthcare Management
            </h2>
            <p className="text-gray-600">
              HealthSphere leverages cutting-edge AI, ML, and NLP technologies to provide a complete 
              healthcare solution tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              title="Symptom Analysis"
              description="Our AI-powered symptom analyzer uses NLP to understand your symptoms and provide preliminary guidance."
              icon={<Brain size={24} />}
              image={images.symptomAnalysis}
              index={0}
            />
            
            <FeatureCard 
              title="Health Tracking"
              description="Monitor vital health metrics with wearable integration and receive personalized insights."
              icon={<Activity size={24} />}
              image={images.healthTracking}
              index={1}
            />
            
            <FeatureCard 
              title="Health Education"
              description="Access a wealth of localized health information and educational resources."
              icon={<BookOpen size={24} />}
              image={images.education}
              index={2}
            />
            
            <FeatureCard 
              title="Virtual Consultations"
              description="Connect with healthcare professionals through secure video calls and messaging."
              icon={<Video size={24} />}
              image={images.virtualConsultation}
              index={3}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Tools Section */}
      <section className="py-20 bg-gradient-to-b from-white to-health-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Featured Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Experience Our Core Features
            </h2>
            <p className="text-gray-600">
              Try out some of HealthSphere's powerful tools designed to enhance your healthcare experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="h-[500px] animate-fade-up animate-delay-100">
              <SymptomAnalyzer />
            </div>
            
            <div className="h-[500px] animate-fade-up animate-delay-200">
              <HealthTracker />
            </div>
          </div>
          
          <div className="animate-fade-up animate-delay-300">
            <EducationHub />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-health-muted opacity-50 rounded-l-[100px] z-0 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
                Why Choose HealthSphere
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Transforming Healthcare Access in Kenya
              </h2>
              
              <div className="space-y-5">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Enhanced Accessibility</h4>
                    <p className="text-gray-600">
                      Breaking geographical barriers with telehealth and virtual consultations, bringing healthcare to every Kenyan.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Proactive Health Management</h4>
                    <p className="text-gray-600">
                      Shift from reactive to proactive care with AI-driven insights and early detection of potential health issues.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Data Security & Privacy</h4>
                    <p className="text-gray-600">
                      State-of-the-art encryption and privacy measures ensuring your health data remains secure and confidential.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Localized Content</h4>
                    <p className="text-gray-600">
                      Content and features specifically tailored to the Kenyan healthcare context and needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/services">
                  <AnimatedButton size="lg">
                    Learn More About Our Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-up animate-delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-feature animate-float">
                <img 
                  src={images.patientConsultation} 
                  alt="Doctor consulting with patient via HealthSphere"
                  className="w-full h-auto object-cover"
                />
                
                {/* Stats overlay */}
                <div className="absolute top-6 right-6 glass-card p-4 rounded-xl shadow-soft animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-health-primary">98%</span>
                    <p className="text-xs text-gray-600">User satisfaction</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl shadow-soft animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-health-primary">24/7</span>
                    <p className="text-xs text-gray-600">Healthcare access</p>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-health-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-health-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-health-primary to-health-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-100">
            Join HealthSphere today and experience the future of healthcare management, 
            tailored specifically for Kenya's healthcare landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
            <Link to="/learn-more">
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </AnimatedButton>
            </Link>
            <Link to="/get-started">
              <AnimatedButton 
                variant="ghost" 
                size="lg"
                className="bg-white text-health-primary hover:bg-white/90"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Get Started
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
