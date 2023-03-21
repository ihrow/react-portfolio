import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from "../styles.js";
import { services } from "../constants";
import { fadeIn, textVariant} from "../utils/motion.js";

import {SectionWrapper} from './hoc'


const ServiceCard = ({ index, title, icon}) => {
  return (


    <Tilt
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there!

        I am a dedicated <span className="font-bold text-[#5e99ff]">React</span> and <span className="font-bold text-[#fff25e]">Javascript</span> (occasionally <span className="font-bold text-[#5e99ff]">Typescript</span>) enjoyer.
        I have also some experience with <b>Node.js</b> and <b>Express.js</b>, which have helped me build server-side applications, and with <b>Sanity</b> as a headless CMS for managing content.
        <br />
        <br />
        In addition to these, I have experience with <b>React Redux</b> and <b>React Router</b>, which have helped me manage state and routing in my projects. I often use <b>Tailwind CSS</b> for styling and have found it to be an efficient CSS framework.
        <br />
        <br />
        I'm a quick learner and believe in the importance of continuous learning and strive to improve my skills in all the technologies I work with.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        )}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")