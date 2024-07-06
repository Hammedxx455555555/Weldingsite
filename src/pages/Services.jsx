// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import artwork from "../assets/artwork.jpg"
import calf  from '../assets/calf.jpg'
import chair  from '../assets/chair.jpg'
import city from '../assets/city.jpg'
import down  from '../assets/down.jpg'
import dragon  from '../assets/dragon.jpg'
import entrance  from '../assets/entrance.jpg'
import gol  from '../assets/gol.jpg'
import usman  from '../assets/new.jpg';
import skull  from '../assets/skull.jpg'
import walkway  from '../assets/walkway.jpg'

const images = [artwork,calf,chair,city,down,dragon,entrance,gol,usman,skull,walkway]
   
const Services = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  return (
    <div id='services' className="container mx-auto p-4">
        <h2 className='text-bold text-3xl mt-10 mb-6 text-center'>Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative h-full">
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl"
              onClick={handleCloseClick}
            >
              &times;
            </button>
            <img
              src={expandedImage}
              alt="Expanded"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
