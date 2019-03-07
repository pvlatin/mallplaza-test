import React, { useState, useContext, useEffect } from "react";
import { StoresContext } from "../../pages/tiendas";
import SelectBox from "../molecules/SelectBox";
import Store from "../molecules/Store";

const AllStores = props => {
  const categorias = [
    {
      id: 1,
      value: "Categoría 1"
    },
    {
      id: 2,
      value: "Categoría 2"
    },
    {
      id: 3,
      value: "Categoría 1"
    }
  ];

  const aToZ = [
    {
      id: 1,
      value: "a"
    },
    {
      id: 2,
      value: "b"
    },
    {
      id: 3,
      value: "c"
    }
  ];

  const nivel = [
    {
      id: 1,
      value: "Nivel 1"
    },
    {
      id: 2,
      value: "Nivel 2"
    },
    {
      id: 3,
      value: "Nivel 3"
    }
  ];

  const [storesState, setStores] = useState([]);
  const stores = useContext(StoresContext);

  return (
    <div>
      <input type="search" name="" id="" />
      <SelectBox items={categorias} />
      <div>
        <SelectBox items={aToZ} />
        <SelectBox items={nivel} />
      </div>
      {stores.map(store => (
        <Store data={store} /> 
      ))}
    </div>
  );
};

export default AllStores;
