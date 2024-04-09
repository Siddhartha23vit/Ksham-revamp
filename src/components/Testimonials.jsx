import React from "react";
import { testimonials } from "../constants";
function Testimonials() {
    return(
        <>
        <div className="mt-20 tracking-wide" id="Test">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 relative">
    <div className="inline-block relative">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
        <span className="relative z-10">What People are saying</span>
    </div>
</h2>





      
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-yellow-400  rounded-md p-6 text-md border shadow-md hover:shadow-black ">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
        
    );
}

export default Testimonials;

