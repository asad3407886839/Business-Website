import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Form submitted successfully!');
        // Reset form
        setFormData({
            name: '',
            email: '',
            contact: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="flex flex-col items-start justify-center mx-4 my-5 space-y-6 md:flex-row md:mx-10 md:my-10 md:space-y-0 md:space-x-10">
            <form onSubmit={handleSubmit} className="w-full p-4 bg-white rounded-lg shadow-md md:w-1/2 md:p-8">
                {/* Form fields */}
                <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                    <div className="w-full mb-4 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                    <div className="w-full mb-4 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="w-full px-3 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-3 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder="Enter the subject"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-black rounded-lg md:w-auto focus:outline-none focus:shadow-outline"
                    >
                        Send
                    </button>
                </div>
            </form>
            <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
                <p className="text-lg font-bold text-black">Want to reach us directly?</p>
                <p className="text-black">Connect with us to explore investment opportunities tailored to your needs and goals.</p>
                <p className="text-black">
                    <i>+92 3064257447</i>
                </p>
                <p className="text-black">
                    <i>info@dkgroup.pk</i>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;
