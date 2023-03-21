import React from 'react'

import {motion} from 'framer-motion'

import {styles} from "../styles.js";
import {ComputersCanvas} from './canvas/index'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">ihrow</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a passionate <span className="text-[#5e99ff]">React</span> and <span className="text-[#fff25e]">Javascript</span> developer with a strong desire to continuously learn and improve my skills.<br /> I approach challenges with a positive "can do" attitude and I am always eager to take on new projects and gain valuable work experience.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero