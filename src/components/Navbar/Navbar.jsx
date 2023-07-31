

import React, { useState } from 'react';
import "./Navbar.css";
import { TiHomeOutline } from "react-icons/ti";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";

const Tooltip = ({ text, children }) => {
  return (
    <span className="tooltip" title={text}>
      {children}
    </span>
  );
};

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <Tooltip text="Home">
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}>
          <TiHomeOutline />
        </a>
      </Tooltip>
      <Tooltip text="About">
        <a href="#About" onClick={() => setActiveNav("#About")} className={activeNav === '#About' ? 'active' : ''}>
          <SiAboutdotme />
        </a>

      </Tooltip>
      <Tooltip text="Skills">
        <a href="#Skills" onClick={() => setActiveNav("#Skills")} className={activeNav === '#Skills' ? 'active' : ''}>
          <GiSkills  />
        </a>
        
      </Tooltip>
      <Tooltip text="Portfolio">
        <a href="#Portfolio" onClick={() => setActiveNav("#Portfolio")} className={activeNav === '#Portfolio' ? 'active' : ''}>
          <AiOutlineFundProjectionScreen />
        </a>
      </Tooltip>
      <Tooltip text="Education">
        <a href="#Education" onClick={() => setActiveNav("#Education")} className={activeNav === '#Education' ? 'active' : ''}>
          <MdOutlineCastForEducation />
        </a>
      </Tooltip>
      <Tooltip text="Experience">
        <a href="#Experience" onClick={() => setActiveNav("#Experience")} className={activeNav === '#Experience' ? 'active' : ''}>
          <MdWorkOutline />
        </a>
      </Tooltip>
      <Tooltip text="Services">
        <a href="#Services" onClick={() => setActiveNav("#Services")} className={activeNav === '#Services' ? 'active' : ''}>
          <MdMiscellaneousServices />
        </a>
      </Tooltip>
      <Tooltip text="Contact">
        <a href="#Contact" onClick={() => setActiveNav("#Contact")} className={activeNav === '#Contact' ? 'active' : ''}>
          <LuContact />
        </a>
      </Tooltip>
    </nav>
  );
}

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import "./Navbar.css";
// import { TiHomeOutline } from "react-icons/ti";
// import { SiAboutdotme } from "react-icons/si";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// import { MdOutlineCastForEducation } from "react-icons/md";
// import { MdWorkOutline } from "react-icons/md";
// import { MdMiscellaneousServices } from "react-icons/md";
// import { LuContact } from "react-icons/lu";

// const Tooltip = ({ text, children }) => {
//   return (
//     <span className="tooltip" title={text}>
//       {children}
//     </span>
//   );
// };

// const Navbar = () => {
//   const [activeNav, setActiveNav] = useState('#');
  
//   useEffect(() => {
//     const handleNavigationChange = () => {
//       setActiveNav(window.location.hash);
//     };

//     window.addEventListener("hashchange", handleNavigationChange);

//     return () => {
//       window.removeEventListener("hashchange", handleNavigationChange);
//     };
//   }, []);

//   return (
//     <nav>
//       <Tooltip text="Home">
//         <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}>
//           <TiHomeOutline />
//         </a>
//       </Tooltip>
//       <Tooltip text="About">
//         <a href="#About" onClick={() => setActiveNav("#About")} className={activeNav === '#About' ? 'active' : ''}>
//           <SiAboutdotme />
//         </a>
//       </Tooltip>
//       <Tooltip text="Portfolio">
//         <a href="#Portfolio" onClick={() => setActiveNav("#Portfolio")} className={activeNav === '#Portfolio' ? 'active' : ''}>
//           <AiOutlineFundProjectionScreen />
//         </a>
//       </Tooltip>
//       <Tooltip text="Education">
//         <a href="#Education" onClick={() => setActiveNav("#Education")} className={activeNav === '#Education' ? 'active' : ''}>
//           <MdOutlineCastForEducation />
//         </a>
//       </Tooltip>
//       <Tooltip text="Experience">
//         <a href="#Experience" onClick={() => setActiveNav("#Experience")} className={activeNav === '#Experience' ? 'active' : ''}>
//           <MdWorkOutline />
//         </a>
//       </Tooltip>
//       <Tooltip text="Services">
//         <a href="#Services" onClick={() => setActiveNav("#Services")} className={activeNav === '#Services' ? 'active' : ''}>
//           <MdMiscellaneousServices />
//         </a>
//       </Tooltip>
//       <Tooltip text="Contact">
//         <a href="#Contact" onClick={() => setActiveNav("#Contact")} className={activeNav === '#Contact' ? 'active' : ''}>
//           <LuContact />
//         </a>
//       </Tooltip>
      
//     </nav>
//   );
// };

// export default Navbar;


