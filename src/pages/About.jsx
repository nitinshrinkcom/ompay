import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import ScriptTag from 'react-script-tag';
import pageTitleImg from '../components/img/bg/page-title-bg.jpg'
import blog1 from '../components/img/blog/blog1.jpg'
import blog3 from '../components/img/blog/blog3.jpg'



const About = () => {
    return (
        <div>
            <Header />
            <main>

                <section className="page-title-area" data-background={pageTitleImg} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title-content text-center">
                                    <div className="page-title-heading">
                                        <h1>About Us</h1>
                                    </div>
                                    <nav className="grb-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">About</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-details pt-140">
                    <div className="container">
                        <div className="row wow fadeInUp align-items-center">
                            <div className="col-lg-12">
                                <div className="section-title mb-30">
                                    <h2 className="text-center">WHO WE ARE</h2>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-details-right mb-30">
                                    <p>With the easiest integration, completely online onboarding, feature filled checkout and best in class performance, quickly go live with Open Acquring and experience the future of payments.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form,
                                        by injected humour. If you are going to use a passage of Lorem Ipsum, you need to be
                                        sure.
                                        If you are going to use a passage of Lorem Ipsum, you need to be sure. Compare us between others companies.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="blog-area pt-120 pb-90">
                    <div className="container">
                        <div className="row wow fadeInUp" >
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-single mb-30 p-relative">

                                    <div className="blog-img">
                                        <Link to="/blog-details"><img src={blog1} alt="" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h4><Link to="/blog-details">Achievements</Link></h4>
                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                        </p>
                                        <Link to="/blog-details" className="read-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-single mb-30 p-relative">

                                    <div className="blog-img">
                                        <Link to="/blog-details"><img src={blog1} alt="" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h4><Link to="/blog-details">Awards and Recognition</Link></h4>
                                        <p>We adapt our delivery to the way your work, whether as an external provider or by
                                        </p>
                                        <Link to="/blog-details" className="read-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-single mb-30 p-relative">

                                    <div className="blog-img">
                                        <Link to="/blog-details"><img src={blog3} alt="" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h4><Link to="/blog-details">About the company</Link></h4>
                                        <p>Over more than 20 years, we’ve fostered trusted relationships across government
                                        </p>
                                        <Link to="/blog-details" className="read-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/vendor/jquery-3.6.0.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/bootstrap.bundle.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/swiper-bundle.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/isotope.pkgd.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/jquery.meanmenu.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/ajax-form.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/wow.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/jquery.scrollUp.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/odometer.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/appair.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/imagesloaded.pkgd.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/jquery.magnific-popup.min.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/plugins.js" />
            <ScriptTag isHydrating={false} type="text/javascript" src="js/main.js" />
        </div>

    )
}

export default About
