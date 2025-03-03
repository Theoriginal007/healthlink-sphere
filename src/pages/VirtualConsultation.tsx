
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Video, Phone, Calendar, Clock, User, MessageSquare, ArrowRight } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";

const VirtualConsultation = () => {
  const [consultationType, setConsultationType] = useState("video");
  
  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. David Kimani",
      specialty: "General Practitioner",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=300&q=80",
      available: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Dr. Elizabeth Wanjiru",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&h=300&q=80",
      available: true,
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Dr. Michael Ochieng",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=300&q=80",
      available: false,
      rating: 4.7,
      reviews: 98
    }
  ];

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Connect & Consult
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Virtual Consultations
            </h1>
            <p className="text-gray-600">
              Connect with healthcare professionals from the comfort of your home through
              secure video calls and messaging.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="mb-20 animate-fade-up animate-delay-100">
            <div className="relative rounded-3xl overflow-hidden shadow-feature">
              <img 
                src={images.virtualConsultation} 
                alt="Virtual doctor consultation" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Healthcare Without Boundaries</h2>
                <p className="text-white/90 mb-6">
                  Access quality healthcare services regardless of your location or time constraints.
                  Our virtual consultations provide the care you need, when you need it.
                </p>
                <AnimatedButton 
                  variant="ghost" 
                  size="lg"
                  className="bg-white text-health-primary hover:bg-white/90"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Book a Consultation
                </AnimatedButton>
              </div>
            </div>
          </div>
          
          {/* Consultation Options */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Consultation Options</h2>
              <p className="text-gray-600">
                Choose the type of consultation that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className={`glass-card p-8 border-2 transition-all cursor-pointer animate-fade-up ${
                  consultationType === "video" 
                    ? "border-health-primary shadow-lg" 
                    : "border-transparent hover:border-health-primary/50"
                }`}
                onClick={() => setConsultationType("video")}
              >
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Video size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Video Consultation</h3>
                    <p className="text-gray-600 mb-4">
                      Face-to-face virtual appointments with healthcare professionals via secure
                      video calls. Ideal for detailed consultations and visual assessments.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">High-quality video and audio</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Screen sharing for test results</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">End-to-end encryption</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div 
                className={`glass-card p-8 border-2 transition-all cursor-pointer animate-fade-up animate-delay-100 ${
                  consultationType === "voice" 
                    ? "border-health-primary shadow-lg" 
                    : "border-transparent hover:border-health-primary/50"
                }`}
                onClick={() => setConsultationType("voice")}
              >
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Voice Consultation</h3>
                    <p className="text-gray-600 mb-4">
                      Audio-only appointments that use less data and work well even with slower
                      internet connections. Perfect for follow-ups and quick questions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Lower data consumption</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Works on low bandwidth</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Secure call recording (optional)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={`glass-card p-8 border-2 transition-all cursor-pointer animate-fade-up animate-delay-200 ${
                consultationType === "chat" 
                  ? "border-health-primary shadow-lg" 
                  : "border-transparent hover:border-health-primary/50"
              }`}
              onClick={() => setConsultationType("chat")}>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <MessageSquare size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Chat Consultation</h3>
                    <p className="text-gray-600 mb-4">
                      Text-based consultations that allow you to send messages, photos, and
                      documents to healthcare providers at your convenience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Asynchronous communication</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Share images and documents</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Complete conversation history</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={`glass-card p-8 border-2 transition-all cursor-pointer animate-fade-up animate-delay-300 ${
                consultationType === "scheduled" 
                  ? "border-health-primary shadow-lg" 
                  : "border-transparent hover:border-health-primary/50"
              }`}
              onClick={() => setConsultationType("scheduled")}>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Scheduled Appointments</h3>
                    <p className="text-gray-600 mb-4">
                      Plan ahead with scheduled appointments at your preferred time with
                      specialists of your choice.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Choose your preferred doctor</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Select convenient time slots</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm">Appointment reminders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Available Doctors */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Available Healthcare Professionals</h2>
              <p className="text-gray-600">
                Connect with our qualified and experienced doctors for your virtual consultation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <div key={doctor.id} className="glass-card overflow-hidden group animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {doctor.available ? (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        Available Now
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
                        Unavailable
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-health-primary font-medium mb-3">{doctor.specialty}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {doctor.rating} ({doctor.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        <span>Available in 15 mins</span>
                      </div>
                      <AnimatedButton
                        size="sm"
                        disabled={!doctor.available}
                      >
                        Consult
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <AnimatedButton
                variant="outline"
                icon={<User size={18} className="mr-2" />}
                iconPosition="left"
                className="animate-fade-up"
              >
                View All Doctors
              </AnimatedButton>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-health-muted/30 rounded-3xl p-8 md:p-12 text-center animate-fade-up animate-delay-400">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Virtual Consultation Today</h2>
              <p className="text-gray-600 mb-8">
                Get the medical advice you need without leaving your home. Our healthcare
                professionals are ready to assist you with your health concerns.
              </p>
              <AnimatedButton 
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Book a Consultation
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VirtualConsultation;
