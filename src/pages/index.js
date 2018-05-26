import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div className="index"> 
    <h2 className="sub-title">Newest Blog Posts</h2> 
    {data.allMarkdownRemark.edges.map(post => ( 
      <Link 
        className="link-to-blog-post"
        key={post.node.id} 
        to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link> 
    ))}
  </div> 
) 

export const pageQuery = graphql`
  query IndexQuery { 
    allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }}}
    ) { 
      edges { 
        node { 
          id
          frontmatter { 
            title 
            path
            published 
            date
          }
        }
      }
    }
  }
`

export default IndexPage
