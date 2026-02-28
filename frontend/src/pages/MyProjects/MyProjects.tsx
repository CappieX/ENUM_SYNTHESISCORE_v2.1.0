import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  RefreshCcw, 
  Trash2, 
  FolderGit2, 
  Github,
  Calendar,
  Layers
} from 'lucide-react';
import Button from '../../components/DesignSystem/Button';
import { projectService, Project } from '../../services/projectService';

const MyProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectService.getProjects();
      setProjects(data);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-[10px] font-black tracking-[0.5em] text-text-tertiary animate-pulse uppercase">
          Retrieving_Telemetry...
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-8">
      <header>
        <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase">Synthesis_History</h1>
        <p className="text-text-tertiary text-sm font-medium uppercase tracking-[0.2em]">Manage your generated architectures</p>
      </header>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-4 pb-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all flex flex-col lg:flex-row items-center gap-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-bright/10 flex items-center justify-center text-primary-bright shrink-0">
                <FolderGit2 size={32} />
              </div>

              <div className="flex-1 min-w-0 text-center lg:text-left">
                <div className="flex flex-wrap items-center gap-3 mb-2 justify-center lg:justify-start">
                  <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                    project.status === 'Deployed' ? 'bg-status-success/20 text-status-success border border-status-success/20' :
                    project.status === 'Synthesizing' ? 'bg-primary-accent/20 text-primary-accent border border-primary-accent/20 animate-pulse' :
                    'bg-white/5 text-text-tertiary border border-white/10'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-text-tertiary uppercase tracking-widest justify-center lg:justify-start">
                  <span className="flex items-center gap-2"><Layers size={14} className="text-primary-accent" /> {project.template}</span>
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-accent-gold" /> {project.date}</span>
                  {project.github && (
                    <span className="flex items-center gap-2"><Github size={14} className="text-white" /> {project.github}</span>
                  )}
                </div>
              </div>

              <div className="flex gap-3 shrink-0">
                <Button variant="glass" size="sm" className="rounded-xl px-4 hover:border-primary-bright transition-colors group/btn">
                  <RefreshCcw size={16} className="group-hover/btn:rotate-180 transition-transform duration-500" />
                  Regenerate
                </Button>
                <Button variant="glass" size="sm" className="rounded-xl px-4 hover:border-white/20 transition-colors">
                  <ExternalLink size={16} />
                  Open_Local
                </Button>
                <button className="p-3 rounded-xl bg-status-error/10 text-status-error hover:bg-status-error transition-all hover:text-white border border-status-error/20">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
