import React, { useState } from 'react'
import '../style/administration.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faCirclePlus, faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

import logo1 from '../assets/logos/logo-1.png'
import logo2 from '../assets/logos/logo-2.png'
import logo3 from '../assets/logos/logo-3.png'
import logo4 from '../assets/logos/logo-4.png'
import logo5 from '../assets/logos/logo-5.png'

import idPhoto from '../assets/img/id-photo.png'
export default function Administration({ database }) {
    console.log('admin', database)

    const [inputContact, setInputContact] = useState(database.contact)
    const [inputPresentation, setInputPresentation] = useState(database.presentation)
    const [inputSoinsConventionnels, setInputSoinsConventionnels] = useState(database.soinsConventionnels)
    const [inputSoinsNonConventionnels, setInputSoinsNonConventionnels] = useState(database.soinsNonConventionnels)


    const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    const horaires = inputContact.horaires

    const handleInput = value => {
        console.log(value)
        console.log(inputPresentation)
        const newInputPresentation = { ...inputPresentation }
        newInputPresentation.texte.presentation = value
        setInputPresentation(newInputPresentation)
    }

    return (
        <>
            <div className="header centered-header">
                Administration <br />
            </div>
            <main>

                <section className="presentation">

                    <div className="section-title">
                        <img src={logo2} alt="logo" className="logo" />
                        présentation
                    </div>

                    <div className="presentation-content">
                        <span className="quotation-mark"> “ </span>
                        <textarea
                            type="text"
                            className='presentation-content'
                            value={inputPresentation.texte.presentation}
                            onInput={e => handleInput(e.target.value)} />
                        <span className="quotation-mark"> ” </span>
                    </div>

                </section>

                <section className="nav-target soins-conv soins" data-id='1'>

                    <div className="section-title">
                        <img src={logo3} alt="logo" className="logo" />
                        soins conventionnés
                    </div>

                    <input type="checkbox" id="toggle-soins-conv-infos" className="checkbox-hidden"></input>
                    <label className="add-item" htmlFor="toggle-soins-conv-infos">
                        <div className>
                            <FontAwesomeIcon icon={faCirclePlus} /> Ajouter un nouveau soin <FontAwesomeIcon icon={faCirclePlus} />
                        </div>
                    </label>
                    <div className="item-infos-inputs">
                        <input
                            type="text"
                            className="item-infos-name"
                            id="new-soins-conv-name"
                            required />
                        <label htmlFor="new-soins-conv-name">Nom du soin : </label>
                        <textarea
                            type="text"
                            className="item-infos-descr"
                            id="new-soins-conv-descr"
                            required />
                        <label htmlFor="new-soins-conv-descr">description du soin : </label>
                    </div>

                    {
                        Object.values(database.soinsConventionnels).map((soin, idx) => {
                            return (
                                <div className="soin" key={idx}>
                                    <div className="soin-title">
                                        {soin.nom}
                                    </div>
                                    <div className="description">
                                        {soin.description}
                                    </div>
                                </div>

                            )
                        })
                    }

                </section>

                <section className="nav-target soins-non-conv soins" data-id='2'>
                    <div className="section-title">
                        <img src={logo4} alt="logo" className="logo" />
                        soins non conventionnés
                    </div>

                    <input type="checkbox" id="toggle-soins-non-conv-infos" className="checkbox-hidden"></input>
                    <label className="add-item" htmlFor="toggle-soins-non-conv-infos">
                        <div className>
                            <FontAwesomeIcon icon={faCirclePlus} /> Ajouter un nouveau soin <FontAwesomeIcon icon={faCirclePlus} />
                        </div>
                    </label>

                    <div className="item-infos-inputs">

                        <input
                            type="text"
                            className="item-infos-name"
                            id="new-soins-non-conv-name"
                            required />
                        <label htmlFor="new-soins-non-conv-name">Nom du soin : </label>

                        <textarea
                            type="text"
                            className="item-infos-descr"
                            id="new-soins-non-conv-descr"
                            required />
                        <label htmlFor="new-soins-non-conv-descr">description du soin : </label>
                    </div>

                    {
                        Object.values(database.soinsNonConventionnels).map((soin, idx) => {
                            return (
                                <div className="soin" key={idx}>
                                    <div className="soin-title">
                                        {soin.nom}
                                    </div>
                                    <div className="description">
                                        {soin.description}
                                    </div>
                                </div>

                            )
                        })
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
                            {jours.map((jour, idx) => {
                                return (
                                    <span key={idx}>
                                        {jour} : {horaires[jour] ?? "---"}<br />
                                    </span>)
                            })}
                        </div>

                        <div className='info'>
                            <span className="font-awesome-icon">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            1 Route de Saint Pey d'Armens<br /> 33350 Sainte-Terre
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
