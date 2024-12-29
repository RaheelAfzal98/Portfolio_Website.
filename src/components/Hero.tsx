import React from 'react'
// import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover'
    style={{backgroundSize: "23%", backgroundPosition:"left 200px top 180px"}}
    >
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-white'>
            <div>
                <p data-aos='zoom-in-up'>I am</p>
                <p data-aos='zoom-in-up'>Muhammad</p>
                <p data-aos='zoom-in-up'>Raheel</p>
            </div>    
         </div>
        </div>
    </div>
  )
}

export default Hero
