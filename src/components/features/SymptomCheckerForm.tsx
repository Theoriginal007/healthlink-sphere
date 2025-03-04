
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Search, Activity, Thermometer, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SymptomResult {
  possibleCondition: string;
  probability: number; // 0-100
  description: string;
  recommendedAction: string;
  severity: 'low' | 'medium' | 'high';
}

const commonSymptoms = [
  "Fever", "Headache", "Nausea", "Fatigue", "Cough", 
  "Sore throat", "Shortness of breath", "Chest pain", "Back pain", 
  "Joint pain", "Abdominal pain", "Diarrhea", "Dizziness", "Rash"
];

const SymptomCheckerForm = () => {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [customSymptom, setCustomSymptom] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SymptomResult[] | null>(null);
  const [selectedTab, setSelectedTab] = useState('symptomEntry');
  const { toast } = useToast();

  const handleSymptomToggle = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const addCustomSymptom = () => {
    if (customSymptom.trim() && !symptoms.includes(customSymptom.trim())) {
      setSymptoms([...symptoms, customSymptom.trim()]);
      setCustomSymptom('');
      toast({
        title: "Symptom Added",
        description: `"${customSymptom.trim()}" has been added to your list`,
      });
    }
  };

  const handleAnalyzeSymptoms = () => {
    if (symptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Mock results - in a real app, this would come from an AI API
      const mockResults: SymptomResult[] = [
        {
          possibleCondition: "Common Cold",
          probability: 75,
          description: "A viral infection of the upper respiratory tract. Common symptoms include runny nose, sore throat, cough, and fever.",
          recommendedAction: "Rest, stay hydrated, and over-the-counter medications for symptom relief. Consult a doctor if symptoms worsen.",
          severity: "low"
        },
        {
          possibleCondition: "Seasonal Allergies",
          probability: 60,
          description: "An immune system response to allergens such as pollen, dust, or pet dander, causing respiratory and other symptoms.",
          recommendedAction: "Over-the-counter antihistamines, avoiding allergens. Consult an allergist for persistent symptoms.",
          severity: "low"
        },
        {
          possibleCondition: "Influenza",
          probability: 40,
          description: "A viral infection that attacks your respiratory system. It's commonly called the flu.",
          recommendedAction: "Rest, fluids, and antiviral medications if identified early. Seek medical attention for severe symptoms.",
          severity: "medium"
        }
      ];
      
      setResults(mockResults);
      setIsAnalyzing(false);
      setSelectedTab('results');
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-health-primary" />
          <CardTitle>Symptom Analysis</CardTitle>
        </div>
        <CardDescription>
          Enter your symptoms for an AI-powered analysis. This is not a substitute for professional medical advice.
        </CardDescription>
      </CardHeader>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="symptomEntry">Symptom Entry</TabsTrigger>
          <TabsTrigger value="results" disabled={!results}>Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="symptomEntry">
          <CardContent className="space-y-4 pt-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Select Common Symptoms:</h3>
              <ScrollArea className="h-60 border rounded-md p-4">
                <div className="grid grid-cols-2 gap-3">
                  {commonSymptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`symptom-${symptom}`} 
                        checked={symptoms.includes(symptom)}
                        onCheckedChange={() => handleSymptomToggle(symptom)}
                      />
                      <Label htmlFor={`symptom-${symptom}`} className="text-sm">{symptom}</Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Add Custom Symptom:</h3>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter symptom" 
                  value={customSymptom}
                  onChange={(e) => setCustomSymptom(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustomSymptom()}
                />
                <Button onClick={addCustomSymptom} type="button">Add</Button>
              </div>
            </div>
            
            {symptoms.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-2">Your Symptoms:</h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom) => (
                    <div 
                      key={symptom}
                      className="bg-health-muted text-health-primary text-sm px-3 py-1 rounded-full flex items-center"
                    >
                      {symptom}
                      <button 
                        onClick={() => handleSymptomToggle(symptom)}
                        className="ml-2 hover:bg-health-muted/80 rounded-full h-4 w-4 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-sm font-medium mb-2">Symptom Duration:</h3>
              <Input 
                placeholder="e.g., 3 days, 1 week" 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Additional Details:</h3>
              <Textarea 
                placeholder="Describe any additional details about your symptoms..." 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-end">
            <Button 
              onClick={handleAnalyzeSymptoms} 
              disabled={symptoms.length === 0 || isAnalyzing}
              className="w-full sm:w-auto"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Analyze Symptoms
                </>
              )}
            </Button>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="results">
          <CardContent className="space-y-4 pt-4">
            {results ? (
              <div>
                <div className="mb-4">
                  <h3 className="font-medium text-lg">Analysis Results</h3>
                  <p className="text-sm text-gray-500">
                    Based on the symptoms you provided, here are potential health conditions to consider.
                    Please note this analysis is not a diagnosis.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-lg">{result.possibleCondition}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(result.severity)}`}>
                          {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Risk
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Match Probability</span>
                          <span>{result.probability}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-health-primary rounded-full h-2"
                            style={{ width: `${result.probability}%` }}
                          />
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{result.description}</p>
                      
                      <div className="bg-gray-50 p-3 rounded-md">
                        <h5 className="text-sm font-medium mb-1">Recommended Action:</h5>
                        <p className="text-sm">{result.recommendedAction}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Thermometer className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800">Important Disclaimer</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        This symptom analysis is for informational purposes only and does not constitute
                        medical advice or diagnosis. Always consult with a qualified healthcare provider
                        for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Activity className="mx-auto h-12 w-12 text-gray-300" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">No results yet</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Complete the symptom entry form to receive an analysis.
                </p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => setSelectedTab('symptomEntry')}
                >
                  Back to Symptom Entry
                </Button>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => {
                setSymptoms([]);
                setCustomSymptom('');
                setDuration('');
                setDescription('');
                setResults(null);
                setSelectedTab('symptomEntry');
              }}
            >
              Start New Analysis
            </Button>
            
            {results && (
              <Button onClick={() => window.print()}>
                Save Results
              </Button>
            )}
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default SymptomCheckerForm;
