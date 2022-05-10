import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

import logo1 from '../assets/logos/logo-1.png'
import logo2 from '../assets/logos/logo-2.png'
import logo3 from '../assets/logos/logo-3.png'
import logo4 from '../assets/logos/logo-4.png'
import logo5 from '../assets/logos/logo-5.png'

import idPhoto from '../assets/img/id-photo.png'

import '../style/main.css'

export default function Main({ orientation, database }) {

    // INTERSECTION OBSERVER //

    // Creation of the intersection observer's options
    const options = {
        root: null, // The element that is used as the viewport for checking visibility of the target - null => the browser viewport
        rootMargin: '0px', //Margin around the root.
        threshold: 0.75 // 75% of the element is visible
    }

    const handleObserver = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                underline(entry.target.dataset.id)
            }
        })
    }

    let navItems = [],
        navTargets = [],
        formerId = 0


    useEffect(() => {

        const observer = new IntersectionObserver(handleObserver, options)

        navTargets = Array.from(document.querySelectorAll('.nav-target'))

        navItems = Array.from(document.querySelectorAll('.nav-item'))

        navTargets.forEach(navTarget => {
            observer.observe(navTarget)
        })

    }, [])


    function underline(id) {
        console.log(navItems, id)
        navItems[formerId].classList.remove('displayed')
        navItems[id].classList.add('displayed')
        formerId = id
    }

    const handleScroll = (target) => {
        target.scrollIntoView({ behavior: "smooth" })
    }

    const handleToggleMenu = () => {
        document.querySelector('.navigation-hidden').classList.toggle('navigation-displayed')
        document.querySelector('.burger').classList.toggle('open')

    }
    return (
        <>
            {orientation === 'portrait' &&
                <div className="burger-container"
                    onClick={handleToggleMenu}>
                    <div className="burger">
                    </div>
                </div>
            }
            <nav className={orientation === 'landscape' ? 'navigation-shown' : 'navigation-hidden'}>
                <img src={logo1} alt="logo" className="logo" />
                <ul>
                    <li className="nav-item displayed" onClick={() => handleScroll(document.querySelector('.App'))}>Accueil</li>
                    <li className="nav-item" onClick={() => handleScroll(document.querySelector('.separation-1'))}>soins conventionnés</li>
                    <li className="nav-item" onClick={() => handleScroll(document.querySelector('.separation-2'))}>soins non conventionnés</li>
                    <li className="nav-item" onClick={() => handleScroll(document.querySelector('.separation-3'))}>contact</li>
                </ul>
            </nav>

            <div className="nav-target header" data-id='0'>
                <div className="identity">
                    <h1>Marie Imbault</h1>
                    <h2>Masseur kinésithérapeute</h2>
                    <h2>Périnéologie</h2>
                </div>
            </div>

            <main>

                <section className="presentation">

                    <div className="section-title">
                        <img src={logo2} alt="logo" className="logo" />
                        présentation
                    </div>

                    <div className="presentation-content">
                        <span className="quotation-mark"> “ </span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quae, est illo odio mollitia, ullam repellendus accusamus, incidunt nemo similique nihil sint dolorum possimus dolore natus nam quas nostrum dolorem. {database.presentation.texte.presentation}<span className="quotation-mark"> ” </span>
                    </div>

                    <img src={idPhoto} alt="photo de Marie Imbault" className='id-picture' />

                </section>

                <div className="separation separation-1"></div>

                <section className="nav-target soins-conv soins" data-id='1'>

                    <div className="section-title">
                        <img src={logo3} alt="logo" className="logo" />
                        soins conventionnés
                    </div>

                    <div className="soin">
                        <div className="soin-title">
                            nom du soin
                        </div>
                        <div className="soin-description">
                            description du soin : <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem ducimus quos animi obcaecati odio!
                        </div>
                    </div>

                    <div className="soin">
                        <div className="soin-title">
                            nom du soin
                        </div>
                        <div className="soin-description">
                            description du soin <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi aut mollitia dolorum dolore quia nam, quam, iure architecto ipsum assumenda voluptate.
                        </div>
                    </div>

                    <div className="soin">
                        <div className="soin-title">
                            nom du soin
                        </div>
                        <div className="soin-description">
                            description du soin<br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio tempora mollitia.
                        </div>
                    </div>

                </section>

                <div className="separation separation-2"></div>

                <section className="nav-target soins-non-conv soins" data-id='2'>
                    <div className="section-title">
                        <img src={logo4} alt="logo" className="logo" />
                        soins non conventionnés
                    </div>

                    <div className="soin">
                        <div className="soin-title">
                            nom du soin
                        </div>
                        <div className="soin-description">
                            description du soin <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero accusantium sequi doloribus quia mollitia perferendis, consectetur exercitationem, in autem, eius cupiditate tempora. Harum ipsam eaque est velit maiores soluta doloribus recusandae ut!
                        </div>
                    </div>

                    <div className="soin">
                        <div className="soin-title">
                            nom du soin
                        </div>
                        <div className="soin-description">
                            description du soin <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sequi voluptate eveniet nulla libero cumque ab nam veritatis laudantium eos. Magnam qui architecto sequi consequuntur vel!
                        </div>
                    </div>

                    <div className="soin">
                        <div className="soin-title">
                            nom du soin
                        </div>
                        <div className="soin-description">
                            description du soin <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam voluptatum molestias ea. Id tempore doloremque rem harum facilis voluptates saepe dicta in ratione. Corrupti cumque possimus laudantium sequi illum illo, repellat, architecto quae libero omnis sunt voluptatem, molestias excepturi.
                        </div>
                    </div>

                </section>

                <div className="separation separation-3"></div>

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
