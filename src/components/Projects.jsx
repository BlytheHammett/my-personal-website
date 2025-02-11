import '../styles/projects.css'

export default function Projects() {
    return (
        <div className='projects-content' id='projects'>
            <div>
                <h1 className='poppins-bold projects-header'>My latest <span className='gradient'>projects</span></h1>
            </div>
            <div className='projects'>
                <a href='https://kneejerkfpl.com'>
                    <div className='project'>
                        <h1 className='proj-emoji'>⚽️</h1>
                        <h1 className='poppins-semibold proj-title'>Knee-jerkFPL</h1>
                        <div className='proj-tech'>
                            <div div className='tech'>
                                <p className='poppins-semibold'>Next.js</p>
                            </div>
                            <div div className='tech'>
                                <p className='poppins-semibold'>React</p>
                            </div>
                            <div div className='tech'>
                                <p className='poppins-semibold'>Tailwind CSS</p>
                            </div>
                            <div div className='tech'>
                                <p className='poppins-semibold'>MongoDB</p>
                            </div>
                        </div>
                        <p>This is a full stack fantasy soccer application. It allows users
                           to search for players and receive detailed statistics such as clean
                           sheets and expected goals.
                        </p>
                    </div>
                </a>
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
            </div>
        </div>
    )
}