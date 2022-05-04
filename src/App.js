
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'

import './app.css'

import logo1 from './assets/logos/logo-1.png'
import logo2 from './assets/logos/logo-2.png'
import logo3 from './assets/logos/logo-3.png'
import logo4 from './assets/logos/logo-4.png'
import logo5 from './assets/logos/logo-5.png'
import logo6 from './assets/logos/logo-6.png'

import idPhoto from './assets/img/id-photo.png'

function App() {

  const handleScroll = (target) => {
    target.scrollIntoView({ behavior: "smooth" })
    console.log(target)
  }

  return (
    <div className="App">

      <nav>
        <img src={logo1} alt="logo" className="logo" />
        <ul>
          <li onClick={() => handleScroll(document.querySelector('.App'))}>Accueil</li>
          <li onClick={() => handleScroll(document.querySelector('.separation-1'))}>soins conventionnés</li>
          <li onClick={() => handleScroll(document.querySelector('.separation-2'))}>soins non conventionnés</li>
          <li onClick={() => handleScroll(document.querySelector('.separation-3'))}>contact</li>
        </ul>
        <div className="connexion">
          <FontAwesomeIcon icon={faUserDoctor} />
          <span className="connect-txt">connexion</span>
        </div>
      </nav>

      <div className="accueil">
        <div className="identity">
          <h1>Marie Imbault</h1>
          <h2>Masseur kinésithérapeute</h2>
          </div>
      </div>

      <main>

        <section className="presentation">
          <div className="section-title">
            <img src={logo2} alt="logo" className="logo" />
            présentation
          </div>
          <article className="presentation-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid impedit accusamus alias possimus placeat enim exercitationem, suscipit eos quo dolor nihil maxime provident, sunt repudiandae explicabo recusandae a maiores mollitia neque officia. Possimus, fugiat ratione. Necessitatibus soluta quos nisi tenetur animi numquam voluptatem aperiam quisquam iure nulla modi, nesciunt voluptas ratione magnam repellendus quis illo! Adipisci recusandae magnam impedit odit voluptatibus in velit rerum vero, nihil ipsa atque doloribus explicabo magni voluptatum animi assumenda sint ipsam molestias, temporibus, modi optio dolore asperiores sunt facere? Vel in numquam, ducimus harum minus eligendi dolorem tempore unde, odit consectetur ex, et itaque impedit porro voluptates obcaecati. Iste molestiae accusamus odit sit maiores tempore sapiente officia, cupiditate ipsum ab in pariatur quasi at rerum blanditiis magni perferendis dolorum et esse. Aut voluptas praesentium nemo nihil enim est ratione culpa ex distinctio quis, suscipit, quas libero qui repellendus. Iure consequuntur tempora possimus harum quae nam odio exercitationem velit, obcaecati reiciendis! Facere illum quidem et minima voluptatum cupiditate similique eveniet! Cumque repudiandae delectus, veritatis praesentium repellendus velit adipisci maiores ex recusandae architecto assumenda illum ea natus a provident esse accusamus dicta asperiores non vero molestiae laborum. Rem, non! Voluptatum possimus quibusdam aspernatur praesentium vitae, ut velit repellat unde expedita placeat illo maxime, sunt similique eum reiciendis dolorum? Quisquam maxime provident deserunt quod voluptates quos quia temporibus, tempora necessitatibus velit commodi sapiente placeat. Perspiciatis quia iste ad nulla nihil voluptatum qui minima ea iure quae nisi sint architecto officia illo neque quas quibusdam excepturi laborum officiis assumenda odit, soluta maiores error. Similique eaque perferendis illo! Nesciunt tempore inventore sunt modi fugit voluptate. Cumque rerum eligendi odit iusto? Perspiciatis sunt neque ratione delectus quaerat. Veniam cupiditate, in provident quia maiores est rem assumenda pariatur, vitae quod eligendi consequatur explicabo expedita laboriosam inventore quisquam ipsa repudiandae reprehenderit sed praesentium quas blanditiis, amet unde? Eos perspiciatis illum similique placeat odio laborum sit delectus obcaecati animi expedita aspernatur, quisquam hic corporis tenetur mollitia alias, earum recusandae possimus pariatur exercitationem officiis quod quas maiores est! Atque, illum aperiam eveniet dolores inventore quis doloremque facilis temporibus consequuntur quia pariatur, voluptatem vitae nemo non. Veniam eos magnam quia assumenda consectetur nesciunt repudiandae culpa alias nobis. Quos omnis dolorem corrupti eaque quibusdam enim culpa quasi magni sit necessitatibus voluptatibus, cupiditate, quaerat adipisci deserunt non, voluptatum ipsum accusamus doloribus vel? Quibusdam, sint totam. Voluptate earum sequi ullam, natus eos unde numquam ex, doloribus provident enim placeat veniam? Doloribus ex dolorum cum tempore possimus culpa nesciunt? Voluptas laudantium quasi numquam, voluptatem tempore dignissimos ullam asperiores repellendus culpa fugiat id fugit ipsam ut impedit, pariatur commodi, consequatur ducimus debitis eaque? Quam placeat aliquid ducimus exercitationem ipsum neque pariatur. Sapiente aliquid eius repellendus quae quis sunt reprehenderit aliquam ullam accusamus magni nam ducimus numquam nisi recusandae voluptas animi autem ab laborum ut rem at esse expedita, distinctio saepe. Dolorem, accusamus. Numquam corrupti sapiente eaque sequi, enim soluta velit id facilis dolorem officia. Expedita consequatur suscipit hic quae laudantium non aliquid eaque eius, nemo repudiandae temporibus quibusdam similique odio soluta in possimus quam quod. Laborum odio praesentium dolore, exercitationem tempore natus. Similique voluptatem necessitatibus eum. At, vitae quos itaque voluptas ipsa, temporibus, soluta iste provident inventore nesciunt corrupti nemo blanditiis! Modi reprehenderit sit facilis praesentium ipsa magnam! Minima velit nostrum veniam quidem doloribus atque? 
          </article>
          
          <img src={idPhoto} alt="photo de Marie Imbault" className='id-picture'/>

        </section>

        <div className="separation separation-1"></div>

        <section className="soins-conv">
          <div className="section-title">
            <img src={logo3} alt="logo" className="logo" />
            soins conventionnés
          </div>
        </section>

        <div className="separation separation-2"></div>

        <section className="soins-non-conv">
          <div className="section-title">
            <img src={logo4} alt="logo" className="logo" />
            soins non conventionnés
          </div>
        </section>

        <div className="separation separation-3"></div>

        <section className="contact">
          <div className="section-title">
            <img src={logo5} alt="logo" className="logo" />
            contact
          </div>
        </section>


        <div className="separation separation-4"></div>

      </main>

      <footer>footer</footer>
    </div>
  );
}

export default App;
