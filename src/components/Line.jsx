import React from 'react'

function Line() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white">
  {/* Coal Icon */}
  <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="50" x2="200" y2="50" stroke="black" strokeWidth="2" />
    <path d="M100 35 L90 55 L110 55 Z" fill="black" />
    <path d="M100 35 L95 50 L105 50 Z" fill="black" />
    <path d="M100 35 L92 47 L108 47 Z" fill="black" />
  </svg>
</div>
  )
}

export default Line