export interface Project {
  id: string;
  name: string;
  template: string;
  date: string;
  status: 'Deployed' | 'Synthesizing' | 'Local_Only';
  github: string | null;
}

export const projectService = {
  getProjects: async (): Promise<Project[]> => {
    // Mock delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const stored = localStorage.getItem('enum_projects');
    if (stored) return JSON.parse(stored);
    
    const defaults: Project[] = [
      { id: '1', name: 'GENESIS-ALPHA', template: 'Fullstack Genesis', date: '2026-02-24', status: 'Deployed', github: 'enum/genesis-alpha' },
      { id: '2', name: 'FLUX-MOBILE-V1', template: 'Mobile Flux', date: '2026-02-20', status: 'Local_Only', github: null },
      { id: '3', name: 'GRID-NODE-01', template: 'Micro-Grid', date: '2026-02-15', status: 'Synthesizing', github: 'enum/grid-node-01' },
    ];
    
    localStorage.setItem('enum_projects', JSON.stringify(defaults));
    return defaults;
  }
};
