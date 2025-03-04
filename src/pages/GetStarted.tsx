
import React from "react";
import Layout from "@/components/layout/Layout";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { images } from "@/assets/images";

const GetStarted = () => {
  const features = [
    "Create your personalized health profile",
    "Connect with healthcare professionals",
    "Track your vitals and health metrics",
    "Get AI-powered health insights",
    "Access educational resources"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get Started</span> with HealthSphere
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your journey to better health management begins here. Follow these simple steps to set up your HealthSphere account.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="animate-fade-up animate-delay-100">
              <div className="glass-card p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-health-primary">Key Features</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link to="/sign-up">
                    <AnimatedButton size="lg">
                      Create Your Account
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-up animate-delay-200">
              <div className="glass-card p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-health-primary">Getting Started Steps</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary text-white flex items-center justify-center mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Create an Account</h3>
                      <p className="text-gray-600 text-sm">Sign up with your email and create a secure password.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary text-white flex items-center justify-center mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Complete Your Profile</h3>
                      <p className="text-gray-600 text-sm">Add your personal details and medical history for personalized care.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary text-white flex items-center justify-center mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Connect Devices</h3>
                      <p className="text-gray-600 text-sm">Link your wearables and health monitoring devices.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary text-white flex items-center justify-center mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Explore Features</h3>
                      <p className="text-gray-600 text-sm">Discover all that HealthSphere has to offer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-feature mb-16 animate-fade-up animate-delay-300">
            <img 
              src={images.doctorWithTablet} 
              alt="Doctor using HealthSphere tablet application"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Ready to transform your healthcare experience?</h3>
                <p className="mb-4">Join thousands of users already benefiting from HealthSphere.</p>
                <Link to="/sign-up">
                  <AnimatedButton 
                    size="lg"
                    variant="primary"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Sign Up Now
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-fade-up animate-delay-400">
            <p className="text-gray-600 mb-6">
              Already have an account? Sign in to continue your health journey.
            </p>
            <Link to="/sign-in">
              <AnimatedButton 
                variant="outline"
                size="lg"
              >
                Sign In
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
