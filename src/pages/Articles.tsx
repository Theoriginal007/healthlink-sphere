
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search, Tag, Calendar, Clock, BookOpen } from "lucide-react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample article data
  const articles = [
    {
      id: 1,
      title: "Understanding Common Cold Symptoms and Home Remedies",
      excerpt: "Learn how to identify common cold symptoms and the most effective ways to treat them at home with simple remedies and self-care practices.",
      image: "https://images.unsplash.com/photo-1578496479932-722d0af02643?auto=format&fit=crop&w=800&q=80",
      category: "Health Tips",
      readTime: "8 min read",
      date: "May 15, 2023",
      author: "Dr. Sarah Johnson",
      featured: true,
      content: "Full article content here...",
      tags: ["cold", "flu", "remedies", "wellness"]
    },
    {
      id: 2,
      title: "The Essential Guide to Balanced Nutrition",
      excerpt: "Discover the fundamentals of a balanced diet and learn how to incorporate essential nutrients into your daily meals for optimal health and wellbeing.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      category: "Nutrition",
      readTime: "12 min read",
      date: "June 3, 2023",
      author: "Maria Rodriguez, RD",
      featured: true,
      content: "Full article content here...",
      tags: ["nutrition", "diet", "health", "wellness"]
    },
    {
      id: 3,
      title: "Mental Health Matters: Simple Practices for Daily Wellbeing",
      excerpt: "Explore practical strategies and daily habits that can significantly improve your mental health and emotional resilience in today's fast-paced world.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      category: "Mental Health",
      readTime: "10 min read",
      date: "April 22, 2023",
      author: "Dr. Michael Chen",
      featured: false,
      content: "Full article content here...",
      tags: ["mental health", "wellness", "self-care", "mindfulness"]
    },
    {
      id: 4,
      title: "Seasonal Allergies: Causes, Symptoms, and Management",
      excerpt: "Learn about the common triggers for seasonal allergies, how to recognize symptoms, and effective strategies to manage and reduce allergic reactions.",
      image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=800&q=80",
      category: "Allergies",
      readTime: "7 min read",
      date: "March 10, 2023",
      author: "Dr. Lisa Anderson",
      featured: false,
      content: "Full article content here...",
      tags: ["allergies", "seasonal", "health", "treatments"]
    },
    {
      id: 5,
      title: "Improving Sleep Quality: Science-Backed Approaches",
      excerpt: "Discover evidence-based techniques and lifestyle changes that can help you achieve better sleep quality and wake up feeling more refreshed.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      category: "Sleep Health",
      readTime: "9 min read",
      date: "July 8, 2023",
      author: "Dr. James Wilson",
      featured: false,
      content: "Full article content here...",
      tags: ["sleep", "health", "wellness", "insomnia"]
    },
    {
      id: 6,
      title: "Exercise Fundamentals: Building a Sustainable Fitness Routine",
      excerpt: "Learn how to create an exercise plan that fits your lifestyle and goals, with tips for staying motivated and preventing common workout injuries.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80",
      category: "Fitness",
      readTime: "11 min read",
      date: "February 18, 2023",
      author: "Thomas Wright, CPT",
      featured: false,
      content: "Full article content here...",
      tags: ["fitness", "exercise", "workout", "health"]
    }
  ];

  const categories = [
    "All",
    "Health Tips",
    "Nutrition",
    "Mental Health",
    "Fitness",
    "Sleep Health",
    "Allergies"
  ];

  // Filter articles based on search query
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Featured articles
  const featuredArticles = articles.filter(article => article.featured);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
            Health Education
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
            Health Articles & Resources
          </h1>
          <p className="text-gray-600">
            Evidence-based health information and articles written by medical professionals
            to help you make informed decisions about your health.
          </p>
        </div>

        {/* Search and filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="search"
              placeholder="Search articles by title, content, or tags..."
              className="pl-10 py-6 text-base rounded-full border-gray-200 focus:border-health-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`rounded-full ${category === 'All' ? 'bg-health-primary text-white' : ''}`}
                onClick={() => {
                  if (category === 'All') {
                    setSearchQuery("");
                  } else {
                    setSearchQuery(category);
                  }
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Articles Section */}
        {searchQuery === "" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <BookOpen className="mr-2 text-health-primary" size={24} />
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                  <div className="md:flex h-full">
                    <div className="md:w-2/5 h-60 md:h-auto relative">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-health-primary">
                          <Tag size={14} className="mr-1" />
                          {article.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-health-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {article.excerpt}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar size={14} className="mr-1" />
                          <span className="mr-4">{article.date}</span>
                          <Clock size={14} className="mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">
                          By <span className="font-medium">{article.author}</span>
                        </p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-health-primary font-medium hover:text-health-secondary flex items-center"
                          onClick={() => window.location.href = `/articles/${article.id}`}
                        >
                          Read Full Article
                          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Articles Section */}
        <Tabs defaultValue="latest" className="w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              {searchQuery ? "Search Results" : "All Articles"}
              {searchQuery && <span className="ml-2 text-lg font-normal text-gray-500">for "{searchQuery}"</span>}
            </h2>
            
            <TabsList>
              <TabsTrigger value="latest">Latest</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="latest" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col group">
                    <div className="relative h-48">
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
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-health-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-health-primary font-medium hover:text-health-secondary flex items-center"
                          onClick={() => window.location.href = `/articles/${article.id}`}
                        >
                          Read Article
                          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No articles found matching your search. Try different keywords.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.length > 0 ? (
                // For demo purposes, just show the same articles in reverse order for "popular" tab
                [...filteredArticles].reverse().map((article) => (
                  <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col group">
                    <div className="relative h-48">
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
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-health-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-health-primary font-medium hover:text-health-secondary flex items-center"
                          onClick={() => window.location.href = `/articles/${article.id}`}
                        >
                          Read Article
                          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No articles found matching your search. Try different keywords.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        {filteredArticles.length > 6 && (
          <div className="mt-10 text-center">
            <Button>
              Load More Articles
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-health-muted/50 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest health articles, tips, and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="rounded-full"
            />
            <Button className="rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
