import Link from 'next/link'
import React from 'react'

const notFoundPage = () => {
  return (
    <div className='not-found-page flex flex-col items-center justify-center h-screen'>
       <img src={"/not-found.svg"} width={300} height={300} alt="Page not found" /> 
       <h1 className='text-5xl font-extrabold text-indigo-200'>404 Not Found</h1>
        <Link href={"/"} className='px-4 py-2 border rounded-md bg-indigo-400 border-none mt-6'>
        Go To Home
        </Link>
    </div>
  )
}

export default notFoundPage