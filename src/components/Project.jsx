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


   <a   target='_blank' href={project.demo }>       
     <div  className='  max-w-max text2   min-w-[230px] rounded-3xl max-h-max min-h-[300px]'>
    <img  src={project.image} className='h-[150px] object-contain w-full rounded-4xl' alt="photo" /> 
    <h1 className='w-full  uppercase flex items-center text  justify-center py-10 text-2xl h-[50px] '> {project.title}</h1>
      <p className='w-full  text-xl p-5 text-center text '> <strong>"View Demo" </strong>  </p>
<p className='w-full  uppercase flex items-center text-l my-5 text  justify-center text-center   h-[50px] ' >Skills:   {project.skills}</p>

     </div>  
      </a>
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