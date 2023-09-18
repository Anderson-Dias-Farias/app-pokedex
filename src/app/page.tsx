"use client"

import CardRaper from '@/Components/CardRaper';
import { useGlobalContext } from '@/Components/Context/store';
import Header from '@/Components/Header';
import { ApiResposta1 } from "@/Components/Interfaces"
import  Axios  from "axios"
import { useEffect, useState } from 'react';



export default function Home() {
  const [Poke, setPoke] = useState<ApiResposta1[]>() 

  const {N} = useGlobalContext()

useEffect(() => {
  
  
  async function PokeCard() {
    const res:ApiResposta1[] = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${N}`).then((res)=>{
     // console.log(res.data.results)
    return  res.data.results
    }).catch((err)=>{
      return []
    })
    

    setPoke(res)
    
     
     
  }
  PokeCard()
}, [N])


//console.log(Poke)
  return (
    <main className="" >
      <div className="flex min-h-screen w-screen justify-center flex-wrap gap-10 ">
        <Header/>
        {N != 0 ? <CardRaper res={Poke as ApiResposta1[]}/> : ""}
      </div> 
      
    </main>
  )
}



//