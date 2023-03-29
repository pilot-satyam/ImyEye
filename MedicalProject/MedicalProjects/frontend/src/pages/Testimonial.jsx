import React, { useState } from 'react';
import "../Style/Testimonials.css"
import Image from '../Components/Image';

const Testimonial = ({ author, text, image }) => (
  <div className="testimonial cardGridLight">
    <img src={image} alt={author} />
    <p className="author">{author}</p>
    <p className="text">{text}</p>
    
  </div>
);

const Testimonials = () => {
  const [testimonials] = useState([
    
    { author: 'Amit Chaudhary', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: Image.testPerson1 },
    { author: 'Sanmati Porlekar', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: Image.testPerson2},
    { author: 'Satyam Srivastva ', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: Image.testPerson4 },
    { author: 'Lavish Shrimali ', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: Image.testPerson3 }
    
  ]);

  return (
    <div className="testimonials mb-5">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          author={testimonial.author}
          text={testimonial.text}
          image={testimonial.image}
        />
      ))}
      
    </div>
  );
};

export default Testimonials;
