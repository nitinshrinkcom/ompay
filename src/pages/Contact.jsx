/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom';
import ScriptTag from 'react-script-tag';

import Header from '../pages/Header'
import Footer from '../pages/Footer';
import sectionImg from '../components/img/bg/page-title-bg.jpg'

const Contact = () => {
    return (
        <div>
            <Header />
    <main>
         {/*============ Conatct and Home link box  ======================*/}
        <section className="page-title-area" data-background= { sectionImg }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-title-content text-center">
                            <div className="page-title-heading">
                                <h1>Contact Us</h1>
                            </div>
                            <nav className="grb-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*============ Contact Section ======================*/}
        <div className="contact-area pt-145 pb-120">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-4">
                        <div className="contact-address">
                            <div className="contact-heading">
                                <h4>Direct Contact Us</h4>
                            </div>
                            <ul className="contact-address-list">
                                <li>
                                    <div className="contact-list-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="contact-list-text">
                                        <span><Link to="tel:(555)764890345">(555) 764 890 345</Link></span>
                                        <span><Link to="tel:(555)874846098">(555) 874 846 098</Link></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-list-icon st-3">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-list-text">
                                        <span><Link to="#">info@domain.com</Link></span>
                                        <span><Link to="#">hello@domain.com</Link></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-list-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-list-text">
                                        <span><Link to="#">Johnson Super Street,<br />
                                                New York, USA 2344</Link></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="get-in-touch">
                            <div className="contact-heading">
                                <h4>Get in Touch</h4>
                            </div>
                            <form className="contact-form" action="#">
                                <div className="row wow fadeInUp">
                                    <div className="col-md-6 mb-30">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <input type="text" placeholder="Phone" />
                                    </div>
                                    <div className="col-md-12 mb-30">
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12 mb-30">
                                        <textarea name="message" placeholder="Messages....."></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit"><i className="fas fa-paper-plane"></i>SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </main>

    <Footer />
    <ScriptTag isHydrating={false} type="text/javascript"  src="js/vendor/jquery-3.6.0.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/bootstrap.bundle.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/swiper-bundle.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/isotope.pkgd.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/jquery.meanmenu.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/ajax-form.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/wow.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/jquery.scrollUp.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/odometer.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/appair.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/imagesloaded.pkgd.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/jquery.magnific-popup.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/plugins.js" />
                <ScriptTag isHydrating={false} type="text/javascript"  src="js/main.js" />
        </div>
    )
}

export default Contact
