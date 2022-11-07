import React, { Component } from 'react'
import '../components/css/udashboard.css';
import '../components/css/wizardHome.css';
import companylogo1 from '../components/img/logo/logo_1.png'
import { Link } from 'react-router-dom'
import ScriptTag from 'react-script-tag'
import logo from '../components/img/opn_acq.png'
import usericon from '../components/img/images/faces/face3.jpg'
import Push from '../components/img/push.jpg'

import { EditOutlined, UserOutlined, DashboardOutlined, FileDoneOutlined, LockOutlined, MenuFoldOutlined } from '@ant-design/icons';


class AppStatus extends Component {
    render() {
        return (
            <div className="app">
                <div className="layout">
                    <div className="header">
                        <div className="logo logo-dark">
                            <Link to="index.html">
                                <img src={companylogo1} alt="Logo" />
                                <img className="logo-fold" src={logo} alt="Logo" />
                            </Link >
                        </div>
                        <div className="logo logo-white">
                            <Link to="index.html">
                                <img src={companylogo1} alt="Logo" />
                                <img className="logo-fold" src={logo} alt="Logo" />
                            </Link >
                        </div>
                        <div className="nav-wrap">
                            <ul className="nav-left">
                                <li className="desktop-toggle">
                                    <Link to="#">
                                        <MenuFoldOutlined />
                                    </Link >
                                </li>
                                <li className="mobile-toggle">
                                    <Link to="#">
                                        <MenuFoldOutlined />
                                    </Link >
                                </li>

                            </ul>
                            <ul className="nav-right">
                                <li className="dropdown dropdown-animated scale-left">
                                    <div className="pointer" data-toggle="dropdown">
                                        <div className="avatar avatar-image  m-h-10 m-r-15">
                                            <img src={usericon} alt="userIcon" />
                                        </div>
                                    </div>
                                    <div className="p-b-15 p-t-20 dropdown-menu pop-profile">
                                        <div className="p-h-20 p-b-15 m-b-10 border-bottom">
                                            <div className="d-flex m-r-50">
                                                <div className="avatar avatar-lg avatar-image">
                                                    <img src={usericon} alt="" />
                                                </div>
                                                <div className="m-l-10">
                                                    <p className="m-b-0 opacity-09">Hello!</p>
                                                    <p className="m-b-0 text-dark font-weight-semibold">Marshall Nichols</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link to="/signin" className="dropdown-item d-block p-h-15 p-v-10">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <i className="anticon opacity-04 font-size-16 anticon-logout"></i>
                                                    <span className="m-l-10">Logout</span>
                                                </div>
                                                <i className="anticon font-size-10 anticon-right"></i>
                                            </div>
                                        </Link >
                                    </div>
                                </li>
                                <li>
                                    <Link to="#" data-toggle="modal" data-target="#quick-view">
                                        <i className="anticon anticon-appstore"></i>
                                    </Link >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="side-nav">
                        <div className="side-nav-inner mt-3">
                            <ul className="side-nav-menu scrollable">
                                <li className="nav-item dropdown open">
                                    <Link className="dropdown-toggle" to="#">
                                        <span className="icon-holder">
                                            <DashboardOutlined />
                                        </span>
                                        <Link to="/dashboard" className="title">Dashboard</Link>
                                        {/* <span className="arrow">
                                        <i className="arrow-icon"></i>
                                    </span> */}
                                    </Link>
                                </li>
                                <li className="nav-item dropdown mt-3">
                                    <Link className="dropdown-toggle" to="#">
                                        <span className="icon-holder">
                                            <UserOutlined />
                                        </span>
                                        <Link to="/profile" className="title">Profile</Link>
                                    </Link >
                                </li>
                                <li className="nav-item dropdown mt-3">
                                    <Link className="dropdown-toggle" to="#">
                                        <span className="icon-holder">
                                            <FileDoneOutlined />
                                        </span>
                                        <Link to="#" className="title">Application Status</Link>
                                    </Link >
                                </li>
                                <li className="nav-item dropdown mt-3">
                                    <Link className="dropdown-toggle" to="#">
                                        <span className="icon-holder">
                                            <LockOutlined />
                                        </span>
                                        <Link to="/chngPass" className="title">Change Password</Link>
                                    </Link >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="main-content p-3">
                        <h1 className="text-center"> Application Status</h1>

                        <div class="animation-bar-2">
                            {/* <img src={Push} height={50} width={50} alt="push image" /> */}
                            <span data-label="">

                            </span>

                        </div>

                        <div className="row d-flex">
                            <span className="AppStatus_oneProgress_style">
                                <p>In Progress</p>
                            </span>
                            <span className="AppStatus_twoProgress_style">
                                <p>Under Review</p>
                            </span>
                            <span className="AppStatus_threeProgress_style">
                                <p>Approved</p>
                            </span>
                            <span className="AppStatus_fourProgress_style">
                                <p>Sending of Merchant Agreement</p>
                            </span>
                            <span className="AppStatus_fiveProgress_style">
                                <p>Awaiting for Sending Agreement</p>
                            </span>
                            <span className="AppStatus_sixProgress_style">
                                <p>MID Set UP</p>
                            </span>
                            <span className="AppStatus_sevenProgress_style">
                                <p>Live</p>
                            </span>
                        </div>

                        <div className="row d-flex mt-5">
                            <form onSubmit={this.handleSubmit} action="/thankyou" method="GET">



                                <fieldset id="f5">

                                    <div className="row mt-2">
                                        <div className="col-md-6 col-xs-12 col-sm-12">
                                            <p> First Name</p>
                                            <input type="text"
                                                className="form-control mt-2"
                                                name="firsName"
                                                placeholder="First Name"
                                                value={this.firsName}
                                                onChange={this.handleFirstName}
                                            />
                                        </div>
                                        <div className="col-md-6 col-xs-12 col-sm-12">
                                            <p> Last Name</p>
                                            <input type="text"
                                                className="form-control mt-2"
                                                name="lasName"
                                                placeholder="Last Name"
                                                value={this.lasName}
                                                onChange={this.handleLastName}
                                            />
                                        </div>

                                    </div>
                                </fieldset>

                                <fieldset id="f6">
                                <div className="row mt-2">
                                        <div className="col-md-6 col-xs-12 col-sm-12">
                                            <p>Contact Number</p>
                                            <input type="text"
                                                className="form-control mt-2"
                                                name="firsName"
                                                placeholder="Contact"
                                                value={this.Contact}
                                                onChange={this.handleContact}
                                            />
                                        </div>
                                        <div className="col-md-6 col-xs-12 col-sm-12">
                                            <p>Age</p>
                                            <input type="text"
                                                className="form-control mt-2"
                                                name="lasName"
                                                placeholder="Age"
                                                value={this.Age}
                                                onChange={this.handleAge}
                                            />
                                        </div>

                                    </div>

                                </fieldset>

                               
                            </form>
                        </div>

                    </div>


                    <footer className="footer">
                        <div className="footer-content">
                            <p className="m-b-0"></p>
                            <span>
                                <Link to="#" className="text-gray m-r-15"> © Open Acquring |  All rights reserved. ©</Link >
                            </span>
                        </div>
                    </footer>
                </div>

                <ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/vendors.min.js"></ScriptTag>
                <ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/chartjs/Chart.min.js"></ScriptTag>
                <ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/app.min.js"></ScriptTag>
                <ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/dashboard-default.js"></ScriptTag>

            </div>
        )
    }
}

export default AppStatus
