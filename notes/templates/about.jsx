import React from 'react';

const AboutNotesSharing = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img 
          src="/images/Learning-amico.png" 
          alt="Learning illustration" 
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h3 className="text-2xl font-bold mb-4">All About Notes Sharing</h3>
        <p className="text-gray-700">
          "Docushare" is the project used for sharing notes using the website. 
          Notes that the user wants for a particular subject can be found in the website. 
          This project is written in Python Django and sqlite. 
          Firstly, the user need to sign up and then, they can log in to the system.
        </p>
      </div>
    </section>
  );
};

export default AboutNotesSharing;