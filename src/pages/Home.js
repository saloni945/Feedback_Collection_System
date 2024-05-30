
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import HighlightText from '../components/homepage/HighlightText';
import CTAButton from '../components/homepage/Button';
import frontImg from "../assets/0e0a7026-bb4a-4270-8133-6a1345920455.jpg"
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div>
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white'>
      <div className='w-full max-w-7xl mx-auto flex flex-col items-center p-8 space-y-8'>
       

        <main className='flex flex-col md:flex-row w-full h-full items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div className='w-full md:w-1/2 flex flex-col space-y-6'>
            <div className='text-center md:text-left text-5xl font-bold leading-tight'>
              Welcome to 
              <HighlightText text={" Feedback Collection System"} />
            </div>
            <div className='text-lg font-light text-center md:text-left'>
              Gather valuable feedback and improve your services with our easy-to-use platform. Start now and engage with your audience like never before.
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
              <CTAButton active={true} linkto={"/signup"}>
                Get Started
              </CTAButton>
             
            </div>
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src={frontImg} className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500"/>
          </div>
        </main>
      </div>
   
    </div>
    <Footer/>
    </div>
    
  );
}

export default Home;
