
import React, { useState } from "react";
import { Book, ChevronRight, Tag, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "@/components/ui/SafeImage";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const EducationHub = () => {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Mock education data - expanded with more articles and categories
  const articles = [
    {
      id: 1,
      title: "Understanding Common Cold Symptoms",
      excerpt: "Learn how to identify cold symptoms and the best ways to treat them at home. This comprehensive guide covers symptom recognition, over-the-counter treatments, and when to seek medical attention.",
      image: "https://images.unsplash.com/photo-1578496479932-722d0af02643?auto=format&fit=crop&w=800&q=80",
      category: "Health Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Nutrition Basics for a Healthy Lifestyle",
      excerpt: "Discover the essential nutrients your body needs and how to incorporate them into your diet. This article explores local Kenyan superfoods and their health benefits for sustainable wellness.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      category: "Nutrition",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Importance of Mental Health",
      excerpt: "Understand why mental health matters and simple practices to maintain it. This guide covers stress management techniques, mindfulness practices, and when to seek professional help.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      category: "Mental Health",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Preventative Healthcare Practices in Kenya",
      excerpt: "Explore essential preventative healthcare measures relevant to common health concerns in Kenya. Learn about regular screenings, vaccinations, and lifestyle adjustments to prevent illness.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      category: "Preventative Care",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Understanding Diabetes Management",
      excerpt: "A comprehensive guide to managing diabetes with proper nutrition, medication adherence, and lifestyle modifications tailored to the Kenyan context and locally available resources.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      category: "Chronic Conditions",
      readTime: "10 min read"
    }
  ];
  
  // Get unique categories for filter
  const categories = Array.from(new Set(articles.map(article => article.category)));
  
  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="glass-card h-full p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Book size={24} className="text-health-primary mr-2" />
        Health Education Hub
      </h3>
      
      {/* Search and filter section */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search articles..."
            className="pl-10 bg-white/70"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <Filter size={16} className="text-gray-500 mr-1" />
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            className="rounded-full text-xs"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs whitespace-nowrap"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Articles list */}
      <div className="grid grid-cols-1 gap-6 overflow-y-auto">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="glass-card p-0 overflow-hidden group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <SafeImage 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholderType="article"
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
                    <Link to={`/articles`} className="text-health-primary flex items-center text-sm font-medium hover:underline">
                      Read Article
                      <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No articles found matching your search criteria.</p>
            <Button 
              variant="link" 
              className="mt-2" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/articles" className="text-health-primary font-medium flex items-center mx-auto hover:underline">
          View All Articles
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default EducationHub;
