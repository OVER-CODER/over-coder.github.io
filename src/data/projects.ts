export interface Projects {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const projectsData: Projects[] = [
  // Example entry
  {
    title: "TARS",
    description:
      "Cross-platform desktop app that automates SEO audits, content updates, performance checks, and error fixes using Gemini LLM with a custom RAG pipeline. Reduced manual SEO effort by 70% and improved Lighthouse scores by up to 20% through parallel crawling of 100+ pages and semantic retrieval with caching optimization.",
    technologies: ["Rust","Python", "Tauri", "Next.js", "Mantine UI"],
    projectUrl: "https://github.com/OVER-CODER/TARS",
    imageUrl:
      "/TARS.png",
  },
  {
    title: "STASH",
    description:
      "Windows session manager that captures and restores multi-application workspaces in under 2 seconds, saving 30–60 minutes of daily setup time. Built using a hybrid Rust–Python architecture achieving 2x faster state restoration with 99% session recovery accuracy across 100+ test cycles.",
    technologies: ["Rust","Python", "Tauri", "Next.js", "Flask"],
    projectUrl: "https://github.com/OVER-CODER/Stash",
    imageUrl:
      "/STASH.png",
  },
  {
    title: "Tipsy",
    description:
      "AI-powered Chrome extension that analyzes JavaScript runtime error types and suggests real-time fixes using Gemini API and Chrome DevTools Protocol. Reduced debugging time by 40% with sub-2 second response latency and lightweight injection overhead (<100ms) to maintain performance.",
    technologies: ["TypeScript", "Gemini API", "Chrome DevTools Protocol"],
    projectUrl: "https://github.com/OVER-CODER/Tipsy",
  },
];
