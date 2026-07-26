export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  organizer?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Year Long 2025",
    title: "Research Intern",
    company: "Indian Institute of Information Technology, Jabalpur",
    description:
      "Co-Authored a research paper proposing a Plug-and-Play Proximal Graphical Model using BM3D priors for robust demosaicing of high-resolution microscopy images. Achieved an average PSNR of 41.06 dB and SSIM of 0.909 on 1324 high-res images, surpassing previous baselines.",
    advisor: "Dr. Amit Vishwakarma",
    companyUrl: "https://iiitdmj.ac.in",
  },
  {
    date: "Summer 2025",
    title: "Open-Source Developer",
    company: "Iabsis HCW - C4GT Program",
    description:
      "Developed and integrated RBAC system and configured messaging services (SMS and WhatsApp) to enhance the HCW admin platform’s security and communication capabilities. Worked with NestJS for backend services and Angular for frontend integration, focusing on modular, scalable system design.",
    organizer: "Code For Government Tech",
    companyUrl: "https://codeforgoodtech.in/",
  },
];
