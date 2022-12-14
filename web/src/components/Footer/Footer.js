import React, {Component} from 'react';
import "./footerstyle.css";



class Footer extends Component {

    render() {
        return (
            <div className="footer container-fluid text-white p-3 bg-dark">
                <div className="row justify-content-around text-center text-md-start">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">About Us</h5>
                        <hr className="mb-4"/>
                        <p>We are a group of 5 software developers. We have created this application to help people navigate through the wilderness of medicinal cannabis.</p>
                    </div>
                    {/*<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">*/}
                    {/*    <h5 className="text-uppercase mb-4 font-weight-bold text-white">Let Us Help</h5>*/}
                    {/*    <hr className="mb-4"/>*/}
                    {/*    <p>*/}
                    {/*        <a className="text-decoration-none text-white">Køb</a>*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <a className="text-decoration-none text-white">Salg</a>*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <a className="text-decoration-none text-white">Ryge</a>*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <a className="text-decoration-none text-white">Make Joints and make you a*/}
                    {/*            Hasho-main</a>*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">Contact</h5>
                        <hr className="mb-4"/>
                        <p>
                            <li className="fas fa-home me-2"/>
                            Copenhagen N 2200, DK
                        </p>
                        <p>
                            <li className="fas fa-envelope me-2"/>
                            s195491@student.dtu.dk
                        </p>
                        <p>
                            <li className="fas fa-phone me-2"/>
                            +45 55 55 55 11
                        </p>
                        <p>
                            <li className="fas fa-print me-2"/>
                            +45 11 22 33 44
                        </p>
                    </div>

                    <hr className="mb-3 mt-5"/>
                    <div className="row d-flex justify-content-center">
                        <div className="text-center">
                            <p>
                                Copyright &copy; {new Date().getFullYear()} All Rights Reserved by:
                               {/* <a href="#" className="text-white text-decoration-none"> </a>*/}
                                    <strong> Group 12</strong>

                            </p>
                        </div>
                    </div>

                    {/*<div className="row d-flex justify-content-center">*/}
                    {/*    <div className="text-center">*/}
                    {/*        <ul className="list-unstyled list-inline">*/}
                    {/*            <li className="list-inline-item"><a className="text-white"><i*/}
                    {/*                className="fa-brands fa-facebook me-2 fa-1x"/></a>*/}
                    {/*            </li>*/}
                    {/*            <li className="list-inline-item"><a className="text-white"><i*/}
                    {/*                className="fa-brands fa-whatsapp mx-2 fa-1x"/></a>*/}
                    {/*            </li>*/}
                    {/*            <li className="list-inline-item"><a className="text-white"><i*/}
                    {/*                className="fa-brands fa-youtube mx-2 fa-1x"/></a>*/}
                    {/*            </li>*/}
                    {/*            <li className="list-inline-item"><a className="text-white"><i*/}
                    {/*                className="fa-brands fa-instagram mx-2 fa-1x"/></a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Footer;
