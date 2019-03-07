import React, { useState, useContext } from "react";
import OpenAt from "../molecules/OpenAt";
import SectionTitle from "../atoms/SectionTitle";
import SectionBg from "../../images/tiendas/tiendas-bg.png";
import AllStores from "../../components/organisms/AllStores";

const StoresPage = props => {
  const [title, setTitle] = useState("Tiendas");

  let content = (
    <>
      <SectionTitle title={title} />
      <img src={SectionBg} alt="" srcSet="" className="img w-100" />
      <AllStores />
      <OpenAt />
    </>
  );

  return content;
};

export default StoresPage;
