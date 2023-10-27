import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar text-center text-light bg-dark'>
            <div id='imgess'></div>
            <div className='fs-2 fw-bold mt-5'>Arpit Pattani
                <p className='fs-6 fw-light'>IT Developer</p>
            </div>
            <div className="btns fs-6">
                <Link to='/' id='btnz'  className='p-2 rounded-pill'>
                    About
                </Link>
                <Link to='/projects' id='btnz' className='p-2 rounded-pill'>
                    Projects
                </Link>
                <Link to='/skills' id='btnz'  className='p-2 rounded-pill'>
                    Education & Skills
                </Link>
                
                
            </div>

        </div>
    )
}

export default Sidebar
