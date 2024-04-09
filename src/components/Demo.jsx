import React from "react";

function Demo(){
    return( 

        <div className="flex flex-col items-center mt-6 lg:mt-20 relative " id="Demo Video">
             <div className="absolute inset-0 z-[-10] mt-[-20]">
            <svg className="inline-block fill-current w-full h-auto  text-orange-300  mt-[150px]" viewBox="0 0 1440 450" xmlns="http://www.w3.org/2000/svg">
            <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
            </svg>
      </div>
            
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Working of 
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
           Able Glasses
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
       
        </p>
       
        <div className="flex mt-10 justify-center"  style={{  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', /* Orange shadow */
    transition: 'box-shadow 0.3s ease-in-out' }}>
          <video
            autoPlay
            loop
            muted
            className=" border "
          >
            <source src="assets/ableworking.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
     
     
        </div>
        <div className="absolute inset-0 z-[-10] mt-[-20]">
            <svg className="inline-block fill-current w-full h-auto  text-orange-300  mt-[150px]" viewBox="0 0 1440 450" xmlns="http://www.w3.org/2000/svg">
            <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
            </svg>
      </div>
        </div>
        
    );
}

export default Demo;