
import React from "react";
import Layout from "@/components/layout/Layout";
import HealthTracker from "@/components/features/HealthTracker";
import { Activity, Heart, Moon, LineChart, ArrowRight } from "lucide-react";
import { images } from "@/assets/images";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Link } from "react-router-dom";

const HealthTracking = () => {
  // Sample metrics data
  const metrics = [
    {
      id: 1,
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      icon: <Heart className="text-red-500" />,
      image: images.heartRate,
      description: "Track your heart rate over time and monitor patterns."
    },
    {
      id: 2,
      title: "Daily Activity",
      value: "8,540",
      unit: "steps",
      icon: <Activity className="text-green-500" />,
      image: images.activity,
      description: "Monitor your daily steps, exercise, and calories burned."
    },
    {
      id: 3,
      title: "Sleep",
      value: "7.5",
      unit: "hours",
      icon: <Moon className="text-purple-500" />,
      image: images.sleep,
      description: "Analyze your sleep patterns for better rest and health."
    }
  ];

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Monitor & Analyze
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Track Your Health Metrics
            </h1>
            <p className="text-gray-600">
              Monitor your vital health metrics, get personalized insights, and take control of your well-being
              with our advanced tracking tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-up">
              <div className="relative rounded-3xl overflow-hidden shadow-feature animate-float h-[500px]">
                <img 
                  src={images.healthTracking} 
                  alt="Health tracking dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Health Monitoring</h3>
                  <p className="text-white/80">Connect with wearable devices or manually track your health metrics</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-up animate-delay-100">
              <h2 className="text-2xl font-bold mb-6">Key Health Metrics</h2>
              
              <div className="space-y-6">
                {metrics.map((metric) => (
                  <div key={metric.id} className="glass-card p-4 flex items-center group hover:border-health-primary hover:shadow-md transition-all">
                    <div className="h-16 w-16 rounded-xl bg-gray-100 flex items-center justify-center mr-4 overflow-hidden">
                      {metric.image ? (
                        <img src={metric.image} alt={metric.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <div className="text-2xl">{metric.icon}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{metric.title}</h3>
                        <div className="flex items-baseline">
                          <span className="text-xl font-bold text-health-primary">{metric.value}</span>
                          <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/detailed-analytics">
                  <AnimatedButton
                    icon={<LineChart size={18} className="mr-2" />}
                    iconPosition="left"
                  >
                    View Detailed Analytics
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-health-muted/30 rounded-3xl p-8 md:p-12 animate-fade-up animate-delay-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Interactive Health Dashboard</h2>
              
              <div className="h-[600px]">
                <HealthTracker />
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/connect-devices">
                  <AnimatedButton 
                    variant="primary" 
                    size="lg"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Connect Your Devices
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthTracking;
