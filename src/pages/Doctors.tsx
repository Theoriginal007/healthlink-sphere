
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Calendar, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Filter, 
  Award, 
  Heart, 
  ChevronDown,
  CheckCircle
} from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practitioner",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      location: "Nairobi Medical Center",
      distance: "2.5 km",
      rating: 4.9,
      reviews: 124,
      experience: "12 years",
      languages: ["English", "Swahili"],
      nextAvailable: "Today, 2:00 PM",
      featured: true,
      education: "University of Nairobi Medical School",
      about: "Dr. Johnson specializes in preventive care and chronic disease management. With over 12 years of experience, she focuses on holistic approaches to patient wellness."
    },
    {
      id: 2,
      name: "Dr. Michael Omondi",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      location: "Heart Care Clinic, Mombasa",
      distance: "3.8 km",
      rating: 4.8,
      reviews: 96,
      experience: "15 years",
      languages: ["English", "Swahili"],
      nextAvailable: "Tomorrow, 10:30 AM",
      featured: true,
      education: "University of Cape Town Medical School",
      about: "Dr. Omondi is a board-certified cardiologist specializing in cardiovascular health. He has performed over 500 cardiac procedures and is committed to heart disease prevention."
    },
    {
      id: 3,
      name: "Dr. Amina Wanjiku",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
      location: "Children's Wellness Center, Kisumu",
      distance: "1.2 km",
      rating: 4.9,
      reviews: 157,
      experience: "10 years",
      languages: ["English", "Swahili", "French"],
      nextAvailable: "Today, 4:15 PM",
      featured: false,
      education: "Kenyatta University Medical School",
      about: "Dr. Wanjiku is passionate about child health and development. She specializes in pediatric care from newborns to adolescents, with a focus on preventive healthcare."
    },
    {
      id: 4,
      name: "Dr. Daniel Muthoni",
      specialty: "Dermatologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      location: "Skin Health Clinic, Nairobi",
      distance: "4.5 km",
      rating: 4.7,
      reviews: 84,
      experience: "8 years",
      languages: ["English", "Swahili"],
      nextAvailable: "Friday, 9:00 AM",
      featured: false,
      education: "University of Nairobi Medical School",
      about: "Dr. Muthoni specializes in treating various skin conditions, from common issues like acne to more complex dermatological disorders. He takes a personalized approach to each patient."
    },
    {
      id: 5,
      name: "Dr. Elizabeth Mwangi",
      specialty: "Psychiatrist",
      image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=800&q=80",
      location: "Mental Wellness Center, Nakuru",
      distance: "5.0 km",
      rating: 4.9,
      reviews: 112,
      experience: "13 years",
      languages: ["English", "Swahili", "German"],
      nextAvailable: "Monday, 1:30 PM",
      featured: false,
      education: "University of Cape Town Medical School",
      about: "Dr. Mwangi specializes in mental health treatment and therapy. She has extensive experience treating depression, anxiety, PTSD, and other mental health conditions."
    },
    {
      id: 6,
      name: "Dr. James Kamau",
      specialty: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80",
      location: "Mobility Surgical Center, Eldoret",
      distance: "6.2 km",
      rating: 4.8,
      reviews: 76,
      experience: "17 years",
      languages: ["English", "Swahili"],
      nextAvailable: "Wednesday, 11:00 AM",
      featured: false,
      education: "Egerton University Medical School",
      about: "Dr. Kamau is a specialized orthopedic surgeon focusing on joint replacements and sports injuries. He has performed over 1,000 orthopedic surgeries throughout his career."
    }
  ];

  // Specialties list
  const specialties = [
    "All Specialties",
    "General Practitioner",
    "Cardiologist",
    "Pediatrician",
    "Dermatologist",
    "Psychiatrist",
    "Orthopedic Surgeon"
  ];

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Featured doctors
  const featuredDoctors = doctors.filter(doctor => doctor.featured);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
            Medical Professionals
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
            Find a Doctor
          </h1>
          <p className="text-gray-600">
            Connect with qualified healthcare professionals for virtual consultations
            or in-person appointments at your convenience.
          </p>
        </div>

        {/* Search and filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="search"
              placeholder="Search by doctor name, specialty, or location..."
              className="pl-10 py-6 text-base rounded-full border-gray-200 focus:border-health-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant="outline"
                className={`rounded-full ${specialty === 'All Specialties' ? 'bg-health-primary text-white' : ''}`}
                onClick={() => {
                  if (specialty === 'All Specialties') {
                    setSearchQuery("");
                  } else {
                    setSearchQuery(specialty);
                  }
                }}
              >
                {specialty}
              </Button>
            ))}
            
            <Button
              variant="outline"
              className="rounded-full flex items-center gap-1"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              More Filters
              <ChevronDown size={16} className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Availability</label>
                <select className="w-full rounded-lg border-gray-200 focus:border-health-primary">
                  <option>Any Time</option>
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This Week</option>
                  <option>Next Week</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Distance</label>
                <select className="w-full rounded-lg border-gray-200 focus:border-health-primary">
                  <option>Any Distance</option>
                  <option>Within 5 km</option>
                  <option>Within 10 km</option>
                  <option>Within 20 km</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Language</label>
                <select className="w-full rounded-lg border-gray-200 focus:border-health-primary">
                  <option>Any Language</option>
                  <option>English</option>
                  <option>Swahili</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Featured Doctors Section */}
        {searchQuery === "" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-2 text-health-primary" size={24} />
              Featured Doctors
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredDoctors.map((doctor) => (
                <Card key={doctor.id} className="shadow-md hover:shadow-lg transition-shadow border-0 overflow-hidden">
                  <div className="md:flex h-full">
                    <div className="md:w-2/5 h-60 md:h-auto relative">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <div className="bg-health-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star size={12} className="mr-1 fill-current" />
                          Top Rated
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
                        <p className="text-health-primary font-medium mb-2">{doctor.specialty}</p>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <MapPin size={14} className="mr-1 text-gray-400" />
                          <span>{doctor.location}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 text-sm mb-4">
                          <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">
                            <Star size={14} className="mr-1 fill-yellow-500 text-yellow-500" />
                            <span>{doctor.rating}</span>
                            <span className="text-gray-500 ml-1">({doctor.reviews})</span>
                          </div>
                          <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                            <Clock size={14} className="mr-1" />
                            <span>{doctor.experience}</span>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          <div className="flex items-center mb-1">
                            <CheckCircle size={14} className="mr-2 text-green-500" />
                            <span>Available: {doctor.nextAvailable}</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle size={14} className="mr-2 text-green-500" />
                            <span>Languages: {doctor.languages.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.location.href = `/doctors/${doctor.id}`}
                        >
                          View Profile
                        </Button>
                        <Button 
                          className="flex-1"
                          onClick={() => window.location.href = `/consultation/book/${doctor.id}`}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Doctors Section */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              {searchQuery ? "Search Results" : "All Doctors"}
              {searchQuery && <span className="ml-2 text-lg font-normal text-gray-500">for "{searchQuery}"</span>}
            </h2>
            
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="nearby">Nearby</TabsTrigger>
              <TabsTrigger value="available">Available Today</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="shadow-sm hover:shadow-md transition-shadow border-gray-100 overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <p className="text-health-primary font-medium text-sm">{doctor.specialty}</p>
                    </CardHeader>
                    
                    <CardContent className="pb-3 flex-grow">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin size={14} className="mr-1 text-gray-400" />
                        <span>{doctor.location}</span>
                        <span className="ml-2 text-xs text-gray-400">({doctor.distance})</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 text-sm mb-3">
                        <div className="flex items-center bg-gray-50 text-gray-700 px-2 py-1 rounded-full">
                          <Star size={14} className="mr-1 fill-yellow-500 text-yellow-500" />
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 text-gray-700 px-2 py-1 rounded-full">
                          <Clock size={14} className="mr-1" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {doctor.about}
                      </p>
                      
                      <div className="mt-3 flex items-center text-sm text-health-primary">
                        <Calendar size={14} className="mr-1" />
                        <span>Next available: {doctor.nextAvailable}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex gap-2 w-full">
                        <Button 
                          variant="outline" 
                          className="flex-1 text-sm"
                          onClick={() => window.location.href = `/doctors/${doctor.id}`}
                        >
                          View Profile
                        </Button>
                        <Button 
                          className="flex-1 text-sm"
                          onClick={() => window.location.href = `/consultation/book/${doctor.id}`}
                        >
                          Book
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No doctors found matching your search. Try different keywords.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="nearby" className="mt-0">
            {/* For demo purposes, show filtered by distance */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors
                .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
                .map((doctor) => (
                  <Card key={doctor.id} className="shadow-sm hover:shadow-md transition-shadow border-gray-100 overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <p className="text-health-primary font-medium text-sm">{doctor.specialty}</p>
                    </CardHeader>
                    
                    <CardContent className="pb-3 flex-grow">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin size={14} className="mr-1 text-gray-400" />
                        <span>{doctor.location}</span>
                        <span className="ml-2 text-xs font-medium text-health-primary">({doctor.distance})</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 text-sm mb-3">
                        <div className="flex items-center bg-gray-50 text-gray-700 px-2 py-1 rounded-full">
                          <Star size={14} className="mr-1 fill-yellow-500 text-yellow-500" />
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 text-gray-700 px-2 py-1 rounded-full">
                          <Clock size={14} className="mr-1" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {doctor.about}
                      </p>
                      
                      <div className="mt-3 flex items-center text-sm text-health-primary">
                        <Calendar size={14} className="mr-1" />
                        <span>Next available: {doctor.nextAvailable}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex gap-2 w-full">
                        <Button 
                          variant="outline" 
                          className="flex-1 text-sm"
                          onClick={() => window.location.href = `/doctors/${doctor.id}`}
                        >
                          View Profile
                        </Button>
                        <Button 
                          className="flex-1 text-sm"
                          onClick={() => window.location.href = `/consultation/book/${doctor.id}`}
                        >
                          Book
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="available" className="mt-0">
            {/* Filter by availability today */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors
                .filter(doctor => doctor.nextAvailable.includes("Today"))
                .map((doctor) => (
                  <Card key={doctor.id} className="shadow-sm hover:shadow-md transition-shadow border-gray-100 overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Available Today
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <p className="text-health-primary font-medium text-sm">{doctor.specialty}</p>
                    </CardHeader>
                    
                    <CardContent className="pb-3 flex-grow">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin size={14} className="mr-1 text-gray-400" />
                        <span>{doctor.location}</span>
                        <span className="ml-2 text-xs text-gray-400">({doctor.distance})</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 text-sm mb-3">
                        <div className="flex items-center bg-gray-50 text-gray-700 px-2 py-1 rounded-full">
                          <Star size={14} className="mr-1 fill-yellow-500 text-yellow-500" />
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 text-gray-700 px-2 py-1 rounded-full">
                          <Clock size={14} className="mr-1" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {doctor.about}
                      </p>
                      
                      <div className="mt-3 flex items-center text-sm text-green-600 font-medium">
                        <Calendar size={14} className="mr-1" />
                        <span>{doctor.nextAvailable}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex gap-2 w-full">
                        <Button 
                          variant="outline" 
                          className="flex-1 text-sm"
                          onClick={() => window.location.href = `/doctors/${doctor.id}`}
                        >
                          View Profile
                        </Button>
                        <Button 
                          className="flex-1 text-sm"
                          onClick={() => window.location.href = `/consultation/book/${doctor.id}`}
                        >
                          Book
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {filteredDoctors.length > 6 && (
          <div className="mt-10 text-center">
            <Button>
              Load More Doctors
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-health-primary to-health-secondary rounded-2xl p-8 text-white">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-3">Join Our Healthcare Provider Network</h2>
              <p className="text-white/90 max-w-lg">
                Are you a healthcare professional? Partner with HealthSphere to expand your practice
                and connect with patients through our platform.
              </p>
            </div>
            <div>
              <AnimatedButton
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = "/provider-signup"}
              >
                Partner With Us
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctors;
