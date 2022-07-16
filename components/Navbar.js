import React, {useState} from 'react'; 
import {Transition} from "@headlessui/react"; 
import Link from "next/link"; 



function Navbar(){
    const [isOpen, setIsOpen] = useState(false); 
    return(
        <div>
            <div className='flex items-center justify-center w-full bg-stone-900 h-36'>
        <div className="text-5xl font-semibold text-white ml-10">Cambridge Institute of Computation and Design</div>
      </div>

          <nav className=' z-20 w-full bg-stone-200'>
              <div className='w-full'>
                  <div className='flex items-center w-full h-20'>
                      <div className='flex items-center justify-between w-full sm:mx-20'>
                          <div className='flex items-center justify-center flex-shrink-0 ml-10'> 
                          <h1 className='font-bold text-3xl cursor-pointer'>
                            <Link href="/"><a>CICD</a></Link>
                          </h1>
                          </div>
                         
                          <div className='hidden md:block'>
                              <div className='flex items-baseline ml-10 space-x-10 '>
                                  <Link href="/"><a className="px-3 py-2 text-lg font-semibold cursor-pointer hover:text-teal-700">Home</a></Link>
                                  <Link href="/courses"><a className="px-3 py-2 text-lg font-semibold cursor-pointer hover:text-teal-700">Courses</a></Link>
                                  <Link href="/contact"><a className="px-3 py-2 text-lg font-semibold cursor-pointer hover:text-teal-700">Contact</a></Link>
                                  <Link href="/my-courses"><a className="px-3 py-2 text-lg font-semibold cursor-pointer hover:text-teal-700 text-center">My<span className="text-stone-200">..</span>Courses</a></Link>
                              </div>
                          </div>

                        <div className='flex items-center justify-center flex-shrink-10'>
                            <h1 className='hidden text-xl font-semibold cursor-pointer md:block'>
                                Login
                            </h1>
                        </div>
                      </div>

                        <div className="flex mr-14 md:hidden">
                            <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            type="button" 
                            className="inline-flex items-center justify-center p-2 text-white rounded-md bg-teal-700 hover:bg-slate-400 focus:outline-none focus:ring-white" 
                            aria-controls="mobile-menu" 
                            aria-expanded="false"
                            >
                            <span className="sr-only "> Open main menu</span>
                            {!isOpen ? (<svg 
                            className="block w-6 h-6" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            aria-hidden="true">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d= "M4 6h16M4 12h16M4 18h16"/>
                            </svg>) : (
                            <svg 
                            className="block w-6 h-6" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            aria-hidden="true">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d= "M6 18L18 6M6 6l12 12"/>
                        </svg>
                            )}
                            </button>
                        
                        </div>

                  </div>
              </div>

              <Transition show={isOpen} enter="transition eas-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale">
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="bg-stone-200 mx-4 mr-20 pt-4 pb-4 space-y-1">
                            <Link href="/" ><a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a></Link>
                            <Link href="/courses"><a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</a></Link>
                            <Link href="/contact"><a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a></Link>
                            <Link href="/my-courses"><a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">My Courses</a></Link>
                            <Link href="/login"><a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a></Link>
                        </div>
                    </div>
                )} 
                </Transition>  
          </nav>  
        </div>
    )
}

export default Navbar