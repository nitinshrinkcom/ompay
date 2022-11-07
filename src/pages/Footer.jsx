import React from 'react'
import { Link } from 'react-router-dom'
import companylogo1 from '../components/img/logo/logo_1.png';

const Footer = () => {
    return (
        <div>
       <footer>
        <section className="footer-area pt-100 pb-60">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget mb-40">
                            <div className="footer-logo">
                                <Link to="index.html">
                                    <img src={ companylogo1 } alt="" />
                                </Link>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,
                                by injected humour</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget mb-40">
                            <div className="footer-widget-title">
                                <h4>Useful Links</h4>
                            </div>
                            <ul className="footer-list st-2">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/Product">Products</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget mb-40 fw3">
                            <div className="footer-widget-title">
                                <h4>Follow Us</h4>
                            </div>
                            <div className="grb__social footer-social-2">
                                <ul>
                                    <li><Link to="/#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/#"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="/#"><i className="fab fa-pinterest"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget mb-40">
                            <div className="footer-widget-title">
                                <h4>Contact Info</h4>
                            </div>
                           
                            <p>Street House, Greater London NW1 8JR, UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="copyright-area st-2">
            <div className="container">
                <div className="row wow fadeInUp align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-text st-2 text-center">
                            <p>Copyright © 2021 <Link to="/#">Shrinkcom Software </Link> | All rights reserved</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer
