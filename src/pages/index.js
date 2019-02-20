import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../layouts';
import styled from 'styled-components';
import Landing from '../components/templates/Landing';

// const TiendasGrid = styled.div`
//   display: grid;
//   padding: 3rem 5rem;
//   grid-template-columns: repeat(4, 1fr);
//   grid-row-gap: 5rem;
// `;

// const URL_BASE = 'http://35.232.206.25';

const AllRecipes = ({data}) => (
  <Layout>
    <Landing data={data} />
  </Layout>
);

export default AllRecipes;
