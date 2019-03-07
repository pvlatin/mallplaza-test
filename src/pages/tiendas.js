import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts";
import styled from "styled-components";
import StoresPage from "../components/templates/StoresPage";

export const StoresContext = React.createContext();

const AllRecipes = props => {
  const data = [
    {
      id: 1,
      value: "Adidas"
    },
    {
      id: 2,
      value: "Nike"
    },
    {
      id: 3,
      value: "Gucci"
    },
    {
      id: 4,
      value: "Versace"
    }
  ];
  return (
    <Layout>
      <StoresContext.Provider value={data}>
        <StoresPage data={data} />
      </StoresContext.Provider>
    </Layout>
  );
};

export default AllRecipes;
