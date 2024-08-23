import React, { useState, useEffect } from 'react';

const Investor = () => {
    const projects = [
        
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
           title1: "Akasha",
            description1: "Designer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
           title1: "Yashwa",
            description1: "Project Manager"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1256075102-963x1024.jpg',
           title1: "Nouman Rauf",
            description1: "Marketing Specialist"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
           title1: "Umer Mirza",
            description1: "Lead Developer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
           title1: "Akasha",
            description1: "Designer"
        },
        // Add more projects as needed
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
        <div className="">
            <div className="container mx-auto px-4 md:px-24 m-16">
                <div className="m-12 mx-36">
                    <h2 className="text-4xl font-bold text-black">Our Dedicated Team</h2>
                    <p className="text-lg text-gray-700 mt-2">A passionate team committed to delivering excellence.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                        .map((project, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-green-200">
                                <div className="relative flex justify-center items-center">
                                    <div className="overflow-hidden rounded-full w-80 h-80 flex items-center justify-center p-8">
                                        <img
                                            className="w-full h-full object-cover object-center rounded-full"
                                            src={project.imagel}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                                </div>
                                <div className="p-5 text-center bg-green-100">
                                    <h3 className="text-xl font-semibold mt-2">{project.title1}</h3>
                                    <p className="text-sm mt-2">{project.description1}</p>
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-2xl hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-4 transition duration-300">View Profile</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Investor;
