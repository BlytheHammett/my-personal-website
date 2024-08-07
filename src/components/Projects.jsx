import '../styles/projects.css'

export default function Projects() {
    return (
        <div className='projects-content' id='projects'>
            <div>
                <h1 className='poppins-bold projects-header'>My latest <span className='gradient'>projects</span></h1>
            </div>
            <div className='projects'>
                <a href='https://github.com/BlytheHammett/Total-Order-Broadcast'>
                    <div className='project'>
                        <h1 className='proj-emoji'>📨</h1>
                        <h1 className='poppins-semibold proj-title'>Total Order Broadcast</h1>
                        <div className='proj-tech'>
                            <div className='tech'>
                                <p className='poppins-semibold'>Python</p>
                            </div>
                        </div>
                        <p>This is a distributed systems algorithm implemented in Python that
                            ensures all processes deliver messages in the same order.
                        </p>
                    </div>
                </a>
                <a href='https://github.com/BlytheHammett/Rapid-Drop-Delivery'>
                    <div className='project'>
                        <h1 className='proj-emoji'>🚚</h1>
                        <h1 className='poppins-semibold proj-title'>Rapid Drop</h1>
                        <div className='proj-tech'>
                            <div div className='tech'>
                                <p className='poppins-semibold'>MongoDB</p>
                            </div>
                            <div div className='tech'>
                                <p className='poppins-semibold'>Express</p>
                            </div>
                            <div div className='tech'>
                                <p className='poppins-semibold'>React</p>
                            </div>
                            <div div className='tech'>
                                <p className='poppins-semibold'>Node</p>
                            </div>
                        </div>
                        <p>This is a full stack application using the MERN stack. It allows users
                            to compare the shipping rates of various delivery services such as UPS
                            and FedEx.
                        </p>
                    </div>
                </a>
                <a href='https://github.com/BlytheHammett/Web-Scraper'>
                    <div className='project'>
                        <h1 className='proj-emoji'>⚽️</h1>
                        <h1 className='poppins-semibold proj-title'>Web Scraper</h1>
                        <div className='proj-tech'>
                            <div className='tech'>
                                <p className='poppins-semibold'>Python</p>
                            </div>
                        </div>
                        <p>This is a web scraper that scrapes the statistics pages of two
                            soccer players and produces a visual comparison chart of their
                            performances.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}