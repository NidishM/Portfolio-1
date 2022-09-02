import React from 'react';
import FeedbackUI from '../assets/portfolio/FeedbackUI.PNG';
import GithubFinder from '../assets/portfolio/GithubFinder.PNG';
import HomeMarketPlace from '../assets/portfolio/HomeMarketPlace.PNG';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: HomeMarketPlace,
      demo: 'https://home-marketplace-six.vercel.app/',
      code: 'https://github.com/NidishM/home-marketplace',
    },
    {
      id: 2,
      src: GithubFinder,
      demo: 'https://github-finder-app-nidishm.vercel.app/',
      code: 'https://github.com/NidishM/github-finder-app',
    },
    {
      id: 3,
      src: FeedbackUI,
      demo: 'https://feedback-app-murex-two.vercel.app/',
      code: 'https://github.com/NidishM/Feedback-App',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
