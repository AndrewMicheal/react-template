import React , {Component} from 'react';
import navbarStyle from './navbarStyle.module.css';
import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
                <header className = {`${navbarStyle.myNav}`}>
                    <nav className={`navbar navbar-expand-lg navbar-dark ${navbarStyle.myNavBackground}  p-4`}>
                            <div className="container">
                                <Link className="navbar-brand text-white text-uppercase" href="#">start react</Link>
                                <button className={`navbar-toggler p-2 ${navbarStyle.toggleStyle}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className = 'text-white mr-3 text-uppercase'>menu</span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item mr-4">
                                            <Link className={`nav-link text-white text-uppercase ${navbarStyle.linkColor}`} to="/portfolio">portfolio</Link>
                                        </li>
                                        <li className="nav-item mr-4">
                                            <Link className={`nav-link text-white text-uppercase ${navbarStyle.linkColor}`} to="/about">about</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link text-white text-uppercase ${navbarStyle.linkColor}`} to="/contact">contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default Navbar;