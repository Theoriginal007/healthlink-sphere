
import React from "react";
import Layout from "@/components/layout/Layout";
import { Globe, Heart, Shield, Users, Award, ArrowRight } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SafeImage from "@/components/ui/SafeImage";

const About = () => {
  // Team members
  const team = [
    {
      id: 1,
      name: "Dr. Sarah Njeri",
      role: "Medical Director",
      image: images.avatar1,
      bio: "With over 15 years of experience in healthcare, Dr. Njeri leads our medical team, ensuring all content and features are medically accurate."
    },
    {
      id: 2,
      name: "James Omondi",
      role: "Chief Technology Officer",
      image: images.avatar2,
      bio: "James brings expertise in AI and ML technologies, driving the technical innovation behind HealthSphere's advanced features."
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      role: "Community Health Specialist",
      image: images.avatar3,
      bio: "Grace works directly with Kenyan communities to understand their unique healthcare needs and challenges."
    }
  ];

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              About HealthSphere
            </h1>
            <p className="text-gray-600">
              We're on a mission to transform healthcare accessibility in Kenya through
              innovative technology and a deep understanding of local healthcare needs.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-8 animate-fade-up">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart size={24} className="text-health-primary mr-2" />
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                To enhance healthcare accessibility and delivery in Kenya by leveraging artificial intelligence, 
                machine learning, and natural language processing technologies to provide personalized health 
                management solutions.
              </p>
              <p className="text-gray-600">
                We strive to bridge the gap between healthcare providers and patients, enabling better 
                health outcomes through early intervention, health education, and continuous monitoring.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-up animate-delay-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Globe size={24} className="text-health-primary mr-2" />
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                A Kenya where every citizen has access to quality healthcare information and services, 
                regardless of their location or socioeconomic status.
              </p>
              <p className="text-gray-600">
                We envision a future where technology-enabled healthcare solutions empower individuals 
                to take control of their health and well-being, leading to healthier communities and reduced 
                burden on the healthcare system.
              </p>
            </div>
          </div>
          
          {/* Our Impact */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-600">
                Since our inception, HealthSphere has been making a significant difference
                in healthcare accessibility and outcomes across Kenya.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center animate-fade-up">
                <div className="h-16 w-16 rounded-full bg-health-muted flex items-center justify-center text-health-primary mx-auto mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">250,000+</h3>
                <p className="text-gray-600">Users across Kenya accessing healthcare services</p>
              </div>
              
              <div className="glass-card p-8 text-center animate-fade-up animate-delay-100">
                <div className="h-16 w-16 rounded-full bg-health-muted flex items-center justify-center text-health-primary mx-auto mb-4">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">85%</h3>
                <p className="text-gray-600">Increase in early health issue detection and prevention</p>
              </div>
              
              <div className="glass-card p-8 text-center animate-fade-up animate-delay-200">
                <div className="h-16 w-16 rounded-full bg-health-muted flex items-center justify-center text-health-primary mx-auto mb-4">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">35+</h3>
                <p className="text-gray-600">Rural communities with improved healthcare access</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <AnimatedButton
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="animate-fade-up animate-delay-300"
              >
                Learn More About Our Impact
              </AnimatedButton>
            </div>
          </div>
          
          {/* Our Team */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-600">
                Our diverse team of healthcare professionals, technologists, and community specialists
                work together to make HealthSphere a reality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.id} className="glass-card overflow-hidden group animate-fade-up" style={{ animationDelay: `${member.id * 100}ms` }}>
                  <div className="h-64 overflow-hidden">
                    <SafeImage 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      placeholderType="avatar"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-health-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-health-primary to-health-secondary rounded-3xl p-8 md:p-12 text-white text-center animate-fade-up animate-delay-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-white/90 mb-8">
                Be part of the healthcare revolution in Kenya. Together, we can make quality
                healthcare accessible to everyone, regardless of location or resources.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton 
                  variant="ghost" 
                  size="lg"
                  className="bg-white text-health-primary hover:bg-white/90"
                >
                  Get Started Today
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Partner With Us
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
