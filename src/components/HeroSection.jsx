import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools
            <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
               {" "} for developers
            </span>
            
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Unleash your creativity and transform your VR app concepts into reality using our easy-to-use development tools. Begin today and make your vision an immersive experience!</p>

        <div className="flex jusity-center my-10">
            <a href="#" className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md'>Start For Free</a>

            <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>

        </div>

        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border from-blue-300 to-blue-600 mx-2 my-4">

            <source src={video1} type="video/mp4"/>
            Your browser does not support the video tag

            </video>

            <video autoPlay loop muted className="rounded-lg w-1/2 border from-blue-300 to-blue-600 mx-2 my-4">

            <source src={video2} type="video/mp4"/>
            Your browser does not support the video tag

            </video>

        </div>

        




    </div>




  )
}

export default HeroSection