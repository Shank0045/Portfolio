import React from 'react'
import Nav from './Nav'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
  import { useForm } from "react-hook-form"

const Contact = () => {


    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset,
    } = useForm()
  
    const onSubmit = (data) =>{
      
       reset()
       alert(`“Form under development — reach me at shashank10733@gmail.com”`)
    } 



  return (
<>
<Nav/>
<div className=' mt-[50px] flex items-center justify-center'>
    <div className=' flex items-center justify-center gap-12 flex-col w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>   
        
    <h1 className='w-[200px]  md:w-[350px] text-2xl md:text-5xl my-14 flex items-center justify-center rounded-4xl  bg-[#1A1A1A] text nav h-[70px]' >CONTACT-ME</h1>
   <p className='text2 w-[85vw] text-center py-7 text-2xl'> I'm passionate about creating seamless, user-centric web experiences and eager to contribute to a dynamic team. Reach out if you're looking for a dedicated frontend developer—I’d love to connect!</p>
<div className=' w-[80vw] gap-10  flex-wrap flex items-center justify-center '>
<div className=' w-[500px] max-h-max min-h-[498px]  border-[2px] rounded-4xl'>
<p className='text-white  text2 text-center py-[20px] text-xl md:text-2xl '>Feel free to reach out through any of the platforms below:</p>

<a href="https://github.com/Shank0045"><div  className=' py-5 flex items-center text text-3xl w-full justify-around'><FaGithub className=' w-[100px]  md:w-[200px] text-7xl' />  Git-Hub </div></a>
<a href="https://www.linkedin.com/in/shashank-s-b959a127b/"><div className='py-5 flex items-center text text-3xl w-full justify-around'><FaLinkedin  className='w-[100px]  md:w-[200px] text-7xl' /> Linkedin </div></a>
<a  href="SHASHANK.S _RESUME.pdf" download="SHASHANK.S _RESUME.pdf" ><div className='flex py-5 items-center text text-3xl w-full justify-around'><CiFileOn className='w-[100px]  md:w-[200px] text-7xl' /> Resume </div></a>


</div>


<div className=' w-[500px]  max-h-max min-h-[498px]  border-[2px] rounded-4xl'>
<p className='text-white  text2 text-center py-[20px] text-[3.5vh] '>Send a Message :</p>
 
 <form className=' flex flex-col gap-4 items-center justify-around'  onSubmit={ handleSubmit(onSubmit)}>

 <input type="text" className=' w-[250px] md:w-[400px] h-[50px] px-10 rounded-4xl border-[1px] outline-none' placeholder='Name'   {...register("name",{required:{value:true ,message:"Name is Required"} })} />
  { errors.name  && <div className=' text text-2xl text-red-500'> {errors.name.message}</div>}
 <input type="email" className=' w-[250px] md:w-[400px] h-[50px] px-10 rounded-4xl border-[1px] outline-none' placeholder='Email'   {...register("email",{required:{value:true ,message:"Email is Required"} })} />
 { errors.email  && <div className=' text text-2xl text-red-500'> {errors.email.message}</div>}
<textarea   cols={10} placeholder='Drop A Message'  className='w-[250px] md:w-[400px] h-[100px] md:h-[190px] px-10 rounded-4xl border-[1px] outline-none' rows={2} />


<input type="submit" className=' w-[150px] text text-black rounded-4xl text-xl my-2.5 h-[50px] bg-white'  />


 </form>

</div>

</div>
    </div>
   </div>
</>
  )
}

export default Contact