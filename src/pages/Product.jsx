import React from 'react'
import ScriptTag from 'react-script-tag';
import Header from './Header';
import Footer from './Footer';
import s1 from '../components/img/service/service-d3.jpg';
import s2 from '../components/img/service/service-d3.jpg';
import s3 from '../components/img/service/service-d3.jpg';

const Product = () => {
    return (
        <div>
            <Header />
              
            <section className="service-details-area pt-150 pb-80">
            <div className="container">
                <div className="service-details-img wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="service-details-single-img">
                                <img src={s1} alt="" class="s1" /> 
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-12 col-sm-6">
                                    <div className="service-details-single-img">
                                        <img src={s2} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-6">
                                    <div className="service-details-single-img">
                                        <img src={s3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-details-content wow fadeInUp">
                    <div className="service-details-heading">
                        <h2>PAYMENT GATEWAY</h2>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form,
                        by injected humour. If you are going to use a passage of Lorem Ipsum, you need to be sure. Lorem
                        ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        consequat. Duis aute irure
                        dolor in reprehenderit.</p>
                    <div className="row">
                        <div className="col-xl-9">
                            <h5 className="mb-15">Planning & Starting</h5>
                            <p className="mb-40">There are many variations of passages of Lorem Ipsum available, but the
                                majority have
                                suffered alteration in some form,
                                by injected humour. If you are going to use a passage of Lorem Ipsum</p>
                            <h5 className="mb-15">Sketch & Executing</h5>
                            <p className="mb-20">There are many variations of passages of Lorem Ipsum available, but the
                                majority have
                                suffered alteration in some form,
                                by injected humour. If you are going to use a passage of Lorem Ipsum</p>
                            <ul className="execute-list">
                                <li>Research & Beyond the Business Plans</li>
                                <li>Marketing Eligibility & Spreading the Products</li>
                                <li>Raw Materials Collections</li>
                                <li>Finally Put Out the Results & Live Server Testing.</li>
                            </ul>
                            <h5 className="mb-20">Questions On The Projects</h5>
                            <div className="grb-accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Will The Project Meet The Requirements of Clients As Want?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form,
                                                by injected humour. If you are going to use a passage of Lorem Ipsum,
                                                you need to be sure. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                et dolore magna
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                Where Should I Incorporate to My Business Solutions?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form,
                                                by injected humour. If you are going to use a passage of Lorem Ipsum,
                                                you need to be sure. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                et dolore magna
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                How to Process The Function For Development?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form,
                                                by injected humour. If you are going to use a passage of Lorem Ipsum,
                                                you need to be sure. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                et dolore magna
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="mt-45 mb-25">Explore More Services</h4>
                    <div className="row service-details-more">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box-single mb-40">
                                <div className="service-box-content st-1">
                                    <div className="service-box-content-icon st-1">
                                        <i className="fas fa-money-check-alt"></i>
                                        
                                    </div>
                                    <div className="service-box-content-text">
                                        <h4><a href="service-details.html">PAYMENT GATEWAY</a></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but
                                            the majority
                                            have
                                            suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box-single mb-40">
                                <div className="service-box-content st-1">
                                    <div className="service-box-content-icon st-1">
                                        <i className="fas fa-file-invoice-dollar"></i>
                                        
                                    </div>
                                    <div className="service-box-content-text">
                                        <h4><a href="service-details.html">PAYMENT GATEWAY</a></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but
                                            the majority
                                            have
                                            suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box-single mb-40">
                                <div className="service-box-content st-1">
                                    <div className="service-box-content-icon st-1">
                                        <i className="fas fa-analytics"></i>
                                    </div>
                                    <div className="service-box-content-text">
                                        <h4><a href="service-details.html">PAYMENT GATEWAY</a></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but
                                            the majority
                                            have
                                            suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


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

export default Product
