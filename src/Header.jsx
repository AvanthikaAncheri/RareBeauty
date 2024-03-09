import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <div className="header">
            <div className="nav">
                <div className="nav-ul">
                    <div className="nav-li">SHOP</div>
                    <div className="nav-li">SHADE FINDER</div>
                    <Link to='/rare-impact'>
                       <div className="nav-li" style={{textDecoration:"none"}}>RARE IMPACT</div>
                    </Link>
                    
                </div>
            </div>
            <div className="nav-logo">
                <div className="rarebeauty">Rare Beauty</div>
            </div>
            <div className="nav-utilities">
               <div className="nav-search">
                  <div className="search-box">
                    <div className="search-text">Search</div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header