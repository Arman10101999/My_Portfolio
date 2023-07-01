import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  // {/*using useState*/}
  const [nav, setNav] = useState(false);

  // {/* making the array of links for the navigation bar in react for better cleaner code */}
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      {/* the above have h-20 means 5rem 80px  , text white wuth black background  and the navbar will remian fiexed as we scroll down the page*/}

      <div>
        <h1 className="text-5xl font font-signature ml-2 hover:scale-110 duration-200">
          {" "}
          Arman....
        </h1>
        {/* ml-2 margin length - 2px  and with signature */}
      </div>
      {/* here we used JSX to loop through the navigation bar elements and made an arrow function and state the key with all unique id's and the links for the bar elements*/}

      {/* since we have to make the site first for the mobile version we have to hide the navigtaion bar when the size of the window drops to md( i.e. 768px) */}

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {" "}
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* this section if for icons*/}

      {/* the cursor will change while hovering to the icon and padding and z-10 means it will come upwards ( will not be back of anything) text gray */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* the md hidden is used for hiding the nav bar whem the size of the screen is medium */}

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {" "}
                {link}
              </Link>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
