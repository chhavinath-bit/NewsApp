
import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'



export default function Navigation(props) {

  let location = useLocation();

  useEffect(() => {
    

  }, [location]);

  return (
    <div style={{fontSize: "18px"}}>
    <nav className="navbar navbar-expand-lg bg-dark"  data-bs-theme="dark">
<div className="container-fluid">
  <Link style={{ pointerEvents:(props.country==="-")?'none':'' }}  className={`navbar-brand ${location.pathname==="/"? "active": " "}`} to="/">NEWS</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Home"? "active": " "}`} aria-current="page" to="/Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Business"? "active": " "}`} to="/Business">Business</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Entertainment"? "active": " "}`} to="/Entertainment">Entertainment</Link>
      </li>
     
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Health"? "active": " "}`} to="/Health">Health</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Science"? "active": " "}`} to="/Science">Science</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Sports"? "active": " "}`} to="/Sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link style={{ pointerEvents:(props.country==="-")?'none':'' }} className={`nav-link ${location.pathname==="/Technology"? "active": " "}`} to="/Technology">Technology</Link>
      </li>
      
    
    </ul>
    
  </div>
</div>
</nav>
    
  
    </div>
  )
}
