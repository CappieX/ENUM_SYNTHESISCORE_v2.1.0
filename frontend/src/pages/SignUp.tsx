import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import { PrimaryAppIcon } from '../components/Icons';
import { authService } from '../services/authService';
import { useSynthesisStore } from '../store/useSynthesisStore';
import Button from '../components/DesignSystem/Button';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthenticated, setUserProfile } = useSynthesisStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Access ciphers do not match.');
      return;
    }

    setLoading(true);
    try {
      const profile = await authService.signUp(email, password);
      setUserProfile(profile);
      setAuthenticated(true);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to establish synthesis identity.');
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
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase mb-2">Establish_Identity</h1>
          <p className="text-text-tertiary text-xs font-black uppercase tracking-[0.3em]">Neural Synthesis Registration</p>
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
            <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Initial_Access_Cipher</label>
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

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Confirm_Access_Cipher</label>
            <div className="relative group">
              <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors" size={18} />
              <input 
                type="password" 
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? 'Processing...' : 'Register_Identity'} <ArrowRight size={20} />
          </Button>
        </form>

        <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-text-tertiary">
          Identity already exists? <Link to="/signin" className="text-primary-bright hover:underline">Authorize_Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
