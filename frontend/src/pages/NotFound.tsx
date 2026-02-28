import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import Button from '../components/DesignSystem/Button';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-deep flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-24 h-24 rounded-[2rem] bg-status-error/10 border border-status-error/20 flex items-center justify-center text-status-error mb-8 shadow-lg shadow-status-error/5"
      >
        <AlertTriangle size={48} />
      </motion.div>
      
      <h1 className="text-6xl font-black tracking-tighter text-white mb-4 uppercase">Error_404</h1>
      <p className="text-text-tertiary text-xl font-medium max-w-md mb-12 uppercase tracking-[0.2em]">
        Synthesis Failed: The requested path does not exist in the matrix.
      </p>

      <div className="flex gap-4">
        <Button 
          variant="glass" 
          className="rounded-2xl px-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} /> Back_Protocol
        </Button>
        <Button 
          className="bg-primary-bright text-background-deep rounded-2xl px-8"
          onClick={() => navigate('/')}
        >
          <Home size={20} /> Home_Base
        </Button>
      </div>

      <div className="mt-24 text-[8px] font-mono text-white/5 uppercase tracking-[1em]">
        ENUM_SYNTHESIS_ENGINE // PATH_NOT_FOUND
      </div>
    </div>
  );
};

export default NotFound;
