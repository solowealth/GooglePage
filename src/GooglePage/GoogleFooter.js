import React from 'react';
import './GoogleStyles.css';

export default function GoogleFooter({location}) {
    return (
        <div className='footer-icon'>
            <div className='upper-footer' >
                <p>{location}</p>
            </div>
            <div className='lower-footer' >
                <div className='left'>
                    <span>About</span>
                    <span>Advertising</span>
                    <span>Business</span>
                    <span>How Search Works</span>
                </div>
                <div>
                    <p>Carbon Neutral since 2007</p>
                </div>
                <div className='right'>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Settings</span>
                </div>
            </div>  
        </div>
    )
}