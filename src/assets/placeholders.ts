
// Placeholder images for development
export const placeholders = {
  logo: "https://placehold.co/120x120?text=HealthSphere",
  hero: "https://placehold.co/1400x600?text=Hero+Image",
  doctor: "https://placehold.co/300x300?text=Doctor",
  feature: "https://placehold.co/800x500?text=Feature",
  avatar: "https://placehold.co/300x300?text=User",
  chart: "https://placehold.co/600x400?text=Health+Chart",
  article: "https://placehold.co/800x500?text=Article",
  consultation: "https://placehold.co/800x500?text=Consultation",
};

// Helper function to get a placeholder with specific dimensions
export function getPlaceholder(width: number, height: number, text: string = "Image") {
  return `https://placehold.co/${width}x${height}?text=${encodeURIComponent(text)}`;
}
