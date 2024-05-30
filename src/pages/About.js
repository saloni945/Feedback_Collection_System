
import React from 'react';
import { MdFeedback, MdOutlineBusinessCenter } from 'react-icons/md';
import { FaBullseye } from 'react-icons/fa';
import Footer from '../components/common/Footer';

const AboutUs = () => {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-richblack-900 text-white">
      <div className="w-11/12 max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Feedback Collection System is dedicated to helping businesses gather valuable feedback and improve their services. We provide an easy-to-use platform that allows you to engage with your audience and collect insights that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center text-center">
            <FaBullseye className="text-6xl mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg max-w-md">
              Our mission is to empower businesses of all sizes to make data-driven decisions. With our intuitive tools, you can create surveys, polls, and feedback forms that are customizable to your needs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MdOutlineBusinessCenter className="text-6xl mb-4" />
            <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
            <p className="text-lg max-w-md">
              Whether you're looking to improve customer satisfaction, product offerings, or employee engagement, Feedback Collection System is here to support you every step of the way.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg max-w-2xl mx-auto">
            Join us in revolutionizing the way businesses collect and analyze feedback. Start your journey with us today!
          </p>
        </div>
      </div>
     
    </div>
    <Footer/>
    </div>

  );
}

export default AboutUs;
