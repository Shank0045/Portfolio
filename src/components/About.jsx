import React from 'react'
import Nav from './Nav'

const About = () => {
  return (
<>
<Nav/>
<div className=' mt-[50px] flex items-center justify-center'>
    <div className=' flex items-center justify-around flex-col w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
    
    <h1 className='w-[200px]  md:w-[350px] text-2xl md:text-5xl my-14 flex items-center justify-center rounded-4xl  bg-[#1A1A1A] text nav h-[70px]' >ABOUT-ME</h1>
<p className=' w-[80vw]  text text-center text-l md:text-2xl max-h-max my-14 min-h-[55vh]'>  Hi, I'm <strong>Shashank</strong> — a <strong>passionate</strong> and <strong>self-driven Frontend Web Developer</strong> with a solid foundation in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>GSAP</strong>, and version control with <strong>Git</strong> and <strong>GitHub</strong>. I transitioned into web development after working for <strong>two years as a Technical Associate</strong>, where I gained a strong grasp of <strong>problem-solving</strong> and a <strong>structured approach to technology</strong>.

<br /><br />
My journey into frontend development began with <strong>curiosity</strong> and quickly turned into a <strong>dedicated practice</strong> over the past year. I love building <strong>clean, responsive, and interactive user interfaces</strong>, and I’m always eager to <strong>learn</strong> and adopt <strong>new tools and techniques</strong>.

<br /><br />
I'm currently learning the basics of <strong>Next.js</strong> to expand my knowledge of modern frontend frameworks and exploring <strong>Framer Motion</strong> to create more dynamic, fluid UI animations.

<br /><br />
What sets me apart is my <strong>confidence</strong>, my <strong>willingness to grow</strong>, and my <strong>commitment to building things from scratch</strong>. I’m currently looking for opportunities with <strong>agencies</strong>, <strong>consultancies</strong>, or <strong>companies</strong> where I can contribute and continue evolving as a developer.
</p>

    </div>
   </div>


</>
  )
}

export default About