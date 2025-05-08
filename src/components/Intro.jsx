import { FaGithub } from "react-icons/fa";
import Nav from './Nav'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

const Intro = () => {




  return (
   <>
<Nav/>
   <div className=' mt-[50px] flex items-center justify-center'>
    <div className=' flex items-center justify-around flex-col w-[90vw] max-h-max  min-h-[80vh] rounded-[50px] nav'>
   <h1 className=' text2 text-2xl md:text-4xl lg:text-5xl pt-14 font-[200]'> 👋 Hi, I’m Shashank  </h1>
<p className=' md:w-[70%] w-[85%] lg:h-[70%] h-[50%]  font-[200] text-2xl md:text-2xl pt-15 lg:text-3xl text-center leading-[45px]  md:leading-[59px]' >A  frontend developer skilled in React ,Tailwind CSS,and GSAP. I build fast, responsive, and interactive web interfaces that focus on clean code and user experience. Open to roles where I can solve real problems and grow with a creative tech team.</p>

<div className='  w-[80vw]   md:w-[30vw] flex items-center justify-around h-[10vh] my-10 '>


     <a href="https://github.com/Shank0045">   <FaGithub className=' text-white text-[50px]'/></a> 
   <a href="https://www.linkedin.com/in/shashank-s-b959a127b/"><FaLinkedin  className=' text-white  text-[50px]'/></a>  
        <a href="mailto:shashank10733@gmail.com"><MdEmail className=' text-white text-[50px]'  /> </a>
    <a href="SHASHANK.S _RESUME.pdf"  download="SHASHANK.S _RESUME.pdf" > <CiFileOn className=' text-white text-[50px]' /></a>   

     </div>
    </div>

   </div>

   </>
  )   
}

export default Intro