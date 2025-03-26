import React from "react";
import { useState, useEffect } from "react";
import { Aligner, StyledCards, StyledGrid } from "./Grid.Styled";
import { HashiraImages, PlaceHolder } from "../Constants";
import { DemonImages } from "../Constants";
import { StyledText1, StyledScores ,StyledText2} from "../Scores.styled";
import { StyledFooter } from "./Footer.Styled";
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

  const [SelectedImages, SetSelectedImages] = useState([]);
  const [MatchedImages, SetMatchedImages] = useState(new Set());
  const [Lives, SetLives] = useState(3);
  const [Moves, SetMoves] = useState(0);
  const [ImagesLoaded, SetImagesLoaded] = useState(false);

  useEffect(() => {
    const allImages = [...DemonImages, ...HashiraImages, ...CopyHashiraImages];

    const preloadImages = () => {
      let loadedCount = 0;
      allImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === allImages.length) {
            SetImagesLoaded(true);
            setNewArray(shuffleArray(allImages));
          }
        };
      });
    };

    preloadImages();
  }, []);

  // useEffect(() => {
  //   console.log("Updated Lives:", Lives);
  //   if (Lives <= 0) {
  //     setTimeout(() => window.location.reload(), 500);
  //   }
  // }, [Lives]);

  function HandeleClick(index) {
    console.log("lol", MatchedImages.size);
    console.log(Moves);

    if (MatchedImages.size == 14) {
      setTimeout(() => window.location.reload(), 500);
    }

    if (!SelectedImages.includes(index)) {
      SetMoves((prevMoves) => prevMoves + 1);
    }

    if ((index === 17 || index === 14) && !MatchedImages.has(index)) {
      SetLives((prevLives) => Math.max(prevLives - 1, 0));
    }

    if (
      SelectedImages.length == 2 ||
      MatchedImages.has(index) ||
      SelectedImages.includes(index)
    )
      return;
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
    <>
      <Aligner>
        <StyledScores>
          <StyledText1>
            Try to make pairs of the cards which are same the demon cards will not make pairs after you make all the pairs click anywhere on the grid to restart
          </StyledText1>
        </StyledScores>

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

        <StyledScores>
          <StyledText2>
            Cards Remaining {14 - MatchedImages.size}
            <br></br> Moves {Moves}
          </StyledText2>
        </StyledScores>
      </Aligner>
    </>
  );
};

export default Mainpage;
