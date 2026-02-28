import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import ActionHub from '../../components/ActionHub';
import { useSynthesisStore } from '../../store/useSynthesisStore';
import Button from '../../components/DesignSystem/Button';
import { Palette, Layers } from 'lucide-react';

const PreviewCanvas = lazy(() => import('../../components/PreviewCanvas'));

const Dashboard: React.FC = () => {
  const { 
    selectedTemplate, 
    setIsExplorerOpen,
    setIsMoodBoardOpen
  } = useSynthesisStore();

  return (
    <div className="h-full flex flex-col gap-6">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase">Command_Center</h1>
          <p className="text-text-tertiary text-sm font-medium uppercase tracking-[0.2em]">Operational Synthesis Interface</p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="glass"
            size="sm"
            onClick={() => setIsMoodBoardOpen(true)}
            className="rounded-xl border-accent-gold/20 hover:border-accent-gold transition-all group"
          >
            <Palette size={16} className="text-accent-gold group-hover:rotate-12 transition-transform" />
            Mood_Boards
          </Button>
          <Button
            variant="glass"
            size="sm"
            onClick={() => setIsExplorerOpen(true)}
            className="rounded-xl border-primary-bright/20 hover:border-primary-bright transition-all group"
          >
            <Layers size={16} className="text-primary-bright group-hover:rotate-12 transition-transform" />
            Launch_Gallery
          </Button>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden">
        {/* Left: Configuration */}
        <motion.section 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full lg:w-[320px] glass-elevated rounded-[2rem] border border-glass-border overflow-hidden flex flex-col bg-background-surface/20"
        >
          <Sidebar />
        </motion.section>

        {/* Center: Preview */}
        <motion.section 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex-1 glass rounded-[2rem] border border-glass-border overflow-hidden relative min-h-[400px] bg-background-surface/10"
        >
          <Suspense fallback={<div className="h-full w-full flex items-center justify-center animate-pulse text-[10px] font-black tracking-[0.5em] text-text-tertiary">INITIALIZING_MATRIX...</div>}>
            <PreviewCanvas selectedTemplate={selectedTemplate} />
          </Suspense>
        </motion.section>

        {/* Right: Actions */}
        <motion.section 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full lg:w-[360px] glass-elevated rounded-[2rem] border border-glass-border overflow-hidden flex flex-col bg-background-surface/20"
        >
          <ActionHub />
        </motion.section>
      </div>
    </div>
  );
};

export default Dashboard;
