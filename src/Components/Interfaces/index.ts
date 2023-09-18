import { NullLiteral } from "typescript";

export interface ApiResposta1{
    name:string;
    url:string;
}

export interface ApiResposta2{
    name:string;    
    types:{
        slot:number,
        type:{
            name: string
        }
    }[];
    id:number;
    weight:number;
    height:number;
    stats:{
        base_stat:number;
        stat:{
            name:string;
        }
    }[];
    abilities:{
        ability:{
            name:string;
    }
}[];
}




export interface evoChain {
    species_name: string;
   // min_level: number;
    //trigger_name: string | null;
  //  item: string | null;
  }[]


 export interface Chain{
    is_baby: boolean,
    species: {
      name: string,
      url: string,
    },
    evolution_details: [
        {
          item:{
            name:string,
          },
          trigger: {
            name: string,
            url: string,
          },
          gender: string,
          held_item:string,
          known_move: string,
          known_move_type:string,
          location: string,
          min_level: number,
          min_happiness: string,
          min_beauty: string,
          min_affection: string,
          needs_overworld_rain: string,
          party_species: string,
          party_type: string,
          relative_physical_stats: string,
          time_of_day: string,
          trade_species: string,
          turn_upside_down: string,
        }
      ],
    evolves_to: [
      {
        is_baby: string,
        species: {
          name: string,
          url: string,
        },
        evolution_details: [
          {
            item: string,
            trigger: {
              name: string,
              url: string,
            },
            gender: string,
            held_item:string,
            known_move: string,
            known_move_type:string,
            location: string,
            min_level: number,
            min_happiness: string,
            min_beauty: string,
            min_affection: string,
            needs_overworld_rain: string,
            party_species: string,
            party_type: string,
            relative_physical_stats: string,
            time_of_day: string,
            trade_species: string,
            turn_upside_down: string,
          }
        ],
        evolves_to: [
          {
            is_baby: string,
            species: {
              name: string,
              url: string,
            },
            evolution_details: [
              {
                item: string,
                trigger: {
                  name: string,
                  url: string,
                },
                gender: string,
                held_item:string,
                known_move: string,
                known_move_type:string,
                location: string,
                min_level: number,
                min_happiness: string,
                min_beauty: string,
                min_affection: string,
                needs_overworld_rain: string,
                party_species: string,
                party_type: string,
                relative_physical_stats: string,
                time_of_day: string,
                trade_species: string,
                turn_upside_down: string,
              }
            ],
            evolves_to: [
              
            ]
          }
          
        ]
      }
    ]
    
  }