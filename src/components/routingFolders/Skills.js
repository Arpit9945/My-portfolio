import React from 'react'

const Skills = () => {
    return (
        <div className='skills'>
            <h1 className="text-center text-warning mb-5">My Education</h1>
            <div className="studies">
                <div>
                    <h2 className='text-center'><i className="fa-solid fa-school"></i><br />
                        SSC
                        <p className="fw-light">2018-2019 <br />(70%)</p>
                    </h2>
                </div>
                <div>
                    <h2 className='text-center'><i className="fa-solid fa-school"></i><br />
                        HSC
                        <p className="fw-light">2020-2021 <br /> (70%)</p>
                    </h2>
                </div>
                <div>
                    <h2 className='text-center'><i className="fa-solid fa-building-columns"></i><br />
                        Bsc.IT
                        <p className="fw-light">2021-2024 <br /> (8.1 GP)</p>
                    </h2>
                </div>
            </div>

            <h1 className="text-center text-warning mt-5">My Skills</h1>

            <div className="row mt-4">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="skil-bar" style={{
                        width: '100%',
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <h6 className='ms-3 text-warning'>
                            <span>HTML &nbsp;</span>
                            <i className="fa-brands fs-1 fa-html5"></i>
                        </h6> &nbsp;&nbsp;
                        <div className="progress" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                                style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="skil-bar mt-3" style={{
                        width: '100%',
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}
                    >
                        <h6 className='ms-3 text-info'>
                            <span>CSS &nbsp;</span>
                            <i className="fa-brands fs-1  fa-css3"></i>
                        </h6>&nbsp;&nbsp;
                        <div className="progress" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar"
                                style={{ width: "95%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="skil-bar " style={{
                        width: '100%'
                        , display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <h6 className='ms-3 text-success'>
                            <span>JS &nbsp;</span>
                            <i className="fa-brands fs-1  fa-square-js"></i>
                        </h6>&nbsp;&nbsp;
                        <div className="progress" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar"
                                style={{ width: "85%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="skil-bar mt-3" style={{
                        width: '100%'
                        , display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <h6 className='ms-3 text-primary'>
                            <span>React.js &nbsp;</span>
                            <i className="fa-brands fs-1  fa-react"></i>
                        </h6>&nbsp;&nbsp;
                        <div className="progress" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="skil-bar " style={{
                        width: '100%'
                        , display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <h6 className='ms-3 text-danger'>
                            <span>Node.js &nbsp;</span>
                            <i className="fa-brands fs-1  fa-node"></i>
                        </h6>&nbsp;&nbsp;
                        <div className="progress" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar"
                                style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="skil-bar mt-3" style={{
                        width: '100%'
                        , display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <h6 className='ms-3 text-secondary'>
                            <span>MongoDB &nbsp;</span>
                            <i className="fa-solid  fs-2 fa-database"></i>
                        </h6>&nbsp;&nbsp;
                        <div className="progress" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar"
                                style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Skills
