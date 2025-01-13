import '../styles/about.css'
import hiking from '../images/hiking.jpg'

export default function About() {
    return (
        <div className='about-content' id='about'>
            <div>
                <h1 className='poppins-bold about-header'>A few words about <span className='gradient'>me</span></h1>
                <p>
                    I recently graduated from Indiana University with a degree in computer
                    science. Last summer I interned at Anthology as a software engineer
                    where I developed on their learning management system, Blackboard, which
                    is used by more than 100 million users worldwide. This opportunity gave
                    me valuable industry experience and allowed me to develop my technical
                    skills. I'm currently searching for new career opportunities and am
                    open to relocation anywhere! In my free time I enjoy soccer, video games, 
                    running, bass guitar, camping, and hiking!
                </p>
            </div>
            <img src={hiking} alt='hiking' className='hiking'></img>
        </div>
    )
}