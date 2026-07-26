export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  acad_email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aryan Pandit",
  title: "Undergrad",
  institution: "Indian Institute of Information Technology, Jabalpur",
  // Note that links work in the description
  description:
    "I'm a third-year <a href='https://iiitdmj.ac.in/'>undergrad</a> interested in <span class='text-[#800020] font-medium'>computer vision</span>, <span class='text-[#800020] font-medium'>generative models</span>, and <span class='text-[#800020] font-medium'>image processing</span>. My research focuses on understanding and improving how visual information is represented, generated, and reconstructed by learning-based systems. I have worked on problems spanning <span class='text-[#800020] font-medium'>generative image watermarking</span>, <span class='text-[#800020] font-medium'>biomedical imaging</span>, and <span class='text-[#800020] font-medium'>inverse imaging</span>. I enjoy exploring ideas at the intersection of deep learning, signal processing, and visual computing.",
  email: "aryanpandit.1205@gmail.com",
  acad_email: "23bec023@iiitdmj.ac.in",
  imageUrl: "/aryan_photo.png",
  googleScholarUrl: "https://scholar.google.com/citations?user=oSEGoVYAAAAJ&hl=en",
  githubUsername: "over-coder",
  linkedinUsername: "aryan-pandit-me",
  twitterUsername: "AryanEverywhere",
  blogUrl: "/blog",
  cvUrl: "https://drive.google.com/file/d/1MT8bZcXfZoosqOph-v5ZAl90h3MAS_65/view?usp=sharing",
  institutionUrl: "https://www.iiitdmj.ac.in/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
