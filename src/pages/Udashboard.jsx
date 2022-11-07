import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/udashboard.css';
import ScriptTag from 'react-script-tag'
import companylogo1 from '../components/img/logo/logo_1.png'
import logo from '../components/img/opn_acq.png'
import usericon from '../components/img/images/faces/face3.jpg'
import { DollarCircleOutlined, LineChartOutlined, ProfileOutlined, UserOutlined, DashboardOutlined, FileDoneOutlined, LockOutlined, MenuFoldOutlined  } from '@ant-design/icons';
import $ from 'jquery'
import { useState } from 'react';
function Udashboard() {

    // const [isActive, setActive] = useState("false")

    useEffect(()=>{
        $('.desktop-toggle').click(function(){
            $('.main-content').toggleClass('add_width');
            $(".app").toggleClass('is-folded')
        });

        $('.mobile-toggle').click(function(){
            $('.app').toggleClass('is-expand');
        })
     
    },[])

    // const handleToggle = () => {
    //     setActive (!isActive);
    // }


    return (
        // <div className= {isActive ? "app": "app is-folded"}>
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
                            {/* <li className="desktop-toggle" onClick={handleToggle}>
                                <MenuFoldOutlined />
                                
                            </li>
                            <li className="mobile-toggle" onClick={handleToggle}>
                                <MenuFoldOutlined />
                            </li> */}
                            <li className="desktop-toggle">
                                <MenuFoldOutlined />
                                
                            </li>
                            <li className="mobile-toggle">
                                <MenuFoldOutlined />
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
                                    <Link to="#" className="title">Dashboard</Link>
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
                                    <Link to="/app_status" className="title">Application Status</Link>
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

                {/* <div className={isActive ? "main-content p-3" : "main-content p-3 add_width"}> */}
                <div className="main-content p-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media align-items-center">
                                        <div className="avatar avatar-icon avatar-lg avatar-blue">
                                        <DollarCircleOutlined style={{ "fontSize": "1.5rem", "textAlign": "center", "position":"absolute", "top": "10px", "right": "8px"}}/>
                                        </div>
                                        <div className="m-l-15">
                                            <h2 className="m-b-0">$23,523</h2>
                                            <p className="m-b-0 text-muted">Profit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media align-items-center">
                                        <div className="avatar avatar-icon avatar-lg avatar-cyan">
                                        <LineChartOutlined style={{ "fontSize": "1.5rem", "textAlign": "center", "position":"absolute", "top": "10px", "right": "8px"}}/>
                                        </div>
                                        <div className="m-l-15">
                                            <h2 className="m-b-0">+ 17.21%</h2>
                                            <p className="m-b-0 text-muted">Growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media align-items-center">
                                        <div className="avatar avatar-icon avatar-lg avatar-gold">
                                        <ProfileOutlined style={{ "fontSize": "1.5rem", "textAlign": "center", "position":"absolute", "top": "10px", "right": "8px"}} />
                                        </div>
                                        <div className="m-l-15">
                                            <h2 className="m-b-0">3,685</h2>
                                            <p className="m-b-0 text-muted">Orders</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media align-items-center">
                                        <div className="avatar avatar-icon avatar-lg avatar-purple">
                                        <UserOutlined style={{ "fontSize": "1.5rem", "textAlign": "center", "position":"absolute", "top": "10px", "right": "8px"}} />
                                        </div>
                                        <div className="m-l-15">
                                            <h2 className="m-b-0">1,832</h2>
                                            <p className="m-b-0 text-muted">Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Total Revenue</h5>
                                        <div>
                                            <div className="btn-group">
                                                <button className="btn btn-default active">
                                                    <span>Month</span>
                                                </button>
                                                <button className="btn btn-default">
                                                    <span>Year</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-t-50" style={{"height": "330px"}}>
                                        <canvas className="chart" id="revenue-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="m-b-0">Customers</h5>
                                    <div className="m-v-60 text-center" style={{"height": "225px"}}>
                                        <canvas className="chart" id="customers-chart"></canvas>
                                    </div>
                                    <div className="row border-top p-t-25">
                                        <div className="col-4">
                                            <div className="d-flex justify-content-center">
                                                <div className="media align-items-center">
                                                    <span className="badge badge-success badge-dot m-r-10"></span>
                                                    <div className="m-l-5">
                                                        <h4 className="m-b-0">350</h4>
                                                        <p className="m-b-0 muted">New</p>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-flex justify-content-center">
                                                <div className="media align-items-center">
                                                    <span className="badge badge-secondary badge-dot m-r-10"></span>
                                                    <div className="m-l-5">
                                                        <h4 className="m-b-0">450</h4>
                                                        <p className="m-b-0 muted">Returning</p>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-flex justify-content-center">
                                                <div className="media align-items-center">
                                                    <span className="badge badge-warning badge-dot m-r-10"></span>
                                                    <div className="m-l-5">
                                                        <h4 className="m-b-0">100</h4>
                                                        <p className="m-b-0 muted">Others</p>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h2 className="m-b-0">$17,267</h2>
                                            <p className="m-b-0 text-muted">Avg.Profit</p>
                                        </div>
                                        <div>
                                            <span className="badge badge-pill badge-cyan font-size-12">
                                                <span className="font-weight-semibold m-l-5">+5.7%</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="m-t-50" style={{"height": "375px"}}>
                                         <canvas className="chart" id="avg-profit-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        </div>
    )
}

export default Udashboard
