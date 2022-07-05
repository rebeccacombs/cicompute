import React from 'react' 
import {AiTwotoneHeart} from "react-icons/ai"; 

function Footer() {
    return (
        <footer className="w-full h-16 bg-stone-200 flex justify-center items-center">
            <h1 className="text-xl text-teal-900 mr-2">© 2022 made by <a href="/" className="cursor-pointer font-semibold text-teal-900 hover:text-black">CICD</a></h1>
            <AiTwotoneHeart className="text-black"/>
            <h1 className="text-xl text-teal-900 ml-2">All rights reserved.</h1>
        </footer>
    )
}

export default Footer 