import React from "react";
import socialapp from "../assets/portfolio/socialapp.png";
import carspace from "../assets/portfolio/carspace.png";
import contactlistApp from "../assets/portfolio/contactlistApp.png";
import todolistApp from "../assets/portfolio/todolistApp.png";
import moviexApp from "../assets/portfolio/moviexApp.png";
import gameUniverse from "../assets/portfolio/gameUniverse.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: socialapp,
      title: "SocialApp : MERN/Socket.io",
    },
    {
      id: 2,
      src: carspace,
      title: "CarRentalApp : MERN/Redux",
    },
    {
      id: 3,
      src: contactlistApp,
      title: "ContactApp : MERN/Redux",
    },
    {
      id: 4,
      src: todolistApp,
      title: "ToDoListApp : React.JS/Redux",
    },
    {
      id: 5,
      src: moviexApp,
      title: "MovieApp : React.JS",
    },
    {
      id: 6,
      src: gameUniverse,
      title: "GameOnlineShop :  HTML/CSS/JavaScript",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="roundes-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <p className="w-2/3 px-4 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </p>
                <button className="w-1/3 px-6 py-3 m-4 duration-200 hover:scale-105 text-green-600">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
