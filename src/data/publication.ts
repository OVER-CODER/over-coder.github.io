export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "ECCV",
    title: "BiSLW: Bi-Spectral Latent Watermarking for Generative Diffusion Models",
    authors: "Aryan Pandit",
    paperUrl: "https://arxiv.org/abs/2607.02643",
    codeUrl: "https://github.com/OVER-CODER/BiSLW",
    bibtex: "https://github.com/OVER-CODER/BiSLW#j-citation",
    tldr: "Designed a dual-frequency latent watermarking framework that independently embeds information into low- and high-frequency latent components, improving visual fidelity while maintaining robust watermark recovery under regeneration attacks and common image distortions.",
    imageUrl: "/BiSLW.png",
  },
  {
    year: "2026",
    conference: "IEEE Region 10 TENCON",
    title: "Beyond Plausible Explanations: Verification-Aware Reasoning for Reliable LLM Fact Checking",
    authors: "Aryan Pandit",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Introduced a verification-aware reasoning framework integrating evidence verification with structured reasoning for reliable LLM-based fact checking.",
    imageUrl:
      "/BeyondPlausible.png",
  },
  {
    year: "2026",
    conference: "IEEE SCEECS",
    title: "Plug-and-Play Proximal Graphical Model for Demosaicing of Microscopy Images",
    authors: "Aryan Pandit, Anurodh Kumar, Amit Vishwakarma",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11430171",
    codeUrl: "https://github.com/OVER-CODER/PnP-Proximal-Graphical-Model",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Plug-and-Play proximal optimization framework integrating BM3D priors for high-resolution microscopy image demosaicing. Achieved an average PSNR of 41.06 dB and SSIM of 0.909 on 1,324 microscopy images, demonstrating superior reconstruction quality over existing methods.",
    imageUrl: "/sceecs.png",
    award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "Indian Patent",
    title: "SYSTEM AND METHOD FOR RECONSTRUCTING HIGH - QUALITY IMAGE",
    authors: "Amit Vishwakarma, Aryan Pandit",
    paperUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oSEGoVYAAAAJ&citation_for_view=oSEGoVYAAAAJ:u-x6o8ySG0sC",
    codeUrl: "202521077833",
  },
];
