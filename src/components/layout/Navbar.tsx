
import React, { useState, useEffect } from "react";
import { images } from "@/assets/images";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    { label: "About", path: "/about" },
  ];
  
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
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-health-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <AnimatedButton
              variant="outline"
              size="sm"
            >
              Sign In
            </AnimatedButton>
            <AnimatedButton
              size="sm"
            >
              Sign Up
            </AnimatedButton>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-800 hover:text-health-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile CTA Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <AnimatedButton
              variant="outline"
              className="w-full"
            >
              Sign In
            </AnimatedButton>
            <AnimatedButton
              className="w-full"
            >
              Sign Up
            </AnimatedButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
