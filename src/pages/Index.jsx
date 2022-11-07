import React from 'react' 
import { Link } from 'react-router-dom'
import ScriptTag from 'react-script-tag';
import Header from './Header';
import Footer from './Footer';
import shap1 from '../components/img/shape/hero-s-1.png';
import shap2 from '../components/img/shape/hero-s-2.png';
import slider1 from '../components/img/hero/banner1.jpg';
import banner3 from '../components/img/hero/banner3.jpg';
import banner2 from '../components/img/hero/banner2.jpg';
import abp from '../components/img/about/abp-img.png';
import about from '../components/img/about/about.jpg';



function index() {
    return (
        <div>
            <Header />
            
            <div className="search-wrap">
                <div className="search-inner">
                    <i className="fal fa-times search-close" id="search-close"></i>
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search Your Keyword..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <main>
                <section className="slider-area p-relative fix">
                    <div className="slider-active swiper-container">
                        <div className="swiper-wrapper">

                            <div className="single-slider slider-height swiper-slide slider-overlay" data-swiper-autoplay="5000">
                                <div className="slide-bg" data-background={ slider1 } ></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="hero-content">
                                                <div className="hero-bg-shape" data-animation="fadeInUp" data-delay=".3s">
                                                    <div className="hero-s-1">
                                                        <img src={ shap1 } alt="" />
                                                    </div>
                                                    <div className="hero-s-2">
                                                        <img src={ shap2 } alt="" />
                                                    </div>
                                                </div>
                                                <p data-animation="fadeInUp" data-delay=".6s">Open Acouiring</p>
                                                <h1 data-animation="fadeInUp" data-delay=".9s">One Gateway, Many Solutions</h1>
                                                <div className="hero-content-btn" data-animation="fadeInUp" data-delay="1.1s">
                                                    <Link to="/contact" className="grb-btn st-1">Get Started <i class="fas fa-arrow-right"></i></Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-slider slider-height swiper-slide slider-overlay" data-swiper-autoplay="5000">
                                <div className="slide-bg" data-background={ banner3 }></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="hero-content">
                                                <div className="hero-bg-shape" data-animation="fadeInUp" data-delay=".3s">
                                                    <div className="hero-s-1">
                                                        <img src={ shap1 } alt="" />
                                                    </div>
                                                    <div className="hero-s-2">
                                                        <img src={ shap2 } alt="" />
                                                    </div>
                                                </div>
                                                <p data-animation="fadeInUp" data-delay=".6s">Open Acouiring</p>
                                                <h1 data-animation="fadeInUp" data-delay=".9s">One Gateway, Many Solutions</h1>
                                                <div className="hero-content-btn" data-animation="fadeInUp" data-delay="1.1s">
                                                    <Link to="/contact" className="grb-btn st-1">Get Started <i class="fas fa-arrow-right"></i></Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-slider slider-height swiper-slide slider-overlay" data-swiper-autoplay="5000">
                                <div className="slide-bg" data-background={ banner2 } ></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="hero-content">
                                                <div className="hero-bg-shape" data-animation="fadeInUp" data-delay=".3s">
                                                    <div className="hero-s-1">
                                                        <img src={ shap1 } alt="" />
                                                    </div>
                                                    <div className="hero-s-2">
                                                        <img src={ shap2 } alt="" />
                                                    </div>
                                                </div>
                                                <p data-animation="fadeInUp" data-delay=".6s">Open Acouiring</p>
                                                <h1 data-animation="fadeInUp" data-delay=".9s">One Gateway, Many Solutions</h1>
                                                <div className="hero-content-btn" data-animation="fadeInUp" data-delay="1.1s">
                                                    <Link to="/contact" className="grb-btn st-1">Get Started <i class="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="slider-nav">
                            <div className="swiper-button-prev"><i className="far fa-arrow-left"></i></div>
                            <div className="swiper-button-next"><i className="far fa-arrow-right"></i></div>
                        </div>
                    </div>
                </section>
               
                <section className="about__area">
                    <div className="container">
                        <div className="row wow fadeInUp">
                            <div className="col-xl-6 col-lg-5">
                                <div className="about__img p-relative mb-30">
                                    <div className="about__img-inner">
                                        <img src={ about } alt="" />
                                    </div>
                                    <div className="p-element">
                                        <div className="ab-border d-none d-lg-block"></div>
                                       
                                        <div className="ab-image">
                                            <img src={ abp } alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="about__content mb-30">
                                    <div className="section-title mb-30">
                                        <div className="border-left">
                                            <p>About Company</p>
                                        </div>
                                        <h2> Payment Gateway </h2>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form,
                                        by injected humour. If you are going to use a passage of Lorem Ipsum, you need to be
                                        sure there isn't anything
                                        embarrassing hidden in the middle of text.</p>
                                    <ul className="about-points">
                                        <li>
                                            <div className="points-heading">
                                                <div className="p-icon">
                                                    <i className="fas fa-users"></i> 
                                                </div>
                                                <h5>One Stop Business</h5>
                                            </div>
                                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        </li>
                                        <li>
                                            <div className="points-heading">
                                                <div className="p-icon">
                                                    <i className="far fa-credit-card"></i>
                                                </div>
                                                <h5>One Stop Business</h5>
                                            </div>
                                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        </li>
                                    </ul>
                                    <div className="about__btn st-1">
                                        <Link to="/about" className="grb-btn st-1">Read More<i
                                            className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service__area grey-bg pt-120 pb-90">
                    <div className="container">
                        <div className="row wow fadeInUp">
                            <div className="col-lg-12">

                                <div className="section-title mb-55 text-center">
                                    <div className="border-c-bottom">
                                        <p>PAYMENT GATEWAY</p>
                                    </div>
                                    <h2>OUR PAYMENT GATEWAY</h2>
                                </div>
                               
                            </div>
                           
                        </div>
                        <div className="row wow fadeInUp justify-content-around">
                            <div className="col-lg-4 ">
                                <div className="single__service text-center mb-30">
                                    <span className="service__icon">
                                        <Link to=""><i className="fab fa-paypal"></i></Link>
                                    </span>
                                    <h4><Link to="service-details.html">Paypal</Link></h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form.</p>
                                    <Link to="" className="service__btn">
                                        <i className="fas fa-plus"></i>Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="single__service text-center mb-30">
                                    <span className="service__icon">
                                        <Link to=""><i className="fab fa-stripe"></i></Link>
                                    </span>
                                    <h4><Link to="">Stripe</Link></h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form.</p>
                                    <Link to="" className="service__btn">
                                        <i className="fas fa-plus"></i>Read More
                                    </Link>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </section>
                
               
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
    );
    
}

export default index
