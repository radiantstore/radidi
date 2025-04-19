import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-16 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-center font-bold mb-16 text-white leading-tight">
            A melhor ferramenta do mercado<br />você só encontra aqui
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            <img 
              src="https://imgur.com/uHSMwB3.png" 
              alt="Gaming Feature 1" 
              className="rounded-lg shadow-lg w-full h-[600px] object-cover hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            />
            <img 
              src="https://imgur.com/wMnQIxU.png" 
              alt="Gaming Feature 2" 
              className="rounded-lg shadow-lg w-full h-[600px] object-cover hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;