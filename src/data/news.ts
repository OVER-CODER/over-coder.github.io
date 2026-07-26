export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "June 2026",
    title: "BiSLW accepted at ECCV 2026",
    description: "My solo authored paper titled 'BiSLW: Bi-Spectral Latent Watermarking for Generative Diffusion Models' has been accepted at ECCV 2026.",
    link: "https://arxiv.org/abs/2607.02643",
  },
  {
    date: "June 2026",
    title: "Beyond Plausible Explanations accepted at IEEE Tencon 2026",
    description: "My solo authored paper titled 'Beyond Plausible Explanations: Verification-Aware Reasoning for Reliable LLM Fact Checking' has been accepted at IEEE Region 10 TENCON 2026.",
  },
  {
    date: "February 2026",
    title: "PnP PGM for Demosicing accepted at IEEE SCEECS 2026",
    description: "Our paper titled 'Plug-and-Play Proximal Graphical Model for Demosaicing of Microscopy Images' has been accepted at IEEE SCEECS 2026.",
    link: "https://ieeexplore.ieee.org/abstract/document/11430171",
  },
  {
    date: "May 2025",
    title: "Got Selected for Code for Gov Tech Internship",
    description: "Selected for the Code for GovTech (C4GT) Dedicated Mentoring Program (DMP) as a OpenSource Developer",
    link: "https://github.com/OVER-CODER/hcw-home",
  },
  {
    date: "December 2024",
    title: "ACM Winter School",
    description: "Selected among Top 40 nationwide for ACM Winter School on Explainable & Robust AI",
    link: "https://india.acm.org/education/acm-india-winter-schools-2024",
  }
];
