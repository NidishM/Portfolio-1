import React from 'react';
import Hero from '../assets/Hero.jpg';
import { RiArrowRightSFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Highly motivated web enthusiastic aspiring to be a web developer in
            a firm where I am challenged with responsibilities to contribute my
            creativity and knowledge.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-cyan-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSFill size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Hero}
            alt="my profilePic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
