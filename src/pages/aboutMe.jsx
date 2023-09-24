import ImgProfile from "/aboutme_picture.avif"
import ImgHTML from "/html-logo.svg" 
import ImgCSS from "/CSS-logo.svg" 
import ImgJS from "/javascript-logo.svg" 
import ImgAstro from "/astro-logo.png" 
import ImgReact from "/react-logo.svg" 
import ImgNext from "/next-js-logo.png" 
import ImgJira from "/jira-logo.svg" 
import ImgTailwind from "/tailwindcss-logo.svg"
import ImgBootstrap from "/bootstrap-logo.png"
import ImgMUI from "/mui-logo.png"

import ImgGit from "/github-logo.svg" 
import ImgMongoDB from "/MongoDB_Logo.png"
import ImgMySQL from "/mysql-logo.svg"
import Certifies from "../components/certifies"


const AboutMe = () => {
  return (
    <div id="aboutme" className="container mt-32 my-10 mx-auto flex flex-col">
        <header className="w-full flex flex-col justify-center items-center text-center">
            <h1 className="p-2 md:p-5 text-6xl text-slate-50 text-center">ABOUT</h1>
        </header>

        <section className="px-3 w-full flex flex-col md:flex-row justify-center items-center gap-5">         
          <figure className="w-full md:w-2/6 flex flex-col items-center">
            <img src={ImgProfile} alt="aboutme" className="rounded-full border-slate-600 border-[10px]"/>
            <figcaption className="flex flex-row items-center">
              <p className="text-2xl md:text-3xl mx-auto text-slate-200 mt-5">Hello there!</p>
              <img className="w-[50px] h-[50px]" src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/waving-hand_1f44b.gif" alt="" />
            </figcaption>
          </figure>
          
          <div className="px-3 w-full md:w-4/6 flex flex-col justify-center align-middle ">
            <h2 className="md:text-4xl text-2xl font-bold text-slate-200 md:text-left text-center">{`I'm `}<span className="text-underline">Fernando Bello</span></h2>
            <p className="mt-5 md:w-full font-bold text-slate-400 text-justify">I am a Frontend engineer with almost 3 years of experience in Javascript. I started coding in 2002 when I started my engineering studies where learned about visual basic, fortran, Borland C++ and Matlab, php, MySQL and many more. I went through the Oil industry since 2010 up to 2012 and then from 2012 to 2021 I focused on sciences and specialized in Matlab. During that time I developed two large applications, one for modeling geothermal reservoirs (renewable energy) and the other for oceanic eddies detection using satellite data from NASA and ESA. I developed this activity alongside my job as a technical specialist in a consulting agency.
            </p>
            <p className="mt-5 md:w-full font-bold text-slate-400 text-justify">Since 2021 until today I have been working as a freelancer building beautiful web pages and AWESOME web application for small and medium companies.</p>
          </div>     
        </section>

        <section className="px-6 mt-10 w-full flex flex-col justify-center items-center">
          
          <h2 className="md:text-4xl text-2xl font-bold text-slate-200 md:text-left text-center">Knowledges & soft skills</h2>    
          
          <div className="w-full flex flex-col md:flex-row gap-3">
            <ul className="w-full md:w-1/3 flex flex-col [&>li]:text-slate-200 [&>li]:py-1 [&>li]:px-3 [&>li]:mt-1 [&>li]:rounded-md">
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">HTML, CSS, JS, Astro</li>
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">React, Remix-Run, NextJS, WordPress</li>
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">TailwindCSS, Bootstrap, MUI</li>              
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">MySQL, PostgreSQL, MongoDB, Cloudinary</li>                   
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Strapi, Prisma</li>
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">NodeJS, PostMan</li>
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">GitHub, GitLab, Jira</li>
             <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Matlab</li>
            </ul>

            <ul className="w-full md:w-1/3 flex flex-col [&>li]:text-slate-200 [&>li]:py-1 [&>li]:px-3 [&>li]:mt-1 [&>li]:rounded-md">
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">English C1/C2</li>
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Team leader / player</li>                 
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Teacher</li>                   
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Pragmatist</li>
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Client focused</li>
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Researcher</li>
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Success seeker</li>
              <li className="bg-slate-600 hover:bg-yellow-500 active:scale-105">Problem solver</li>
            </ul>
           
            <ul className="w-full md:w-1/3 flex flex-row justify-evenly items-center gap-2 flex-wrap [&>li]:p-3 [&>li>img]:w-[50px] bg-slate-100/70 border-white rounded-md">
                <li><img src={ImgHTML} alt="" className="hover:scale-110"/></li>
                <li><img src={ImgCSS} alt="" className="hover:scale-110"/></li>
                <li><img src={ImgJS} alt="" className="hover:scale-110"/></li>
                <li><img src={ImgAstro} alt="" className="hover:scale-110"/></li>
                <li><img src={ImgReact} alt="" className="hover:scale-110"/></li>
                <li><img src={ImgNext} alt="" className="!w-[80px] hover:scale-110"/></li>
                <li><img src={ImgJira} alt="" className="!w-[80px] hover:scale-110"/></li>
                <li><img src={ImgTailwind} alt="" className="!w-[120px] hover:scale-110"/></li>
                <li><img src={ImgBootstrap} alt="" className="!w-[70px] hover:scale-110"/></li>
                <li><img src={ImgMUI} alt="" className="!w-[60px] hover:scale-110"/></li>
                <li><img src={ImgGit} alt="" className="hover:scale-110"/></li>
                <li><img src={ImgMongoDB} alt="" className="!w-[100px] hover:scale-110 bg-slate-200"/></li>
                <li><img src={ImgMySQL} alt="" className="!w-[100px] hover:scale-110"/></li>
            </ul>
          </div>                        
        </section>

        <section className="px-6 mt-10 w-full flex flex-col justify-center items-center">
          <Certifies />
        </section>
    </div>
  )
}

export default AboutMe
