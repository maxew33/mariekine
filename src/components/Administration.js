import React from 'react'
import '../style/administration.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

import logo1 from '../assets/logos/logo-1.png'
import logo2 from '../assets/logos/logo-2.png'
import logo3 from '../assets/logos/logo-3.png'
import logo4 from '../assets/logos/logo-4.png'
import logo5 from '../assets/logos/logo-5.png'

import idPhoto from '../assets/img/id-photo.png'
export default function Administration({ database }) {
    console.log('admin', database)
    return (
        <>
            <div className="header centered-header">
                    Administration <br/>
            </div>
            <main>

<section className="presentation">

    <div className="section-title">
        <img src={logo2} alt="logo" className="logo" />
        présentation
    </div>

    <div className="presentation-content">
        <span className="quotation-mark"> “ </span>
        <input type="text" value={database.presentation.texte.presentation}/>
        <span className="quotation-mark"> ” </span>
    </div>

</section>

<section className="nav-target soins-conv soins" data-id='1'>

    <div className="section-title">
        <img src={logo3} alt="logo" className="logo" />
        soins conventionnés
    </div>

    {
        Object.values(database.soinsConventionnels).map((soin, idx)=>{
            return(
                <div className="soin" key={idx}>
                    <div className="soin-title">
                        {soin.nom}
                    </div>
                    <div className="description">
                        {soin.description}
                    </div>
                </div>

        )})
    }

</section>

<section className="nav-target soins-non-conv soins" data-id='2'>
    <div className="section-title">
        <img src={logo4} alt="logo" className="logo" />
        soins non conventionnés
    </div>

    {
        Object.values(database.soinsNonConventionnels).map((soin, idx)=>{
            return(
                <div className="soin" key={idx}>
                    <div className="soin-title">
                        {soin.nom}
                    </div>
                    <div className="description">
                        {soin.description}
                    </div>
                </div>

        )})
    }

</section>

<section className="nav-target contact" data-id='3'>
    <div className="section-title">
        <img src={logo5} alt="logo" className="logo" />
        contact
    </div>

    <div className="contact-infos">

        <div className='info'>
            <span className="font-awesome-icon">
                <FontAwesomeIcon icon={faClock} />
            </span>
            Lundi : 10h - 19h <br />
            Mardi : 10h - 21h <br />
            Mercredi : 10h - 19h <br />
            Vendredi : 10h - 21h
        </div>
        <div className='info'>
            <span className="font-awesome-icon">
                <FontAwesomeIcon icon={faLocationDot} />
            </span>
            1 Route de Saint Pey d'Armens, 33350 Sainte-Terre
        </div>

        <div className='info'>
            <span className="font-awesome-icon">
                <FontAwesomeIcon icon={faPhone} />
            </span>
            07 83 xx xx xx / 05 57 xx xx xx
        </div>

        <div className='info'>
            <span className="font-awesome-icon">
                <FontAwesomeIcon icon={faAt} />
            </span>
            imbault.marie@xxxx.com
        </div>

    </div>


</section>

</main>
        </>
    )
}
