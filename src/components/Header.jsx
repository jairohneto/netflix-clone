import React from "react";
import './Header.css'

export default ({black}) => {
  return (
    <header className={black ? 'black' :  ''}>
      <div className="header--logo">
        <a href="/">
          <img src="src/assets/logonetflix.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="src/assets/netflixavatar.png" alt="User" />
        </a>
      </div>
    </header>
  )
}
