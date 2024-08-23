import React, { useState, useEffect } from 'react';
import  from '../../assets/p1.png'
const Project = () => {
  const projects = [
    {
      img: p1,
      title: 'Social Swiril',
      description: 'In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these platforms, Social Swirl stands out as a beacon of innovative educational solutions, committed to providing unparalleled learning experiences through its dynamic online courses and interactive content.',
      buttonLabel: 'Read More',
      buttonLink: '/Social-swiril'
    },
    {
      img: 'https://dkgroup.pk/wp-content/uploads/2024/03/3-2-768x432.png',
      title: 'DK Recruitment',
      description: 'In the era of digital connectivity and flexible work arrangements DK Recruitment emerges as a beacon of innovation, offering remote job opportunities and remote internships to individuals seeking versatile and fulfilling career paths.',
      buttonLabel: 'Read More',
      buttonLink: '/DK'
    },
    {
      img: 'https://dkgroup.pk/wp-content/uploads/2024/03/loja-1-768x432.png',
      title: 'Loja',
      description: 'In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.',
      buttonLabel: 'Read More',
      buttonLink: '/Loja'
    },
    {
      img: 'https://dkgroup.pk/wp-content/uploads/2024/03/gotrolly-sen-768x432.png',
      title: 'Gotrolly',
      description: 'In the fast-paced digital age, mobile devices have become an integral part of our daily lives, serving as tools for communication, productivity, entertainment, and more. Recognizing the growing need for high-quality mobile accessories, Gotrolley emerges as the go-to destination for consumers seeking top-notch products to enhance their mobile experience. Let’s explore the core aspects of Gotrolley, including its thoughts, aims, products, team, future goals, and the path to its success.',
      buttonLabel: 'Read More',
      buttonLink: '/Gotrolly'
    },
    {
      img: 'https://dkgroup.pk/wp-content/uploads/2024/03/2-1-768x432.png',
      title: 'Elisha',
      description: 'In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.',
      buttonLabel: 'Read More',
      buttonLink: '/Elisha'
    },
    {
      img: 'https://dkgroup.pk/wp-content/uploads/2024/03/07-768x432.jpg',
      title: 'DK Tech',
      description: 'In today’s corporate landscape, social responsibility plays a pivotal role in driving positive change and fostering sustainable development. DK Tech, a leading technology company, exemplifies this ethos through its commitment to Corporate Social Responsibility (CSR). Let’s explore the core aspects of DK Tech, including its thoughts, aims, services, team, future goals, and the impact of its CSR endeavours.',
      buttonLabel: 'Read More',
      buttonLink: '/DKTech'
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
    <div className="flex justify-center items-center bg-white py-4 mt-44">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  className="slide px-4 flex flex-col"
                >
                  <div className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white flex flex-col h-full">
                    <img
                      className="w-full h-52 object-cover object-center"
                      src={project.img}
                      alt={project.title}
                    />
                    <div className="flex flex-col flex-grow p-4 text-center">
                      <h1 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h1>
                      <p className="text-sm text-black mb-4">{project.description}</p>
                      <a href={project.buttonLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-5 rounded-xl">
                          {project.buttonLabel}
                        </button>
                      </a>
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
