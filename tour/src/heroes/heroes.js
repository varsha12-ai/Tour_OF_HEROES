import React from 'react'
import {Link} from 'react-router-dom'
import './hero.css';


function hero() {
    return (
        <div>
             <nav className='nav1'>
                {/* <img src='maxresdefault.jpg' alt='logo'  className='img'></img> */}
                <Link to='/Bollywood'><button className="button">Bollywood</button></Link>
                <Link to='/Hollywood'><button className="button1">Hollywood</button></Link>

    </nav>
        </div>
    )
}

export default hero
