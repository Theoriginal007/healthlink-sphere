
import React from "react";
import Layout from "@/components/layout/Layout";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const ComingSoon = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-health-muted rounded-full mb-6 animate-bounce">
            <Clock className="h-8 w-8 text-health-primary" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Coming Soon</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            We're working hard to bring you this feature. Please check back soon!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <AnimatedButton 
                variant="outline" 
                size="lg"
                icon={<ArrowLeft size={18} className="mr-2" />}
                iconPosition="left"
              >
                Return to Home
              </AnimatedButton>
            </Link>
            
            <Link to="/get-started">
              <AnimatedButton 
                size="lg"
                icon={<Calendar size={18} className="mr-2" />}
                iconPosition="left"
              >
                Notify Me When Ready
              </AnimatedButton>
            </Link>
          </div>
          
          <div className="bg-health-muted/30 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">While you wait...</h3>
            <p className="text-gray-600">
              Explore our other available features or check out our educational resources to learn more about healthcare.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoon;
