import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Navigation/Sidebar';
import { motion } from 'framer-motion';
import { Terminal, History } from 'lucide-react';

const MainLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen flex bg-background-deep text-text-primary overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-bright/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full max-w-7xl mx-auto"
          >
            <Outlet />
          </motion.div>
        </main>

        {/* Global Footer / Status Bar */}
        <footer className="h-10 px-8 border-t border-glass-border bg-background-surface/80 backdrop-blur-md flex items-center justify-between text-[10px] font-bold text-text-tertiary uppercase tracking-widest shrink-0">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 text-status-success">
              <div className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
              Engine_Operational
            </span>
            <span className="flex items-center gap-2 hidden sm:flex">
              <Terminal size={12} className="text-primary-accent" />
              Link_Status: Encrypted
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <span className="flex items-center gap-2 opacity-50 hidden lg:flex font-mono">
              <History size={12} /> 
              Sync: {new Date().getFullYear()}.{new Date().getMonth() + 1}.{new Date().getDate()}
            </span>
            <span className="text-primary-bright font-black">SYNTHESIS_HUB_v2.1.0</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
