export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "Indian Institute of Information Technology, Jabalpur",
    degree: "B.Tech in Electronics and Communication Engineering",
  }
];
