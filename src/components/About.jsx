import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Born and brought up in Bangalore, an Engineer graduate specialized in
          electronics and communication but ended up in IT. Love technologies
          and innovations, now fallen for web development.
        </p>

        <br />

        <p className="text-xl italic">
          "All of us do not have equal talent. But, all of us have an equal
          opportunity to develop our talents."
          <br />- Dr APJ Abdul Kalam
        </p>
      </div>
    </div>
  );
};

export default About;
