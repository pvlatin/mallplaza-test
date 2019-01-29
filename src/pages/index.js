import React from "react"
import { Link, graphql } from "gatsby"
import gray from "gray-percentage"
import Img from "gatsby-image"

import Layout from "../layouts"
import Container from "../components/container"
import { rhythm } from "../utils/typography"
import constants from "../utils/constants"

class IndexPage extends React.Component {
  render() {
    const data = this.props.data
    console.log(data, 'data data data')
    return (
      <Layout>
        <div css={{ overflow: `hidden` }}>
          {/* {data.allNodeTiendas.edges.map(({ node }) => {
            <div>
              {node.title}
              {node.field_location}
            </div>
          })} */}
        </div>
      </Layout>
    )
  }
}

export default IndexPage


// export const dataQuery = graphql`
//     query dataQuery {
//     allNodeTiendas {
//       edges {
//         node {
//           id 
//           title
//           field_location {
//             value
//             format
//             processed
//           }
//         }
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     topRecipe: allRecipes(sort: { fields: [createdAt] }, limit: 1) {
//       edges {
//         node {
//           title
//           fields {
//             slug
//           }
//           relationships {
//             image {
//               relationships {
//                 imageFile {
//                   localFile {
//                     childImageSharp {
//                       fluid(maxWidth: 740, maxHeight: 555) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     nextTwoPromotedRecipes: allRecipes(
//       sort: { fields: [createdAt] }
//       limit: 2
//       skip: 1
//     ) {
//       edges {
//         node {
//           title
//           fields {
//             slug
//           }
//           relationships {
//             category {
//               name
//             }
//             image {
//               relationships {
//                 imageFile {
//                   localFile {
//                     childImageSharp {
//                       fluid(maxWidth: 240, maxHeight: 240) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     nextFourPromotedRecipes: allRecipes(
//       sort: { fields: [createdAt] }
//       limit: 4
//       skip: 3
//     ) {
//       edges {
//         node {
//           title
//           fields {
//             slug
//           }
//           relationships {
//             category {
//               name
//             }
//             image {
//               relationships {
//                 imageFile {
//                   localFile {
//                     childImageSharp {
//                       fluid(maxWidth: 475, maxHeight: 475) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
