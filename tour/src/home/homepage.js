import React from 'react'
import {Link} from 'react-router-dom'
import './home.css';
import Footer from '../footer/footer';


function homepage() {
    return (
        <div>
           <nav className='nav1'>
                {/* <img src='maxresdefault.jpg' alt='logo'  className='img'></img> */}
                <Link to='/Dashboard'><button className="button">DashBoard</button></Link>
                <Link to='Heroes'><button className="button1">Heroes</button></Link>

    </nav>
    <div className="row">
      <div className="column">
    <div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className='images'src="10.jpeg"/>
    </div>
    <div className="flip-box-back">
      <h2>HERO</h2>
      <p>What a Hero</p>
    </div>
  </div>
</div>
</div>

<div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className='images'src="15.jpeg"/>
    </div>
    <div className="flip-box-back">
      <h2>HERO</h2>
      <p>What a Hero</p>
    </div>
  </div>
</div>
<div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className='images'src="11.jpeg"/>
    </div>
    <div className="flip-box-back">
      <h2>HERO</h2>
      <p>What a Hero</p>
    </div>
  </div>
</div>
<div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className='images'src="1.jpeg"/>
    </div>
    <div className="flip-box-back">
      <h2>HERO</h2>
      <p>What a Hero</p>
    </div>
  </div>
</div>
<div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className='images'src="4.jpeg"/>
    </div>
    <div className="flip-box-back">
      <h2>HERO</h2>
      <p>What a Hero</p>
    </div>
  </div>
</div>

</div>
            
            <Footer />
        </div>
    
    )
}

export default homepage
