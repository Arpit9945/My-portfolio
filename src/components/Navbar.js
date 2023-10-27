import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-dark bg-dark p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 text-light fw-bolder fs-3" to="/">Arpit's Portfolio</Link>
                    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fs-4 ms-auto text-center mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/'
                                    className="nav-link active fw-bold text-success me-5 rounded-pill"
                                    aria-current="page" href="#">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/projects'
                                    className="nav-link fw-bold text-success me-5 rounded-pill"
                                    href="#">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/skills'
                                    className="nav-link fw-bold text-success ms-3 me-3 rounded-pill"
                                    href="#">Skills</Link>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
