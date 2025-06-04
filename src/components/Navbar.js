import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="navigation">
                <div className="navbar-heading">
                    <a href="https://google.com">Frontend UI Practice</a>
                </div>
                <div className="nav-menus">

                    {/* <button>
                    <img src="images/hamburger-menu-50.png" alt="" srcset="">
                </button>

                <ul className="navbar-menus">
                    <div className="menus">
                        <a href="#home">Home</a>
                        <a href="#project">Projects</a>
                        <a href="#faq">FAQ</a>
                    </div>
                </ul>  */}
                </div>
                <div className="navbar-links">

                    <a href='/' >Home</a>
                    <a href='#project' >Projects</a>
                    <a href="#faq">FAQ</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
