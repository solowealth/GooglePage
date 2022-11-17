import React from 'react';
import './GoogleStyles.css';

export default function GoogleBody({greetUser, searchItem}) {
    const googleImage = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    return (
        <div>
            <div className='googleBody' >
                <div className='googleImage'>
                <img src={googleImage} alt="Google-Image" width={272} height={72} />
                </div>
                <div>
                <input className="Search" type="text" placeholder='Search for Google' />
                </div>
                <div>
                    <button onClick={() => searchItem()} >Google Search</button>
                    <button onClick={() => greetUser()} >I m feeling Lucky</button>
                </div>
                <p><u>Colours of Africa: take an artistic journey through the continent</u></p>
                <p>Google offered in: Hausa Igbo Èdè Yorùbá Nigerian Pidgin</p>
                </div>
        </div>

    )
}