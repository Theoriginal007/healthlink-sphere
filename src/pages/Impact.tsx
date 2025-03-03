
import React from "react";
import Layout from "@/components/layout/Layout";
import { Heart, Activity, Users, Globe, Star, TrendingUp, Target, ArrowRight } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";

const Impact = () => {
  // Sample impact statistics
  const stats = [
    { id: 1, value: "250K+", label: "Active Users", icon: <Users size={24} className="text-health-primary" /> },
    { id: 2, value: "85%", label: "Early Detection Rate", icon: <Activity size={24} className="text-health-primary" /> },
    { id: 3, value: "35+", label: "Rural Communities Reached", icon: <Globe size={24} className="text-health-primary" /> },
    { id: 4, value: "24/7", label: "Healthcare Access", icon: <Heart size={24} className="text-health-primary" /> }
  ];
  
  // Sample success stories
  const stories = [
    {
      id: 1,
      name: "Mama Akinyi",
      location: "Kisumu County",
      story: "HealthSphere's symptom analyzer helped me identify my daughter's malaria symptoms early, allowing us to seek treatment before complications developed. In rural Kisumu, this technology has been life-changing.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "John Mwangi",
      location: "Nakuru County",
      story: "As someone managing diabetes, the health tracking features have revolutionized how I monitor my condition. I can easily share my metrics with my doctor during virtual consultations, improving my care despite living far from specialized facilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Amina Hassan",
      location: "Garissa County",
      story: "In our community, healthcare information was limited. The educational resources in both English and Swahili have helped me better understand preventive care for my family, especially during pregnancy and early childhood.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80"
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
              Our Achievements
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              The HealthSphere Impact
            </h1>
            <p className="text-gray-600">
              Discover how we're transforming healthcare accessibility and outcomes 
              across Kenya through innovative technology and community engagement.
            </p>
          </div>
          
          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.id} className="glass-card p-6 text-center animate-fade-up" style={{ animationDelay: `${stat.id * 100}ms` }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-health-muted flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Impact Map */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Our Reach Across Kenya</h2>
              <p className="text-gray-600">
                HealthSphere is making a difference in communities throughout Kenya,
                bringing healthcare access to both urban centers and rural areas.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-up animate-delay-200">
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1400&q=80" 
                  alt="Map of Kenya showing HealthSphere's impact" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">Bridging Healthcare Gaps</h3>
                  <p className="text-white/90 mb-4">
                    Our technology is helping connect underserved communities with quality healthcare
                    resources, regardless of location or socioeconomic status.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                      Rural Communities
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                      Urban Centers
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                      Remote Areas
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                      Healthcare Facilities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600">
                Real stories from Kenyans whose lives have been improved through HealthSphere
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <div key={story.id} className="glass-card overflow-hidden group animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex text-yellow-400 mb-2">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                      <p className="text-gray-600 italic">{story.story}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Impact Areas */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Key Impact Areas</h2>
              <p className="text-gray-600">
                HealthSphere is making a measurable difference in these critical areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 animate-fade-up">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Improved Health Outcomes</h3>
                    <p className="text-gray-600">
                      Through early symptom detection, regular health monitoring, and improved access to healthcare
                      professionals, HealthSphere is helping Kenyans achieve better health outcomes.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">85% increase in early condition detection</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">63% reduction in preventable complications</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">42% improvement in chronic disease management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 animate-fade-up animate-delay-100">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enhanced Healthcare Access</h3>
                    <p className="text-gray-600">
                      Breaking down geographical and economic barriers to quality healthcare through
                      virtual consultations and remote monitoring capabilities.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">24/7 access to healthcare guidance</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">78% reduction in travel time for consultations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">35+ previously underserved rural communities reached</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 animate-fade-up animate-delay-200">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Health Literacy & Education</h3>
                    <p className="text-gray-600">
                      Empowering Kenyans with knowledge about preventive care, disease management,
                      and healthy lifestyle choices through accessible educational content.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">1000+ localized health articles published</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">92% of users report improved health knowledge</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Content available in multiple languages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 animate-fade-up animate-delay-300">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                    <p className="text-gray-600">
                      Working directly with local communities to understand their unique healthcare
                      needs and adapt our solutions to address specific challenges.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">45+ community health partnerships established</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">120+ community health workers trained</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Regular health campaigns in rural areas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-health-primary to-health-secondary rounded-3xl p-8 md:p-12 text-white text-center animate-fade-up animate-delay-400">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-white/90 mb-8">
                Help us continue to transform healthcare accessibility in Kenya. Whether you're a healthcare
                professional, community leader, or potential user, there are many ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton 
                  variant="ghost" 
                  size="lg"
                  className="bg-white text-health-primary hover:bg-white/90"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
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

export default Impact;
