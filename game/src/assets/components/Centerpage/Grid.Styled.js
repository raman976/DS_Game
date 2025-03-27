import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  width: 60vw;
  height: 80vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  gap: 1px;
`;

export const StyledCards = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Aligner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
