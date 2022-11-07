import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ScriptTag from 'react-script-tag';
import sectionImg from '../components/img/bg/page-title-bg.jpg';
import blogImg1 from '../components/img/blog/bms1.jpg'
import blogImg2 from '../components/img/blog/bms2.jpg'
import blogImg3 from '../components/img/blog/bms3.jpg'
import blogImg4 from '../components/img/blog/bms4.jpg'


const Blog = () => {
    return (
        <div>
           <Header />
           <main>
                <section className="page-title-area" data-background= { sectionImg }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title-content text-center">
                                    <div className="page-title-heading">
                                        <h1>Blog Page</h1>
                                    </div>
                                    <nav className="grb-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Page</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
        <div className="blog-main-area pt-150">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="blog-main row">
                        <div className="col-lg-6">
                            <div className="blog-single  mb-60">
                                <div className="bms-img mb-30">
                                    <Link to="/blog-details"><img src={ blogImg1 } alt="" /></Link>
                                </div>
                                <div className="bms-content">
                                    <div className="fix mb-30">
                                        <div className="bms-title">
                                            <ul className="project-like-view bms-lv">
                                                <li><Link to="/blog-details"><i
                                                            className="fal fa-calendar-alt"></i>22 Oct 2021</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-comments-alt"></i>45
                                                        Comments</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-eye"></i>546 Views</Link>
                                                </li>
                                            </ul>
                                            <h4><Link to="/blog-details">How a developer and designer duo at Deutsche
                                                    Bank keep remote</Link></h4>
                                        </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour. </p>
                                    <div className="bms-btn mt-45">
                                        <Link to="/blog-details" className="grb-border-btn st-1">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="blog-single  mb-60">
                                <div className="bms-img mb-30">
                                    <Link to="/blog-details"><img src={ blogImg2 } alt="" /></Link>
                                </div>
                                <div className="bms-content">
                                    <div className="fix mb-30">
                                        
                                        <div className="bms-title">
                                            <ul className="project-like-view bms-lv">
                                                <li><Link to="/blog-details"><i
                                                            className="fal fa-calendar-alt"></i>22 Oct 2021</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-comments-alt"></i>45
                                                        Comments</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-eye"></i>546 Views</Link>
                                                </li>
                                            </ul>
                                            <h4><Link to="/blog-details">How a developer and designer duo at Deutsche
                                                    Bank keep remote</Link></h4>
                                        </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour. </p>
                                    <div className="bms-btn mt-45">
                                        <Link to="/blog-details" className="grb-border-btn st-1">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="blog-single mb-60">
                                <div className="bms-img mb-30">
                                    <Link to="/blog-details"><img src={ blogImg3 } alt="" /></Link>
                                </div>
                                <div className="bms-content">
                                    <div className="fix mb-30">
                                        
                                        <div className="bms-title">
                                            <ul className="project-like-view bms-lv">
                                                <li><Link to="/blog-details"><i
                                                            className="fal fa-calendar-alt"></i>22 Oct 2021</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-comments-alt"></i>45
                                                        Comments</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-eye"></i>546 Views</Link>
                                                </li>
                                            </ul>
                                            <h4><Link to="/blog-details">The underrated design book that transformed
                                                    the way I work</Link></h4>
                                        </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour.</p>
                                    <div className="bms-btn mt-45">
                                        <Link to="/blog-details" className="grb-border-btn st-1">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="blog-single  mb-60">
                                <div className="bms-img mb-20">
                                    <Link to="/blog-details"><img src={ blogImg4 } alt="" /></Link>
                                </div>
                                <div className="bms-content">
                                    <div className="fix mb-30">
                                        
                                        <div className="bms-title">
                                            <ul className="project-like-view bms-lv">
                                                <li><Link to="/blog-details"><i
                                                            className="fal fa-calendar-alt"></i>22 Oct 2021</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-comments-alt"></i>45
                                                        Comments</Link></li>
                                                <li><Link to="/blog-details"><i className="fas fa-eye"></i>546 Views</Link>
                                                </li>
                                            </ul>
                                            <h4><Link to="/blog-details">6 ways you can make your design more
                                                    inclusive and equitable</Link></h4>
                                        </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour.</p>
                                    <div className="bms-btn mt-45">
                                        <Link to="/blog-details" className="grb-border-btn st-1">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
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

export default Blog
