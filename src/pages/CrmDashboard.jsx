import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/crm.css'
import Chart from 'react-apexcharts'
import OA_Logo from '../components/img/logo/OALogo_white.png'

const CrmDashboard = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    const closeSidebar = () => {
        if (isOpen === true) {
            setIsopen(false);
        }
    }
    return (
        <div className="crm-body">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light shadow-md">
                    <div className="container-fluid p-2 d-flex justify-content-end">
                        <div className="form-inline mt-3 d-flex justify-content-end align-items-center">
                            <div className="d-flex justify-content-around align-items-center mx-auto">
                                <Link to="#"><i className="fa fa-user-circle text-light me-1"></i><span className="font-weight-bold text-light">Sign in</span></Link>
                            </div>
                            <i className="fa fa-bars text-light show_cursor" onClick={ToggleSidebar}></i>
                            <i className="fa fa-cog text-light"></i>
                            <i className="fa fa-bell text-light"></i>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <img src={OA_Logo} alt="open-acquiring" className="img-responsive img-fluid sd-header__logo" />
                        <div className="sidebar_cross_btn" onClick={closeSidebar}><i className="fa fa-times textlight"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li>
                                <div className="sidebar_menuList">
                                    <div className="svg_logos_box bg-primary">
                                        <i className="fa fa-home text-light"></i>
                                    </div>
                                    <Link tp="#" className="sd-link ">Dashboard</Link>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar_menuList">
                                    <div className="svg_logos_box">
                                        <i className="fa fa-home text-light"></i>
                                    </div>
                                    <Link tp="#" className="sd-link">New Applications</Link>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar_menuList">
                                    <div className="svg_logos_box">
                                        <i className="fa fa-home text-light"></i>
                                    </div>
                                    <Link tp="#" className="sd-link">Live Merchants</Link>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar_menuList">
                                    <div className="svg_logos_box">
                                        <i className="fa fa-home text-light"></i>
                                    </div>
                                    <Link tp="#" className="sd-link">Toggle Live</Link>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar_menuList">
                                    <div className="svg_logos_box">
                                        <i className="fa fa-home text-light"></i>
                                    </div>
                                    <Link tp="#" className="sd-link">Change Request</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>
            <div className="container-fluid mt-3">
                <h3 className="text-light">General Statistics</h3>
                <div className="row mt-2">
                    <div className="col-md-7 col-sm-12">
                        <div className="card gradient_cards">
                            <div className="card-body p-2 statistics">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className="text-start text-light font-weight-bolder">Total Number of merchants</h3>
                                    <p className="mb-0 text-light numb_count">100</p>
                                </div>
                                <h2 className="text-start text-light font-weight-bolder mt-4 mb-3">Applications</h2>
                                <div className="d-flex justify-content-between align-items-center pendings">
                                    <h3 className="text-start text-light font-weight-bolder">Pending</h3>
                                    <p className="mb-0 text-light numb_count">20</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center approved">
                                    <h3 className="text-start text-light font-weight-bolder">Approved</h3>
                                    <p className="mb-0 text-light numb_count">50</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center defered">
                                    <h3 className="text-start text-light font-weight-bolder">Defered</h3>
                                    <p className="mb-0 text-light numb_count">5</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center decline">
                                    <h3 className="text-start text-light font-weight-bolder">Decline</h3>
                                    <p className="mb-0 text-light numb_count">15</p>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <Chart
                                            type="pie"
                                            width={350}
                                            height={200}
                                            series={[0.12, 0.07, 0.07, 0.06, 0.05, 0.02, 0.55]}
                                            options={
                                                {
                                                    title: {
                                                        text: 'Applications',
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            color: '#fff'
                                                        },
                                                    },
                                                    noData: {
                                                        text: 'No data available'
                                                    },
                                                    labels: ['Russia', 'Canada', 'USA', 'China', 'Brazil', 'India', 'Others'],
                                                    chart: {
                                                        foreColor: '#fff' //to chnage colors the x-axis and y-axis labels
                                                    },
                                                    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'], // Changes the pie chart colors
                                                    foreColor: '#fff',
                                                    onItemHover: {
                                                        highlightDataSeries: true
                                                    },
                                                    animations: {
                                                        enabled: true,
                                                        easing: 'easeinout',
                                                        speed: 800,
                                                        animateGradually: {
                                                            enabled: true,
                                                            delay: 150
                                                        },
                                                        dynamicAnimation: {
                                                            enabled: true,
                                                            speed: 350
                                                        }
                                                    },
                                                    responsive: [
                                                        {
                                                            breakpoint: 767,
                                                            options: {
                                                                chart: {
                                                                    width: "100%"
                                                                }
                                                            }
                                                        }
                                                    ],

                                                }
                                            }
                                        />
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <Chart
                                            type="pie"
                                            width={350}
                                            height={200}
                                            series={[0.12, 0.07, 0.07, 0.06, 0.05, 0.02, 0.55]}
                                            options={
                                                {
                                                    title: {
                                                        text: 'Live Merchants',
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            color: '#fff'
                                                        },
                                                    },
                                                    noData: {
                                                        text: 'No data available'
                                                    },
                                                    labels: ['Russia', 'Canada', 'USA', 'China', 'Brazil', 'India', 'Others'],
                                                    chart: {
                                                        foreColor: '#fff' //to chnage colors the x-axis and y-axis labels
                                                    },
                                                    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
                                                    onItemHover: {
                                                        highlightDataSeries: true
                                                    },
                                                    animations: {
                                                        enabled: true,
                                                        easing: 'easeinout',
                                                        speed: 800,
                                                        animateGradually: {
                                                            enabled: true,
                                                            delay: 150
                                                        },
                                                        dynamicAnimation: {
                                                            enabled: true,
                                                            speed: 350
                                                        }
                                                    },
                                                    responsive: [
                                                        {
                                                            breakpoint: 767,
                                                            options: {
                                                                chart: {
                                                                    width: "100%"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                }
                                            }
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrmDashboard