import React from "react";

function Supporters() {
  return (
    <>
      <div className="relative h-screen w-screen animate-slide-left">
        <svg className="absolute -z-10 -top-10 opacity-20  mt-[80px]" width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
              <rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/>
              <path d='M3.25 10h13.5M10 3.25v13.5' stroke-linecap='square' stroke-width='0.5' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/>
            </pattern>
          </defs>
          <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/>
        </svg>

        <div className="py-14 relative overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Our Supporters
              </h3>
              <p className="text-gray-600 mt-5">
                Join us in recognizing and expressing gratitude to the amazing organizations and individuals who support our mission. Their generous contributions and unwavering dedication help drive our work forward, making a positive impact on the communities we serve.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-3 ">
                {/* LOGO 1 */}
                <li>
                  <img src="/assets/companylogo1.png" className="w-30 my-auto  " alt="Company Logo 1" />
                </li>
                {/* LOGO 2 */}
                <li>
                  <img src="/assets/companylogo2.png" className="w-30 my-auto" alt="Company Logo 2" />
                </li>
                {/* LOGO 3 */}
                <li>
                  <img src="/assets/companylogo3.png" className="w-30 my-auto" alt="Company Logo 3" />
                </li>
                {/* LOGO 4 */}
                <li>
                  <img src="/assets/companylogo4.png" className="w-30 my-auto" alt="Company Logo 4" />
                </li>
                {/* LOGO 5 */}
                <li>
                  <img src="/assets/companylogo5.png" className="w-30 my-auto" alt="Company Logo 5" />
                </li>
                {/* Add more logos here if needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supporters;
