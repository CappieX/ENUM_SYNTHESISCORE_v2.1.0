import React, { useState } from 'react';
import { 
  User, 
  Github, 
  Monitor, 
  ShieldCheck, 
  CreditCard, 
  Bell, 
  Terminal,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Button from '../../components/DesignSystem/Button';
import Toggle from '../../components/DesignSystem/Toggle';
import PricingModal from '../../components/PricingModal';

const Settings: React.FC = () => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  
  const sections = [
    {
      title: 'Profile_Identity',
      icon: User,
      fields: [
        { label: 'Display Name', value: 'Synthesizer_01', type: 'text' },
        { label: 'Transmission Email', value: 'admin@enum-synthesis.io', type: 'text' }
      ]
    },
    {
      title: 'Cloud_Orchestration',
      icon: Github,
      content: (
        <div className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white">
              <Github size={24} />
            </div>
            <div>
              <p className="text-sm font-bold">GitHub Connection</p>
              <p className="text-[10px] text-status-success font-black uppercase tracking-widest">Linked: enum-dev-01</p>
            </div>
          </div>
          <Button variant="glass" size="sm" className="rounded-xl border-white/10">Disconnect</Button>
        </div>
      )
    },
    {
      title: 'Synthesis_Preferences',
      icon: Monitor,
      fields: [
        { label: 'Default Output Path', value: '/Users/Cappie/Projects', type: 'text' },
        { label: 'Dark Mode Protocol', value: true, type: 'toggle' },
        { label: 'High-Fidelity Animations', value: true, type: 'toggle' }
      ]
    },
    {
      title: 'Security_Vault',
      icon: ShieldCheck,
      fields: [
        { label: 'Two-Factor Authentication', value: false, type: 'toggle' },
        { label: 'Auto-Clear Session Logs', value: true, type: 'toggle' }
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col gap-8 max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase">System_Parameters</h1>
        <p className="text-text-tertiary text-sm font-medium uppercase tracking-[0.2em]">Configure engine behavior and identity</p>
      </header>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-8 pb-12">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <div className="flex items-center gap-3 text-primary-bright">
                <section.icon size={20} />
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {section.fields?.map((field, fIdx) => (
                  <div key={fIdx} className="flex items-center justify-between p-6 glass rounded-[2rem] border border-white/5 bg-white/[0.01]">
                    <span className="text-sm font-bold text-text-tertiary">{field.label}</span>
                    {field.type === 'text' ? (
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-white">{field.value}</span>
                        <ChevronRight size={16} className="text-white/20" />
                      </div>
                    ) : (
                      <Toggle 
                        label=""
                        checked={field.value as boolean} 
                        onChange={() => {}} 
                      />
                    )}
                  </div>
                ))}
                {section.content}
              </div>
            </section>
          ))}

          {/* Subscription Tier */}
          <div className="p-8 glass-elevated rounded-[3rem] border border-primary-bright/20 bg-primary-bright/[0.02] flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-bright text-background-deep text-[8px] font-black uppercase tracking-widest mb-2">
                Active_Tier: Professional
              </div>
              <h3 className="text-2xl font-black tracking-tight">UNLIMITED_SYNTHESIS_PLAN</h3>
              <p className="text-text-tertiary text-xs max-w-md">Your account is currently licensed for unlimited repository orchestration and high-fidelity AI assistance.</p>
            </div>
            <Button 
              className="bg-white text-background-deep rounded-2xl font-black px-8 py-4 whitespace-nowrap hover:scale-105 transition-all"
              onClick={() => setIsPricingOpen(true)}
            >
              Manage_Billing
            </Button>
          </div>
        </div>
      </div>
      
      <PricingModal 
        isOpen={isPricingOpen} 
        onClose={() => setIsPricingOpen(false)} 
      />
    </div>
  );
};

export default Settings;
