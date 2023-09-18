import React from 'react'

interface Props{
    Persents:string;
    Bg:string;
}

function ProgresBar({Persents, Bg}:Props) {
  return (
    
  <div className='w-full px-1 max-w-[200px]'>
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 relative h-4">
  <div className=" absolute text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h3" style={{width:Persents+"%", backgroundColor:Bg}}>{Persents}%</div>
</div>
  </div>

  ) 
}

export default ProgresBar