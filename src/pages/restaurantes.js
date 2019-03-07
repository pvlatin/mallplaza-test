import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../layouts';
import styled from 'styled-components';
import RestaurantesPage from '../components/templates/RestaurantesPage';

const AllRecipes = ({data}) => (
  <Layout>
    <RestaurantesPage data={data} />
  </Layout>
);

export default AllRecipes;
