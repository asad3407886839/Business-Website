import React, { useState, useEffect } from 'react';

const Project = () => {
  const projects = [
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/1-2-768x432.png',
      title: 'Social Swiril',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rutrum quam nec varius vestibulum. ',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/loja-1-768x432.png',
      title: 'Loja',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rutrum quam nec varius vestibulum.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/gotrolly-sen-768x432.png',
      title: 'Gotrolly',
      description: 'Fusce vulputate eros sed enim vehicula, vitae posuere nulla gravida. Vivamus id sem a libero aliquam ultricies.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/2-1-768x432.png',
      title: 'Elisha',
      description: 'Phasellus dapibus metus sed augue fringilla, at ultricies mi dictum. In suscipit dolor vitae dui condimentum, non luctus neque viverra.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/3-2-768x432.png',
      title: 'DK Recruitment',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/loja-1-768x432.png',
      title: 'Loja',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rutrum quam nec varius vestibulum.',
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const slidesPerPage = 3; // Number of slides to show per set

  const totalSets = Math.ceil(projects.length / slidesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 2000); // Change set every 2 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  return (
    <div className="flex justify-center items-center bg-yellow-500 py-4">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {projects
              .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  className="slide px-4"
                >
                  <div className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white p-0 flex flex-col items-center">
                    <img
                      className="h-48 w-full object-cover object-center rounded-t-xl"
                      src={project.imageUrl}
                      alt="Project Image"
                    />
                    <div className="px-4 py-4 text-center p-10">
                      <h1 className="text-base font-medium text-gray-900 mb-2">{project.title}</h1>
                      <p className="text-sm leading-relaxed">{project.description}</p>
                      <button className="bg-black text-white font-bold py-2 px-5 mt-3 rounded-xl">
                        <a href="https://www.google.com/">Read More</a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
