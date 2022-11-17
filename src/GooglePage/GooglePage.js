import React from 'react';
import GoogleHeader from './GoogleHeader';
import GoogleFooter from './GoogleFooter';
import GoogleBody from './GoogleBody';

export default function GooglePage() {

    const getLocation = () => {
    return "Abuja"
    }

    function greetUser() {
        alert("Welcome to Google")
    }

    function searchItem() {
        alert("Onyin is searching for ECC managers numbers")
    }

    return (
        <div>
            <GoogleHeader />
            <GoogleBody greetUser={greetUser} searchItem={searchItem} />
            <GoogleFooter location={getLocation()} />
        </div>
    )

}