
// software Development
import frontendimg from "../assets/Images/Your paragraph text (4).png"
import backendimg  from "../assets/Images/Your paragraph text (5).png"
import Fullstackimg  from "../assets/Images/Your paragraph text (6).png"
import corejavaimg from "../assets/Images/Your paragraph text (7).png"
import corepython from "../assets/Images/Your paragraph text (8).png"
import AIwithpython  from "../assets/Images/Your paragraph text (9).png"

export const ACADEMY_NAME = "Swadesh Academy";
export const ABOUT_US_TEXT = `
BriliantAcademy is a leading coaching center dedicated to providing quality education
to students of all levels. Our mission is to empower students with knowledge,
confidence, and academic excellence through experienced faculty and innovative teaching methods.
`;

export const CONTACT_INFO = {
  address: "",
  phone: "",
  email: "",
};

export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
  youtube: "",
};


// coursesdata.js
export const softwareDevelopment = [
  { 
    name: "Gen AI", 
    oldPrice: 11200, 
    price: 8000, 
    duration: "4 months", 
    img: AIwithpython,
    tech: ["Python", "Machine Learning", "Prompt Engineering", "LangChain", "OpenAI API"]
  },
  { 
    name: "Frontend Development", 
    oldPrice: 7000, 
    price: 5000, 
    duration: "3 months", 
    img: frontendimg,
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  { 
    name: "Backend Development", 
    oldPrice: 8400, 
    price: 6000, 
    duration: "4 months", 
    img: backendimg,
    tech: ["Node.js", "Express.js", "MongoDB", "REST API", "Authentication"]
  },
  { 
    name: "Full Stack Development", 
    oldPrice: 14000, 
    price: 10000, 
    duration: "7 months", 
    img: Fullstackimg,
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"]
  },

  { 
    name: "Core Python", 
    oldPrice: 7000, 
    price: 5000, 
    duration: "3 months", 
    img: corepython,
    tech: ["Python Basics", "OOPs", "File Handling", "Modules", "Error Handling"]
  },
  { 
    name: "Core Java", 
    oldPrice: 7000, 
    price: 5000, 
    duration: "3 months", 
    img: corejavaimg,
    tech: ["Java Basics", "OOPs", "Collections", "Exception Handling", "JDBC"]
  },
 
  
];
