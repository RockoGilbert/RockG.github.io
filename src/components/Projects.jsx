import React from "react";
import smiling_cover from "../components/smiling-cover.png";
import AirBnB from "../components/AirBnb.png";
import Kahuna from "../components/kahuna.png";

const Projects = () => {
  return (
    <div name="Projects" className="w-80% h-screen bg-[#0a192f] text-gray-200">
      <div className="flex flex-col sm:flex justify-center items-center w-80% h-full">
        <div className="max-w-3xl grid grid-cols-1 gap-8">
          <div className="sm:text-left pt-35 pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Projects
            </p>
          </div>
        </div>
        <div className="w-3Learning new skills and thriving in a collaborative environment is0 grid grid-cols-3 gap-10 text-center py-10">
          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <a
              href="https://github.com/RockoGilbert/holberton-smilingschool-javascript"
              class="mx-5 animate-pulse text-red-400 mx-3">Smiling School
            </a>
            <img className="w-30 h-60 mx-auto mt-7" src={smiling_cover} alt="smiling-cover" />
            <p className="my-8 pl-14 ">
              Dynamic web application that was built using JavaScript, jQuery,
              Bootstrap, and UI/UX designs.
            </p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <a
              href="https://github.com/RockoGilbert/kahuna"
              class="animate-pulse text-red-400">Kahuna
            </a>
            <img className="w-30 h-60 mx-auto mt-7" src={Kahuna} alt="Kahuna" />
            <p className="my-8">
              Custom front-end from a prompt “waves”. Created using HTML, CSS,
              Vanilla JS. and Tailwind. Fully responsive with search features.
            </p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <a
              href="https://github.com/RockoGilbert/AirBnB_clone_v4"
              class="animate-pulse text-red-400">AirBnb
            </a>
            <img className="w-30 h-60 mx-auto mt-7" src={AirBnB} alt="AirBnb" />
            <p className="my-8">
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
