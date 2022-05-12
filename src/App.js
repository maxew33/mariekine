import { useState, useEffect } from 'react'

import { db } from './firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

import useWindowSize from './components/useWindowSize'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import './app.css'

import logo1 from './assets/logos/logo-1.png'
import LegalNotice from './components/LegalNotice'
import Administration from './components/Administration'
import Main from './components/Main'

function App() {

  const [componentDisplayed, setComponentDisplayed] = useState(2)
  const [transition, setTransition] = useState(false)
  //for the db
  const [isLoading, setIsLoading] = useState(true)
  const [myDatabase, setMyDatabase] = useState({})


  const [orientation, setOrientation] = useState('landscape')
  const size = useWindowSize()

  const myComponents = [<Main orientation={orientation} database={myDatabase} />, <LegalNotice />, <Administration database={myDatabase} />]

  const databaseRef = ['contact', 'presentation', 'soinsConventionnels', 'soinsNonConventionnels']

  useEffect(() => {

    databaseRef.forEach((dbref, idx) => {
      const colRef = collection(db, dbref)

      getDocs(colRef)
        .then(snapshot => {
          let myCollection = {}

          snapshot.docs.forEach(doc => {
            myCollection[doc.id] = { ...doc.data() }
          })

          let myNewDatabase = myDatabase

          myNewDatabase[dbref] = myCollection

          setMyDatabase(myNewDatabase)

        })
        .then(() => ((idx + 1) === databaseRef.length && setIsLoading(false)))
        .catch(err => console.error(err))
    })

  }, [])

  useEffect(() => {
    myOrientation()
    console.log('db : ', myDatabase)
  }, [size])


  const myOrientation = () => {
    size.height < size.width ? setOrientation('landscape') : setOrientation('portrait')
  }

  const handleDisplay = (rank) => {
    
    setTransition(true)

    setTimeout(() => {
      window.scrollTo({ top: 0 })
      setComponentDisplayed(rank)
    }
      , 200)
    setTimeout(() => setTransition(false), 500)
  }

  const transitionStyle = { display: transition ? 'block' : 'none' }


  return (
    <div className="App">

      <div className='transition' style={transitionStyle}></div>

      {componentDisplayed > 0 && <div className='exit-cross' onClick={() => handleDisplay(0)}> <FontAwesomeIcon icon={faCircleXmark} /></div>}

      {!isLoading && myComponents[componentDisplayed]}

      <footer>
        <div className='footer-top'>
          <img src={logo1} alt="logo" className="logo" /> Jane Doe - Masseur Kinésithérapeute.
        </div>
        <hr />
        <div className='footer-bottom'>
          <div>Réalisation et référencement: <a href="www.maxime-malfilatre.com" target="_blank" rel='noopener noreferrer'>Maxime Malfilâtre</a></div>
          {componentDisplayed !== 1 && <div className='components-link' onClick={() => handleDisplay(1)}>Mentions légales</div>}
          
          {componentDisplayed !== 2 && <div className='components-link' onClick={() => handleDisplay(2)}>connexion</div>}
        </div>
      </footer>
    </div>
  );
}

export default App;
