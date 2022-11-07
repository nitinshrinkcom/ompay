import React, { useState, useEffect } from 'react'
import Sidebar from './Client_sidebar'
import Navbar from './Client_navbar'
import './client_dash.css'
import $ from 'jquery'

const Test_account = () => {

    const [mobileToggle, setMobileToggle] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    useEffect(() => {
        $('#sidebarToggleTop').click(() => {
            $('#accordionSidebar').toggleClass('toggled')
        })
    }, [])

    // ======== toggle Button to see sidebar in mobile view =============
    const handleToggle = () => {
        mobileToggle === true ? setMobileToggle(false) : setMobileToggle(true);
    }

    // ======== toggle Button to see Password =============
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
        }
        else {
            setPasswordType("password");
        }
    }

    return (
        <div className={`client_body ${mobileToggle === true ? 'sidebar-toggled' : ''}`} id="page-top">
            <div id="wrapper" className="d-flex">
                {/* =============== SIDEBAR ================= */}
                <Sidebar toggleClick={handleToggle} />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* =========  Main Content ============= */}
                    <div id="content">
                        <Navbar toggleClick={handleToggle} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12 col-md-12 col-sm-12">
                                    <div className="card border-left-warning shadow h-100 py-2 navbar_shadow">
                                        <div className="card-body">
                                            <h3 className="text-center">Test Account</h3>
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12">
                                                    <form className="mt-4">
                                                        <div className="row test_api_account">
                                                            <div className="col-md-12 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">TEST API KEY</label>
                                                                    <input type="text" className="form-control border-rounded" placeholder="" value={'ae256291-c838-4667-aadc-5abf6d7b9e13'} />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 col-sm-12">
                                                                <div className="form-group mt-3">
                                                                    <div className="password-section secret-key">
                                                                        <label className="font-weight-bolder">SECRET KEY</label>
                                                                        <input type={passwordType} className="form-control border-rounded" value={'0a520IK56BYU3nYnktBhAJg02nZI71'} />
                                                                        <button type="button" className="btn show-password_btn" onClick={togglePassword}>{passwordType === 'password' ? <i className="fas fa-fw fa-eye eye_icons" /> : <i className="fa fa-fw fa-eye-slash eye_icons" />}</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 col-sm-12">
                                                                <button className="btn mx-auto test-account-btn">Create Test Account</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer> */}
                </div>
            </div>
        </div>
    )
}

export default Test_account