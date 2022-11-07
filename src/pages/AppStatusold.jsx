import React from 'react'
import '../components/css/udashboard.css';
// import '../components/css/demo.css';
import companylogo1 from '../components/img/logo/logo_1.png'
import { Link } from 'react-router-dom'
import ScriptTag from 'react-script-tag'
import logo from '../components/img/opn_acq.png'
import usericon from '../components/img/images/faces/face3.jpg'
import { EditOutlined, UserOutlined, DashboardOutlined, FileDoneOutlined, LockOutlined, MenuFoldOutlined } from '@ant-design/icons';


import StepZilla from "react-stepzilla";
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';



// import party from "https://cdn.skypack.dev/party-js@1.0.4";
// import * as moment from "https://cdn.skypack.dev/moment@2.29.1";

// const FORMAT = "YYYY-MM-DD";
// const startDate = moment.default("2020-11-16");
// const todayDate = moment.default();
// const today = todayDate.clone().add(1, "days").diff(startDate, "days");
// const todayPercent = (today / 365) * 100;
// const remainingDays = 365 - today;

// const progressBar = document.querySelector(".progress-bar");
// const progress = document.querySelector(".progress");
// const value = document.querySelector(".value");
// const remainingValue = document.querySelector(".remaining-value");

// const milestoneList = [1, 30, 100, 200, 300, 365];

// progress.animate([{ width: "0" }, { width: `${todayPercent}%` }], {
//     duration: 1000,
//     easing: "ease",
//     fill: "forwards"
// });

// let animationDelay = 0;
// milestoneList.forEach((milestone, index) => {
//     const milestoneElement = document.createElement("div");
//     milestoneElement.classList.add("milestone");
//     milestoneElement.style.left = `${(milestone / 365) * 100}%`;
//     milestoneElement.dataset.date =
//         index === 0
//             ? startDate.format(FORMAT)
//             : (milestoneElement.dataset.date = startDate
//                 .clone()
//                 .add(milestone, "days")
//                 .format(FORMAT));
//     milestoneElement.innerHTML =
//         index === 0 ? `${milestone}st day` : `${milestone}th day`;
//     if (today >= milestone) {
//         milestoneElement.classList.add("reached");
//     }
//     milestoneElement.style.animationDelay = `${animationDelay}s`;
//     animationDelay += 0.2;
//     progressBar.appendChild(milestoneElement);
// });

// const animationDuration = 1000;
// const frameDuration = 1000 / 60;
// const totalFrames = Math.round(animationDuration / frameDuration);
// const easeOutQuad = (t) => t * (2 - t);

// function countUp(element, countTo, suffix = "") {
//     let frame = 0;
//     const counter = setInterval(() => {
//         frame++;
//         const progress = easeOutQuad(frame / totalFrames);
//         const currentCount = Math.round(countTo * progress);
//         if (parseInt(element.dataset.value, 10) !== currentCount) {
//             element.innerHTML = `${currentCount}${suffix}`;
//             element.dataset.value = currentCount;
//         }
//         if (frame === totalFrames) {
//             clearInterval(counter);
//         }
//     }, frameDuration);
// }

// countUp(value, Math.round(todayPercent), "%");
// countUp(remainingValue, remainingDays);

// setTimeout(() => {
// 	if (milestoneList.includes(today)) {
// 		party.screen({
// 			color: ["#540d6e", "#ee4266", "#ffd23f", "#3bceac", "#0ead69"],
// 			size: party.minmax(6, 12),
// 			count: party.variation(300 * (window.innerWidth / 1980), 0.4),
// 			angle: -180,
// 			spread: 80,
// 			angularVelocity: party.minmax(6, 9)
// 		});
// 	}
// }, 1500);




function AppStatus() {
    const steps =
    [
        { name: 'Step 1', component: <Step1 /> },
        { name: 'Step 2', component: <Step2 /> },
        { name: 'Step 3', component: <Step3 /> },
        { name: 'Step 4', component: <Step4 /> },
        { name: 'Step 5', component: <Step5 /> }
    ]
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

                    <div className='step-progress'>
                        <StepZilla steps={steps} stepsNavigation={false} prevBtnOnLastStep={false} startAtStep="2" />
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



export default AppStatus
