import React from "react";
import smiling_cover from "../components/smiling-cover.png";
import AirBnB from "../components/AirBnb.png";
import Kahuna from "../components/kahuna.png";

const Projects = () => {
  return (
    <div name="Projects" className="w-full h-screen bg-[#0a192f] text-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Projects
            </p>
          </div>
        </div>
        <div className="w-90 grid grid-cols-3 gap-10 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <p className="my-4">Smiling School</p>
            <img
              className="w-30 h-60 mx-auto"
              src={smiling_cover}
              alt="smiling-cover"
            />
            <p className="my-4">
              Dynamic web application that was built using JavaScript, jQuery,
              Bootstrap, and UI/UX designs.
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <p className="my-4">Kahuna</p>
            <img
              className="w-30 h-60 mx-auto"
              src={Kahuna}
              alt="Kahuna"
            />
            <p className="my-4">
              Custom front-end from a prompt “waves”. Created using HTML, CSS,
              Vanilla JS. and Tailwind. Fully responsive with search features.
            </p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <p className="my-4">AirBnB Clone</p>
            <img
              className="w-30 h-60 mx-auto"
              src={AirBnB}
              alt="AirBnb"
            />
            <p className="my-4">
              Airbnb-like web-service built with Python, MySQL, Flask, NGINX,
              and JavaScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
