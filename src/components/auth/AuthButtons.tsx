
import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserButton from "./UserButton";

const AuthButtons = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    // Show a skeleton loader while auth state is loading
    return (
      <div className="flex items-center gap-3">
        <div className="w-20 h-9 rounded-md bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-9 rounded-md bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  if (isSignedIn) {
    return <UserButton />;
  }

  return (
    <div className="flex items-center gap-3">
      <Link to="/sign-in">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </Link>
      <Link to="/sign-up">
        <Button size="sm">Sign Up</Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
