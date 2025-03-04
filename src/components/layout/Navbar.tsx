
import React, { useState, useEffect } from "react";
import { images } from "@/assets/images";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, User, Layout } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // In a real app, this would come from auth state
  const location = useLocation();
  
  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Navigation links
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Symptom Analysis", path: "/symptom-analysis" },
    { label: "Health Tracking", path: "/health-tracking" },
    { label: "Education", path: "/education" },
    { label: "Virtual Consultation", path: "/virtual-consultation" },
    { label: "About", path: "/about" },
  ];
  
  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-health-primary to-health-secondary p-[2px]">
              <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-health-primary">H</span>
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-gradient">Health</span>
              <span className="text-gray-800">Sphere</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-600 hover:text-health-primary font-medium transition-colors px-2 py-1 rounded-lg ${
                  isActive(link.path) 
                    ? "bg-health-muted text-health-primary" 
                    : "hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* CTA Buttons or User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-health-primary font-medium transition-colors px-3 py-1 rounded-lg hover:bg-gray-50">
                  <Layout size={16} />
                  Dashboard
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar className="h-9 w-9 border-2 border-white hover:border-health-muted transition-colors cursor-pointer">
                      <AvatarImage src={images.avatar1} alt="User" />
                      <AvatarFallback className="bg-health-primary text-white">JD</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => window.location.href = "/profile"}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.location.href = "/dashboard"}>
                      <Layout className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  icon={<LogIn size={16} className="mr-1" />}
                  iconPosition="left"
                  className="border-gray-300 text-gray-700 hover:border-health-primary hover:text-health-primary"
                  onClick={() => window.location.href = "/sign-in"}
                >
                  Sign In
                </AnimatedButton>
                <AnimatedButton
                  size="sm"
                  icon={<UserPlus size={16} className="mr-1" />}
                  iconPosition="left"
                  onClick={() => window.location.href = "/sign-up"}
                >
                  Sign Up
                </AnimatedButton>
                {/* For demo purposes, add a temporary button to toggle logged in state */}
                <button 
                  className="text-xs text-gray-500 underline"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Demo: Switch to logged in
                </button>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {isLoggedIn && (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar className="h-8 w-8 border-2 border-white hover:border-health-muted transition-colors cursor-pointer">
                    <AvatarImage src={images.avatar1} alt="User" />
                    <AvatarFallback className="bg-health-primary text-white">JD</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => window.location.href = "/profile"}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = "/dashboard"}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <button
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 bg-white/90 backdrop-blur-md shadow-sm ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-72px)]">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-800 hover:text-health-primary font-medium py-2 px-4 rounded-lg ${
                  isActive(link.path) 
                    ? "bg-health-muted text-health-primary" 
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {isLoggedIn && (
              <>
                <Link
                  to="/dashboard"
                  className={`text-gray-800 hover:text-health-primary font-medium py-2 px-4 rounded-lg ${
                    isActive("/dashboard") 
                      ? "bg-health-muted text-health-primary" 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className={`text-gray-800 hover:text-health-primary font-medium py-2 px-4 rounded-lg ${
                    isActive("/profile") 
                      ? "bg-health-muted text-health-primary" 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile CTA Buttons */}
          <div className="grid grid-cols-1 gap-3 pt-4">
            {isLoggedIn ? (
              <AnimatedButton
                variant="outline"
                className="w-full"
                icon={<LogIn size={18} className="mr-2" />}
                iconPosition="left"
                onClick={() => {
                  setIsLoggedIn(false);
                  setMobileMenuOpen(false);
                }}
              >
                Sign Out
              </AnimatedButton>
            ) : (
              <>
                <AnimatedButton
                  variant="outline"
                  className="w-full"
                  icon={<LogIn size={18} className="mr-2" />}
                  iconPosition="left"
                  onClick={() => window.location.href = "/sign-in"}
                >
                  Sign In
                </AnimatedButton>
                <AnimatedButton
                  className="w-full"
                  icon={<UserPlus size={18} className="mr-2" />}
                  iconPosition="left"
                  onClick={() => window.location.href = "/sign-up"}
                >
                  Sign Up
                </AnimatedButton>
                {/* For demo purposes, add a temporary button to toggle logged in state */}
                <button 
                  className="text-xs text-gray-500 underline text-center mt-2"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Demo: Switch to logged in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
