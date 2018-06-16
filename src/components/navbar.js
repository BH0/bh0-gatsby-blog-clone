import React from 'react'; 
import Link from 'gatsby-link';

{/* I kept the anchor tags inside the link because the anchor tags are already styled */}
const Navbar = () => 
    <div className="navigation center"> 
        <Link to="/"><a>Recent</a> </Link> 
        <Link to="/archives/"><a>Archives</a></Link>
        <Link to="/"><a>Most viewed</a></Link> 
        <Link to="/"><a>About</a></Link> 
    {/* <a>category</a> */} 
    </div> 

export default Navbar; 