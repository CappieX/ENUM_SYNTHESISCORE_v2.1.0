export interface Template {
  id: number;
  name: string;
  category: string;
  stack: string;
  description: string;
}

export const templateService = {
  getTemplates: async (): Promise<Template[]> => {
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      { id: 1, name: 'Fullstack Genesis', category: 'Fullstack', stack: 'React, Node.js, PostgreSQL', description: 'Complete fullstack starter with database integration.' },
      { id: 2, name: 'Mobile Flux', category: 'Mobile', stack: 'React Native, Expo, Firebase', description: 'Cross-platform mobile framework with real-time sync.' },
      { id: 3, name: 'Micro-Grid', category: 'Microservice', stack: 'Go, Kubernetes, gRPC', description: 'Scalable microservice architecture for cloud-native apps.' },
      { id: 4, name: 'Neural-Node', category: 'API', stack: 'Python, FastAPI, PyTorch', description: 'AI-ready backend with high-performance inference.' },
      { id: 5, name: 'Frontend Kit', category: 'Frontend', stack: 'Vite, Tailwind, Framer', description: 'Modern UI toolkit for high-fidelity web experiences.' },
      { id: 6, name: 'Backend Core', category: 'API', stack: 'Rust, Axum, Prisma', description: 'Type-safe, blazingly fast backend foundation.' },
    ];
  }
};
