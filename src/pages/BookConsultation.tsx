
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle } from "lucide-react";
import { format } from "date-fns";

const BookConsultation = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [specialtyFilter, setSpecialtyFilter] = useState<string>("");
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    notes: ""
  });
  const [bookingComplete, setBookingComplete] = useState(false);
  const { toast } = useToast();

  // Mock data for doctors
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Ngugi",
      specialty: "General Practitioner",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      experience: "10 years",
      education: "University of Nairobi Medical School",
      languages: ["English", "Swahili"],
      availability: true,
      nextAvailable: "Today"
    },
    {
      id: 2,
      name: "Dr. David Ochieng",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      experience: "15 years",
      education: "Kenyatta University School of Medicine",
      languages: ["English", "Swahili", "Luo"],
      availability: true,
      nextAvailable: "Tomorrow"
    },
    {
      id: 3,
      name: "Dr. Jane Kamau",
      specialty: "Dermatologist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      experience: "8 years",
      education: "Moi University School of Medicine",
      languages: ["English", "Swahili"],
      availability: true,
      nextAvailable: "In 2 days"
    },
    {
      id: 4,
      name: "Dr. Michael Kariuki",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      experience: "20 years",
      education: "University of Nairobi Medical School",
      languages: ["English", "Swahili", "Kikuyu"],
      availability: true,
      nextAvailable: "Today"
    }
  ];

  // Mock data for specialities
  const specialties = [
    "All Specialties",
    "General Practitioner",
    "Pediatrician",
    "Dermatologist",
    "Cardiologist",
    "Gynecologist",
    "Orthopedic Surgeon",
    "Neurologist",
    "Psychiatrist",
    "Ophthalmologist"
  ];

  // Mock data for available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM", 
    "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", 
    "04:30 PM", "05:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const filteredDoctors = specialtyFilter && specialtyFilter !== "All Specialties"
    ? doctors.filter(doctor => doctor.specialty === specialtyFilter)
    : doctors;

  const handleSelectDoctor = (doctor: any) => {
    setSelectedDoctor(doctor);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call to book appointment
    setTimeout(() => {
      setBookingComplete(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      toast({
        title: "Appointment Booked!",
        description: `Your appointment with ${selectedDoctor.name} on ${date ? format(date, 'PPP') : 'the selected date'} at ${selectedTime} has been confirmed.`,
      });
    }, 1500);
  };

  const handleStartOver = () => {
    setStep(1);
    setSelectedDoctor(null);
    setSelectedTime("");
    setDate(undefined);
    setFormData({
      name: "",
      email: "",
      phone: "",
      reason: "",
      notes: ""
    });
    setBookingComplete(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Book a</span> Consultation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Schedule a virtual consultation with our healthcare professionals.
            </p>
          </div>
          
          {!bookingComplete ? (
            <>
              {/* Progress indicator */}
              <div className="mb-10 animate-fade-up animate-delay-100">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className={`h-1 ${step >= 1 ? 'bg-health-primary' : 'bg-gray-200'} rounded-l-full`}></div>
                  </div>
                  <div className="flex-1">
                    <div className={`h-1 ${step >= 2 ? 'bg-health-primary' : 'bg-gray-200'}`}></div>
                  </div>
                  <div className="flex-1">
                    <div className={`h-1 ${step >= 3 ? 'bg-health-primary' : 'bg-gray-200'} rounded-r-full`}></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <div className={`${step >= 1 ? 'text-health-primary font-medium' : 'text-gray-500'}`}>Select Doctor</div>
                  <div className={`${step >= 2 ? 'text-health-primary font-medium' : 'text-gray-500'}`}>Choose Time</div>
                  <div className={`${step >= 3 ? 'text-health-primary font-medium' : 'text-gray-500'}`}>Your Details</div>
                </div>
              </div>
              
              {step === 1 && (
                <div className="animate-fade-up animate-delay-200">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Select a Healthcare Professional</h2>
                    
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      <div className="w-full md:w-1/3">
                        <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by Specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((specialty) => (
                              <SelectItem key={specialty} value={specialty}>
                                {specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="w-full md:w-1/3">
                        <div className="relative">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            disabled={(date) => date < new Date()}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="glass-card overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3">
                              <img 
                                src={doctor.image} 
                                alt={doctor.name}
                                className="w-full h-full object-cover md:h-full"
                              />
                            </div>
                            <div className="p-6 md:w-2/3">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                                <div className="flex items-center bg-health-muted px-2 py-0.5 rounded-full">
                                  <span className="text-sm font-medium text-health-primary">
                                    ★ {doctor.rating}
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-health-primary font-medium text-sm mb-3">{doctor.specialty}</p>
                              
                              <div className="space-y-2 mb-4 text-sm text-gray-600">
                                <p>Experience: {doctor.experience}</p>
                                <p>Education: {doctor.education}</p>
                                <p>Languages: {doctor.languages.join(", ")}</p>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="text-sm">
                                  <span className="text-green-600 font-medium flex items-center">
                                    <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                                    Next Available: {doctor.nextAvailable}
                                  </span>
                                </div>
                                
                                <Button onClick={() => handleSelectDoctor(doctor)}>
                                  Select
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && selectedDoctor && (
                <div className="animate-fade-up">
                  <div className="mb-8">
                    <button 
                      onClick={() => setStep(1)} 
                      className="text-health-primary flex items-center mb-4 text-sm"
                    >
                      <ChevronRight className="transform rotate-180 mr-1" size={16} />
                      Back to doctor selection
                    </button>
                    
                    <h2 className="text-2xl font-bold mb-6">Select a Time Slot</h2>
                    
                    <div className="mb-6 glass-card p-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={selectedDoctor.image} 
                          alt={selectedDoctor.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-health-muted"
                        />
                        <div>
                          <h3 className="font-semibold">{selectedDoctor.name}</h3>
                          <p className="text-health-primary text-sm">{selectedDoctor.specialty}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-1/2">
                        <div className="mb-4 flex items-center text-gray-600">
                          <CalendarIcon size={16} className="mr-2" />
                          <span>
                            {date ? format(date, 'PPPP') : 'Please select a date'}
                          </span>
                        </div>
                        
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      
                      <div className="w-full md:w-1/2">
                        <div className="mb-4 flex items-center text-gray-600">
                          <Clock size={16} className="mr-2" />
                          <span>Available time slots</span>
                        </div>
                        
                        {date ? (
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => handleSelectTime(time)}
                                className={`text-sm p-2 rounded-md border transition-colors ${
                                  selectedTime === time
                                    ? 'bg-health-primary text-white border-health-primary'
                                    : 'hover:border-health-primary hover:text-health-primary'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-64 border rounded-md bg-gray-50 text-gray-500">
                            <p>Please select a date first</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && selectedDoctor && selectedTime && (
                <div className="animate-fade-up">
                  <div className="mb-8">
                    <button 
                      onClick={() => setStep(2)} 
                      className="text-health-primary flex items-center mb-4 text-sm"
                    >
                      <ChevronRight className="transform rotate-180 mr-1" size={16} />
                      Back to time selection
                    </button>
                    
                    <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
                    
                    <div className="mb-8 glass-card p-6">
                      <h3 className="text-lg font-semibold mb-4">Appointment Summary</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                          <img 
                            src={selectedDoctor.image} 
                            alt={selectedDoctor.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-health-muted"
                          />
                          <div>
                            <h4 className="font-semibold">{selectedDoctor.name}</h4>
                            <p className="text-health-primary text-sm">{selectedDoctor.specialty}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CalendarIcon size={16} className="mr-2 text-health-primary" />
                            <span>{date ? format(date, 'PPPP') : 'Selected date'}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-health-primary" />
                            <span>{selectedTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <form onSubmit={handleBookAppointment}>
                      <div className="mb-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="reason" className="text-sm font-medium">Reason for Consultation</label>
                          <Input
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="notes" className="text-sm font-medium">Additional Notes (Optional)</label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            rows={4}
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-gradient-to-r from-health-primary to-health-secondary text-white"
                      >
                        Confirm Booking
                      </Button>
                    </form>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="animate-fade-up text-center">
              <div className="mb-8 flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Appointment Confirmed!</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto mb-4">
                  Your appointment with {selectedDoctor.name} has been scheduled for:
                </p>
                
                <div className="glass-card p-6 mb-8 inline-block">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <CalendarIcon size={20} className="mr-2 text-health-primary" />
                      <span className="font-medium">{date ? format(date, 'PPPP') : 'The selected date'}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={20} className="mr-2 text-health-primary" />
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8">
                  We've sent a confirmation email to <span className="font-medium">{formData.email}</span> with all the details.
                  <br />
                  You'll receive a reminder 24 hours before your appointment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/dashboard">
                    <AnimatedButton>
                      Go to Dashboard
                    </AnimatedButton>
                  </Link>
                  
                  <Button variant="outline" onClick={handleStartOver}>
                    Book Another Appointment
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookConsultation;
