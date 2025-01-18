import '../styles/navbar.css'
import React, { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <nav> 
            <a href='#home' className='title poppins-bold'> Blythe Hammett</a>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li className='poppins-semibold'>
                    <a href='#about' className='poppins-semibold'>About</a>
                </li>
                <li className='poppins-semibold'>
                    <a href='#projects' className='poppins-semibold'>Projects</a>
                </li>
                <li className='poppins-semibold'>
                    <a href='#contact' className='poppins-semibold'>Contact</a>
                </li>
                <li className='poppins-semibold'>
                    <a href='https://drive.google.com/file/d/1rurdTKFucseZhPlNaxeDl8igWLVpyFZU/view?usp=sharing' className='poppins-semibold'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}