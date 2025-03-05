
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SymptomAnalysis from "./pages/SymptomAnalysis";
import HealthTracking from "./pages/HealthTracking";
import Education from "./pages/Education";
import About from "./pages/About";
import VirtualConsultation from "./pages/VirtualConsultation";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Articles from "./pages/Articles";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import GetStarted from "./pages/GetStarted";
import LearnMore from "./pages/LearnMore";
import CommonSymptoms from "./pages/CommonSymptoms";
import HealthDevices from "./pages/HealthDevices";
import BookConsultation from "./pages/BookConsultation";
import ComingSoon from "./pages/ComingSoon";
import PrivateRoute from "./components/auth/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/symptom-analysis" element={<SymptomAnalysis />} />
          <Route path="/health-tracking" element={
            <PrivateRoute>
              <HealthTracking />
            </PrivateRoute>
          } />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/virtual-consultation" element={
            <PrivateRoute>
              <VirtualConsultation />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          } />
          <Route path="/articles" element={<Articles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/common-symptoms" element={<CommonSymptoms />} />
          <Route path="/health-devices" element={<HealthDevices />} />
          <Route path="/book-consultation" element={
            <PrivateRoute>
              <BookConsultation />
            </PrivateRoute>
          } />
          <Route path="/premium-services" element={<ComingSoon />} />
          <Route path="/detailed-analytics" element={<ComingSoon />} />
          <Route path="/connect-devices" element={<ComingSoon />} />
          <Route path="/symptom-checker" element={<ComingSoon />} />
          <Route path="/health-education" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
