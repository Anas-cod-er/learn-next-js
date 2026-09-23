import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                    <Link href={"/"} className="mr-5 px-4 py-2 rounded-2xl
         text-white
         backdrop-blur-md 
         shadow-lg
         hover:bg-orange-300/40
         hover:border-orange-200/50
         transition-all duration-300">Home</Link>
                    <Link href={"/about"} className="mr-5 px-4 py-2 rounded-2xl
         text-white
         backdrop-blur-md 
         shadow-lg
         hover:bg-orange-300/40
         hover:border-orange-200/50
         transition-all duration-300">About</Link>
                    <Link href={"/user"} className="mr-5 px-4 py-2 rounded-2xl
         text-white
         backdrop-blur-md 
         shadow-lg
         hover:bg-orange-300/40
         hover:border-orange-200/50
         transition-all duration-300">User</Link>
                    <Link href={"/contact"} className="mr-5 px-4 py-2 rounded-2xl
         text-white
         backdrop-blur-md 
         shadow-lg
         hover:bg-orange-300/40
         hover:border-orange-200/50
         transition-all duration-300">Contact</Link>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-black mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>
    </header>
  )
}

export default navbar