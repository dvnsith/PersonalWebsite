import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white items-center text-center">
              Hello there, I'm Devin
          </h1>
          <br/>
          <p className="mb-8 leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have over 1.5 years 
            of experience in the tech industry. I have worked on numerous projects, ranging from designing 
            large-scale enterprise applications to developing innovative solutions for small businesses. 
            My expertise lies in the ability to quickly identify problems and develop creative solutions 
            that are both cost effective and efficient.
            <br/> 
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My background as a Navy Veteran gives me 
            an additional edge when it comes to working under pressure, making sure deadlines are 
            met while still maintaining the highest quality standards possible.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="ProfileImage"
            src="./Spheres.svg"
          />
        </div>
      </div>
    </section>
  );
}
