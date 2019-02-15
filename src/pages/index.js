import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../layouts';
import styled from 'styled-components';

const TiendasGrid = styled.div`
  display: grid;
  padding: 3rem 5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5rem;
`;

const MainTitle = styled.h1`
  text-align: center;
  color: #e31350;
  font-size: 40px;
  margin-top: 50px;
  font-weight: 700;
`;

const TiendaTitle = styled.span`
  display: block;
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;
`;

const URL_BASE = 'http://35.232.206.25';

const AllRecipes = ({data}) => (
  <Layout>
    <MainTitle>Tiendas</MainTitle>
    <TiendasGrid>
      {data.allNodeTienda.edges.map(({node}) => (
        <div key={node.id}>
          <div>
            <TiendaTitle>{node.title}</TiendaTitle>
            <img
              width="250px"
              height="250px"
              src={URL_BASE.concat(
                node.relationships.field_portada
                  ? node.relationships.field_portada.uri.url
                  : 'Image not found'
              )}
              alt=""
            />
            <p>{node.field_horario ? node.field_horario : ''}</p>
          </div>
        </div>
      ))}
    </TiendasGrid>
  </Layout>
);

export default AllRecipes;

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
`;
