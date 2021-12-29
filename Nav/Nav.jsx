import React from 'react';
import './Nav.css'
import myImage from './../../../assets/img/user.jpg';

const Nav = () => {
    return(
        <div>
            <nav className='nav'>
                <h3>OpenBootcamp <span>| Alumnos</span></h3>
                <div className='userName'>
                <li><img src={myImage} alt='user'></img>UserName <i class="fas fa-chevron-down"></i></li>
                </div>
            </nav>
        </div>
    )
};

export default Nav;