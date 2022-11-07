import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './client_dash.css'
import OALogo from '../../components/img/logo/ClienT_Dashboard_logo.png'

const Client_sidebar = (handleClick) => {
    const [ toggle, setToggle ] = useState(false)

    const toggleBtn = () => {
       toggle === true ? setToggle(false) : setToggle(true);
    }
    

    return (
        <>
            {/* sidebar_2 */}
            <ul
                className={`navbar-nav bg-gradient-primary sidebar_2 sidebar-dark accordion ${ toggle === true ? 'toggled': ''}`}
                id="accordionSidebar"
            >
                {/* sidebar_2 - Brand */}
                <Link
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    to="#"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img src={OALogo} alt="logo" className="img-responsive img-fluid logo_client_side" />
                    </div>
                    {/* <div className="sidebar-brand-text mx-3">
                        SB Admin <sup>2</sup>
                    </div> */}
                </Link>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Submit Application Form</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <Link className="nav-link" to="/test_acc">
                        <i className="fas fa-fw fa-user-plus" /> 
                        <span>Create a Test Account</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="#">
                        <i className="fas fa-fw fa-file" />
                        <span>Access API Docs</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="#">
                        <i className="fas fa-fw fa-plus" />
                        <span>Integration(Magneto, Wordpress, Shopgo)</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/change_request">
                        <i className="fas fa-fw fa-user" />
                        <span>Change Request</span>
                    </Link>
                </li>
                {/* Heading */}
                {/* <div className="sidebar-heading">Interface</div> */}
                {/* Nav Item - Pages Collapse Menu */}

                {/* <li className="nav-item">
                    <Link
                        className="nav-link collapsed"
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                    >
                        <i className="fas fa-fw fa-cog" />
                        <span>Components</span>
                    </Link>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link className="collapse-item" to="buttons.html">
                                Buttons
                            </Link>
                            <Link className="collapse-item" to="cards.html">
                                Cards
                            </Link>
                        </div>
                    </div>
                </li> */}
                {/* Nav Item - Utilities Collapse Menu */}
                {/* <li className="nav-item">
                    <Link
                        className="nav-link collapsed"
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapseUtilities"
                        aria-expanded="true"
                        aria-controls="collapseUtilities"
                    >
                        <i className="fas fa-fw fa-wrench" />
                        <span>Utilities</span>
                    </Link>
                    <div
                        id="collapseUtilities"
                        className="collapse"
                        aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link className="collapse-item" to="utilities-color.html">
                                Colors
                            </Link>
                            <Link className="collapse-item" to="utilities-border.html">
                                Borders
                            </Link>
                            <Link className="collapse-item" to="utilities-animation.html">
                                Animations
                            </Link>
                            <Link className="collapse-item" to="utilities-other.html">
                                Other
                            </Link>
                        </div>
                    </div>
                </li> */}
                
                {/* <hr className="sidebar-divider" /> */}
              
                {/* <div className="sidebar-heading">Addons</div> */}
                {/* Nav Item - Pages Collapse Menu */}
                {/* <li className="nav-item">
                    <Link
                        className="nav-link collapsed"
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapsePages"
                        aria-expanded="true"
                        aria-controls="collapsePages"
                    >
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </Link>
                    <div
                        id="collapsePages"
                        className="collapse"
                        aria-labelledby="headingPages"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link className="collapse-item" to="login.html">
                                Login
                            </Link>
                            <Link className="collapse-item" to="register.html">
                                Register
                            </Link>
                            <Link className="collapse-item" to="forgot-password.html">
                                Forgot Password
                            </Link>
                            <div className="collapse-divider" />
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link className="collapse-item" to="404.html">
                                404 Page
                            </Link>
                            <Link className="collapse-item" to="blank.html">
                                Blank Page
                            </Link>
                        </div>
                    </div>
                </li> */}
                {/* Nav Item - Charts */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span>
                    </Link>
                </li> */}
                {/* Nav Item - Tables */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="tables.html">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span>
                    </Link>
                </li> */}
                {/* Divider */}
                {/* <hr className="sidebar-divider d-none d-md-block" /> */}
                {/* sidebar_2 Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline mt-3">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleBtn} />
                </div>
            </ul>
            {/* End of sidebar_2 */}
        </>
    )
}

export default Client_sidebar