import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

export type UserRole = 'free' | 'paid' | 'admin';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: UserRole;
}

interface SynthesisState {
  // Auth
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  setAuthenticated: (is: boolean) => void;
  setUserProfile: (profile: UserProfile | null) => void;
  logout: () => void;
  
  // Project Config
  projectName: string;
  destinationPath: string;
  selectedTemplate: string;
  gitEnabled: boolean;
  dockerEnabled: boolean;
  ciEnabled: boolean;
  isDryRun: boolean;
  
  // Auth
  githubToken: string | null;
  user: User | null;
  
  // UI State
  isGenerating: boolean;
  isExplorerOpen: boolean;
  isMoodBoardOpen: boolean;
  logs: string[];
  
  // Actions
  setProjectName: (name: string) => void;
  setDestinationPath: (path: string) => void;
  setSelectedTemplate: (id: string) => void;
  setGitEnabled: (enabled: boolean) => void;
  setDockerEnabled: (enabled: boolean) => void;
  setCiEnabled: (enabled: boolean) => void;
  setDryRun: (enabled: boolean) => void;
  
  setGithubToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  
  setIsGenerating: (is: boolean) => void;
  setIsExplorerOpen: (is: boolean) => void;
  setIsMoodBoardOpen: (is: boolean) => void;
  addLog: (message: string) => void;
  clearLogs: () => void;
  resetConfig: () => void;
}

export const useSynthesisStore = create<SynthesisState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userProfile: null,
      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setUserProfile: (userProfile) => set({ userProfile }),
      logout: () => set({ isAuthenticated: false, userProfile: null, githubToken: null, user: null }),
      
      projectName: 'GENESIS-ALPHA',
      destinationPath: '/root/projects/synthesis',
      selectedTemplate: 'fullstack',
      gitEnabled: true,
      dockerEnabled: false,
      ciEnabled: false,
      isDryRun: false,
      
      githubToken: null,
      user: null,
      
      isGenerating: false,
      isExplorerOpen: false,
      isMoodBoardOpen: false,
      logs: [`[${new Date().toLocaleTimeString()}] System Ready. Waiting for synthesis command...`],
      
      setProjectName: (projectName) => set({ projectName }),
      setDestinationPath: (destinationPath) => set({ destinationPath }),
      setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),
      setGitEnabled: (gitEnabled) => set({ gitEnabled }),
      setDockerEnabled: (dockerEnabled) => set({ dockerEnabled }),
      setCiEnabled: (ciEnabled) => set({ ciEnabled }),
      setDryRun: (isDryRun) => set({ isDryRun }),
      
      setGithubToken: (githubToken) => set({ githubToken }),
      setUser: (user) => set({ user }),
      
      setIsGenerating: (isGenerating) => set({ isGenerating }),
      setIsExplorerOpen: (isExplorerOpen) => set({ isExplorerOpen }),
      setIsMoodBoardOpen: (isMoodBoardOpen) => set({ isMoodBoardOpen }),
      addLog: (message) => set((state) => ({ 
        logs: [...state.logs, `[${new Date().toLocaleTimeString()}] ${message}`].slice(-100) 
      })),
      clearLogs: () => set({ logs: [] }),
      
      resetConfig: () => set({
        projectName: 'GENESIS-ALPHA',
        destinationPath: '/root/projects/synthesis',
        selectedTemplate: 'fullstack',
        gitEnabled: true,
        dockerEnabled: false,
        ciEnabled: false,
      })
    }),
    {
      name: 'synthesis-engine-storage',
      partialize: (state) => ({ 
        isAuthenticated: state.isAuthenticated,
        userProfile: state.userProfile,
        githubToken: state.githubToken, 
        user: state.user,
        projectName: state.projectName,
        destinationPath: state.destinationPath,
        selectedTemplate: state.selectedTemplate
      }),
    }
  )
);
