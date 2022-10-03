import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profilcv from "../assets/profilcv.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a full stack javaScript developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm looking for new opportunities to start my career. Currently, I'm
            working on web application using technologies like React, Redux,
            Tailwind, Material UI, Bootstrap, Node JS, Express JS and MongoDB.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={23} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profilcv}
            alt="profilepic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
