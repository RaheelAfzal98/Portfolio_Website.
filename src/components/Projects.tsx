import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'



const data = [

 {
    id:0,
    title:"Todo List",
    desc:"A React & TypeScipt based app for managing and organizing your tasks efficiently.",
    img:"/projects.jpg",
    tags:["React", "Node", "CSS", "Typescript"],
 },
 {
    id:1,
    title:"Countdown Timer",
    desc:"A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img:"/projects.jpg",
    tags:["Next.js", "Node", "CSS", "Typescript"],

 },
 {
    id:2,
    title:"Weather Widget",
    desc:"A Next.js and Typescript based tool for fetching and displaying real-time weather data.",
    img:"/projects.jpg",
    tags:["Next.js", "Node", "CSS", "Typescript"],

 },
 {
    id:3,
    title:"Currency Converter Project",
    desc:"A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
    img:"/projects.jpg",
    tags:["HTML", "Node", "CSS", "Typescript"],

 },
 {
    id:4,
    title:"Static Interactive Resume",
    desc:"A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img:"/projects.jpg",
    tags:["HTML", "Node", "CSS", "Typescript"],

 },
 {
    id:5,
    title:"Simple Calculator Project",
    desc:"A basic HTML CSS and Typescript calculator for performing essential arithmetic operations.",
    img:"/projects.jpg",
    tags:["HTML", "Node", "CSS", "Typescript"],

 },

]


const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 x1:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el)=>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}  
      />))}
      </div>
    </div>
  )
}

export default Projects
