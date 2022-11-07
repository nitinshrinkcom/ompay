import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ApexChart1 from './ApexCharts'
import '../components/css/crm.css'
const CrmDashboard = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div className="crm-body">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light shadow-md">
                    <div className="container-fluid p-2">
                        <div className="form-inline ml-auto mt-3">
                            <div className="crm_search_section">
                                <input type="text" name="search" id="search" className="searchSection form-control" placeholder="Type here..." />
                                <button type="submit" className="btn search-Button"><i className="fa fa-search search-Logo"></i></button>
                            </div>
                            <div className="d-flex justify-content-around align-items-center mx-auto">
                                <Link to="#"><i className="fa fa-user-circle text-light mr-1"></i><span className="font-weight-bold text-light">Sign in</span></Link>
                            </div>
                            <i className="fa fa-bars text-light" onClick={ToggleSidebar}></i>
                            <i className="fa fa-cog text-light"></i>
                            <i className="fa fa-bell text-light"></i>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Sidebar Header</h4>
                        <div className="btn btn-primary"><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li><Link className="sd-link">Menu Item 1</Link></li>
                            <li><Link className="sd-link">Menu Item 2</Link></li>
                            <li><Link className="sd-link">Menu Item 3</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>
            <div className="container-fluid mt-3">
                <div className="row">
                    {/* =============== Left side Sections ================== */}
                    <div className="col-md-7 col-sm-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card graph_cards">
                                    <div className="card-body">
                                        <h4 className="text-start text-light mb-0">Visitors</h4>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <span className="text-white visit_count">5,927</span><span className="font-weight-bolder small_count">+55%</span>
                                        </div>
                                        <div className="bar-graph">
                                            <ApexChart1 />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card graph_cards">
                                    <div className="card-body">
                                        <h4 className="text-start text-light mb-0">Income</h4>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <span className="text-white visit_count">$130,832</span><span className="font-weight-bolder small_count">+90%</span>
                                        </div>
                                        <div className="bar-graph">
                                            <ApexChart1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card graph_cards newtab_card">
                                    <div className="card-body new_tabbing">
                                        <Link className="create_new_graphSection">
                                            <i className="fa fa-plus text-light"></i>
                                            <h4 className="text-center text-light mt-2">New Tab</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =============== Right side Sections ================== */}
                    <div className="col-md-5 col-sm-12 right_section">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="card welcome_card common_cards">
                                    <div className="card-body p-2">
                                        <h3 className="text-start greeting">Welcome Back,</h3>
                                        <h1 className="text-start text-light font-weight-bolder name">Mark Johnson</h1>

                                        <p className="mt-3 welcome_text">
                                            Glad to see you again!<br />Ask me anything.
                                        </p>

                                        <Link to="#" className="text-light font-weight-bold mt-4 record_link">
                                            Tap to record <i className="fa fa-arrow-right text-light ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <div className="card gradient_cards">
                                    <div className="card-body p-2">
                                        <h3 className="text-start text-light font-weight-bolder">Invoices</h3>
                                        <div className="invoices-list mt-3">
                                            <div className="details_left d-flex justify-content-start align-items-center">
                                                <div className="svg_logos_box">
                                                    <i class="fa fa-rocket icons_css" aria-hidden="true"></i>
                                                </div>
                                                <div className="svg_description_boxes">
                                                    <span className="box_headings">Devices</span>
                                                    <p className="mb-0 box_status">250 in stock, 346+ sold</p>
                                                </div>
                                            </div>
                                            <Link to="#"><i className="fa fa-angle-right text-light"></i></Link>
                                        </div>

                                        <div className="invoices-list mt-3">
                                            <div className="details_left d-flex justify-content-start align-items-center">
                                                <div className="svg_logos_box">
                                                    <i class="fa fa-wrench icons_css" aria-hidden="true"></i>
                                                </div>
                                                <div className="svg_description_boxes">
                                                    <span className="box_headings">Tickets</span>
                                                    <p className="mb-0 box_status">123 closed, 15 open</p>
                                                </div>
                                            </div>
                                            <Link to="#"><i className="fa fa-angle-right text-light"></i></Link>
                                        </div>

                                        <div className="invoices-list mt-3">
                                            <div className="details_left d-flex justify-content-start align-items-center">
                                                <div className="svg_logos_box">
                                                    <i class="fa fa-cube icons_css" aria-hidden="true"></i>
                                                </div>
                                                <div className="svg_description_boxes">
                                                    <span className="box_headings">Error logs</span>
                                                    <p className="mb-0 box_status">1 is active, 40 closed</p>
                                                </div>
                                            </div>
                                            <Link to="#"><i className="fa fa-angle-right text-light"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="card gradient_cards">
                                    <div className="card-body p-2">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <div className="birthday_wish_img">
                                                <img src="https://demos.creative-tim.com/vision-ui-dashboard-pro-react/static/media/message-card-image.cd015adb.png" alt="dashboard_img" className="img-fluid img-responsive dashboard_imgs" />
                                            </div>
                                            <div className="bday_wish_details">
                                                <p className="mb-0 birthday_wishes">
                                                    Today is Arthur's birthday.<br />
                                                    Wish her the best of luck!
                                                </p>
                                                <Link to="#" className="btn bdayWishBtn"> Send Message</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="card gradient_cards">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className="text-start text-light font-weight-bolder">Transactions</h3>
                                    <div className="defined_date_section">
                                        <span><i className="fa fa-calendar me-2" aria-hidden="true"></i>23 - 30 March 2021</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="svg_logos_box">
                                            <i class="fa fa-wrench icons_css" aria-hidden="true"></i>
                                        </div>
                                        <div className="svg_description_boxes">
                                            <span className="box_headings">Netflix</span>
                                            <p className="mb-0 box_status">27 March 2020, at 12:30 PM</p>
                                        </div>
                                    </div>

                                    <h4 className="amt_money"> Send Message</h4>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrmDashboard