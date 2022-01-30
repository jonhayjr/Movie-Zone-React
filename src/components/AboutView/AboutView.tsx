import React from 'react';
import { Link } from 'react-router-dom';

const AboutView = () => {
  return (
    <div className="mt-5 text-center w-50 mx-auto border border-white bg-dark text-white p-5 border-rounded">
        <h2>About</h2>
        <p>This Angular app was created by Jon Hay in 2022.  The app allows use to search for movies and then add those movies to their favorites.</p>
        <Link to="/" className="text-white">Go Home</Link>
    </div>
  )
};

export default AboutView;
