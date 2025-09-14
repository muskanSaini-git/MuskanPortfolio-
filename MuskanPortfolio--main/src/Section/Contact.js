import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16"
    >
      <div className="flex justify-center my-5">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gray-800"></span>
          <span className="bg-gray-800 w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact with me
          </span>
          <span className="w-24 h-[2px] bg-gray-800"></span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-5xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-6">
          <p className="text-sm text-[#d3d8e8] whitespace-nowrap">
            {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
