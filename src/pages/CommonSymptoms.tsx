
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { ArrowRight } from "lucide-react";

const CommonSymptoms = () => {
  const categories = [
    {
      id: "respiratory",
      name: "Respiratory",
      symptoms: [
        {
          name: "Cough",
          description: "A cough is a sudden, forceful expulsion of air from the lungs. It can be voluntary or involuntary and may be dry or produce phlegm.",
          causes: "Common causes include respiratory infections, allergies, asthma, and GERD.",
          whenToSee: "If a cough persists for more than 2 weeks, is accompanied by fever, or if you're coughing up blood."
        },
        {
          name: "Shortness of Breath",
          description: "A sensation of difficult or uncomfortable breathing, or feeling like you can't get enough air.",
          causes: "Can be caused by physical exertion, anxiety, asthma, pneumonia, or heart conditions.",
          whenToSee: "If it's severe, comes on suddenly, occurs at rest, or is accompanied by chest pain."
        },
        {
          name: "Sore Throat",
          description: "Pain, scratchiness, or irritation of the throat that often worsens when swallowing.",
          causes: "Viral infections, bacterial infections, allergies, dry air, or irritants.",
          whenToSee: "If the pain is severe, lasts longer than a week, or is accompanied by difficulty swallowing."
        },
        {
          name: "Nasal Congestion",
          description: "Stuffiness in the nasal passages due to inflamed blood vessels.",
          causes: "Common cold, flu, allergies, or sinus infections.",
          whenToSee: "If it lasts more than 10 days, or is accompanied by severe headache or facial pain."
        }
      ]
    },
    {
      id: "digestive",
      name: "Digestive",
      symptoms: [
        {
          name: "Nausea",
          description: "An uneasy sensation in the stomach with an urge to vomit.",
          causes: "Food poisoning, motion sickness, infection, pregnancy, or medication side effects.",
          whenToSee: "If it persists for more than two days, or is accompanied by severe abdominal pain."
        },
        {
          name: "Vomiting",
          description: "The forceful expulsion of stomach contents through the mouth.",
          causes: "Viral infections, food poisoning, migraines, pregnancy, or inner ear disorders.",
          whenToSee: "If it contains blood, occurs with severe headache, or if you can't keep liquids down for 24 hours."
        },
        {
          name: "Diarrhea",
          description: "Loose, watery stools occurring more frequently than usual.",
          causes: "Viral or bacterial infections, food intolerances, medications, or digestive disorders.",
          whenToSee: "If it lasts more than 2 days, contains blood, or is accompanied by severe pain or high fever."
        },
        {
          name: "Abdominal Pain",
          description: "Pain felt between the chest and groin.",
          causes: "Indigestion, constipation, menstrual cramps, or more serious conditions like appendicitis.",
          whenToSee: "If pain is sudden and severe, or is accompanied by fever, vomiting, or blood in stool."
        }
      ]
    },
    {
      id: "neurological",
      name: "Neurological",
      symptoms: [
        {
          name: "Headache",
          description: "Pain in any region of the head.",
          causes: "Stress, dehydration, lack of sleep, eye strain, or more serious conditions like migraines.",
          whenToSee: "If it's the 'worst headache of your life,' comes on suddenly, or is accompanied by fever, stiff neck, or confusion."
        },
        {
          name: "Dizziness",
          description: "A sensation of spinning or disorientation.",
          causes: "Inner ear problems, low blood pressure, anemia, medication side effects, or dehydration.",
          whenToSee: "If it's recurring, happens suddenly, or is accompanied by fainting, chest pain, or numbness."
        },
        {
          name: "Fatigue",
          description: "Extreme tiredness or lack of energy that doesn't improve with rest.",
          causes: "Lack of sleep, stress, anemia, depression, or chronic conditions like fibromyalgia.",
          whenToSee: "If it's severe, lasts for weeks, or significantly impacts daily activities."
        },
        {
          name: "Memory Issues",
          description: "Problems with recall or retention of information.",
          causes: "Aging, stress, medication side effects, sleep problems, or more serious conditions like dementia.",
          whenToSee: "If memory problems interfere with daily life or come on suddenly."
        }
      ]
    },
    {
      id: "musculoskeletal",
      name: "Musculoskeletal",
      symptoms: [
        {
          name: "Joint Pain",
          description: "Discomfort, aches, or soreness in the joints.",
          causes: "Arthritis, injury, overuse, infection, or autoimmune conditions.",
          whenToSee: "If there's swelling, redness, warmth, or if the pain limits your mobility."
        },
        {
          name: "Back Pain",
          description: "Pain anywhere from the neck to the tailbone.",
          causes: "Poor posture, lifting heavy objects, arthritis, or structural problems like herniated discs.",
          whenToSee: "If it follows an injury, is severe, or is accompanied by numbness or weakness in the legs."
        },
        {
          name: "Muscle Weakness",
          description: "Reduced strength in one or more muscles.",
          causes: "Overuse, nerve damage, autoimmune disorders, or electrolyte imbalances.",
          whenToSee: "If it comes on suddenly, affects one side of the body, or is progressively worsening."
        },
        {
          name: "Stiffness",
          description: "Reduced range of motion or difficulty moving a joint.",
          causes: "Arthritis, injury, prolonged inactivity, or inflammation.",
          whenToSee: "If it's severe, doesn't improve with movement, or is accompanied by significant pain or swelling."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Common</span> Symptoms
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about common symptoms, their potential causes, and when you should seek medical attention.
            </p>
          </div>
          
          <div className="mb-10 animate-fade-up animate-delay-100">
            <div className="bg-health-muted/30 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-health-primary/20 flex items-center justify-center">
                  <span className="text-3xl text-health-primary">!</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Medical Disclaimer</h3>
                  <p className="text-gray-600">
                    This information is for educational purposes only and is not intended to replace professional medical advice. 
                    Always consult with a healthcare professional regarding any health concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16 animate-fade-up animate-delay-200">
            <Tabs defaultValue="respiratory">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <h2 className="text-2xl font-bold mb-6">{category.name} Symptoms</h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.symptoms.map((symptom, index) => (
                      <AccordionItem key={index} value={`symptom-${index}`} className="glass-card">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <span className="text-lg font-semibold">{symptom.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-health-primary">Description</h4>
                              <p className="text-gray-700">{symptom.description}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-health-primary">Common Causes</h4>
                              <p className="text-gray-700">{symptom.causes}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-health-primary">When to See a Doctor</h4>
                              <p className="text-gray-700">{symptom.whenToSee}</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="mb-16 glass-card p-8 animate-fade-up animate-delay-300">
            <h2 className="text-2xl font-bold mb-4">Need to Check Your Symptoms?</h2>
            <p className="text-gray-600 mb-6">
              Use our AI-powered symptom analyzer to get insights about your symptoms and recommendations for next steps.
            </p>
            <Link to="/symptom-analysis">
              <AnimatedButton 
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Go to Symptom Analyzer
              </AnimatedButton>
            </Link>
          </div>
          
          <div className="text-center animate-fade-up animate-delay-400">
            <h2 className="text-2xl font-bold mb-4">Have Concerns About Your Health?</h2>
            <p className="text-gray-600 mb-6">
              Connect with our healthcare professionals for personalized advice and consultations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/virtual-consultation">
                <AnimatedButton>
                  Book a Consultation
                </AnimatedButton>
              </Link>
              <Link to="/education">
                <AnimatedButton variant="outline">
                  Explore Health Resources
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommonSymptoms;
