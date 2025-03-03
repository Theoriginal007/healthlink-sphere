
import React, { useState } from "react";
import { Send, Loader, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const SymptomAnalyzer = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm HealthSphere's AI symptom analyzer. Please describe your symptoms in as much detail as possible, and I'll help analyze them.", isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would call an AI endpoint)
    setTimeout(() => {
      const responses = [
        "Based on your symptoms, you might be experiencing a common cold. This typically includes a runny nose, sore throat, and mild fever. I recommend rest, fluids, and over-the-counter medication for comfort.",
        "Your symptoms suggest a possible seasonal allergy reaction. Common treatments include antihistamines and avoiding known allergens. If symptoms persist, consider consulting a healthcare professional.",
        "From your description, you may be experiencing symptoms of dehydration. Try to increase your fluid intake and rest. If symptoms worsen or persist, please consult a healthcare provider."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      setIsLoading(false);
      setInput("");
    }, 1500);
  };
  
  return (
    <div className="glass-card h-full flex flex-col overflow-hidden">
      <div className="flex items-center p-4 border-b border-gray-100">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-health-primary to-health-secondary flex items-center justify-center text-white">
          <Brain size={20} />
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">AI Symptom Analyzer</h3>
          <p className="text-xs text-gray-500">Powered by advanced NLP</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={cn(
              "max-w-[85%] rounded-xl p-3 animate-scale",
              message.isUser 
                ? "bg-health-primary text-white ml-auto" 
                : "bg-gray-100 text-gray-800"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-sm">{message.text}</p>
          </div>
        ))}
        
        {isLoading && (
          <div className="bg-gray-100 text-gray-800 max-w-[85%] rounded-xl p-4 flex items-center space-x-2 animate-pulse">
            <Loader size={18} className="animate-spin" />
            <span className="text-sm">Analyzing symptoms...</span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms..."
            className="flex-1 p-2 rounded-lg border border-gray-200 focus:outline-none focus:border-health-primary"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-health-primary text-white hover:bg-health-primary/90 transition-colors"
            disabled={isLoading || !input.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SymptomAnalyzer;
