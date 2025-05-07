import React from 'react'
import './Introduction.css'
import Doctorimage from '../../../assets/doctor.jpg'

const Introduction = () => {
  return (
    <div className='Introduction-container'>
      <div className="right-container">
        <div className="right-content">
          <p className='main-title'>Protégez votre <br /> <span className='blue-letter'>santé</span> et prenez <br /> soin de votre <span className='blue-letter'>santé</span> </p>
          <p className="sub-title">"Une bonne santé est une couronne sur la tête d'une
            personne en bonne santé, que seuls les malades peuvent voir. Restez actif,
            mangez bien et gardez un état d’esprit positif. Votre corps vous remerciera"</p>
          <button className='btn-savoir'>
            En savoir plus <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
        <img src= {Doctorimage} alt="" className='doctor-main'/>

      </div>

      


      <div className="left-contaner">
        <div className="left-content">
            
        </div>
      </div>
    </div>
  )
}

export default Introduction