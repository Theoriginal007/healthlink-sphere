
import React from "react";
import Layout from "@/components/layout/Layout";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { signUp, setActive } = useSignUp();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    if (!signUp) {
      toast({
        title: "Error",
        description: "Sign up is not available right now.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      
      // Split fullName into firstName and lastName
      const nameParts = formData.fullName.split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
      
      const result = await signUp.create({
        firstName,
        lastName,
        emailAddress: formData.email,
        password: formData.password,
      });
      
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast({
          title: "Account created successfully!",
          description: "Welcome to HealthSphere.",
        });
        navigate("/dashboard");
      } else {
        // Handle verification steps if needed
        toast({
          title: "Verification required",
          description: "Please check your email to complete signup.",
        });
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast({
        title: "Error creating account",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-up">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-gradient">Create</span> your account
            </h1>
            <p className="text-gray-600">
              Join HealthSphere and take control of your healthcare journey
            </p>
          </div>
          
          <div className="glass-card p-8 animate-fade-up animate-delay-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-health-primary to-health-secondary text-white"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">○</span>
                    Creating Account...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <UserPlus size={18} className="mr-2" />
                    Sign Up
                  </span>
                )}
              </Button>
              
              <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-health-primary font-medium">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
