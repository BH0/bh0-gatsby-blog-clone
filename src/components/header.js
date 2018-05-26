import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'grey',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'yellow',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link> 
      </h1>
    </div> 
    <Link className="nav-link" to="/archives/">Archives</Link>
    <Link className="nav-link" to="">About</Link>
  </div>
)

export default Header
