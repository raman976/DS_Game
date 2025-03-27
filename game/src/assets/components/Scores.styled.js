import styled from "styled-components";
export const StyledScores=styled.div`
width: 15vw;
height: 40vh;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
background-size: contain;
background-repeat: no-repeat;
background: linear-gradient(
    to bottom,
    #f7e1a1, /* Light faded yellow */
    #e5c37f, /* Slightly deeper parchment tone */
    #d4a96f  /* Aged paper color */
  );

  border-radius: 8px; 
  box-shadow:  
    4px 4px 10px rgba(0, 0, 0, 0.3), 
    -4px -4px 10px rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(179, 139, 86, 0.6); 
` 

export const StyledText2=styled.h3`
font-size: 30px;
font-family: 'New Rocker', cursive;
color: black;
`
export const StyledText1=styled.p`
color: black;
font-size: 20px;
font-family: 'New Rocker', cursive;
`