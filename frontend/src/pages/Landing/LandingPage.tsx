import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Github, 
  Layers, 
  Cpu, 
  Globe, 
  Shield, 
  ArrowRight,
  Terminal,
  Code2,
  Sparkles,
  Smartphone,
  Database,
  Box,
  Monitor,
  CheckCircle2,
  MousePointer2,
  Twitter, 
  MessageCircle, 
  Info,
  ChevronRight
} from 'lucide-react';
import { PrimaryAppIcon } from '../../components/Icons';
import { useSynthesisStore } from '../../store/useSynthesisStore';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const setAuthenticated = useSynthesisStore(state => state.setAuthenticated);
  const [email, setEmail] = useState('');
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signup');
  };

  const features = [
    { 
      icon: Cpu, 
      title: 'Automated Structure', 
      desc: 'Transform complex architecture blueprints into production-ready codebases with zero manual setup.',
      detail: 'Supports nested layouts, module patterns, and boilerplate automation.'
    },
    { 
      icon: Github, 
      title: 'GitHub Orchestration', 
      desc: 'Seamlessly provision public or private repositories with pre-configured CI/CD pipelines.',
      detail: 'Automated workflow generation for GitHub Actions and security scanning.'
    },
    { 
      icon: Shield, 
      title: 'Dry-Run Validation', 
      desc: 'Predictive modeling of filesystem changes before a single byte is committed to your drive.',
      detail: 'Visual diff previews and dependency conflict detection.'
    },
    { 
      icon: Layers, 
      title: 'Extensible Templates', 
      desc: 'Modular JSON-based system allowing you to build, share, and expand project archetypes.',
      detail: 'Dynamic schema validation and template inheritance support.'
    },
    { 
      icon: Globe, 
      title: 'Cross-Platform Engine', 
      desc: 'High-performance synthesis powered by PowerShell 7, running natively on Windows, macOS, and Linux.',
      detail: 'Consistent execution environment across development teams.'
    },
    { 
      icon: Monitor, 
      title: 'Modern 3D UI', 
      desc: 'High-fidelity glass-morphism interface with real-time 3D visualization of your project core.',
      detail: 'Immersive synthesis experience with pulsing telemetry data.'
    }
  ];

  const templates = [
    { name: 'Fullstack Genesis', stack: 'React • Node.js • PostgreSQL', category: 'Web', color: 'from-primary-bright to-primary-accent', icon: Globe },
    { name: 'Mobile Flux', stack: 'React Native • Expo • Firebase', category: 'Mobile', color: 'from-accent-gold to-accent-warm', icon: Smartphone },
    { name: 'Micro-Grid', stack: 'Go • Kubernetes • gRPC', category: 'System', color: 'from-status-info to-primary-bright', icon: Zap },
    { name: 'Neural-Node', stack: 'Python • FastAPI • PyTorch', category: 'AI', color: 'from-primary-accent to-status-success', icon: Database },
    { name: 'Frontend Kit', stack: 'Vite • Tailwind • Framer', category: 'Web', color: 'from-accent-warm to-primary-bright', icon: Code2 },
    { name: 'Backend Core', stack: 'Rust • Axum • Prisma', category: 'API', color: 'from-status-success to-primary-accent', icon: Box }
  ];

  const steps = [
    { title: 'CHOOSE_BLUEPRINT', desc: 'Select from our library of battle-tested architectures or upload your custom JSON matrix.', icon: Layers },
    { title: 'CONFIGURE_MATRIX', desc: 'Define your project identity, repository visibility, and cloud orchestration parameters.', icon: Cpu },
    { title: 'SYNTHESIZE_REALITY', desc: 'Execute the high-fidelity engine and watch your vision transform into production code.', icon: Zap }
  ];

  return (
    <div className="bg-background-deep text-text-primary selection:bg-primary-accent/30 selection:text-white overflow-x-hidden relative">
      {/* Dynamic Bioluminescent Background */}
      <motion.div style={{ y: yBg }} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-primary-bright/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[70%] bg-primary-accent/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-accent-gold/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </motion.div>

      {/* Particles Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: [0, -100],
              x: Math.random() * 100 - 50
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-primary-bright rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] h-20 px-6 md:px-12 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-background-deep/40">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <PrimaryAppIcon />
          <span className="text-xl font-black tracking-tighter group-hover:text-primary-bright transition-colors">ENUM_SYNTHESIS</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#templates" className="hover:text-white transition-colors">Templates</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
          <button 
            onClick={() => navigate('/signin')}
            className="px-8 py-2.5 rounded-full glass border border-primary-bright/20 text-primary-bright hover:bg-primary-bright/10 hover:border-primary-bright/40 transition-all active:scale-95"
          >
            Sign_In
          </button>
        </div>
        {/* Mobile Menu Toggle (Simplified) */}
        <div className="md:hidden">
          <button className="p-2 glass rounded-lg text-primary-bright">
            <Layers size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-48 pb-32 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto min-h-screen justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-primary-accent/20 text-[10px] font-black uppercase tracking-[0.4em] text-primary-accent mb-10 shadow-lg shadow-primary-accent/5"
        >
          <Sparkles size={12} className="animate-pulse" /> THE FUTURE OF SCAFFOLDING IS HERE
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent"
        >
          SYNTHESIZE YOUR <br /> VISION INTO REALITY.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-text-tertiary max-w-3xl mb-14 font-medium leading-relaxed px-4"
        >
          A high-fidelity engine that transforms project blueprints into production-ready architectures in seconds. Stop scaffolding, start synthesizing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-xl p-2 glass rounded-[2.5rem] border border-white/10 flex flex-col sm:flex-row gap-2 shadow-2xl shadow-black/50"
        >
          <form onSubmit={handleStart} className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="flex-1 relative group">
              <Terminal className="absolute left-6 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Enter your transmission address..." 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-transparent rounded-[1.8rem] pl-14 pr-6 py-5 focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20 text-sm"
              />
            </div>
            <button 
              type="submit"
              className="px-10 py-5 bg-primary-bright text-background-deep font-black rounded-[1.8rem] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary-bright/30 group/btn"
            >
              START_SYNTHESIS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Floating UI Decorative Elements */}
        <div className="absolute top-[20%] left-0 w-32 h-32 glass rounded-full blur-2xl opacity-20 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 glass rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      </header>

      {/* Visual Demo Placeholder Section */}
      <section className="relative z-10 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full aspect-video glass-elevated rounded-[3rem] border border-white/10 overflow-hidden relative group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-bright/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <div className="relative">
                <Terminal size={80} className="text-primary-bright" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-dashed border-primary-bright/50 rounded-full"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-primary-bright">System_Matrix_Active</span>
            </div>
          </div>
          {/* Mock UI Overlay */}
          <div className="absolute top-10 left-10 space-y-4">
            <div className="w-64 h-3 glass rounded-full opacity-40" />
            <div className="w-48 h-3 glass rounded-full opacity-20" />
            <div className="w-56 h-3 glass rounded-full opacity-30" />
          </div>
          <div className="absolute bottom-10 right-10">
            <div className="w-32 h-32 rounded-full border-2 border-primary-accent/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-primary-bright/40 animate-ping" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-40 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Engine_Capabilities</h2>
          <div className="h-1 w-24 bg-primary-bright mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] border border-white/5 hover:border-primary-bright/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-bright/5 rounded-full blur-3xl group-hover:bg-primary-bright/10 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary-bright/10 group-hover:text-primary-bright transition-all shadow-inner">
                <f.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-primary-bright transition-colors">{f.title}</h3>
              <p className="text-text-tertiary leading-relaxed text-sm mb-6 font-medium">{f.desc}</p>
              <div className="pt-6 border-t border-white/5 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <Info size={14} /> {f.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Template Showcase */}
      <section id="templates" className="py-40 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-none">THE_SYNTHESIS_MATRIX</h2>
              <p className="text-xl text-text-tertiary font-medium">Select from our library of high-fidelity architectures or define your own custom project lineage.</p>
            </div>
            <button 
              onClick={() => { navigate('/signup'); }}
              className="flex items-center gap-4 text-primary-bright font-black uppercase tracking-[0.3em] text-[10px] hover:gap-6 transition-all group px-8 py-4 glass rounded-2xl border border-primary-bright/10"
            >
              EXPLORE_ALL_TEMPLATES <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity rounded-[2.5rem]`} />
                <div className="relative glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col h-full hover:border-white/10 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-16">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-background-deep shadow-xl shadow-black/20 group-hover:scale-110 transition-transform`}>
                      <t.icon size={28} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary bg-white/5 px-3 py-1 rounded-full">{t.category}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary-bright transition-colors">{t.name}</h4>
                  <p className="text-xs text-text-tertiary font-mono mb-8 opacity-60">{t.stack}</p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary-bright opacity-0 group-hover:opacity-100 transition-all">
                    LOAD_BLUEPRINT <MousePointer2 size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Workflow */}
      <section id="workflow" className="py-40 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">OPERATIONAL_WORKFLOW</h2>
          <p className="text-text-tertiary font-medium uppercase tracking-[0.2em] text-sm">Three phases to production readiness</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-8"
            >
              <div className="w-24 h-24 rounded-[2rem] glass border border-white/10 flex items-center justify-center mb-10 relative group shadow-2xl">
                <div className="absolute inset-0 bg-primary-bright/5 rounded-[2rem] scale-0 group-hover:scale-100 transition-transform duration-500" />
                <s.icon size={40} className="text-primary-bright group-hover:scale-110 transition-transform" />
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background-deep border border-primary-bright/40 flex items-center justify-center text-[10px] font-black text-primary-bright shadow-lg">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-black mb-4 tracking-[0.2em]">{s.title}</h3>
              <p className="text-text-tertiary text-sm leading-relaxed max-w-xs font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Assistant Teaser */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="glass-elevated p-12 md:p-16 rounded-[4rem] border border-primary-bright/20 bg-primary-bright/[0.03] relative overflow-hidden group shadow-2xl shadow-primary-bright/5"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles size={120} className="text-primary-bright" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="w-24 h-24 rounded-3xl bg-primary-bright/10 border border-primary-bright/30 flex items-center justify-center text-primary-bright shrink-0 shadow-lg shadow-primary-bright/20">
              <Sparkles size={48} className="animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-bright text-background-deep text-[8px] font-black uppercase tracking-[0.2em] mb-4">
                Coming_Soon: Neural_Assistant
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight uppercase">AI-ORCHESTRATED <br /> ARCHITECTURE</h3>
              <p className="text-text-tertiary text-lg font-medium mb-8 max-w-xl">
                Let our upcoming AI Orchestrator guide your synthesis process, recommending optimizations and generating custom templates on the fly.
              </p>
              <button className="flex items-center gap-2 text-primary-bright font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all group">
                LEARN_ABOUT_NEURAL_CORE <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-40 pb-20 px-6 md:px-12 border-t border-white/5 bg-black/20 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <PrimaryAppIcon />
              <span className="text-2xl font-black tracking-tighter">ENUM_SYNTHESIS</span>
            </div>
            <p className="text-text-tertiary text-sm font-medium leading-relaxed mb-10 max-w-xs">
              Revolutionizing project orchestration with high-fidelity synthesis. Built for the modern engineer by Enum Technologies.
            </p>
            <div className="flex gap-4">
              {[Twitter, MessageCircle, Github].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center hover:text-primary-bright hover:border-primary-bright/20 cursor-pointer transition-all active:scale-90 group shadow-lg">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3">
              <div className="w-4 h-[1px] bg-primary-bright" /> Ecosystem
            </h5>
            <ul className="space-y-5 text-sm font-bold text-text-tertiary uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary-bright transition-colors flex items-center justify-between group">Documentation <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-primary-bright transition-colors flex items-center justify-between group">Template_Gallery <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-primary-bright transition-colors flex items-center justify-between group">Synthesis_Core <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-primary-bright transition-colors flex items-center justify-between group">Community_Blueprints <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></a></li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3">
              <div className="w-4 h-[1px] bg-primary-bright" /> Security
            </h5>
            <ul className="space-y-5 text-sm font-bold text-text-tertiary uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary-bright transition-colors">Privacy_Protocol</a></li>
              <li><a href="#" className="hover:text-primary-bright transition-colors">Terms_of_Service</a></li>
              <li><a href="#" className="hover:text-primary-bright transition-colors">Vulnerability_Vault</a></li>
              <li><a href="#" className="hover:text-primary-bright transition-colors">System_Status</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3">
              <div className="w-4 h-[1px] bg-primary-bright" /> Transmission
            </h5>
            <p className="text-xs text-text-tertiary font-medium mb-6 uppercase tracking-wider">Join the neural network for updates.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="EMAIL" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-black focus:outline-none focus:border-primary-bright/40 flex-1 uppercase tracking-widest" />
              <button className="w-12 h-12 rounded-xl bg-primary-bright text-background-deep flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            Powered By Enum Technologies // v2.1.0-STABLE
          </p>
          <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em]">
            © 2026 Enum Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
