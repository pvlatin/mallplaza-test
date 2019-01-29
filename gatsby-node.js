const path = require(`path`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `recipes`) {
    const slug = `/recipes/${node.internalId}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
