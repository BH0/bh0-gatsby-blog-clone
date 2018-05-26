import React from 'react'
import Link from 'gatsby-link'

const ArchivesPage  = ({data}) => (
  <div> 
    <h2 className="sub-title">Archives</h2> {/* Archived Blog Posts */}
    {data.allMarkdownRemark.edges.map(post => ( 
      <Link className="link-to-blog-post"
        key={post.node.id} 
        to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link> 
    ))}
  </div> 
) 

export const pageQuery = graphql`
  query ArchivesQuery { 
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
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

export default ArchivesPage
