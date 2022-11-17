import React from 'react';
import './GoogleStyles.css';

export default function GoogleHeader() {
    return (
        <div className = 'header-icon'>
            <div className='left'>
                <span>About</span>
                <span>Store</span>
            </div>
            <div className='right'>
                <span>Gmail</span>
                <span>Images</span>
            </div>
        </div>
    )
}