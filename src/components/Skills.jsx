import React from 'react'
import Nav from './Nav'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { LuFigma } from "react-icons/lu";



const Skills = () => {
  return (
      <>
      <Nav/>
      <section>
      <div className=' mt-[50px] flex items-center justify-center'>
    <div className=' flex items-center justify-around flex-col p-4 w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
    <h1 className='w-[200px]  md:w-[350px] text-2xl md:text-5xl my-9 flex items-center justify-center rounded-4xl  bg-[#1A1A1A] text nav h-[70px]' >MY-SKILLS</h1>



 <div className=' flex items-center  justify-between flex-col p-5 w-full rounded-[50px] border-[2px] gap-  border-gray-300 max-h-max  min-h-screen '>
 <h1 className=' text-2xl  md:text-4xl text text-center pb-20  pt-8 font-[500]'>  👨‍💻 Languages, ⚙️ Frameworks, 🛠️ Tools, and 🎨 UI Expertise </h1>

 <div className=' w-full flex flex-wrap  max-h-max   min-h-[70vh] gap-18 items-center justify-around'>  
   <div className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <TiHtml5 className=' text-orange-500 text-8xl' />
  <p className=' text-xl text-center text'> HTML-5</p>
  </div >
  <div  className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <IoLogoCss3 className=' text-blue-400 text-[100px]'/>
  <p className=' text-xl text-center text'> CSS-3</p>
  </div>
  <div  className='flex border-[2px] card border-teal-100 py-3 px-5 rounded-4xl flex-col items-center justify-center'>
  <TbBrandJavascript className=' text-yellow-400 text-8xl'/>
  <p className=' text-[15px] text-center text'> JavaScript <br></br> (ES6+)</p>
  </div> 

  <div className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <FaReact className=' text-blue-500 text-8xl' />
  <p className=' text-xl text-center text'>REACT</p>
  </div >
  <div  className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <RiTailwindCssLine  className=' text-blue-400 text-[100px]'/>
  <p className=' text-[15px] text-center text'> TailWind-CSS</p>
  </div>


  <div className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <FaGitAlt className=' text-orange-500 text-8xl' />
  <p className=' text-xl text-center text'> GIT</p>
  </div >
  <div  className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <FaGithub className=' text-white text-[100px]'/>
  <p className=' text-xl text-center text'> GIT-HUB</p>
  </div>
  <div  className='flex border-[2px] card border-teal-100 py-5 px-5 rounded-4xl flex-col items-center justify-center'>
  <VscVscodeInsiders className=' text-blue-500 text-8xl'/>
  <p className=' text-xl text-center text'> VS-Code</p>
  </div> 


  <div className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <LuFigma className=' text-orange-500 text-8xl' />
  <p className=' text-xl text-center text'> Figma</p>
  </div >
  <div  className='flex border-[2px] card border-teal-100 p-5 rounded-4xl flex-col items-center justify-center'>
  <img loading="lazy" alt='gsap' src='g.avif' className=' w-[100px] h-[100px] object-cover rounded-[50%] text-white text-[100px]'/>
  <p className=' text-xl text-center text'> GSAP</p>
  </div>

  </div>

  </div>


  </div>


    </div>


   </section>
      
      
      </>
  )
}

export default Skills