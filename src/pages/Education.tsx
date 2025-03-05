
import React from "react";
import Layout from "@/components/layout/Layout";
import EducationHub from "@/components/features/EducationHub";
import { BookOpen, GraduationCap, Globe, Search, ChevronRight, Filter } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Link } from "react-router-dom";

const Education = () => {
  // Sample categories
  const categories = [
    { id: 1, name: "Nutrition", count: 24 },
    { id: 2, name: "Mental Health", count: 18 },
    { id: 3, name: "Preventive Care", count: 32 },
    { id: 4, name: "First Aid", count: 15 },
    { id: 5, name: "Women's Health", count: 27 },
    { id: 6, name: "Men's Health", count: 21 }
  ];

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Knowledge Center
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Health Education Hub
            </h1>
            <p className="text-gray-600">
              Access a wealth of trusted, localized health information to help you make
              informed decisions about your health and wellbeing.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search for health topics..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary"
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <button className="flex items-center px-4 py-2 text-gray-600 hover:text-health-primary">
                  <Filter size={18} className="mr-2" />
                  <span>Filter</span>
                </button>
                <select className="ml-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="glass-card p-4 text-center group hover:border-health-primary transition-all cursor-pointer animate-fade-up" style={{ animationDelay: `${category.id * 50}ms` }}>
                  <h3 className="font-medium mb-1 group-hover:text-health-primary">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} articles</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-up">
              <h2 className="text-2xl font-bold mb-6">Our Educational Approach</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Evidence-Based Content</h3>
                    <p className="text-gray-600">
                      All our educational materials are developed by medical professionals and based on 
                      the latest scientific research and clinical guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Localized Knowledge</h3>
                    <p className="text-gray-600">
                      Our content is tailored to the Kenyan context, addressing specific health concerns, 
                      practices, and resources relevant to local communities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accessible Learning</h3>
                    <p className="text-gray-600">
                      Information is presented in clear, easy-to-understand formats with visual aids, 
                      ensuring accessibility for users of all educational backgrounds.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <AnimatedButton
                    icon={<ChevronRight size={18} />}
                    iconPosition="right"
                  >
                    Learn More About Our Impact
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-up animate-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-feature animate-float">
                <img 
                  src={images.education} 
                  alt="Health education resources" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Empowering Through Knowledge</h3>
                  <p className="text-white/80">Helping you make informed health decisions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-health-muted/30 rounded-3xl p-8 md:p-12 animate-fade-up animate-delay-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Featured Articles</h2>
              <EducationHub />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
