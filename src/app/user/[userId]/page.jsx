import React from 'react'

const DaynamicUserIdPage = async ({params}) => {
    const {userId} = await params;
  return (
    <div>DaynamicUserIdPage {userId}</div>
  )
}

export default DaynamicUserIdPage