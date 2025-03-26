import React from "react";
import { useState } from "react";
import { StyledCards, StyledGrid } from "./Grid.Styled";
import { HashiraImages, PlaceHolder } from "../Constants";
import { DemonImages } from "../Constants";
const Mainpage = () => {
  const CopyHashiraImages = [...HashiraImages];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const [NewArray, setNewArray] = useState(() =>
    shuffleArray([...DemonImages, ...HashiraImages, ...CopyHashiraImages])
  );

  console.log(NewArray);

  const [SelectedImages, SetSelectedImages] = useState([]);
  const [MatchedImages, SetMatchedImages] = useState(new Set());
  function HandeleClick(index) {
    if (SelectedImages.length == 2 || MatchedImages.has(index)) return;
    const NewSelectedCards = [...SelectedImages, index];
    SetSelectedImages(NewSelectedCards);
    if (NewSelectedCards.length == 2) {
      if (NewArray[NewSelectedCards[0]] === NewArray[NewSelectedCards[1]]) {
        SetMatchedImages(
          (prev) => new Set([...prev, NewSelectedCards[0], NewSelectedCards[1]])
        );
        SetSelectedImages([]);
      } else {
        setTimeout(() => {
          SetSelectedImages([]);
        }, 1000);
      }
    }
  }

  return (
    <StyledGrid>
      {NewArray.map((i, index) => {
        return (
          <StyledCards key={index} onClick={() => HandeleClick(index)}>
            <img
              src={
                MatchedImages.has(index) || SelectedImages.includes(index)
                  ? i
                  : PlaceHolder
              }
            ></img>
          </StyledCards>
        );
      })}
    </StyledGrid>
  );
};

export default Mainpage;
