import React from "react";
import smiling_cover from "../components/smiling-cover.png";
import travel_kenz from "../components/travel-kenz.png";
import Kahuna from "../components/kahuna.png";

const Projects = () => {
  return (
    <div name="Projects" className="w-80% h-screen bg-[#0a192f] text-gray-200">
      <div className="flex flex-col sm:flex justify-center items-center w-70% 200px">
        <div className="max-w-3xl grid grid-cols-1 gap-8">
          <div className="md:mb-6 mt-6 pt-20 sm:text-left pt-35 pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Projects
            </p>
          </div>
        </div>
        <div className="w-3Learni grid grid-cols-3 gap-10 text-center pl-10 py-10">
          <div className="w-3/4 shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <a
              href="https://github.com/RockoGilbert/holberton-smilingschool-javascript"
              class="mx-5 animate-pulse text-red-400 mx-3">Smiling School
            </a>
            <img className="object-cover w-3/4 h-41 mx-auto mt-7" src={smiling_cover} alt="smiling-cover" />
            <p className="my-8 pl-14 pr-10">
              Dynamic web application that was built using JavaScript, jQuery,
              Bootstrap, and UI/UX designs.
            </p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <a
              href="https://github.com/RockoGilbert/kahuna"
              class="animate-pulse text-red-400">Kahuna
            </a>
            <img className="object-cover w-3/4 h-41 mx-auto mt-7" src={Kahuna} alt="Kahuna" />
            <p className="my-8">
              Custom front-end from a prompt “waves”. Created using HTML, CSS,
              Vanilla JS. and Tailwind. Fully responsive with search features.
            </p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:Scale-110 duration-500">
            <a
              href="https://travel-kenz.netlify.app"
              class="animate-pulse text-red-400">Travel_Kenz
            </a>
            <img className="object-cover w-3/4 h-60 mx-auto mt-7" src={travel_kenz} alt="Travel Kenz" />
            <p className="my-8">
              A React Js front-end
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
