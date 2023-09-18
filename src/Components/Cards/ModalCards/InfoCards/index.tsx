import React from 'react'
import '../InfoCards/styles.css'

interface Props{
    Position:string;
    children:React.JSX.Element;
}

function InfoCards({Position, children}:Props) {

  return (
    <div className={'teste'+" "+ Position}>
        {children}
    </div>
  )
}

export default InfoCards