
import React from "react";
import { Book, ChevronRight, Tag } from "lucide-react";
import { images } from "@/assets/images";

const EducationHub = () => {
  // Mock education data
  const articles = [
    {
      id: 1,
      title: "Understanding Common Cold Symptoms",
      excerpt: "Learn how to identify cold symptoms and the best ways to treat them at home.",
      image: "https://images.unsplash.com/photo-1578496479932-722d0af02643?auto=format&fit=crop&w=800&q=80",
      category: "Health Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Nutrition Basics for a Healthy Lifestyle",
      excerpt: "Discover the essential nutrients your body needs and how to incorporate them into your diet.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      category: "Nutrition",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Importance of Mental Health",
      excerpt: "Understand why mental health matters and simple practices to maintain it.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      category: "Mental Health",
      readTime: "6 min read"
    }
  ];
  
  return (
    <div className="glass-card h-full p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Book size={24} className="text-health-primary mr-2" />
        Health Education Hub
      </h3>
      
      <div className="grid grid-cols-1 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="glass-card p-0 overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex items-center px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-health-primary">
                    <Tag size={12} className="mr-1" />
                    {article.category}
                  </div>
                </div>
              </div>
              
              <div className="p-5 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-health-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <button className="text-health-primary flex items-center text-sm font-medium hover:underline">
                    Read Article
                    <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-health-primary font-medium flex items-center mx-auto hover:underline">
          View All Articles
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default EducationHub;
