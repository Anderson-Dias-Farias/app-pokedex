

import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import Image from 'next/image';
import Logo from "../../../public/LogoPokemon.png"
import { useGlobalContext } from '../Context/store';

interface Props{
  setNum: Dispatch<SetStateAction<number>>

}

function Header() {
  const [value, setValue] = useState(0)

  const {setN, setFiltro} = useGlobalContext()



  return (
    <div className='w-full max-w-screen-2xl flex items-center justify-between shadow-xl bg-white rounded-lg p-1 h-full min-h-[150px]'>
          <div className='w-72 relative max-w-sm h-full min-h-[150px]'>
            <Image src={Logo} fill style={{objectFit:"scale-down"}} sizes='100' alt='Logo Pokemon' />
          </div>
        
            <div className="w-full max-w-xs h-auto shadow-xl rounded flex border-[#ccc] border-[1px]">
            <input className='h-[40px]  border-collapse active:border-blue-700 focus:border-blue-700 focus:outline-blue-700'
            type='number'
            onChange={(e)=> setValue(parseInt(e.target.value))}/>
            <button className='w-full bg-[#ffff00] border-blue-700 border-[2px] border-collapse text-blue-700 font-bold se'
              onClick={()=>setN(value)}
            >Carregar</button>
            </div>
            <div className="w-full max-w-xs h-auto shadow-xl rounded flex border-[#ccc] border-[1px]">
            <input className='h-[40px]  border-collapse active:border-blue-700 focus:border-blue-700 focus:outline-blue-700'
              onChange={(e)=>setFiltro(e.target.value)}
            />
            <button className='w-full bg-[#ffff00] border-blue-700 border-[2px] border-collapse text-blue-700 font-bold se'>Buscar</button>
            </div>
    </div>
  )
}

export default Header