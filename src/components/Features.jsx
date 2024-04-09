import React from "react";

function Features() {
    const features = [
        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>,
            title: "Glasses for Deaf & Hard of hearing",
            desc: "Arrays of Microphones",
            desc1: " Patented Dome Bone Conduction Transducer",
            desc2: " Bluetooth & Rechargeable",
        },
        {
            icon:
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFAC1C"><g id="SVGRepo_bgCarrier" stroke-width={1.5}></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#FFAC1C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#FFAC1C" stroke-width="1.5"></path> </g></svg>,
            title: "Glasses for Blind",
            desc: "Objects & Face Recognition",
            desc1:" 1080p front camera"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Glasses for Mute",
            desc: "Real time sign language to audio conversion.",
            desc1: "Pairs of side camera & speaker.",
            desc2: "Offline processing."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Smart Case",
            desc: "Day long battery backup.",
            desc1: "Desktop computer mode.",
        },
    ]

    return (
   <>
      <section className="relative py-28 bg-yellow-400">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl animate-slide-right">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                    Our Innovation
                    </h3> <br/>
                    <p className="mt-3 text-black">
                    Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.
                    </p>
                    <p className="mt-3 text-black">
                    The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts <br/> as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.
                    </p>
                    <p className="mt-3 text-black">
                    The open ear design makes able glasses a complete smart glasses device for everyone
                    </p>
                    <br/>
                    <div className='flex items-center gap-x-3 sm:text-sm ' >
                                <a href="contact" className="animate-slide-right flex items-center justify-center gap-x-1 py-2 px-4 text-black font-medium bg-yellow-500 duration-150 hover:bg-orange-700 active:bg-yellow-400 rounded-full md:inline-flex" style={{  overflow: 'hidden',boxShadow: '0 0 10px rgba(255, 255, 255, 255)', /* Orange shadow */
    transition: 'box-shadow 0.3s ease-in-out' }}>
                                    Get Early Access
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                
                            </div>
                    
                </div>
                
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2 animate-slide-right">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-orange-500 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3 text-black">
                                            {item.desc}
                                        </p>
                                        <p className="mt-3 text-black">
                                            {item.desc1}
                                        </p>
                                        <p className="mt-3 text-black">
                                            {item.desc2}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute inset-1 max-w-ls mx-auto h-75 blur-[118px]"style={{ background: "linear-gradient(152.92deg, rgba(255, 136, 0, 0.5) 4.54%, rgba(255, 87, 0, 0.8) 34.2%, rgba(255, 136, 0, 0.3) 77.55%)" }}

></div>
        </section>
  
   </>
    );
  }
  
  export default Features;
  