import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, AlertCircle } from 'lucide-react';
import { PrimaryAppIcon } from '../components/Icons';
import { authService } from '../services/authService';
import { useSynthesisStore } from '../store/useSynthesisStore';
import Button from '../components/DesignSystem/Button';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthenticated, setUserProfile } = useSynthesisStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const profile = await authService.signIn(email, password);
      setUserProfile(profile);
      setAuthenticated(true);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to authorize synthesis transmission.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-deep flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-bright/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-accent/5 rounded-full blur-[120px] animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 glass rounded-[2rem] border border-primary-bright/20 mb-6">
            <PrimaryAppIcon />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase mb-2">Authorize_Access</h1>
          <p className="text-text-tertiary text-xs font-black uppercase tracking-[0.3em]">Neural Synthesis Core Login</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-elevated p-10 rounded-[3rem] border border-white/5 space-y-6">
          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 rounded-2xl bg-status-error/10 border border-status-error/20 flex items-center gap-3 text-status-error text-xs font-bold uppercase tracking-tight"
            >
              <AlertCircle size={16} /> {error}
            </motion.div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Transmission_Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL@SYNTHESIS.IO"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary">Access_Cipher</label>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-primary-accent hover:text-primary-bright transition-colors">Recover?</a>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary-bright text-background-deep py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary-bright/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            {loading ? 'Authorizing...' : 'Initialize_Login'} <ArrowRight size={20} />
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest"><span className="bg-background-surface px-4 text-text-tertiary">Or_Sync_With</span></div>
          </div>

          <Button variant="glass" className="w-full border-white/10 rounded-2xl py-4 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs">
            <Github size={18} /> GitHub_Auth
          </Button>
        </form>

        <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-text-tertiary">
          New to the Matrix? <Link to="/signup" className="text-primary-bright hover:underline">Establish_Identity</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
