//import { Evlres } from '@/Components/Interfaces';
import { Chain, evoChain } from '@/Components/Interfaces';
import  Axios  from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface Props{
    cor:string;
    Id:number
}



function Evolution({cor, Id}:Props) {

    const [evl, setEvl] = useState([] as unknown as evoChain[])

   

  

    useEffect(()=>{
      Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${Id}/`).then(async (res)=>{
        const {evolution_chain} = res.data
        Axios.get(evolution_chain.url).then(async(res)=>{          

         let evoChain = [];
          let evoData = res.data.chain;
          do {
            var evoDetails = evoData["evolution_details"][0];
            let numberOfEvolutions = evoData.evolves_to.length;
            evoChain.push({
              species_name: evoData.species.name,
              min_level: !evoDetails ? 1 : evoDetails.min_level,
              trigger_name: !evoDetails ? null : evoDetails.trigger.name,
              item: !evoDetails ? null : evoDetails.item,
            });

            if (numberOfEvolutions > 1) {
              for (let i = 1; i < numberOfEvolutions; i++) {
                evoChain.push({
                  species_name: evoData.evolves_to[i].species.name,
                  min_level: !!evoData.evolves_to[i]
                    ? 1
                    : evoData.evolves_to[i].min_level,
                  trigger_name: !!evoData.evolves_to[i]
                    ? null
                    : evoData.evolves_to[i].trigger.name,
                  item: !!evoData.evolves_to[i]
                    ? null
                    : evoData.evolves_to[i].item,
                });
              }
            }

            evoData = evoData.evolves_to[0];
          } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
           
           setEvl(evoChain);
          // console.log(evl)*/

        })
        
       
    
        }).catch((err)=>{
         
        });
       
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

     // console.log(evl)
    const A = () =>{
        return(
            <svg className='ml-16 mr-16' xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" viewBox="0 0 10.605 15.555">
                <polygon points="2.828 15.555 10.605 7.776 2.828 0 0 2.828 4.949 7.776 0 12.727 2.828 15.555"  scale={50} fill={cor}/>
            </svg>
        )
    }

    const PKMEvl = ()=>{
      return  evl.map((e, index)=>{
       // console.log(e.species_name)
        return(
            <div key={index} className='flex items-center justify-between w-full'>
                  <div className='w-28 h-28 rounded-full border-l-2 relative'  style={{borderColor:cor}}>
                
                     <Image fill src={`https://img.pokemondb.net/artwork/${e.species_name}.jpg`} sizes='50px'
                      style={{objectFit:'scale-down', padding:"20px"}}  alt={e.species_name? e.species_name : "Pokemom"} />
                 </div>
                {index < evl.length -1 ? A() : <></>}
            </div>
        )           
        })
    }


  return (
    <div className='w-full flex items-center justify-evenly  max-w-4xl'>
      {PKMEvl()}
    </div>
  )
}

export default Evolution


/*

  <div className='w-24 h-24 rounded-full border-l-2 relative'  style={{borderColor:cor}}>
            <Image fill src={`https://img.pokemondb.net/artwork/${Item.name}.jpg`} sizes='100px' style={{objectFit:'cover'}}  alt='1'  />
        </div>
        {A()}

        <div className='w-24 h-24 rounded-full border-l-2 relative'style={{borderColor:cor}}>
            <Image fill src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`} sizes='100px' style={{objectFit:'cover'}}  alt='1'  />
        </div>
        {A()}
        <div className='w-24 h-24 rounded-full border-l-2  relative' style={{borderColor:cor}}>
            <Image fill src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`} sizes='100px' style={{objectFit:'cover'}}  alt='1'  />
        </div>

*/