import React from 'react'
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-items">
            <p>Austin</p>
        </div>
        <div className="right-items">
            <ul>
                <li>Accueil</li>
                <li>À propos </li>
                <li>Rendez-vous</li>
                <li>Contactez-nous</li>
            </ul>
            <button className='btn-connect'>
                Se Conneccter <i class="fa-solid fa-user"></i>
            </button>
        </div>
    </div>
  )
}

export default Navbar