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
    return (
      <Layout>
        <div css={{ overflow: `hidden` }}>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

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
