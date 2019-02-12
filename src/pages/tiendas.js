import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"
import Container from "../components/container"
import styled from 'styled-components'

const TiendasGrid = styled.div`
  display: grid;
  /* padding: 3rem 1rem; */
  /* grid-template-columns: repeat(6,1fr); */
  grid-row-gap: 1rem;
`

const URL_BASE = 'http://35.232.206.25';

const AllRecipes = ({ data }) => (
  <Layout>
    <Container>
      <h1>Tiendas</h1>
        {data.allNodeTienda.edges.map(({ node }) => (
          <TiendasGrid key={node.id} >
          <div>
            <h1>{node.title}</h1>
            <img width="250px" height="250px" src={URL_BASE.concat(node.relationships.field_portada ? node.relationships.field_portada.uri.url : 'Image not found')} alt=""/>
            <p>{node.field_horario ? node.field_horario : ''}</p>
          </div>
          </TiendasGrid>
        ))}
    </Container>
  </Layout>
)

export default AllRecipes

export const tiendas = graphql`
  query { 
    allNodeTienda {
      edges {
        node {
          id
          title
          field_local
          field_nivel
          field_sector
          field_horario
          field_telefono
          field_sitio_web {
            uri
          }
          relationships {
            field_imagen_descuento_miniatura {
              uri {
                url
              }
            }
            field_portada {
              uri {
                url
              }
            }
            field_imagen_descuento_tienda {
              uri {
                url
              }
            }
          }
        }
      }
    }
  }
`
