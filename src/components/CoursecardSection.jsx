import {  scienceAndCommerce, softwareDevelopment, cbseAndOdishaBoard} from "../utils/constants";
import CourseCard from "./CourseCard";
import HeadingStyle from "./HeadingStyle";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export default function CoursecardSection({ type,heading }) {
  
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
 useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

const cardVariants = {
  hidden: { opacity: 0, x: 100 }, 
  visible: (i) => ({
    opacity: 1,
    x: 0, 
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


  let coursetype = [];
if (type === "CBSE") {
    coursetype = cbseAndOdishaBoard;
  } else if (type === "ScienceCommerce") {
    coursetype = scienceAndCommerce;
  } else if (type === "Software") {
    coursetype = softwareDevelopment;
  }

return (
    <motion.div className="mt-2" ref={ref}  
          initial="hidden"
          animate={controls}
          variants={cardVariants}>
       <HeadingStyle text={heading}></HeadingStyle>
      <div className={`grid place-content-center gap-6 p-6 md:grid-cols-3 lg:grid-cols-4 `}>
      {coursetype.map((courseinfo, ind) => (
        <CourseCard key={ind} courseinfo={courseinfo} />
      ))}
    </div>
   </motion.div>
  );
}




