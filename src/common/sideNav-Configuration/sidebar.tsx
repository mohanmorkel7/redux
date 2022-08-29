import React from 'react';
import { useState } from 'react';
import "primereact/resources/themes/lara-dark-indigo/theme.css";  //theme
import { NavLink } from 'react-router-dom';

// class SideBar extends React.Component<any, any> {
export default function SideBar() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }
    const toggleSwitch = () => {
        // var body = document.querySelector('body');
        // body?.classList.toggle('dark');
    }

    return (
        <>

            <nav className={ isActive ? 'close sidebar' : 'sidebar' } id="sidebar" >
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src={Logo} alt="" /> */}
                            AR
                        </span>

                        <div className="text logo-text">
                            <span className="name">Demo App</span>
                            <span className="profession">Tag of App</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' id='toogleBtn' onClick={handleClick}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        {/* <li className="search-box">
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li> */}

                        <ul className="menu-links">
                            <li className="nav-link">
                                <NavLink to="">
                                    <i className="pi pi-desktop"></i>
                                    <span className="text nav-text">Dashboard</span>
                                </NavLink>
                            </li>

                            <li className="nav-link">
                                <NavLink to='/projectDetails'>
                                    <i className="pi pi-users"></i>
                                    <span className="text nav-text">Project Details</span>
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <NavLink to="/userDetails">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </NavLink>
                        </li>

                        {/* <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch" id="toggleSwitch" onClick={toggleSwitch}>
                                <span className="switch"></span>
                            </div>
                        </li> */}

                    </div>
                </div>

            </nav>

        </>
    )
}

// export default SideBar;