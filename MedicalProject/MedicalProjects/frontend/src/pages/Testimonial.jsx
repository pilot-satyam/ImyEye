import React, { useState } from 'react';
import "../Style/Testimonials.css"

const Testimonial = ({ author, text, image }) => (
  <div className="testimonial">
    <img src={image} alt={author} />
    <p className="author">{author}</p>
    <p className="text">{text}</p>
    
  </div>
);

const Testimonials = () => {
  const [testimonials] = useState([
    { author: 'Amit Chaudhary', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: 'person4.jpg' },
    { author: 'Sanmati Porlekar', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: 'person2.jpg'},
    { author: 'Satyam Srivastva ', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: 'person1.jpg' },
    { author: 'Lavish Shrimali ', text: 'Best hospital,very good & dedicated staff suported me alot, I had my checkup 1 year ago now I have good vision. I visited so many times very cooperative staff!', image: 'person3.jpg' }
    
  ]);

  return (
    <div className="testimonials">
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
