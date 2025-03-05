
import React from "react";
import { Heart, Activity, Moon, TrendingUp } from "lucide-react";
import { images, getImage } from "@/assets/images";
import { placeholders } from "@/assets/placeholders";

const HealthTracker = () => {
  // Mock health data
  const healthData = {
    heartRate: {
      current: 72,
      min: 62,
      max: 110,
      trend: "stable",
      unit: "bpm"
    },
    activity: {
      current: 8420,
      goal: 10000,
      progress: 84,
      unit: "steps"
    },
    sleep: {
      current: 7.5,
      goal: 8,
      quality: "good",
      unit: "hours"
    }
  };
  
  // Function to safely get an image or use placeholder as fallback
  const safeGetImage = (key: keyof typeof images) => {
    try {
      return getImage(key);
    } catch (e) {
      console.error(`Failed to load image: ${key}`, e);
      return placeholders.chart;
    }
  };
  
  return (
    <div className="glass-card h-full p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Activity size={24} className="text-health-primary mr-2" />
        Health Tracking Dashboard
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Heart Rate Card */}
        <div className="glass-card p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <Heart size={20} className="text-red-500" />
            <span className="ml-2 font-medium text-gray-700">Heart Rate</span>
          </div>
          
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">{healthData.heartRate.current}</span>
            <span className="text-gray-500 mb-1">{healthData.heartRate.unit}</span>
          </div>
          
          <div className="text-xs text-gray-500 mt-1">
            Range: {healthData.heartRate.min}-{healthData.heartRate.max} {healthData.heartRate.unit}
          </div>
          
          <div className="mt-4 h-20 relative overflow-hidden rounded-lg">
            <img 
              src={safeGetImage('heartRate')} 
              alt="Heart rate chart" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = placeholders.chart;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Activity Card */}
        <div className="glass-card p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <TrendingUp size={20} className="text-green-500" />
            <span className="ml-2 font-medium text-gray-700">Daily Activity</span>
          </div>
          
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">{healthData.activity.current.toLocaleString()}</span>
            <span className="text-gray-500 mb-1">{healthData.activity.unit}</span>
          </div>
          
          <div className="text-xs text-gray-500 mt-1">
            Goal: {healthData.activity.goal.toLocaleString()} {healthData.activity.unit}
          </div>
          
          <div className="mt-3 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
              style={{ width: `${healthData.activity.progress}%` }}
            ></div>
          </div>
          
          <div className="mt-2 h-20 relative overflow-hidden rounded-lg">
            <img 
              src={safeGetImage('activity')} 
              alt="Activity chart" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = placeholders.chart;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Sleep Card */}
        <div className="glass-card p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <Moon size={20} className="text-indigo-500" />
            <span className="ml-2 font-medium text-gray-700">Sleep</span>
          </div>
          
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">{healthData.sleep.current}</span>
            <span className="text-gray-500 mb-1">{healthData.sleep.unit}</span>
          </div>
          
          <div className="text-xs text-gray-500 mt-1">
            Quality: {healthData.sleep.quality.charAt(0).toUpperCase() + healthData.sleep.quality.slice(1)}
          </div>
          
          <div className="mt-3 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"
              style={{ width: `${(healthData.sleep.current / healthData.sleep.goal) * 100}%` }}
            ></div>
          </div>
          
          <div className="mt-2 h-20 relative overflow-hidden rounded-lg">
            <img 
              src={safeGetImage('sleep')} 
              alt="Sleep chart" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = placeholders.chart;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto text-center">
        <p className="text-sm text-gray-500">
          HealthSphere uses advanced AI algorithms to analyze your health data and provide personalized insights.
        </p>
      </div>
    </div>
  );
};

export default HealthTracker;
