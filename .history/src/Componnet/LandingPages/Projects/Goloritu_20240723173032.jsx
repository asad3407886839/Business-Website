import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/2151074301.jpg",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: " the heart of Gotrolley lies a vision to provide customers with a seamless shopping experience for premium mobile accessories. The company understands the importance of technology in modern living and aims to bridge the gap between functionality, style, and affordability. Gotrolley’s ethos revolves around offering a curated selection of products that combine innovation, durability, and aesthetics to meet the diverse needs of mobile users."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/acc.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "Gotrolley primary aim is to become the ultimate destination for mobile accessories, offering a wide range of products that cater to various devices, brands, and user preferences. The company strives to be a trusted source where customers can find everything they need to protect, enhance, and personalise their mobile devices, whether it’s smartphones, tablets, smartwatches, or accessories like chargers, cases, screen protectors, and more.",
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/services.jpg",
    alt: "Project Image",
    txt: "Services",
    text: ""
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png",
    alt: "Project Image",
    txt: "Team",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/future-goals.jpg",
    alt: "Future Goal",
    txt: "Future Goal",
    text: "Looking ahead, Social Swirl has ambitious goals aimed at further expanding its impact on the e-learning landscape. The company plans to diversify its course offerings, forge strategic partnerships with educational institutions and industry leaders, and enhance its technological infrastructure for seamless user experiences. By staying agile and responsive to market trends and user feedback, Social Swirl aims to remain at the forefront of educational innovation."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/success-1024x683.jpg",
    alt: "Project Image",
    txt: "Success",
    text: "The success of Social Swirl is evident in the positive feedback from learners, the growing community of users, and the recognition received for its innovative approach to e-learning. Through continuous refinement of its services, adherence to high-quality standards, and a customer-centric approach, Social Swirl has established itself as a trusted name in the e-learning industry, contributing significantly to the advancement of education on a global scale."
  }
  ];

// Component for individual project items
const ProjectItem = ({ project, index, inView, setInView }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(index, true);
        } else {
          setInView(index, false);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index, setInView]);

  return (
    <motion.div
      ref={ref}
      className='flex flex-col md:flex-row items-center m-3'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {index % 2 === 0 ? (
        <>
          <img 
            src={project.src} 
            alt={project.alt} 
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
          />
          <div className='flex flex-col items-start md:items-center md:ml-4'>
            <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col items-start md:items-center md:ml-4'>
            <h1 className='font-bold text-2xl mb-3 '>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
          <img 
            src={project.src} 
            alt={project.alt} 
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl ml-12' 
          />
        </>
      )}
    </motion.div>
  );
};

// Main Projects component
const Projects = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.h1
          className='text-7xl font-bold m-4 text-yellow-500'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          GOTROLLY
        </motion.h1>
        <motion.h1
          className='text-3xl font-bold m-20 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Gotrolley Your Ultimate Destination for<br /> Mobile Accessories
        </motion.h1>
        <motion.p
          className='text-semibold mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In the fast-paced digital age, mobile devices have become an integral part of our daily lives, serving as tools for communication, productivity, entertainment, and more. Recognising the growing need for high-quality mobile accessories, Gotrolley emerges as the go-to destination for consumers seeking top-notch products to enhance their mobile experience. Let’s explore the core aspects of Gotrolley, including its thoughts, aims, products, team, future goals, and the path to its success.
          {/* In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these pioneers stands Social Swirl, a dynamic company driven by a vision to revolutionize education through innovative e-learning solutions. Let’s delve into the core aspects of Social Swirl, exploring its thoughts, aims, services, team, future goals, and the path to its success. */}
        </motion.p>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            inView={inView[index]}
            setInView={handleSetInView}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
