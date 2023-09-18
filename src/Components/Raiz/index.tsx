
import React from 'react'
import CardRaper from '@/Components/CardRaper';
import { PokeCard } from '../Func';

interface Props{
    N:number
}

async function Conteudo() {


    const Poke = await PokeCard(3).then((res)=>{
     return res
    })
    
   //console.log(Poke)
     return (
      
        <>
            <CardRaper res={Poke}/>
        </>
      
     )
}

export default Conteudo


