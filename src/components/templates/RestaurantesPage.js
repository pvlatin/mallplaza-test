import React, { useState } from "react";
import OpenAt from "../molecules/OpenAt";
import SectionTitle from "../atoms/SectionTitle";
import SectionBg from '../../images/tiendas/tiendas-bg.png'

const RestaurantesPage = props => {
  const [title, setTitle] = useState("Restaurantes");

  let content = (
    <> 
      <SectionTitle title={title} />;
      <img src={SectionBg} alt="" srcSet="" className="section-bg w-100"/>
      <OpenAt />
    </>
  );

  return content;
};

export default RestaurantesPage;
