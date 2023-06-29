



import React from 'react'
import { Link } from 'react-router-dom'



export default function Navigation(props) {
  console.log(props.country);
  return (
    <div style={{fontSize: "18px"}}>
    <nav className="navbar navbar-expand-lg bg-dark"  data-bs-theme="dark">
<div className="container-fluid">
  <Link style={{ pointerEvents:(props.country==="-")?'none':'' }}  className="navbar-brand" to="/">NEWS</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" aria-current="page" to="/Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" to="/Business">Business</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" to="/Entertainment">Entertainment</Link>
      </li>
     
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" to="/Health">Health</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" to="/Science">Science</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" to="/Sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className="nav-link" to="/Technology">Technology</Link>
      </li>
      
    
    </ul>
    
  </div>
</div>
</nav>
    
  
    </div>
  )
}
