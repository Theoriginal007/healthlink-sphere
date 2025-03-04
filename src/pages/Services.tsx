
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Stethoscope, Brain, Activity, Heart, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const coreServices = [
    {
      title: "Symptom Analysis",
      description: "Advanced AI-driven symptom checking that helps identify potential health concerns.",
      icon: <Brain className="h-12 w-12 text-health-primary mb-4" />,
      features: [
        "Natural language symptom description",
        "Personalized health insights",
        "Condition probability assessment",
        "Integration with medical database",
        "Follow-up recommendations"
      ]
    },
    {
      title: "Health Tracking",
      description: "Comprehensive tools to monitor your vital signs, medication, and health metrics.",
      icon: <Activity className="h-12 w-12 text-health-primary mb-4" />,
      features: [
        "Vital signs monitoring",
        "Medication tracking & reminders",
        "Exercise and activity logging",
        "Sleep quality analysis",
        "Nutrition and diet tracking"
      ]
    },
    {
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals from the comfort of your home.",
      icon: <Stethoscope className="h-12 w-12 text-health-primary mb-4" />,
      features: [
        "Video and audio consultations",
        "Secure messaging with providers",
        "Digital prescription services",
        "Specialist referrals",
        "Follow-up appointment scheduling"
      ]
    },
    {
      title: "Health Education",
      description: "Evidence-based medical information and personalized health education resources.",
      icon: <Heart className="h-12 w-12 text-health-primary mb-4" />,
      features: [
        "Condition-specific information",
        "Preventive health guidelines",
        "Medical term definitions",
        "Treatment option explanations",
        "Wellness and lifestyle articles"
      ]
    }
  ];

  const premiumServices = [
    {
      title: "Personal Health Assistant",
      description: "Your dedicated AI health companion providing personalized health insights.",
      features: [
        "24/7 health guidance and support",
        "Personalized health recommendations",
        "Medication and appointment reminders",
        "Symptom monitoring and alerts",
        "Health goal tracking and motivation"
      ]
    },
    {
      title: "Family Health Management",
      description: "Manage the health of your entire family with comprehensive tracking and insights.",
      features: [
        "Multiple family member profiles",
        "Child growth and development tracking",
        "Family health history management",
        "Shared calendar for appointments",
        "Family medication management"
      ]
    },
    {
      title: "Advanced Health Analytics",
      description: "In-depth analysis of your health data with predictive insights and trends.",
      features: [
        "Comprehensive health reports",
        "Predictive health analytics",
        "Condition risk assessments",
        "Long-term health trending",
        "Data integration with medical devices"
      ]
    }
  ];

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-health-muted to-white pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-health-primary bg-health-muted rounded-full">
              Our Services
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-gray-600">
              HealthSphere provides a range of innovative healthcare services designed to empower you 
              to take control of your health journey with advanced technology and personalized care.
            </p>
          </div>

          <Tabs defaultValue="core" className="w-full mb-16">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="core">Core Services</TabsTrigger>
              <TabsTrigger value="premium">Premium Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="core">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreServices.map((service, index) => (
                  <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <CardHeader className="text-center pb-2">
                      <div className="flex justify-center">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-4">
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2 text-left">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={() => window.location.href = `/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="premium">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {premiumServices.map((service, index) => (
                  <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-gradient-to-b from-white to-health-muted/20">
                    <CardHeader className="text-center pb-2">
                      <div className="inline-block p-3 rounded-full bg-health-muted text-health-primary mb-4">
                        <Shield className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-4">
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2 text-left">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" onClick={() => window.location.href = "/premium-services"}>
                        Get Premium <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-health-primary to-health-secondary text-white text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Take Your Healthcare to the Next Level</h2>
                <p className="mb-6">
                  Unlock all premium features and get personalized healthcare support with a HealthSphere Premium subscription.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    View Pricing Plans
                  </Button>
                  <Button className="bg-white text-health-primary hover:bg-white/90">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-left mt-8">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">How do I get started with HealthSphere?</h3>
                <p className="text-sm text-gray-600 mt-2">
                  You can sign up for a free account and start using our basic services immediately.
                  We offer a guided onboarding process to help you set up your profile and preferences.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Are my health data secure?</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Yes, we take data security very seriously. All your health information is encrypted and
                  stored securely in compliance with healthcare privacy standards. We never share your
                  personal health information without your explicit consent.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">What's the difference between free and premium services?</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Our free services include basic symptom analysis, limited health tracking, and general
                  health education. Premium services provide more advanced features, personalized insights,
                  unlimited tracking, priority virtual consultations, and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
