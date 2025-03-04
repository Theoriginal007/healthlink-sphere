
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Brain, BookOpen, Video, Bell, Calendar, Heart, Pill, Droplet, Gauge, Utensils } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { images } from "@/assets/images";

const Dashboard = () => {
  // Mock data for demonstrations
  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "General Practitioner", date: "May 22, 2023", time: "10:30 AM" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "Cardiologist", date: "May 28, 2023", time: "2:15 PM" },
  ];
  
  const recentMedications = [
    { id: 1, name: "Paracetamol", dosage: "500mg", frequency: "Twice daily", remaining: 14 },
    { id: 2, name: "Amoxicillin", dosage: "250mg", frequency: "Three times daily", remaining: 6 },
  ];
  
  const healthMetrics = {
    bloodPressure: { systolic: 120, diastolic: 80, status: "normal" },
    heartRate: { value: 72, status: "normal" },
    bloodSugar: { value: 95, status: "normal" },
    cholesterol: { value: 180, status: "normal" },
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's your health at a glance.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Bell size={16} />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-health-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-health-primary"></span>
              </span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar size={16} />
              Schedule
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Heart Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold">{healthMetrics.heartRate.value}</div>
                <div className="text-sm text-gray-500 mb-1">bpm</div>
                <div className="ml-auto flex items-center">
                  <Heart className="h-5 w-5 text-health-primary mr-1" />
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Normal</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={72} max={100} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Blood Pressure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold">{healthMetrics.bloodPressure.systolic}/{healthMetrics.bloodPressure.diastolic}</div>
                <div className="text-sm text-gray-500 mb-1">mmHg</div>
                <div className="ml-auto flex items-center">
                  <Gauge className="h-5 w-5 text-health-primary mr-1" />
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Normal</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={75} max={100} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Blood Sugar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold">{healthMetrics.bloodSugar.value}</div>
                <div className="text-sm text-gray-500 mb-1">mg/dL</div>
                <div className="ml-auto flex items-center">
                  <Droplet className="h-5 w-5 text-health-primary mr-1" />
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Normal</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={68} max={100} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Activity Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold">86</div>
                <div className="text-sm text-gray-500 mb-1">/ 100</div>
                <div className="ml-auto flex items-center">
                  <Activity className="h-5 w-5 text-health-primary mr-1" />
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Good</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={86} max={100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="medications">Medications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="appointments" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Manage your scheduled medical appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {upcomingAppointments.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment) => (
                          <div key={appointment.id} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                              <Calendar size={24} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{appointment.doctor}</h4>
                              <p className="text-sm text-gray-600">{appointment.specialty}</p>
                              <div className="flex items-center mt-2">
                                <span className="text-xs bg-health-muted text-health-primary px-2 py-0.5 rounded-full">
                                  {appointment.date} • {appointment.time}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">Reschedule</Button>
                              <Button size="sm">Join</Button>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" className="mt-2 w-full">View All Appointments</Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Upcoming Appointments</h3>
                        <p className="text-gray-500 mb-4">You don't have any scheduled appointments.</p>
                        <Button>Schedule a Consultation</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="medications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Medications</CardTitle>
                    <CardDescription>Track your prescribed medications and dosages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentMedications.length > 0 ? (
                      <div className="space-y-4">
                        {recentMedications.map((medication) => (
                          <div key={medication.id} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-health-muted flex items-center justify-center text-health-primary mr-4">
                              <Pill size={24} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{medication.name}</h4>
                              <p className="text-sm text-gray-600">{medication.dosage} • {medication.frequency}</p>
                              <div className="mt-2">
                                <div className="flex items-center">
                                  <span className="text-xs text-gray-500 mr-2">Remaining:</span>
                                  <Progress value={medication.remaining} max={30} className="h-2 w-24" />
                                  <span className="text-xs text-gray-500 ml-2">{medication.remaining} days</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">Refill</Button>
                              <Button size="sm">Details</Button>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" className="mt-2 w-full">View All Medications</Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Pill className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Current Medications</h3>
                        <p className="text-gray-500 mb-4">You don't have any active medications.</p>
                        <Button>Add Medication</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Health Insights</CardTitle>
              <CardDescription>Recent trends and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-health-muted rounded-lg">
                  <div className="flex items-center mb-3">
                    <Activity className="h-5 w-5 text-health-primary mr-2" />
                    <h4 className="font-semibold text-health-primary">Activity</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Your activity level has improved by 12% compared to last week. Keep it up!
                  </p>
                  <Button variant="outline" size="sm" className="w-full">View Activity</Button>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Droplet className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-blue-600">Hydration</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    You're averaging 1.8L of water daily. Increasing to 2.5L could improve your overall health.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Set Reminder</Button>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Utensils className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-green-600">Nutrition</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Your protein intake is optimal, but consider increasing your vegetable consumption.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Nutrition Tips</Button>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="link" className="w-full flex items-center justify-center">
                  View All Insights
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-sm flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <Brain size={20} className="text-health-primary mr-2" />
                <CardTitle className="text-base">Symptom Analysis</CardTitle>
              </div>
              <CardDescription>Analyze and track your symptoms</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-600 mb-4">
                Our AI-powered tool can help identify potential health concerns based on your symptoms.
              </p>
            </CardContent>
            <div className="p-4 pt-0 mt-auto">
              <Button variant="outline" className="w-full" onClick={() => window.location.href = "/symptom-analysis"}>
                Start Analysis
              </Button>
            </div>
          </Card>
          
          <Card className="shadow-sm flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <Activity size={20} className="text-health-primary mr-2" />
                <CardTitle className="text-base">Health Tracking</CardTitle>
              </div>
              <CardDescription>Monitor your health metrics</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-600 mb-4">
                Track vital signs, medications, and health metrics for a comprehensive health overview.
              </p>
            </CardContent>
            <div className="p-4 pt-0 mt-auto">
              <Button variant="outline" className="w-full" onClick={() => window.location.href = "/health-tracking"}>
                View Metrics
              </Button>
            </div>
          </Card>
          
          <Card className="shadow-sm flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <BookOpen size={20} className="text-health-primary mr-2" />
                <CardTitle className="text-base">Education</CardTitle>
              </div>
              <CardDescription>Learn about health conditions</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-600 mb-4">
                Access reliable information about health conditions, treatments, and prevention strategies.
              </p>
            </CardContent>
            <div className="p-4 pt-0 mt-auto">
              <Button variant="outline" className="w-full" onClick={() => window.location.href = "/education"}>
                Explore Resources
              </Button>
            </div>
          </Card>
          
          <Card className="shadow-sm flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <Video size={20} className="text-health-primary mr-2" />
                <CardTitle className="text-base">Virtual Consultation</CardTitle>
              </div>
              <CardDescription>Connect with healthcare providers</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-600 mb-4">
                Schedule virtual consultations with healthcare professionals for personalized advice.
              </p>
            </CardContent>
            <div className="p-4 pt-0 mt-auto">
              <Button variant="outline" className="w-full" onClick={() => window.location.href = "/virtual-consultation"}>
                Schedule Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
