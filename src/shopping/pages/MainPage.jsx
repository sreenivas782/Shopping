import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Fotter from "../components/Fotter";
import { Gents,Ladies } from "../data";
import { useState } from "react";
import WomenCollection from '../components/WomenCollection';

const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents);
  const[womenFashion, setWomenFashion] =useState(Ladies);

  
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomenCollection womenFashion={womenFashion}/>
      <Fotter />
    </div>
  );
};

export default MainPage;
