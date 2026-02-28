import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Layers, 
  FolderGit2, 
  MessageSquareText, 
  Settings, 
  LogOut,
  //ChevronRight,
  User
} from 'lucide-react';
import { PrimaryAppIcon } from '../Icons';
import { useSynthesisStore } from '../../store/useSynthesisStore';
import { authService } from '../../services/authService';

const Sidebar: React.FC = () => {
  const [isCollapsed] = useState(false);
  const { userProfile, setAuthenticated, setUserProfile } = useSynthesisStore();
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Layers, label: 'Templates', path: '/templates' },
    { icon: FolderGit2, label: 'My Projects', path: '/projects' },
    { icon: MessageSquareText, label: 'AI Assistant', path: '/ai-assistant', role: ['paid', 'admin'] },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const handleLogout = async () => {
    await authService.logOut();
    setUserProfile(null);
    setAuthenticated(false);
    navigate('/');
  };

  const filteredNavItems = navItems.filter(item => 
    !item.role || (userProfile && item.role.includes(userProfile.role))
  );

  return (
    <motion.aside 
      animate={{ width: isCollapsed ? '80px' : '280px' }}
      className="h-full bg-background-surface/30 backdrop-blur-2xl border-r border-glass-border flex flex-col relative z-50 transition-all duration-300"
    >
      {/* ... (rest of brand header) */}
      <div className={`p-6 mb-8 flex items-center gap-4 ${isCollapsed ? 'justify-center' : ''}`}>
        <PrimaryAppIcon />
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className="text-sm font-black tracking-tighter text-white">ENUM_SYNTHESIS</span>
            <span className="text-[8px] font-mono text-primary-accent tracking-[0.2em]">CORE_v2.1.0</span>
          </motion.div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {filteredNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group relative
              ${isActive 
                ? 'bg-primary-bright/10 text-primary-bright border border-primary-bright/20' 
                : 'text-text-tertiary hover:bg-white/5 hover:text-white'}
              ${isCollapsed ? 'justify-center' : ''}
            `}
          >
            <item.icon size={20} className="shrink-0" />
            {!isCollapsed && (
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
            )}
            {/* Tooltip for Collapsed State */}
            {isCollapsed && (
              <div className="absolute left-full ml-4 px-3 py-1 bg-background-surface border border-glass-border rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-[10px] font-black uppercase whitespace-nowrap z-[100]">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User & Logout */}
      <div className="p-4 border-t border-glass-border">
        <div className={`flex items-center gap-4 p-2 rounded-2xl ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
            {userProfile?.photoURL ? (
              <img src={userProfile.photoURL} alt="User Avatar" className="w-full h-full object-cover" />
            ) : (
              <User size={20} className="text-text-tertiary" />
            )}
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">{userProfile?.displayName || userProfile?.email?.split('@')[0] || 'Synthesizer_01'}</p>
              <p className="text-[10px] text-text-tertiary font-mono uppercase tracking-tighter">{userProfile?.role || 'free'}_Tier</p>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleLogout}
          className={`
            w-full mt-4 flex items-center gap-4 px-4 py-3 rounded-2xl text-status-error hover:bg-status-error/10 transition-all group relative
            ${isCollapsed ? 'justify-center' : ''}
          `}
        >
          <LogOut size={20} className="shrink-0" />
          {!isCollapsed && <span className="text-sm font-bold tracking-tight">Disconnect</span>}
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1 bg-status-error text-white rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-[10px] font-black uppercase whitespace-nowrap z-[100]">
              Disconnect
            </div>
          )}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
