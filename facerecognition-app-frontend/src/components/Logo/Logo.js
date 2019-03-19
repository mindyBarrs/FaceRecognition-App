import React from 'react';
import Tilt from 'react-tilt';

// LOGO
import brain from './brain.png';

// STYLESHEETS
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img alt="Brain Logo" style={{paddingTop:'5px', width: '100%', height: 'auto'}} src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;