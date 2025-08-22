import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Navbar() {
 const navItem = [
    { name: "Home", path:"/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/Courses" },
    { name: "Contact", path: "/Contact" },
   
  ];

return (
  <>
    <nav className="shadow-md h-15 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[1.3rem]">
          <h1>Swadesh <span className="text-primary">Academy</span></h1>
        </div>
{/* Desktop View Nav Items */}
        <div>
          <ul className="hidden lg:flex items-center justify-center gap-9 lg:text-[1.2rem]">
            {
              navItem.map((item,ind)=>
                <li key={ind}>
                <NavLink to={item.path}>{item.name} </NavLink> </li>)}
          </ul>
         </div>
         <div className="lg:hidden">
     <MobileNav navitems={navItem}></MobileNav>
     </div>
      </div>
       {/* mobile menu icon */}
       
</nav>
</>
  );
}
