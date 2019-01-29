import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"
import Container from "../components/container"

const AllRecipes = ({ data }) => (
  <Layout>
    <Container>
      <h1>Tiendas</h1>
      {/* <ul>
        {data.allNodeTiendas.edges.map(({ node }) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </ul> */}
    </Container>
  </Layout>
)

export default AllRecipes

// export const tiendas = graphql`
//   query { 
//     allNodeTiendas {
//       edges {
//         node {
//           id
//           title
//           field_location
//         }
//       }
//     }
//   }
// `
