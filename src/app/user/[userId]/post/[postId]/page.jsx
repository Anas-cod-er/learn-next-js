import React from 'react'

const DaynamicPostIdPage = async ({params}) => {
    const {postId} = await params;
  return (
    <div>DaynamicPostIdPage {postId}</div>
  )
}

export default DaynamicPostIdPage