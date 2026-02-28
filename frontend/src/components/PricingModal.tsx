import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, ShieldCheck, Zap, X, CheckCircle2, Lock } from 'lucide-react';
import Button from '../components/DesignSystem/Button';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'plans' | 'checkout' | 'success'>('plans');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    console.log('💳 Initiating synthesis payment protocol...');
    
    // Simulate payment delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('✅ Payment synthesis successful.');
    setIsProcessing(false);
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background-deep/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass-elevated rounded-[3rem] border border-primary-bright/20 bg-background-surface/40 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-bright/10 flex items-center justify-center text-primary-bright">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">Upgrade_Protocol</h3>
                  <p className="text-[10px] text-text-tertiary font-black uppercase tracking-widest">Select your synthesis tier</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                <X size={20} className="text-text-tertiary" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {step === 'plans' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 glass rounded-[2.5rem] border border-white/5 relative group">
                    <h4 className="text-lg font-black mb-2 uppercase">Pro_Synthesizer</h4>
                    <p className="text-4xl font-black mb-6 tracking-tighter">$29<span className="text-sm text-text-tertiary">/mo</span></p>
                    <ul className="space-y-3 mb-8">
                      {['Unlimited Synthesis', 'Private Repo Sync', 'AI Orchestrator', 'Priority Matrix'].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-text-tertiary">
                          <CheckCircle2 size={14} className="text-primary-bright" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-primary-bright text-background-deep rounded-2xl py-4 font-black uppercase tracking-widest text-xs"
                      onClick={() => setStep('checkout')}
                    >
                      Initialize_Pro
                    </Button>
                  </div>

                  <div className="p-8 glass rounded-[2.5rem] border border-primary-accent/30 bg-primary-accent/5 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-accent rounded-full text-[8px] font-black uppercase tracking-widest text-white">
                      Recommended
                    </div>
                    <h4 className="text-lg font-black mb-2 uppercase">Enterprise_Core</h4>
                    <p className="text-4xl font-black mb-6 tracking-tighter">$99<span className="text-sm text-text-tertiary">/mo</span></p>
                    <ul className="space-y-3 mb-8">
                      {['Custom Blueprints', 'Team Workspaces', 'On-Prem Hosting', '24/7 Telemetry'].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-text-tertiary">
                          <CheckCircle2 size={14} className="text-primary-accent" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="glass" className="w-full border-primary-accent/30 text-primary-accent rounded-2xl py-4 font-black uppercase tracking-widest text-xs">
                      Contact_Sales
                    </Button>
                  </div>
                </div>
              )}

              {step === 'checkout' && (
                <div className="space-y-8 max-w-md mx-auto py-4">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                      <CreditCard size={32} className="text-primary-bright" />
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tighter">Secure_Payment</h4>
                    <p className="text-xs text-text-tertiary uppercase tracking-widest">Tier: Pro_Synthesizer // $29.00</p>
                  </div>

                  <div className="space-y-4">
                    <div className="glass p-4 rounded-2xl border border-white/10 flex flex-col gap-4">
                      <input 
                        type="text" 
                        placeholder="CARD NUMBER" 
                        className="bg-transparent border-none focus:outline-none text-sm font-mono placeholder:text-white/10 uppercase tracking-widest" 
                        defaultValue="4242 4242 4242 4242"
                      />
                      <div className="flex gap-4 border-t border-white/5 pt-4">
                        <input type="text" placeholder="MM / YY" className="bg-transparent border-none focus:outline-none text-sm font-mono placeholder:text-white/10 flex-1 uppercase tracking-widest" defaultValue="12 / 28" />
                        <input type="text" placeholder="CVC" className="bg-transparent border-none focus:outline-none text-sm font-mono placeholder:text-white/10 w-20 uppercase tracking-widest" defaultValue="123" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-text-tertiary opacity-50 justify-center">
                    <Lock size={12} />
                    <span className="text-[8px] font-black uppercase tracking-[0.2em]">Encrypted Synthesis Transmission</span>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="glass" className="flex-1 rounded-2xl" onClick={() => setStep('plans')}>Back</Button>
                    <Button 
                      className="flex-[2] bg-primary-bright text-background-deep rounded-2xl py-4 font-black uppercase tracking-widest"
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'PROCESSING...' : 'CONFIRM_PAYMENT'}
                    </Button>
                  </div>
                </div>
              )}

              {step === 'success' && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 space-y-8"
                >
                  <div className="w-24 h-24 rounded-[2.5rem] bg-status-success/10 border border-status-success/20 flex items-center justify-center text-status-success mx-auto shadow-lg shadow-status-success/5 animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">Synthesis_Upgraded</h4>
                    <p className="text-text-tertiary text-sm font-medium uppercase tracking-[0.2em]">Your neural tier is now Pro_Synthesizer</p>
                  </div>
                  <Button 
                    className="bg-white text-background-deep rounded-2xl px-12 py-4 font-black uppercase tracking-widest"
                    onClick={onClose}
                  >
                    RETURN_TO_CORE
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white/[0.02] border-t border-white/5 text-center">
              <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">ENUM_PAYMENT_GATEWAY // SECURE</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
