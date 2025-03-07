
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User, Shield, Settings, Key, Clock, ExternalLink, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { images } from "@/assets/images";
import { userService } from "@/services/mongodb/mongoService";

const UserProfile = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    bloodType: "",
    height: "",
    weight: "",
    allergies: "",
    medications: "",
    conditions: "",
    _id: ""
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    medicationReminders: true,
    healthTips: true,
    newsletterUpdates: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Since we don't have a query method, we'll get all users and filter in JS
        const users = await userService.getAll();
        
        // Find the user with the email "john.doe@example.com"
        const userData = users.find(user => user.email === "john.doe@example.com");
        
        if (userData) {
          setFormData({
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email || "",
            phone: userData.phone || "",
            birthDate: userData.birthDate || "",
            gender: userData.gender || "",
            bloodType: userData.bloodType || "",
            height: userData.height || "",
            weight: userData.weight || "",
            allergies: userData.allergies || "",
            medications: userData.medications || "",
            conditions: userData.conditions || "",
            _id: userData._id || ""
          });
          
          if (userData.notificationSettings) {
            setNotificationSettings(userData.notificationSettings);
          }
        } else {
          createDefaultUser();
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        createDefaultUser();
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);
  
  const createDefaultUser = async () => {
    try {
      const defaultUser = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+254 712 345 678",
        birthDate: "1985-07-15",
        gender: "Male",
        bloodType: "O+",
        height: "175",
        weight: "70",
        allergies: "None",
        medications: "None",
        conditions: "None",
        notificationSettings: {
          emailNotifications: true,
          smsNotifications: false,
          appointmentReminders: true,
          medicationReminders: true,
          healthTips: true,
          newsletterUpdates: false,
        }
      };
      
      const newUser = await userService.create(defaultUser);
      
      if (newUser && newUser._id) {
        setFormData({
          ...defaultUser,
          _id: newUser._id
        });
      }
    } catch (error) {
      console.error("Error creating default user:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (formData._id) {
        await userService.update(formData._id, formData);
      } else {
        const newUser = await userService.create(formData);
        if (newUser && newUser._id) {
          setFormData(prev => ({
            ...prev,
            _id: newUser._id
          }));
        }
      }
      
      toast({
        title: "Profile Updated",
        description: "Your profile information has been successfully updated.",
      });
    } catch (error) {
      console.error("Error saving profile:", error);
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile.",
        variant: "destructive"
      });
    }
  };

  const handleSaveNotifications = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (formData._id) {
        await userService.update(formData._id, {
          notificationSettings: notificationSettings
        });
        
        toast({
          title: "Notification Settings Updated",
          description: "Your notification preferences have been saved.",
        });
      }
    } catch (error) {
      console.error("Error saving notification settings:", error);
      toast({
        title: "Update Failed",
        description: "There was an error updating your notification settings.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <p>Loading profile...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center">
              <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                <AvatarImage src={images.avatar1} alt="User profile" />
                <AvatarFallback>{`${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{`${formData.firstName} ${formData.lastName}`}</h1>
                <p className="text-gray-600">Manage your account settings and preferences</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LogOut size={16} />
                Sign Out
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User size={20} className="text-health-primary" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal details and medical information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">Date of Birth</Label>
                        <Input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Input
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <Separator className="my-8" />
                    
                    <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="bloodType">Blood Type</Label>
                        <Input
                          id="bloodType"
                          name="bloodType"
                          value={formData.bloodType}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          name="height"
                          type="number"
                          value={formData.height}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          name="weight"
                          type="number"
                          value={formData.weight}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="allergies">Allergies</Label>
                        <Input
                          id="allergies"
                          name="allergies"
                          value={formData.allergies}
                          onChange={handleInputChange}
                          placeholder="List any allergies"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="medications">Current Medications</Label>
                        <Input
                          id="medications"
                          name="medications"
                          value={formData.medications}
                          onChange={handleInputChange}
                          placeholder="List any medications you are taking"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="conditions">Medical Conditions</Label>
                        <Input
                          id="conditions"
                          name="conditions"
                          value={formData.conditions}
                          onChange={handleInputChange}
                          placeholder="List any existing medical conditions"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 text-right">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell size={20} className="text-health-primary" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Manage how you receive notifications and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveNotifications}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Communication Channels</h3>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="emailNotifications">Email Notifications</Label>
                            <p className="text-sm text-gray-500">
                              Receive notifications and updates via email
                            </p>
                          </div>
                          <Switch
                            id="emailNotifications"
                            checked={notificationSettings.emailNotifications}
                            onCheckedChange={(checked) => handleNotificationChange('emailNotifications', checked)}
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="smsNotifications">SMS Notifications</Label>
                            <p className="text-sm text-gray-500">
                              Receive notifications and updates via text message
                            </p>
                          </div>
                          <Switch
                            id="smsNotifications"
                            checked={notificationSettings.smsNotifications}
                            onCheckedChange={(checked) => handleNotificationChange('smsNotifications', checked)}
                          />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Notification Types</h3>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="appointmentReminders">Appointment Reminders</Label>
                            <p className="text-sm text-gray-500">
                              Receive reminders for upcoming appointments
                            </p>
                          </div>
                          <Switch
                            id="appointmentReminders"
                            checked={notificationSettings.appointmentReminders}
                            onCheckedChange={(checked) => handleNotificationChange('appointmentReminders', checked)}
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="medicationReminders">Medication Reminders</Label>
                            <p className="text-sm text-gray-500">
                              Receive reminders to take your medications
                            </p>
                          </div>
                          <Switch
                            id="medicationReminders"
                            checked={notificationSettings.medicationReminders}
                            onCheckedChange={(checked) => handleNotificationChange('medicationReminders', checked)}
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="healthTips">Health Tips & Recommendations</Label>
                            <p className="text-sm text-gray-500">
                              Receive personalized health tips and recommendations
                            </p>
                          </div>
                          <Switch
                            id="healthTips"
                            checked={notificationSettings.healthTips}
                            onCheckedChange={(checked) => handleNotificationChange('healthTips', checked)}
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="newsletterUpdates">Newsletter & Platform Updates</Label>
                            <p className="text-sm text-gray-500">
                              Receive updates about new features and health news
                            </p>
                          </div>
                          <Switch
                            id="newsletterUpdates"
                            checked={notificationSettings.newsletterUpdates}
                            onCheckedChange={(checked) => handleNotificationChange('newsletterUpdates', checked)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-right">
                      <Button type="submit">Save Preferences</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield size={20} className="text-health-primary" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your account security and privacy preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Key size={18} className="text-health-primary mr-2" />
                        Login & Authentication
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">Password</h4>
                            <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                          </div>
                          <Button variant="outline" size="sm">Change Password</Button>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">Two-Factor Authentication</h4>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Shield size={18} className="text-health-primary mr-2" />
                        Privacy Settings
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Data Sharing for Research</Label>
                            <p className="text-sm text-gray-500">
                              Allow anonymized data to be used for healthcare research
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Profile Visibility</Label>
                            <p className="text-sm text-gray-500">
                              Allow healthcare providers to view your basic profile
                            </p>
                          </div>
                          <Switch defaultChecked={true} />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Clock size={18} className="text-health-primary mr-2" />
                        Session Management
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Active Sessions</h4>
                          <div className="mt-3 space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                                  <Settings size={16} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Current Browser</p>
                                  <p className="text-xs text-gray-500">Nairobi, Kenya • Active now</p>
                                </div>
                              </div>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Current</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                                  <ExternalLink size={16} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Mobile App</p>
                                  <p className="text-xs text-gray-500">Last active 2 days ago</p>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                Logout
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Delete Account</h3>
                      <p className="text-sm text-red-600 mb-4">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700">
                        Delete My Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
