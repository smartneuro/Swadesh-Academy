import { NavLink } from "react-router-dom";
export default function CourseCard({courseinfo}) {
 return (
    <div className="max-w-sm rounded-lg overflow-hidden drop-shadow-xl bg-white p-5 flex flex-col justify-evenly gap-3 hover:shadow-blue-300 ">
      {/* Badge */}
      <div>
        <span className="bg-[#e0f2fe] text-[#0369a1] text-xs font-semibold px-3 py-1 rounded-md shadow">
        COURSE
      </span>
      </div>
      
 {/* Course Info */}
 <div className="flex flex-col items-center justify-evenly gap-3">
      <h3 className="text-xl font-bold">
    {courseinfo?.name}
      </h3>
    <img
  src={courseinfo.img}
  alt="course image"
  loading="lazy"
  width="400"
  height="300"
  className="w-full h-auto object-cover rounded-md"
/>
  {courseinfo?.price && (
        <p className="text-para">Price: {courseinfo.price}</p>
   )}
</div>
      {/* Button */}
      <div className="w-full flex items-center justify-center">
       <NavLink to="/Contact" className="bg-gradient-to-r from-blue-500 to-blue-600  hover:from-blue-800 hover:to-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md transition-all">
          Registration
        </NavLink>
      </div>
    </div>
  );
}

  
