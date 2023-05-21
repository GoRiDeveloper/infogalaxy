import React, { useState } from "react";
import { MainLayout } from "./layouts/Main_Layout/MainLayout";
import { MessageSection } from "./components/Message_Section/MessageSection";
import { getRandomNumber } from "./utils/getRandomNumber";
import data from "./data/data";

const 

  // DATA JSON
  DATA_LENGTH   = data.length,
  RAND_I_DATA   = data[getRandomNumber(DATA_LENGTH)],
  // BACKGROUNDS CLASSES ARRAY
  ARR_BG        = ["bg--1", "bg--2", "bg--3", "bg--4"],
  ARR_BG_LENGTH = ARR_BG.length,
  RAND_I_BG     = ARR_BG[getRandomNumber(ARR_BG_LENGTH)],
  // PLANET IMAGES ARRAY
  ARR_PLANETS   = [

    "/public/assets/img/planets/Moon.png", 
    "/public/assets/img/planets/Earth.webp", 
    "/public/assets/img/planets/Jupiter.webp", 
    "/public/assets/img/planets/Venus.webp"
  
  ], 
  ARR_PLANETS_LENGTH = ARR_PLANETS.length,
  RAND_I_PLANETS     = ARR_PLANETS[getRandomNumber(ARR_PLANETS_LENGTH)];

export function App () {

  const 
  
  [quote, setQuote]   = useState(RAND_I_DATA.phrase),
  [author, setAuthor] = useState(RAND_I_DATA.author),
  [bg, setBg]         = useState(RAND_I_BG),
  [planet, setPlanet] = useState(RAND_I_PLANETS);

  function change () {

    const RAND_NUM = getRandomNumber(DATA_LENGTH);

    setQuote(data[RAND_NUM].phrase);
    setAuthor(data[RAND_NUM].author);
    setBg(ARR_BG[getRandomNumber(ARR_BG_LENGTH)]);
    setPlanet(ARR_PLANETS[getRandomNumber(ARR_PLANETS_LENGTH)]);

  };

  return (

    <MainLayout bg={bg}>

      <MessageSection 

        quote={quote} 
        author={author} 
        planet={planet} 
        change={change} 
        
      />
      
    </MainLayout>

  );

};