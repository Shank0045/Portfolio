import React, { useContext } from 'react'
import Nav from './Nav'
import { Authcontext } from '../AuthData'


const Project = () => {

let data=useContext(Authcontext);






    
  return (
<>
<Nav/>
<div className=' mt-[50px] flex items-center justify-center'>
    <div className='  flex items-center  justify-around flex-wrap gap-10 m-5 p-5 w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
  
  {data.map((project,index)=>{
   return ( 
   <div key={index} className=' border-[2px] card  border-teal-100  p-5 rounded-4xl w-[250px] md:w-[290px] flex  items-center justify-center flex-col'>  


   <a   target='_blank' href={project.demo }>       
     <div  className='  max-w-max text2   min-w-[230px] rounded-3xl max-h-max min-h-[300px]'>
    <img  src={project.image} className='h-[150px] object-contain w-full rounded-4xl' alt="photo" /> 
    <h1 className='w-full  uppercase flex items-center text  justify-center py-10 text-2xl h-[50px] '> {project.title}</h1>

<p className='w-full  uppercase flex items-center text-l py-3.5 text  justify-center   h-[50px] ' > Skills:   {project.skills}</p>

     </div>  
      </a>
      <p className='w-[90%] text-[10px]  uppercase flex items-center  underline justify-center  h-[50px] '>  <a target='main' href={project.github}>  Source Code: {project.github} </a></p>
     </div> 
     )
  })}

   


    </div>

   </div>
</>
  )
}

export default Project