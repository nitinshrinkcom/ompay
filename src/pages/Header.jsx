import React from 'react'
import { Link } from 'react-router-dom'
import companylogo1 from '../components/img/logo/logo_1.png';
import indexImg1 from '../components/img/portfolio/pm1.jpg';
import indexImg2 from '../components/img/portfolio/pm2.jpg';
import indexImg3 from '../components/img/portfolio/pm3.jpg';
import indexImg4 from '../components/img/portfolio/pm4.jpg';
import indexImg5 from '../components/img/portfolio/pm5.jpg';
import indexImg6 from '../components/img/portfolio/pm6.jpg';
const Header = () => {
    return (
        <div>   
           
           <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
                <header>
                
                    <div className="header__main header-sticky header-main-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-8">
                                    <div className="logo">
                                       
                                         <Link className="logo-text-white" to="/"><img className="logo_1" src={ companylogo1 } alt=""  /></Link> 
                                        <Link className="logo-text-black" to="/"><img className="logo_1" src={ companylogo1 }  alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-4">
                                    <div className="header__menu-area f-right">
                                        
                                        <div className="main-menu main-menu-1">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li ><Link to="/">Home</Link>
                                                    </li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li ><Link to="/Product">Product</Link>
                                                    </li>
                                                    <li ><Link to="/blog">Blog</Link>
                                                    </li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header__search">
                                          <Link className="side-toggle d-lg-none" to="#" ><i className="fal fa-bars"></i></Link>
                                        </div>
                                        <div className="header__btn d-none d-xl-inline-block">
                                            <Link className="grb-btn" to="/signup" >
                                            Sign up<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="fix">
                <div className="side-info">
                    <div className="side-info-content">
                        <div className="offset-widget offset-logo">
                            <div className="row align-items-center">
                                <div className="col-9"><Link to="/Index">
                                    <img src={ companylogo1 } alt="Logo" /></Link>
                                </div>  
                                <div className="col-3 text-end"><button className="side-info-close"><i
                                    className="fal fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu d-lg-none"></div>
                        

                        <div className="offset-widget mb-40 d-none d-lg-block">
                            <div className="info-widget">
                                <h4 className="offset-title mb-20 d-none">About Us</h4>
                                <p className="mb-30">But I must explain to you how all this mistaken idea of
                                    denouncing pleasure and
                                    praising pain
                                    was born and will give you a complete account of the system and expound the actual teachings
                                    of the great
                                    explore</p>
                                <Link to="/" classNameName>Home</Link> <Link to="/#" className="c-btn btn-round-02 d-none">Contact Us</Link>
                            </div>
                        </div>

                        <div className="row side-gallery gx-4">
                            <div className="col-4 mb-20">
                                <div className="side-image">
                                    <Link className="popup-image" to="img/portfolio/pm1.jpg">
                                        <img src={indexImg1} alt="sidebar-img" /></Link>
                                </div>
                            </div>
                            <div className="col-4 mb-20">
                                <div className="side-image">
                                    <Link className="popup-image" to="img/portfolio/pm2.jpg">
                                        <img
                                            src={indexImg2} alt="sidebar-img" /></Link>
                                </div>
                            </div>
                            <div className="col-4 mb-20">
                                <div className="side-image">
                                    <Link className="popup-image" to="img/portfolio/pm3.jpg">
                                        <img src={indexImg3} alt="sidebar-img" /></Link>
                                </div>
                            </div>
                            <div className="col-4 mb-20">
                                <div className="side-image">
                                    <Link className="popup-image" to="img/portfolio/pm4.jpg"><img
                                        src={indexImg4} alt="sidebar-img" /></Link>
                                </div>
                            </div>
                            <div className="col-4 mb-20">
                                <div className="side-image">
                                    <Link className="popup-image" to="img/portfolio/pm5.jpg"><img
                                        src={indexImg5} alt="sidebar-img" /></Link>
                                </div>
                            </div>
                            <div className="col-4 mb-20">
                                <div className="side-image">
                                    <Link className="popup-image" to="img/portfolio/pm6.jpg"><img
                                        src={indexImg6} alt="sidebar-img" /></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="offcanvas-overlay"></div>
            </div>
    )
}

export default Header
