
import React from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const UserButton = () => {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn || !user) {
    return null;
  }

  // Get initials from user's name
  const getInitials = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    } else if (user.firstName) {
      return user.firstName.substring(0, 2).toUpperCase();
    } else {
      return "U";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <Avatar className="h-8 w-8 border border-gray-200">
            <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
            <AvatarFallback className="bg-health-primary text-white">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="font-medium">{user.fullName || "User"}</p>
          <p className="text-xs text-gray-500 truncate">{user.primaryEmailAddress?.emailAddress}</p>
        </div>
        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer flex w-full items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="cursor-pointer flex w-full items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOutButton>
          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
