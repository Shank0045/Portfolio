import React from 'react'
import Nav from './Nav'

const Intro = () => {
  return (
   <>
<Nav/>
   <div className=' mt-[50px] flex items-center justify-center'>
    <div className=' flex items-center justify-around flex-col w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
   <h1 className=' text2 text-2xl md:text-4xl lg:text-5xl py-20 font-[200]'> 👋 Hi, I’m Shashank  </h1>
<p className=' md:w-[70%] w-[85%] lg:h-[70%] h-[50%]  font-[200] text-2xl md:text-2xl py-20 lg:text-3xl text-center leading-[45px]  md:leading-[59px]' >A self-taught frontend developer skilled in React, Tailwind CSS, and GSAP. I build fast, responsive, and interactive web interfaces that focus on clean code and user experience. Open to roles where I can solve real problems and grow with a creative tech team.</p>

    </div>

   </div>

   </>
  )
}

export default Intro