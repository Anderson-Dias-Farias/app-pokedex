

import React from 'react'
import { ApiResposta1 } from '@/Components/Interfaces'
//import  Axios  from 'axios';
import {  useEffect, useState } from 'react';
import PokemomCards from '@/Components/Cards';
import  Axios  from "axios"
import { useGlobalContext } from '../Context/store';


  interface ServerProps{
    res: ApiResposta1[]
  }

function CardRaper({res}:ServerProps) {
    const [domLoaded, setDomLoaded] = useState(false);
    const {Filtro} = useGlobalContext()

    useEffect(() => {
      setDomLoaded(true);
    }, []);
  
    const Poke =  () => {

      const Ft = res.filter((I)=>{
        
        return I.name.includes(Filtro.toLowerCase())
      })
      
      return  Ft.map(( Item: ApiResposta1, index)=>{
       
        return(
         
             <PokemomCards key={index} Item={Item}/>
           
         )
        })
    }
  return (
    <div className="flex min-h-screen items-center justify-evenly flex-wrap gap-20 p-20">
        {domLoaded? Poke() : ''}
    </div>
  )
}

export default CardRaper