import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Upload, 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  ArrowUpRight
} from 'lucide-react';
import Button from '../../components/DesignSystem/Button';
import { templateService, Template } from '../../services/templateService';

const Templates: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      const data = await templateService.getTemplates();
      setTemplates(data);
      setIsLoading(false);
    };
    fetchTemplates();
  }, []);

  const categories = ['All', 'Fullstack', 'Mobile', 'Microservice', 'API', 'Frontend'];

  const getIcon = (category: string) => {
    switch (category) {
      case 'Fullstack': return Globe;
      case 'Mobile': return Smartphone;
      case 'Microservice': return Zap;
      case 'API': return Database;
      case 'Frontend': return Code2;
      default: return Code2;
    }
  };

  const getColor = (category: string) => {
    switch (category) {
      case 'Fullstack': return 'text-primary-bright';
      case 'Mobile': return 'text-primary-accent';
      case 'Microservice': return 'text-status-info';
      case 'API': return 'text-status-success';
      case 'Frontend': return 'text-accent-gold';
      default: return 'text-text-tertiary';
    }
  };

  const filtered = templates.filter(t => 
    (selectedFilter === 'All' || t.category === selectedFilter) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.stack.toLowerCase().includes(search.toLowerCase()))
  );

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-[10px] font-black tracking-[0.5em] text-text-tertiary animate-pulse uppercase">
          Accessing_Archive...
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase">Blueprint_Archive</h1>
          <p className="text-text-tertiary text-sm font-medium uppercase tracking-[0.2em]">Explore and expand the synthesis matrix</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Button variant="glass" className="rounded-xl flex-1 md:flex-none">
            <Upload size={18} /> Import_JSON
          </Button>
          <Button className="rounded-xl bg-primary-bright text-background-deep flex-1 md:flex-none">
            <Plus size={18} /> Custom_Template
          </Button>
        </div>
      </header>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors" size={18} />
          <input 
            type="text"
            placeholder="Search templates by name or tech stack..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all placeholder:text-white/20"
          />
        </div>
        <div className="flex gap-2 p-1 glass rounded-2xl border border-white/5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedFilter === cat ? 'bg-primary-bright text-background-deep' : 'text-text-tertiary hover:text-white hover:bg-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Template Grid */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((tpl) => (
              <motion.div
                key={tpl.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-[2rem] border border-white/5 hover:border-primary-bright/20 transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-primary-bright" />
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${getColor(tpl.category)}`}>
                  {React.createElement(getIcon(tpl.category), { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{tpl.name}</h3>
                <p className="text-[10px] text-text-tertiary font-mono uppercase tracking-widest mb-6">{tpl.category}</p>
                <div className="flex flex-wrap gap-2">
                  {tpl.stack.split(', ').map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 text-[9px] font-bold text-text-tertiary border border-white/5 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Templates;
