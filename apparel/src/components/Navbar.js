import React from 'react';


const Navbar = ({userData, logout}) => {
   


   
    return (
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container">
                <a className="navbar-brand" href="#"><strong>Apparel</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Add any additional navigation items here */}
                        <li className="nav-item">
                            <a className="nav-link" href="#user">
                                Hello, {userData.userName}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cart">
                                <i className="fas fa-shopping-cart"></i> {/* Assuming you're using Font Awesome for cart icon */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#logout'  onClick={logout}>
                                <i className="text-danger fas fa-power-off"></i> {/* Assuming you're using Font Awesome for cart icon */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
};


export default Navbar;
