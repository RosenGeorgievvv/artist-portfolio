import React from 'react';
import { HERO } from '../constants/index';
import profile from '../assets/profile.png';
import {motion} from 'framer-motion';

const Main = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      {/* Name at the top */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="w-full text-center"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[6rem]">
          {HERO.name}
        </h2>
      </motion.div>

      {/* Image below the name */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
        className="w-full flex justify-center mt-8"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={profile}
          width={700} 
          height={700}
          alt="GOGATA"
          className="rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Main;
