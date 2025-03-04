
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { images } from "@/assets/images";
import { Heart, Activity, Phone, Watch, Check, X, ArrowRight } from "lucide-react";

const HealthDevices = () => {
  const deviceTypes = [
    {
      id: "wearables",
      name: "Wearables",
      devices: [
        {
          name: "Fitness Trackers",
          description: "Track steps, calories, sleep patterns, and basic activity metrics.",
          compatibility: "High",
          metrics: ["Steps", "Distance", "Calories", "Sleep duration", "Active minutes"],
          recommended: ["Fitbit Inspire 3", "Xiaomi Mi Band 7", "Samsung Galaxy Fit2"],
          image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Smartwatches",
          description: "Advanced wearables that track health metrics and provide smart notifications.",
          compatibility: "High",
          metrics: ["Heart rate", "ECG (some models)", "Blood oxygen", "Sleep stages", "Stress levels", "Activity tracking"],
          recommended: ["Apple Watch Series 8", "Samsung Galaxy Watch 5", "Garmin Venu 2"],
          image: "https://images.unsplash.com/photo-1544117519-31a4a39e9a47?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Advanced Health Bands",
          description: "Specialized bands focused on health metrics rather than smart features.",
          compatibility: "Medium",
          metrics: ["Heart rate variability", "Body temperature", "Detailed sleep analysis", "Respiratory rate"],
          recommended: ["Whoop 4.0", "Oura Ring Gen 3", "Amazon Halo"],
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b5?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "monitors",
      name: "Health Monitors",
      devices: [
        {
          name: "Blood Pressure Monitors",
          description: "Devices that measure systolic and diastolic blood pressure.",
          compatibility: "Medium",
          metrics: ["Systolic pressure", "Diastolic pressure", "Pulse rate"],
          recommended: ["Omron Platinum", "Withings BPM Connect", "QardioArm"],
          image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b9531?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Glucose Monitors",
          description: "Devices for monitoring blood glucose levels, especially important for diabetes management.",
          compatibility: "Medium",
          metrics: ["Blood glucose levels", "Glucose trends"],
          recommended: ["Freestyle Libre 2", "Dexcom G6", "Contour Next One"],
          image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Heart Rate Monitors",
          description: "Dedicated devices for accurate heart rate measurement during activity.",
          compatibility: "High",
          metrics: ["Heart rate", "Heart rate zones", "Calories burned"],
          recommended: ["Polar H10", "Wahoo TICKR X", "Garmin HRM-Pro"],
          image: "https://images.unsplash.com/photo-1559348349-86112f1a31a8?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "scales",
      name: "Smart Scales",
      devices: [
        {
          name: "Body Composition Scales",
          description: "Smart scales that measure weight and body composition metrics.",
          compatibility: "High",
          metrics: ["Weight", "Body fat percentage", "Muscle mass", "Water percentage", "Bone mass", "BMI"],
          recommended: ["Withings Body+", "Eufy Smart Scale P2 Pro", "Fitbit Aria Air"],
          image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "sleep",
      name: "Sleep Trackers",
      devices: [
        {
          name: "Dedicated Sleep Monitors",
          description: "Devices specifically designed to track sleep quality and patterns.",
          compatibility: "Medium",
          metrics: ["Sleep duration", "Sleep stages", "Breathing disturbances", "Snoring", "Room temperature"],
          recommended: ["Withings Sleep", "Beddit 3.5", "SleepScore Max"],
          image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Sleep Earbuds",
          description: "Earbuds designed to improve sleep quality and track sleep metrics.",
          compatibility: "Low",
          metrics: ["Sleep duration", "Movement", "Heart rate"],
          recommended: ["Bose Sleepbuds II", "Kokoon Nightbuds"],
          image: "https://images.unsplash.com/photo-1590658006821-04f4008d5717?auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Connect</span> Your Health Devices
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HealthSphere integrates with a wide range of health monitoring devices to help you 
              track your vitals and health metrics seamlessly.
            </p>
          </div>
          
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up animate-delay-100">
              <h2 className="text-2xl font-bold mb-4">Why Connect Your Devices?</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-3 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Comprehensive Health Tracking</h3>
                    <p className="text-gray-600 text-sm">Consolidate all your health data in one place for a complete picture of your health.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-3 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Insights</h3>
                    <p className="text-gray-600 text-sm">Get AI-powered insights based on your personal health data and trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-3 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Share with Healthcare Providers</h3>
                    <p className="text-gray-600 text-sm">Easily share your health metrics with doctors during virtual consultations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-3 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Track Progress Over Time</h3>
                    <p className="text-gray-600 text-sm">Monitor your health progress with detailed historical data and trends.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/health-tracking">
                  <AnimatedButton size="lg">
                    Go to Health Tracking
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-feature animate-fade-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=1000&q=80" 
                alt="Person using health tracking devices"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-16 animate-fade-up animate-delay-300">
            <h2 className="text-2xl font-bold mb-8 text-center">Compatible Health Devices</h2>
            
            <Tabs defaultValue="wearables">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {deviceTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id}>
                    {type.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {deviceTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {type.devices.map((device, index) => (
                      <div key={index} className="glass-card overflow-hidden">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={device.image} 
                            alt={device.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{device.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{device.description}</p>
                          
                          <div className="flex items-center mb-3">
                            <span className="text-sm font-medium mr-2">Compatibility:</span>
                            <span className={`text-sm px-2 py-0.5 rounded-full ${
                              device.compatibility === "High" 
                                ? "bg-green-100 text-green-700" 
                                : device.compatibility === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                              {device.compatibility}
                            </span>
                          </div>
                          
                          <div className="mb-3">
                            <span className="text-sm font-medium">Key Metrics:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {device.metrics.slice(0, 3).map((metric, i) => (
                                <span key={i} className="text-xs bg-health-muted px-2 py-0.5 rounded-full">
                                  {metric}
                                </span>
                              ))}
                              {device.metrics.length > 3 && (
                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                                  +{device.metrics.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium">Recommended Models:</span>
                            <ul className="text-xs text-gray-600 mt-1 space-y-1">
                              {device.recommended.map((model, i) => (
                                <li key={i}>{model}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="mb-16 bg-gradient-to-r from-health-primary to-health-secondary rounded-3xl overflow-hidden shadow-xl animate-fade-up animate-delay-400">
            <div className="p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Connect Your Devices</h2>
                  <p className="text-white/90 mb-6">
                    Connecting your health devices to HealthSphere is easy. Follow these simple steps:
                  </p>
                  
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center mr-3">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Create or log in to your HealthSphere account</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center mr-3">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Go to the Health Tracking section</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center mr-3">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Select "Connect Devices" and choose your device</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center mr-3">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Follow the on-screen instructions to complete connection</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-white/10 rounded-full blur-lg"></div>
                    <div className="relative rounded-full bg-white/20 p-4">
                      <div className="rounded-full bg-white/90 p-6">
                        <Phone size={120} className="text-health-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-fade-up animate-delay-500">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Tracking Your Health?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Connect your devices now and start monitoring your health metrics seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/health-tracking">
                <AnimatedButton 
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Connect Your Devices
                </AnimatedButton>
              </Link>
              <Link to="/dashboard">
                <AnimatedButton 
                  variant="outline" 
                  size="lg"
                >
                  View Your Dashboard
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthDevices;
