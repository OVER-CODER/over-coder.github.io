export interface BlogEntry {
  date: string;
  title: string;
  description: string;
  readTime?: string;
  link?: string;
}

export const blogData: BlogEntry[] = [
  {
    date: "June 2026",
    title: "Latent Watermarking in Generative Models: A Primer",
    description: "An overview of how watermarking works within the latent space of diffusion models, balancing robustness against tampering with generation quality.",
    readTime: "8 min read",
  },
  {
    date: "April 2026",
    title: "Why Explanations are Not Enough for Fact-Checking",
    description: "Discussing our latest findings on the verification-aware reasoning paradigm, and why standard chain-of-thought isn't robust against misinformation.",
    readTime: "5 min read",
  },
  {
    date: "January 2026",
    title: "Understanding Proximal Optimizations in Image Processing",
    description: "A deep dive into proximal graphical models and how we can use plug-and-play denoiser priors to demosaic high-resolution scientific data.",
    readTime: "12 min read",
  }
];
