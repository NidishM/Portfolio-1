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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ex
          labore a voluptatibus, deserunt recusandae repellat obcaecati cum hic
          nesciunt sequi fugiat quasi expedita fugit necessitatibus quidem quia
          error quod pariatur suscipit, reiciendis fuga ea temporibus. Veritatis
          accusantium esse ea laudantium, illum quisquam ipsum possimus velit
          placeat! Consectetur, cupiditate dolore.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          distinctio aspernatur itaque eligendi quas maxime tempore voluptate
          dolor a pariatur provident aliquam explicabo sapiente praesentium
          facere doloribus nobis magnam laudantium deleniti, similique rerum
          vitae? Odio veniam magnam magni voluptas eveniet deleniti aspernatur
          culpa at, praesentium dicta laboriosam velit nostrum! Explicabo?
        </p>
      </div>
    </div>
  );
};

export default About;
