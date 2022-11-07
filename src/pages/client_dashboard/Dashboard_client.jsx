import React, { useState, useEffect } from 'react'
import Sidebar from './Client_sidebar'
import Navbar from './Client_navbar'
import './client_dash.css'
import $ from 'jquery'

const Dashboard_client = () => {

  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    $('#sidebarToggleTop').click(() => {
      $('#accordionSidebar').toggleClass('toggled')
    })
  }, [])

  const handleToggle = () => {
    mobileToggle === true ? setMobileToggle(false) : setMobileToggle(true);
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
                      <h3 className="text-center">Application Status</h3>
                      <div class="animation-bar-2">
                        <span data-label=""></span>
                      </div>
                      <div className="row">
                        <div className="col-md-4 text-start col-4"><span className="text-progress">In Progress</span></div>
                        <div className="col-md-4 text-center col-4"><span className="text-progress">Under Review</span></div>
                        <div className="col-md-4 text-end col-4"><span className="text-progress">Approved</span></div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <form className="mt-4">
                            <div className="row">
                              <div className="col-md-5 col-sm-12">
                                <div className="form-group">
                                  <label className="font-weight-bolder">Username</label>
                                  <input type="text" className="form-control" placeholder="username" value={'user12345'} />
                                </div>
                              </div>

                              <div className="col-md-5 col-sm-12">
                                <div className="form-group">
                                  <label className="font-weight-bolder">Change Password</label>
                                  <input type="password" className="form-control" placeholder="Change Password" value={'user12345'} />
                                </div>
                              </div>

                              <div className="col-md-2 col-sm-12 client_dashboard-BTN">
                                <button className="btn m-0 update_btn-dash">Save Changes</button>
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

export default Dashboard_client