
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { images } from "@/assets/images";
import { Calendar, Activity, Heart, Brain, Shield, ArrowRight } from "lucide-react";

const LearnMore = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-health-primary" />,
      title: "AI-Powered Symptom Analysis",
      description: "Our advanced algorithms analyze your symptoms in real-time, providing you with insights and recommendations tailored to your specific health profile.",
    },
    {
      icon: <Activity className="h-8 w-8 text-health-primary" />,
      title: "Health Tracking & Monitoring",
      description: "Track your vital health metrics, set goals, and monitor your progress with intuitive dashboards and personalized insights.",
    },
    {
      icon: <Heart className="h-8 w-8 text-health-primary" />,
      title: "Personalized Health Plans",
      description: "Receive customized health plans designed around your unique health needs, goals, and medical history.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-health-primary" />,
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals through secure video calls and messaging, eliminating the need for physical visits.",
    },
    {
      icon: <Shield className="h-8 w-8 text-health-primary" />,
      title: "Data Security & Privacy",
      description: "Your health data is protected with enterprise-grade encryption and strict privacy controls. You control who sees your information.",
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About</span> HealthSphere
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HealthSphere is revolutionizing healthcare in Kenya through innovative technology, 
              making quality healthcare accessible, personalized, and convenient for all.
            </p>
          </div>
          
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up animate-delay-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At HealthSphere, our mission is to bridge the healthcare accessibility gap in Kenya 
                by leveraging cutting-edge technology. We're committed to providing personalized, 
                data-driven healthcare solutions that empower individuals to take control of their health.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that quality healthcare is a right, not a privilege. Through our platform, 
                we aim to make healthcare more accessible, affordable, and effective for all Kenyans, 
                regardless of their location or economic status.
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-feature animate-fade-up animate-delay-200">
              <img 
                src={images.patientConsultation} 
                alt="HealthSphere in action"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-16 animate-fade-up animate-delay-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 h-full">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16 bg-gradient-to-r from-health-primary to-health-secondary rounded-3xl overflow-hidden shadow-xl animate-fade-up animate-delay-400">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Impact in Kenya</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-white/80">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-white/80">Counties Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <div className="text-white/80">Consultations</div>
                </div>
              </div>
              <p className="text-white/90 mb-6">
                HealthSphere is making a real difference in communities across Kenya, bringing quality healthcare 
                to remote areas and empowering individuals to take control of their health journey.
              </p>
              <Link to="/about">
                <AnimatedButton 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More About Our Impact
                </AnimatedButton>
              </Link>
            </div>
          </div>
          
          <div className="text-center animate-fade-up animate-delay-500">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience HealthSphere?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of users who are already transforming their healthcare experience with HealthSphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/sign-up">
                <AnimatedButton 
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Get Started
                </AnimatedButton>
              </Link>
              <Link to="/virtual-consultation">
                <AnimatedButton 
                  variant="outline" 
                  size="lg"
                >
                  Book a Consultation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearnMore;
