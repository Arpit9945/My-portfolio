import React from 'react'
import '../App.css'

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className="footer text-center text-light bg-dark">
                <h1 className='text-warning'>G<span id='brd-btm'>et &nbsp;in tou</span>ch</h1>
                <div className="main-footer container ">
                    <div>
                        <h2 className='fw-bolder'>Get in touch with me</h2>
                        <p className='fs-4 fw-semi-bold'><i className="fs-5 fa-solid fa-phone"></i>&nbsp;
                            +91 99092 83562</p>
                        <p className='fs-4 fw-semi-bold'><i className="fs-5 fa-solid fa-envelope"></i>&nbsp;
                            pattaniarpit19@gmail.com</p>
                    </div>
                    <div>
                        <h2>Social</h2>
                        <p className="fs-4 fw-semi-bold">
                            <a href="https://github.com/Arpit9945">
                                <i className="fa-brands fa-github" style={{color:'black', fontSize:'30px'}}></i></a>
                                &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/arpit-pattani/">
                                <i className="fa-brands fa-linkedin" style={{color:'black', fontSize:'30px'}}></i></a>
                        </p>
                    </div>
                    <div>
                        <h2 className='fw-bolder'>Location</h2>
                        <p className='fs-4 fw-semi-bold'>
                            Ahmedabad, Gujarat, india
                        </p>
                    </div>
                </div>
                <div className='fw-light mt-5 fs-3'>&copy;Copyright | Arpit Pattani</div>
            </div>
        </div>
    )
}

export default Footer
