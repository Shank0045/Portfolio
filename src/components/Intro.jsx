
import { useEffect, useRef } from 'react';
import Nav from './Nav'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Intro = () => {

   const div = useRef([])

   const images = [
      'css.png',
      'git.png',
      'gsap.jpg',
      'html.png',
      'js.webp',
      'react.webp',
      'tailwind.png',
      'github.png'
    ];



  return (
   <>
<Nav/>
   <div className=' mt-[50px] flex items-center justify-center'>
    <div className=' flex items-center justify-around flex-col w-[93vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
   <h1 className=' text2 text-2xl md:text-4xl lg:text-5xl pt-14 font-[200]'> 👋 Hi, I’m Shashank  </h1>
<p className=' md:w-[70%] w-[85%] lg:h-[70%] h-[50%]  font-[200] text-2xl md:text-2xl pt-15 lg:text-3xl text-center leading-[45px]  md:leading-[59px]' >A self-taught frontend developer skilled in React <span><FaReact className=' text-[40px] text-blue-500 inline' /></span>   ,Tailwind CSS <span><SiTailwindcss className=' text-[40px] text-blue-500  inline' /></span>   , and GSAP <span> <img className=' w-[59px] h-[59px] rounded-[50%] text-blue-500 inline' src="gsap.jpg" alt="" /> </span>    . I build fast, responsive, and interactive web interfaces that focus on clean code and user experience. Open to roles where I can solve real problems and grow with a creative tech team.</p>





    </div>

   </div>

   </>
  )   
}

export default Intro