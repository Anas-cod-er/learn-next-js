import { notFound } from 'next/navigation';
import React from 'react'

const DaynamicUserIdPage = async ({params}) => {
    const {userId} = await params;
    if(userId > 10){
      notFound()
    }
  return (
    <div>DaynamicUserIdPage {userId}</div>
  )
}

export default DaynamicUserIdPage