import cbseAndOdishaBoardimg from "../assets/Images/1to10img.webp";
import Exampreparation from "../assets/Images/Exampreparation.webp";
import oneononeDoubt from "../assets/Images/oneononeDoubt.webp";
import weeklyexamination from "../assets/Images/weeklyexamination.webp";
// Science & commerce image..
import science2 from "../assets/Images/sciencesubjects.webp";
import commerce2 from "../assets/Images/Your paragraph text (7).webp"
import commerce3 from "../assets/Images/Your paragraph text (8).webp"
// software Development
import corejavaimg from "../assets/Images/Your paragraph text (9).webp"
import frontendimg from "../assets/Images/Your paragraph text (10).webp"
import Fullstackimg from "../assets/Images/Your paragraph text (13).webp"
import backendimg from "../assets/Images/Your paragraph text (11).webp"
import AIwithpython from "../assets/Images/Your paragraph text (14).webp"
import corepython from "../assets/Images/Your paragraph text (15).webp"
import AIMLimg from "../assets/Images/Your paragraph text (16).webp"
import E2Eproject from "../assets/Images/Your paragraph text (17).webp"
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

export const cbseAndOdishaBoard = [
  { name: "Class 1 to 10 all subjects" ,
    img:cbseAndOdishaBoardimg,
  },
  { name: "Exam preparation",
    img:Exampreparation,
  },
  { name: "Weekly examination",
    img:weeklyexamination,
   },
  { name: "One on one doubt clearing session" ,
    img:oneononeDoubt,
  }
];

export const scienceAndCommerce = [
  { name: "+2 science all subjects",
    img:science2,
  },
  { name: "+2 commerce all subjects" ,
 img:commerce2,
  },
  { name: "+3 commerce all subjects" ,
    img:commerce3
  }
];

export const softwareDevelopment = [
  { name: "AI Development with Python", price: "₹23,500 (₹12,000 for 6 months)" ,
   img:AIwithpython
  },
  { name: "Frontend Development", price: "₹16,500 (₹12,000 for 6 months)" ,
img:frontendimg,
  },
  { name: "Backend Development", price: "₹16,500 (₹12,000 for 6 months)" ,
    img:backendimg
  },
  { name: "Full Stack Development", price: "₹28,500 (₹20,000 for 1 year)" ,
    img:Fullstackimg,
  },
  { name: "AI, ML and Data Science", price: "₹16,500 (₹12,000 for 6 months)" ,
    img:AIMLimg
  },
  { name: "Core Java", price: "₹5,000 (2–3 months)",
      img:corejavaimg
   },
  { name: "Core Python", price: "₹5,000 (2–3 months)" ,
    img:corepython,
    
  },
  { name: "E2E Project Deployment", price: "₹12,000 (Experienced)",
    img:E2Eproject,
   },
  // { name: "Software Testing in Selenium", price: "₹15,000" }
];


// Create a combined array for mapping
// export const coursesdata = [
//   { category: "CBSE & Odisha Board", courses: cbseAndOdishaBoard },
//   { category: "Science & Commerce", courses: scienceAndCommerce },
//   { category: "Software Development & IT", courses: softwareDevelopment }
// ];
