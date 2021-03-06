import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav-wrapper grey'> 
            <div className='container'>
                <a className='brand-logo'>Todo-List</a>
                <ul className='right'>
                    <li><NavLink to='/todos'>Todo</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;