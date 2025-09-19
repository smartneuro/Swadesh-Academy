import { NavLink } from "react-router-dom";

export default function CourseCard({ courseinfo }) {
  // Calculate discount dynamically
  const discount = courseinfo.oldPrice
    ? Math.round(((courseinfo.oldPrice - courseinfo.price) / courseinfo.oldPrice) * 100)
    : null;

  const savings =
    courseinfo.oldPrice && courseinfo.price
      ? courseinfo.oldPrice - courseinfo.price
      : null;

  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden bg-white p-5 flex flex-col  justify-evenly gap-4 hover:shadow-2xl transition-all duration-300 border border-gray-300 drop-shadow-xl">
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-3 right-3 bg-green-400 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
          {discount}% OFF
        </span>
      )}

      {/* Course Badge */}
      <div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
          COURSE
        </span>
      </div>

      {/* Course Info */}
      <div className="flex flex-col items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-gray-800 text-center">
          {courseinfo?.name}
        </h3>
        <img
          src={courseinfo.img}
          alt="course"
          loading="lazy"
          className="w-full h-auto  rounded-lg shadow-sm hover:scale-105 transition-transform"
        />

        {/* Pricing */}
     {courseinfo?.price && (
  <div className="text-center">
    <div className="flex items-center gap-2">
      {courseinfo.oldPrice && (
        <p className="text-gray-400 text-sm line-through">
          ₹{courseinfo.oldPrice.toLocaleString("en-IN")}
        </p>
      )}
      <p className="text-xl font-bold text-blue-500">
        ₹{courseinfo.price.toLocaleString("en-IN")}
      </p>
    </div>
    {courseinfo.duration && (
      <p className="text-gray-600 text-sm mt-1">
        ({courseinfo.duration})
      </p>
    )}
  </div>
)}
      </div>

      {/* Button */}
      <div className="w-full flex items-center justify-center mt-2">
        <NavLink
          to="/Contact"
          className="w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
        >
          Enroll Now
        </NavLink>
      </div>
    </div>
  );
}
