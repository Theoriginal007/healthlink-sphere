
import React from "react";
import Layout from "@/components/layout/Layout";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { signIn, setActive } = useSignIn();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signIn) {
      toast({
        title: "Error",
        description: "Sign in is not available right now.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      
      const result = await signIn.create({
        identifier: email,
        password,
      });
      
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast({
          title: "Signed in successfully!",
          description: "Welcome back to HealthSphere.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Error signing in",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        title: "Error signing in",
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
              <span className="text-gradient">Welcome</span> back
            </h1>
            <p className="text-gray-600">
              Sign in to your HealthSphere account
            </p>
          </div>
          
          <div className="glass-card p-8 animate-fade-up animate-delay-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-xs text-health-primary">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-health-primary to-health-secondary text-white"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">○</span>
                    Signing In...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <LogIn size={18} className="mr-2" />
                    Sign In
                  </span>
                )}
              </Button>
              
              <div className="text-center mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-health-primary font-medium">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
