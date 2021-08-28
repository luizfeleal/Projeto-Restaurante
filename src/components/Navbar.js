import React, { useState } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';

function Navbar(action) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link smooth to='/' className='navbar-logo'>
                        LA POTLE
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className= {click? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <div className='div-link'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link smooth to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link smooth to='/contato' className='nav-links' onClick={closeMobileMenu}>
                                    Contato
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link smooth to='/cardapio' className='nav-links' onClick={closeMobileMenu}>
                                    Cardápio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;