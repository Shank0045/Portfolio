import React, { useContext } from 'react'
import Nav from './Nav'
import { Authcontext } from '../AuthData'
import { FaGithub } from "react-icons/fa";

const Project = () => {

let data=useContext(Authcontext);






    
  return (
<>
<Nav/>
<div className=' mt-[50px] flex items-center justify-center'>
    <div className='  flex items-center   justify-around flex-wrap gap-10  p-5 w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
    <h1 className='w-[200px]  md:w-[350px]  text-2xl md:text-5xl mt-9 flex items-center justify-center rounded-4xl  bg-[#1A1A1A] text nav h-[70px]' >PROJECTS</h1>
   <div className='flex items-center   justify-around flex-wrap gap-10  p-5 w-[90vw] max-h-max  min-h-[80vh] rounded-[50px]'>

   {data.map((project,index)=>{
   return ( 
   <div key={index} className=' border-[2px] card  border-teal-100  p-3 rounded-4xl w-[250px] md:w-[290px] flex  items-center justify-center flex-col'>  


   
     <div  className='  max-w-max text2   min-w-[230px] rounded-3xl max-h-max min-h-[300px]'>
    <img  src={project.image} className='h-[150px] object-contain w-full rounded-4xl' alt="photo" /> 
    <h1 className='w-full  uppercase flex items-center text  justify-center py-10 text-2xl h-[50px] '> {project.title}</h1>

   <a   target='_blank' href={project.demo }>    
<button
  type="submit"
  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 hover:text-white  before:rounded-full before:bg-emerald-500 hover:bg-black before:-z-10 before:aspect-square before:hover:scale-150 text-black before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  View Demo
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>     </a>


<p className='w-full  uppercase flex items-center text-l my-5 text  justify-center text-center   h-[50px] ' >Skills:   {project.skills}</p>

     </div>  
 
        <a target='main' className='w-[90%] uppercase flex items-center  text underline justify-around text-xl' href={project.github}>   Source Code: <FaGithub className=' text-white text-[40px]'/>  </a>
     </div> 
     )
  })}


   </div>

  
    </div>

   </div>
</>
  )
}

export default Project