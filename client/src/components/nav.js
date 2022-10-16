import React from 'react';

const Navbar=()=>{

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
                </li> */}
                <li className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>        
        </>
    )
}
export default Navbar;