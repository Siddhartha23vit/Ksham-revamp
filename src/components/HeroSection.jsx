import React from "react";
import { useEffect, useState } from 'react'

function HeroSection() {
    const [state, setState] = useState(false)

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    
  
    return (
        <div className='relative animate-slide-down' >
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(255, 255, 0, 0) 20.79%, rgba(255, 165, 0, 0.26) 40.92%, rgba(255, 255, 0, 0) 70.35%)" }}></div>
            <div className='relative'>
                
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex animate-slide-right "  >
                        <div className='flex-none space-y-5 max-w-xl'>
                        <span class="w-auto px-4 py-2 mt-10 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 animate-slide-right "><span class="text-xs text-black">Change your life for the better - Our product makes a difference</span></span>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl  animate-slide-right">
                            World's first
                            </h1>
                            <h1 className="text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-extrabold sm:text-5xl  animate-slide-right">
                            Smart Aid Glasses for
                            </h1>
                            <h2 className=" text-3xl animate-slide-right overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-black font-bold">
                                <span>Deaf</span>
                                <span style={{ color: '#FFA500' }}>●</span> {/* Unicode character for a dot */}
                                <span>Mute</span>
                                <span style={{ color: '#FFA500' }}>●</span> {/* Unicode character for a dot */}
                                <span>Blind</span>
                                
                            </h2>  
                              
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="contact" className="animate-slide-right flex items-center justify-center gap-x-1 py-2 px-4 text-black font-medium bg-yellow-500 duration-150 hover:bg-orange-700 active:bg-yellow-400 rounded-full md:inline-flex">
                                    Get Early Access
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="style " style={{ backgroundImage: 'url("/assets/eyewear-bg2.jpg")', backgroundSize: 'cover', width: '350px', height: '350px', borderRadius: '50%', overflow: 'hidden',boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', /* Orange shadow */
    transition: 'box-shadow 0.3s ease-in-out' }}>
                             
                                <img src="/assets/eyewear.png" className="max-w-full h-auto" alt="Spinning Eyewear" style={{ width: '100%', height: 'auto', transformOrigin: 'center', transition: 'transform 2s ease-in-out' }} />
                            </div>
                        </div>

                    </div>
                </section>
                
              {/* <section class="relative flex items-center w-full bg-white md:h-screen">
                <div class="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
                  <div class="relative flex-col items-start m-auto align-middle">
                    <div class="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                      <div class="relative items-center gap-12 m-auto lg:inline-flex">
                        <div class="max-w-xl text-center lg:text-left">
                          <div>
                            <div>
                              <span class="inline-flex items-center text-3xl font-semibold tracking-tighter text-black"><span class="ml-2">Windstatic</span></span>
                            </div>
                            <div class="py-6"></div>
                            <span class="w-auto px-4 py-2 mt-10 rounded-full bg-teal-500/10"><span class="text-xs text-teal-500">Instantly transform your home - Coming soon</span></span>
                            <p class="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900">
                              Interior design. In your pocket
                            </p>
                            <p class="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                              Forget trying to imagine what a style would look like in your
                              home - see what could be, instantly.
                            </p>
                          </div>
                          <div class="flex items-center justify-center w-full pt-8 mx-auto lg:justify-start md:pt-6">
                            <form>
                              <div class="w-full p-2 rounded-xl md:rounded-full bg-teal-500/10 sm:flex sm:items-center sm:relative">
                                <div class="min-w-0 shrink w-60">
                                  <input aria-label="Email address" autocomplete="email" class="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-blue-500 focus:outline-none focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm" placeholder="Email address" required="" type="email"/>
                                </div>
                                <button class="relative inline-flex justify-center flex-none w-full px-6 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2" type="submit">
                                  <span class="inline">Join the waitlist</span>
                                </button>
                              </div>
                              <p class="mt-3 text-slate-500">Get notified when we launch!</p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl "  style={{backgroundImage: 'url("/assets/eyewear-bg2.jpg")'}}>
                        <img alt="hero" class="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl" src="/assets/eyewear.png"/>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
            
            </div>
        </div>

        
    );
  }
  
  export default HeroSection;
  