
import React, { useContext, useRef } from 'react'
import Intro from './components/intro'
import { Route, Routes } from 'react-router-dom'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const App = () => {

  const div = useRef(null);

  useGSAP(()=>{

    gsap.from(div.current,{
       scale:0,
       opacity:0,
       duration:1.5
      
    })


  })





  return (
        <>

<div ref={div} className='w-full  min-h-screen max-h-max  text-[#FFFFFF] bg-[#1A1A1A]'>
<Routes>
<Route path='/' element={<Intro/>} />
<Route path='/project' element={<Project/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />

</Routes>


</div>
    </>
  )
}

export default App