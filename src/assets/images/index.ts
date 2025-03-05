
// Export all local images from this file
import logo from './logo.png';
import hero from './hero.jpg';
import doctorWithTablet from './doctor-with-tablet.jpg';
import patientConsultation from './patient-consultation.jpg';
import symptomAnalysis from './symptom-analysis.jpg';
import healthTracking from './health-tracking.jpg';
import education from './education.jpg';
import virtualConsultation from './virtual-consultation.jpg';
import heartRate from './heart-rate.jpg';
import activity from './activity.jpg';
import sleep from './sleep.jpg';
import avatar1 from './avatar1.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';
import abstractBlue from './abstract-blue.jpg';
import abstractCyan from './abstract-cyan.jpg';

// Local images export
export const localImages = {
  logo,
  hero,
  doctorWithTablet,
  patientConsultation,
  symptomAnalysis,
  healthTracking,
  education,
  virtualConsultation,
  heartRate,
  activity,
  sleep,
  avatar1,
  avatar2,
  avatar3,
  abstractBlue,
  abstractCyan,
};

// Fallback to URL-based images when local ones aren't available
export const fallbackImages = {
  // Brand assets
  logo: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=120&h=120&q=80",
  
  // Hero section
  hero: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=2000&q=80",
  doctorWithTablet: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
  patientConsultation: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80",
  
  // Feature illustrations
  symptomAnalysis: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  healthTracking: "https://images.unsplash.com/photo-1559447066-49724f6ffb5c?auto=format&fit=crop&w=800&q=80",
  education: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
  virtualConsultation: "https://images.unsplash.com/photo-1609904603780-26239ef9e128?auto=format&fit=crop&w=800&q=80",
  
  // Health metrics
  heartRate: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  activity: "https://images.unsplash.com/photo-1451975606177-8fa15a12cdf9?auto=format&fit=crop&w=600&q=80",
  sleep: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
  
  // User profiles
  avatar1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
  avatar2: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80",
  avatar3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80",
  
  // Abstract backgrounds
  abstractBlue: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=2000&q=80",
  abstractCyan: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=2000&q=80",
};

// Create a combined object with error handling for image loading
export const images = {
  ...fallbackImages,
  // Add more local image references here if needed
};

// Function to use local image with fallback to URL if the local image fails to load
export function getImage(key: keyof typeof images) {
  try {
    // Try to use the local image first
    if (localImages[key as keyof typeof localImages]) {
      return localImages[key as keyof typeof localImages];
    }
    // Fallback to URL
    return images[key];
  } catch (error) {
    console.error(`Error loading image: ${key}`, error);
    // Return a placeholder if both local and remote fail
    return "https://placehold.co/400x300?text=Image+Not+Found";
  }
}
