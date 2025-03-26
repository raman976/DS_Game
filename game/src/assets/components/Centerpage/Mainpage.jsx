import React from 'react'
import { StyledCards, StyledGrid } from './Grid.Styled'
import { HashiraImages } from '../Constants'
import { DemonImages } from '../Constants'
const Mainpage = () => {

  const CopyHashiraImages=[...HashiraImages]
    function shuffleArray(array) {
      
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
      }


      
      let NewArray=shuffleArray([...DemonImages,...HashiraImages,...CopyHashiraImages])
      console.log(NewArray)
      
  return (
   <StyledGrid>

    {NewArray.map((i,index)=>{
        return (<StyledCards key={index} >
          <img src={i}></img>
        </StyledCards>)
    })
    }
   </StyledGrid>
  )
}

export default Mainpage