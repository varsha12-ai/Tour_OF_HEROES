import React from 'react'
import './footer.css';
import{Link} from 'react-router-dom';

function footer() {
    return (
            <footer >
        <div className="footer">
            
        <div className="row1">
        <div className="column1">
           <img className="img"src="maxresdefault.jpg"/>
        </div>
        <div className="column1">
        <ul className="ul">
                <li><Link to='AboutUs'>AboutUs</Link></li>
                <li><Link to='ContactUs'>ContactUs</Link></li>
                <li><Link to='Help'>Help</Link></li>


            </ul>   
        </div>
        <div className="column1">
        <ul className="ul">
                <li><Link to='FAQ'>FAQ</Link></li>
                <li><Link to='Services'>Services</Link></li>
                <li><Link to='PrivacyPolicy'>PrivacyPolicy</Link></li>
         </ul>   
        </div>
        </div>
        <div className='container'>
            <p>....@  copyrigt 2022...</p>

        </div>
        </div>
       

             </footer>
    )
}

export default footer

