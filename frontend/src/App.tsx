import React, { lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/Landing/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import { useSynthesisStore } from './store/useSynthesisStore';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { authService } from './services/authService';

// Lazy Loaded Pages
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Templates = lazy(() => import('./pages/Templates/Templates'));
const MyProjects = lazy(() => import('./pages/MyProjects/MyProjects'));
const AIAssistant = lazy(() => import('./pages/AIAssistant/AIAssistant'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

// Role-Based Route Component
const ProtectedRoute: React.FC<{ 
  children: React.ReactNode, 
  allowedRoles?: ('free' | 'paid' | 'admin')[] 
}> = ({ children, allowedRoles }) => {
  const { isAuthenticated, userProfile } = useSynthesisStore();
  
  if (!isAuthenticated) return <Navigate to="/signin" replace />;
  
  if (allowedRoles && userProfile && !allowedRoles.includes(userProfile.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App: React.FC = () => {
  const { isAuthenticated, setAuthenticated, setUserProfile } = useSynthesisStore();
  const [isInitializing, setIsInitializing] = useState(true);
  
  // Initialize global shortcuts
  useKeyboardShortcuts();

  // Initialize Auth State
  useEffect(() => {
    const unsubscribe = authService.subscribeToAuthChanges((profile) => {
      if (profile) {
        setUserProfile(profile);
        setAuthenticated(true);
      } else {
        setUserProfile(null);
        setAuthenticated(false);
      }
      setIsInitializing(false);
    });

    return () => unsubscribe();
  }, [setAuthenticated, setUserProfile]);

  if (isInitializing) {
    return (
      <div className="h-screen w-screen bg-background-deep flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 border-4 border-primary-bright/20 border-t-primary-bright rounded-full animate-spin" />
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-text-tertiary animate-pulse">
          Synchronizing_Core_State...
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <LandingPage /> : <Navigate to="/dashboard" replace />} 
          />
          <Route 
            path="/signin" 
            element={!isAuthenticated ? <SignIn /> : <Navigate to="/dashboard" replace />} 
          />
          <Route 
            path="/signup" 
            element={!isAuthenticated ? <SignUp /> : <Navigate to="/dashboard" replace />} 
          />

          {/* Protected App Routes */}
          <Route 
            element={<ProtectedRoute><MainLayout /></ProtectedRoute>}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route 
              path="/ai-assistant" 
              element={
                <ProtectedRoute allowedRoles={['paid', 'admin']}>
                  <AIAssistant />
                </ProtectedRoute>
              } 
            />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;

