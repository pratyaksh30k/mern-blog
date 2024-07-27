import React from "react";
import { Button } from "flowbite-react";
import BlogMern from "../assets/BlogMern.png";
import FoodNetwork from "../assets/FoodNetwork.png";
import Portfolio from "../assets/Portfolio.png";
import BubbleGame from "../assets/BubbleGame.png";
import Calculator from "../assets/Calculator.png";

export default function MyProjects() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">Blog App with Admin Dashboard</h2>
          <p className="text-gray-500 my-2">
            Full stack MERN Project (jwt,redux-toolkit)
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center mt-2 gap-4 md:gap-0">
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10 w-full md:w-auto"
            >
              <a href="https://github.com/pratyaksh30k/mern-blog" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10  w-full md:w-auto"
            >
              <a href="/projects" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="p-7 flex-1">
          <img className=" border-2 border-solid border-gray-300 dark:border-gray-600 " src={BlogMern} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">Food Network</h2>
          <p className="text-gray-500 my-2">
            Food Oredering app developed with React JS, Tailwind CSS and redux-toolkit.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center mt-2 gap-4 md:gap-0">
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10 w-full md:w-auto"
            >
              <a href="https://github.com/pratyaksh30k/foodNetwork" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10  w-full md:w-auto"
            >
              <a href="/projects" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="p-7 flex-1">
          <img className=" border-2 border-solid border-gray-300 dark:border-gray-600 " src={FoodNetwork} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">React Portfolio</h2>
          <p className="text-gray-500 my-2">
            Animated personal portfolio developed with React JS, Tailwind CSS and Motion UI.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center mt-2 gap-4 md:gap-0">
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10 w-full md:w-auto"
            >
              <a href="https://github.com/pratyaksh30k/my-react-portfolio" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10  w-full md:w-auto"
            >
              <a href="/projects" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="p-7 flex-1">
          <img className=" border-2 border-solid border-gray-300 dark:border-gray-600 " src={Portfolio} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">Bubble Game</h2>
          <p className="text-gray-500 my-2">
            A simple game developed with HTML, CSS and JavaScript logics.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center mt-2 gap-4 md:gap-0">
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10 w-full md:w-auto"
            >
              <a href="https://github.com/pratyaksh30k/BubbleGame" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10  w-full md:w-auto"
            >
              <a href="/projects" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="p-7 flex-1">
          <img className=" border-2 border-solid border-gray-300 dark:border-gray-600 " src={BubbleGame} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">Calculator</h2>
          <p className="text-gray-500 my-2">
            Basic HTML, CSS calculator with light and dark theme features.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center mt-2 gap-4 md:gap-0">
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10 w-full md:w-auto"
            >
              <a href="https://github.com/pratyaksh30k/Calculator" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
            <Button
              gradientDuoTone="cyanToBlue"
              className="rounded-md flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10  w-full md:w-auto"
            >
              <a href="/projects" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="p-7 flex-1">
          <img className=" border-2 border-solid border-gray-300 dark:border-gray-600 " src={Calculator} />
        </div>
      </div>
    </div>
  );
}
