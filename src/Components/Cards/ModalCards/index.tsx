import React from "react";
import Image from "next/image";
import InfoCards from "./InfoCards";
import ProgresBar from "./ProgresBar";
import { ApiResposta2 } from "@/Components/Interfaces";
import { json } from "stream/consumers";
import Evolution from "./Evolutions";

interface Props{
    children: React.JSX.Element
    C1: {
      name: string;
      color: string;
  }[]
  C2: {
    name: string;
    color: string;
}[]
Name1:string;
Name2:string;
SVG1: {
  name: string;
  svg: any;
}[]
SVG2: {
  name: string;
  svg: any;
}[]
Pokemon:ApiResposta2;
PokemonName:string;
}

export default function Modal({children, C1, C2, Name1, Name2, SVG1, SVG2, Pokemon, PokemonName}:Props) {
  const [showModal, setShowModal] = React.useState(false);

  const baseStatsName = [
    "HP",
    "Attack",
    "Defense",
    "Attack",
    "Defense",
    "Speed",
  ];


  const States = ()=>{
    return Pokemon.stats.map((st, index)=>{
      return (
        <div key={index} className="flex gap-2 w-full items-center justify-end px-1 font-bold">
          <h1>{baseStatsName[index]}:</h1> <ProgresBar Persents={st.base_stat.toString()}  Bg={C1[0].color}/>
        </div>
      )
    })
  }

const Abilities = ()=>{
  return Pokemon.abilities.map((i, index)=>{
      return (
        <div key={index} style={{backgroundColor:C1[0].color, paddingLeft:'4px', paddingRight:"4px" , borderRadius:"5px",}}>
          <h1>{i.ability.name}</h1>
        </div>
        
      )
  })

}

const Type = ()=>{
  return (
    <>
       <div style={{backgroundColor:`${C1[0]?.color}`,  height:'20px', display:'flex', gap:'5px', padding:'8px', borderRadius:"5px",  alignItems:'center', position:'relative', justifyContent:'center'}}>
         <Image  src={SVG1[0]?.svg.src} alt={SVG2[0]?.name as string? SVG2[0]?.name as string : "Pokemom"} width={15} height={15} sizes='100px' priority />
         <h1>{Name1}</h1>
       </div>
       {
        Name2 != "undefined" ?
        <div style={{backgroundColor:`${C2[0]?.color}`,  height:'20px', display:'flex', gap:'5px', padding:'8px', borderRadius:"5px",  alignItems:'center', position:'relative', justifyContent:'center'}}>
         <Image  src={SVG2[0]?.svg.src} alt={SVG2[0]?.name as string? SVG2[0]?.name as string : "Pokemom"} width={15} height={15} sizes='100px' priority />
         <h1>{Name2}</h1>
       </div>
       :""
       }
    </>
  )

}


  return (
    <>
      <button
         type="button"
        onClick={() => setShowModal(true)}
      >
        {children}
       
      </button>
      {showModal ? (
        <div className="fixed z-20 justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none">
          <div 
            className="justify-center items-center flex z-50"
          >
            <div className=" relative w-auto my-6 mx-auto max-w-5xl z-50">
             
              <div className="relative border-0 max-w-5xl rounded-lg shadow-lg  flex flex-col w-screen h-4/5 bg-white outline-none focus:outline-none z-50 ">
                <div className="w-full h-[600px] flex items-center justify-center relative" >
                
                  <InfoCards Position="L">
                    <div className="flex flex-col gap-3 text-center font-bold">
                    <h1>ID: #{Pokemon.id}</h1>
                    <h1>Height: {Pokemon.height}MI</h1>
                    <h1>Weight: {Pokemon.weight}kg</h1>
                    <div className="flex gap-2">
                     <h1>Abilities:</h1>
                      {Abilities()}
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      <h1>Type:</h1>
                      {Type()}
                    </div>
                    </div>
                  </InfoCards>

                  <div className="relative w-full max-w-sm h-full  flex items-center justify-center ">
                    <Image priority fill sizes='220px' style={{objectFit:'scale-down'}} src={`https://img.pokemondb.net/artwork/${Pokemon.name}.jpg`} alt={Pokemon.name? Pokemon.name : "Pokemom"}/>   
                  </div>

                  <InfoCards Position="R">
                    <div className="flex flex-col gap-2 w-full">
                      {States()}
                    </div>
                  </InfoCards>

                 
                  
                </div>
                <div className="absolute top-6 w-full  flex items-center justify-center mb-5">
                    <h1 className='font-bold text-zinc-700 text-5xl'>{PokemonName}</h1>
                </div>
                <div className="absolute bottom-4 w-full flex items-center justify-center">
                  <div className="w-auto">
                    <Evolution cor={C1[0].color} Id={Pokemon.id} />
                  </div>
                </div>
               
                
              </div>
            </div>
          </div>
          <div onClick={()=>setShowModal(false)}
           className="opacity-25 fixed inset-0 z-30 bg-black w-screen h-screen"></div>
        </div>
      ) : null}
    </>
  );
}



/*

<div className="flex gap-2 w-full items-center justify-end px-1 ">
                    <h1>HP:</h1> <ProgresBar Persents="80"  Bg={C1[0].color}/>
                    </div>
                      
                    <div className="flex gap-2 w-full items-center justify-end px-1 ">
                    <h1>Attack:</h1><ProgresBar Persents="80" Bg={C1[0].color}/>                    
                    </div>

                    <div className="flex gap-2 w-full items-center justify-end px-1 ">
                    <h1>Defense:</h1><ProgresBar Persents="80" Bg={C1[0].color}/>
                    </div>

                    <div className="flex gap-2 w-full items-center justify-end px-1 ">
                    <h1>Attack:</h1><ProgresBar Persents="100" Bg={C1[0].color}/>
                    </div>

                    <div className="flex gap-2 w-full items-center justify-end px-1 ">
                    <h1>Defense:</h1><ProgresBar Persents="100" Bg={C1[0].color}/>
                    </div>

                    <div className="flex gap-2 w-full items-center justify-end px-1 ">
                    <h1>Speed:</h1><ProgresBar Persents="100" Bg={C1[0].color}/>
                    </div>

                    */