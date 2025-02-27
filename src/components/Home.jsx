import Navbar from '../components/Navbar'
import '../styles/home.css'
import headshot from '../images/headshot.jpg'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <div id='home'>
            <Navbar></Navbar>
            <div className='content'>
                <div className='intro'>
                    <h1 className='poppins-bold greeting'>Hi <span class="wave">👋</span></h1>
                    <h1 className='poppins-bold name'>I'm <span className='gradient'>Blythe</span></h1>
                </div>
                <img src={headshot} alt='headshot' className='headshot'></img>
            </div>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}