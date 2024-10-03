import React from 'react'


//Next.js distinct between Server components and client components. 
//Server comp are pre-rendered and cannot handle client-side interactivity.
"use client"

const Searchbar = () => {
  const handleSubmit = () => {}
  
  return (
    <form 
        className='flex flex-wrap gap-4 mt-12' 
        onSubmit={handleSubmit}
    >

    </form>
  )
}

export default Searchbar