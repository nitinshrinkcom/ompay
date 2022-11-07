import React from 'react'
import changePassLogo from '../components/img/changePass.jpg';
import '../components/css/udashboard.css';
import companylogo1 from '../components/img/logo/logo_1.png'
import { Link } from 'react-router-dom'
import ScriptTag from 'react-script-tag'
import logo from '../components/img/opn_acq.png'
import usericon from '../components/img/images/faces/face3.jpg'
import { UserOutlined, DashboardOutlined, FileDoneOutlined, LockOutlined, MenuFoldOutlined } from '@ant-design/icons';

function ChangePass() {
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
									<Link to="/app_status" className="title">Application Status</Link>
								</Link >
							</li>
							<li className="nav-item dropdown mt-3">
								<Link className="dropdown-toggle" to="#">
									<span className="icon-holder">
										<LockOutlined />
									</span>
									<Link to="#" className="title">Change Password</Link>
								</Link >
							</li>
						</ul>
					</div>
				</div>

				<div className="main-content p-3">
					<div className="row">
						<div className="col-md-6 col-sm-12"></div>
						<div className="col-md-6 col-sm-12">
							<h1 className="text text-large display-3 text-center">Change Password</h1>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-md-6 col-12">
							<img src={changePassLogo} className="img-fluid changeLogo" alt=" comp logo" />
							<div className="customText mt-4">
								{/* <Link to="/signup" className="textcustom mt-3">Create an account</Link> */}
							</div>
						</div>

						<div className="col-md-6 col-12 p-3">
							<form action="#" method="GET" className="form">

								<div className="input-control">
									<label for="password" className="input-label" hidden>Password</label>
									<input type="password" name="change_pass" className="input-field form-control" placeholder="Enter new password" />
								</div>

								<div className="input-control mt-3">
									<label for="password" className="input-label" hidden>Password</label>
									<input type="password" name="change_confrmPass" className="input-field form-control" placeholder="Confirm new password" />
								</div>

								<div className="input-control mt-4 customsubmitBtn">
									<input type="button" name="submit" className="input-submit customsigninBtn" value="Submit" />
								</div>
							</form>
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

			<ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/vendors.min.js"></ScriptTag>
			<ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/chartjs/Chart.min.js"></ScriptTag>
			<ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/app.min.js"></ScriptTag>
			<ScriptTag isHydrated={false} type="text/javascript" src="js/vendor/dashboard-default.js"></ScriptTag>
		</div>
	)
}

export default ChangePass
