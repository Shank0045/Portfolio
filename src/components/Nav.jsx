import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav = () => {

  
    const div = useRef(null);

    const [open, setopen] = useState(false)

    let slider=()=>{
   
  setopen((prev)=>{
    return !prev
  })


    }

    useGSAP(()=>{
  gsap.to(div.current,{
   top:open?"105px" : "-500px",
   duration:0.5,
   
  })

    },[open])



  return (
     <>
      <nav className='w-[100vw] flex items-center justify-center h-[10vh]'>
        
        <div className=' nav w-[90vw] mt-[50px] flex items-center p-[20px] justify-between text-[#FFFFFF]   h-[90%] rounded-[50px]  bg-[#1A1A1A]'>
         <p className=' text-2xl  lg:text-3xl  text tracking-[2px]  text-[#FFFFFF]  '>  SHASHANK.S</p>


        <div>
        <FaBars onClick={()=>{
              slider() 
        }} className=' text-2xl relative lg:hidden' />
       <div ref={div}  className=' lg:hidden w-[100px] rounded-[30px] text2 flex items-center justify-around flex-col bg-[#1A1A1A] top-[-500px] absolute right-[39px] h-[300px] nav  '>

       <p> <Link to="/">Home</Link> </p> 
       <p> <Link to="/project">Project</Link> </p>
       <p> <Link to="/about">About</Link> </p>
       <p> <Link to="/contact">Contact</Link> </p>
    
       </div>
        </div>
        <div className='  items-center hidden lg:flex  w-[40vw] tracking-[2px] text  lg:text-3xl justify-between text-[#FFFFFF] '>
        <p> <Link to="/">Home</Link> </p> 
        <p> <Link to="/project">Project</Link> </p>
        <p> <Link to="/about">About</Link> </p>
        <p> <Link to="/contact">Contact</Link> </p>
        </div>
         
        </div>
        
        </nav>   
     </>
  )
}

export default Nav