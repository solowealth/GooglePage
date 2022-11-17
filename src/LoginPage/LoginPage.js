import React from 'react';

export default function LoginPage() {
    return (
        <div className="loginPageContainer"><h2>Please Log in to continue</h2>
        <input className="Log in" placeholder="Username" ></input> <br></br>
        <input className="Log in" placeholder="Password" ></input> <br></br>
        <button onClick= { () => alert('You have submitted your details successfully')} id="btn" >Submit</button>
      </div>
    )
}