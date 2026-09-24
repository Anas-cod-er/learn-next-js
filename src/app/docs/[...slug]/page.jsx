import React from 'react'

// chase all sagement 
const DocPages = async({params}) => {
    const {slug} = await params
  return (
    <div>DocPages {slug}</div>
  )
}

export default DocPages