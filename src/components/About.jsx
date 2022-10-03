import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am an aeronautical engineer and a front-end and back-end web
          developer using the javascript language. I am hardworking, rigorous
          and available, looking for a new opportunity on web development's
          field.
        </p>
        <br />
        <p className="text-xl">
          I got my MERN stack web development degree from Go My Code,so I can
          create a front-end and back-end websites using React.Js and Node.Js.
          <br />
          The technologies mastered are :
          <br />
          •Front-end: HTML5 / CSS / JavaScript / React.js / Redux.js / Bootstrap
          / Material-UI.
          <br />
          •Back-end: Node.js / Express / MongoDB / Mongoose.
          <br />• Git/GitHub.
        </p>
      </div>
    </div>
  );
};

export default About;
