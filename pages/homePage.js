import React from 'react'
import Image from "next/image"; 
import heroImage from "../public/images/compsci.jpg"
import Link from "next/link"

function homePage() {
    return (
        <div>
            <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
                <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
                    <Image src={heroImage} priority={true} alt="compsci" layout='fill' objectFit='cover' className='rounded-full cursor-pointer hidden md:block'/>
                </div>
                <div className="flex flex-col md:ml-20 mx-10 mt-10">
                    <h1 className="font-bold text-7xl text-left mb-5">
                        Learn web development <span className='text-teal-700'>today.</span>
                    </h1>
                    <p className='text-left font-normal mb-5 flex-wrap text-xl'>
                        Here at CICD, we aim at teaching anyone valuable computational/software skills. Not just for their job, but for their lives in the digital age. 
                    </p>
                    <Link href="/courses"><a className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-teal-700 rounded-md w-80 h-16 text-xl hover:bg-black">
                        Check out available courses
                    </a></Link>
                </div>
            </div>
        </div>
    )
}

export default homePage
