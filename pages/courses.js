import React from 'react'
import Image from "next/image"; 
import webDev from "../public/images/web_dev.png"
import Link from "next/link"

function courses() {
    return (
        <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
            <h2 className="text-6xl font-bold text-center">Courses</h2>
            <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10"> 
            <div className="p-2 shadow-md hover:border">
                     <div className="relative w-64 h-44"><Image src={webDev} layout="fill"/></div>
                     <div className="text-center mt-2"><Link href="/courses/web_dev"><a className='text-center mt-2 font-medium text-lg hover:underline hover:text-teal-700'>Web Development</a></Link></div>
                     </div>   
            </div>
        </div> 
    )
}

export default courses