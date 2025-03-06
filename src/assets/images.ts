
// Import the unused but working implementation
import { images as existingImages, getImage as existingGetImage } from './images/index';

// Add additional fallbacks for common missing images
const additionalFallbacks = {
  activity: "https://images.unsplash.com/photo-1451975606177-8fa15a12cdf9?auto=format&fit=crop&w=600&q=80",
  heartRate: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  sleep: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
  healthTracking: "https://images.unsplash.com/photo-1559447066-49724f6ffb5c?auto=format&fit=crop&w=800&q=80",
  virtualConsultation: "https://images.unsplash.com/photo-1609904603780-26239ef9e128?auto=format&fit=crop&w=800&q=80",
  symptomAnalysis: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
};

// Merge any additional fallbacks with existing images
const mergedImages = {
  ...existingImages,
  ...additionalFallbacks
};

// Export enhanced images and getImage function
export const images = mergedImages;

// Enhanced getImage function with improved fallback handling
export const getImage = (key: keyof typeof mergedImages) => {
  try {
    // First try to use the existingGetImage function
    return existingGetImage(key as keyof typeof existingImages);
  } catch (error) {
    console.error(`Error loading image using existingGetImage: ${key}`, error);
    
    // If that fails, try to use our additional fallbacks
    if (additionalFallbacks[key as keyof typeof additionalFallbacks]) {
      return additionalFallbacks[key as keyof typeof additionalFallbacks];
    }
    
    // Last resort fallback
    return "https://placehold.co/400x300?text=Image+Not+Found";
  }
};
