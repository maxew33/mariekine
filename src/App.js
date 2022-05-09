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
  const [transitionHeight, setTransitionHeight] = useState(0)

  //from the db
  const [soinsConv, setSoinsConv] = useState([])
  const [soinsNonConv, setSoinsNonConv] = useState([])
  const [contactInfos, setContactInfos] = useState([])
  const [myPresentation, setMyPresentation] = useState([])
  const [myDatabase, setMyDatabase] = useState([])


  const [orientation, setOrientation] = useState('landscape')
  const size = useWindowSize()

  const myComponents = [<Main orientation={orientation} />, <LegalNotice />, <Administration />]

  const databaseRef = ['contact', 'presentation', 'soins-conventionnels', 'soins-non-conventionnels']

  // const colRef = collection(db, 'websiteData')


  useEffect(() => {

    databaseRef.forEach(dbref => {
      const colRef = collection(db, dbref)
      console.log(dbref)
      getDocs(colRef)
        .then(snapshot => {
          let myCollection = []
          snapshot.docs.forEach(doc => {
            myCollection.push({ ...doc.data(), id: doc.id })
          })

          let myNewdb = myDatabase
          myNewdb.push(myCollection)
          console.log(myCollection)
          setMyDatabase(myNewdb)
        })
        .catch(err => console.error(err))
    })
    /*
      getDocs(colRef)
      .then(snapshot => {
        let myCollection = []
          snapshot.docs.forEach(doc => {
            myCollection.push({...doc.data(), id: doc.id})
          })
        
        console.log(myCollection)
        setMyDbContent([...myCollection])
      })
      .catch(err => console.error(err))
      */
  }, [])

  useEffect(() => {
    console.log('orientation', orientation)
    setTransitionHeight(document.body.clientHeight)
    console.log(document.body.clientHeight)
    myOrientation()
    console.log('db : ' ,myDatabase)
  }, [size])


  const myOrientation = () => {
    size.height < size.width ? setOrientation('landscape') : setOrientation('portrait')
  }

  const handleDisplay = (rank) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTransition(true)
    setTimeout(() => setComponentDisplayed(rank), 200)
    setTimeout(() => setTransition(false), 500)
  }

  const transitionStyle = { display: transition ? 'block' : 'none', height: transitionHeight }


  return (
    <div className="App">

      <div className='transition' style={transitionStyle}></div>

      {componentDisplayed > 0 && <div className='exit-cross' onClick={() => handleDisplay(0)}> <FontAwesomeIcon icon={faCircleXmark} /></div>}

      {myComponents[componentDisplayed]}

      <footer>
        <div className='footer-top'>
          <img src={logo1} alt="logo" className="logo" /> Marie Imbault - Masseur Kinésithérapeute, Périnéologie.
        </div>
        <hr />
        <div className='footer-bottom'>
          <div>Réalisation et référencement: <a href="www.maxime-malfilatre.com" target="_blank" rel='noopener noreferrer'>Maxime Malfilâtre</a></div>
          <div className='components-link' onClick={() => handleDisplay(1)}>Mentions légales</div>
          <div className='components-link' onClick={() => handleDisplay(2)}>connexion</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
