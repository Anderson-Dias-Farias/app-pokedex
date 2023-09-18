

import React, { useEffect, useState } from 'react'
import { ApiResposta1, ApiResposta2 } from '../Interfaces'
import  Axios  from 'axios'
import Image from 'next/image'
import ModalCards from './ModalCards'
import { ColorTye } from '../Interfaces/colors'
import iconTypePokemon from '@/Components/Icons'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import N from '../../../public/next.svg'

interface Props{
    Item:ApiResposta1
}

interface I{
  
    name: string,
    svg:{
      src:string | StaticImport
    }
  }



function PokemomCards({Item}:Props) {

    const [pokemon, setPokemon] = useState<ApiResposta2>()
    const [tipo, setTipo] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        Axios.get(Item.url).then(async (res)=>{
        const  {
            name,
            types,
            id,
            weight,
            height,
            stats,
            abilities,
          } = await res.data
         setPokemon({
          name,
          types,
          id,
          weight,
          height,
          stats,
          abilities,
        })
       
    
        }).catch((err)=>{
         
        });
       
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[Item.url])

     // console.log(pokemon)

      const Color = (name: string)=>{
        return  ColorTye.filter((cor)=>{
          if(cor.name === name){
            return cor.color
          }
        })
      }

      const Icon = (name:string)=>{
        return iconTypePokemon.filter((Ic :I)=>{
          if(Ic.name == name){
            return Ic
          }
        })
      }

      const FormatName = (name:string)=>{
       return name[0]?.toUpperCase()+name.substring(1) || "" as string
      }
      
     
if(pokemon){
  const A = pokemon?.types[0]?.type?.name || "" as string
  const B = pokemon?.types[1]?.type?.name || "" as string

  const PokemonName = FormatName(Item.name)
  const TipoA = FormatName(A)
  const TipoB = FormatName(B)

  const C1 = Color(TipoA)
  const C2 = Color(TipoB)

  const SVG1 = Icon(A)
  const SVG2 = Icon(B)


   
return (


<ModalCards C1={C1} C2={C2} Name1={TipoA} Name2={TipoB} SVG1={SVG1} SVG2={SVG2} Pokemon={pokemon} PokemonName={PokemonName}>
<div onClick={()=> setOpen(true)} className={`w-72 relative bg-white  shadow-2xl rounded-xl  h-72 flex items-center justify-center flex-col cursor-pointer gap-3 py-1`}  >

  <div className=' absolute w-7 h-7 top-1 flex items-center justify-center z-10 left-1 text-white' style={{backgroundColor:C1[0].color, borderRadius:'50%'}} >{pokemon.id}</div>

<div className='w-4/5 h-4/5  flex items-center justify-center relative' >        
  <Image priority fill sizes='120px' style={{objectFit:'scale-down'}} src={`https://img.pokemondb.net/artwork/${Item.name}.jpg`} alt={Item.name}/>
</div>
<h1 className='font-bold text-zinc-700 text-2xl'>{PokemonName}</h1>

<div className="gap-5">  

  <div className='flex items-center justify-center gap-2'>
  <div style={{backgroundColor:`${C1[0]?.color}`, width:'120px', borderRadius:'4px', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
    <Image  blurDataURL={N} src={SVG1[0]?.svg.src as string } alt={SVG1[0]?.name as string} width={15} height={15} sizes='100px' priority style={{objectFit:'scale-down', color:'#fff'}} />
  <h1 className='font-bold text-black text-lg'>{TipoA}</h1> 
</div>
{
  TipoB != "undefined" ?
  <div style={{backgroundColor:`${C2[0]?.color}`, width:'120px', borderRadius:'4px', display:'flex', alignItems:'center', justifyContent:'center', gap:"10px"}}>
   
    
    <Image blurDataURL={N} src={SVG2[0]?.svg.src} alt={SVG2[0]?.name as string} width={15} height={15} sizes='100px' priority />
    
    <h1 className='font-bold text-black text-lg'>{TipoB}</h1> 

  </div>
:
  ""
}
  </div>

</div>

</div>
</ModalCards>





)
}else{
  return ""
}
}

export default PokemomCards