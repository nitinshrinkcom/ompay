import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/settings.css' 
import Footer from './Footer';

export default class Dboard extends Component {
    render() {
        return (
            <div className="settings">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <div className="profile-left">
                                <div className="d-flex flex-column justify-content-center">
                                    <div className="user-profile">
                                        <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=60" alt="userImage" width="200" height="200" className="img-responsive img-fluid userImage" />
                                    </div>

                                    <div className="user-profile-name mt-3">
                                        <h3 className="text-center text-md-center text-lg-center text-uppercase">Nitin</h3>
                                    </div>

                                    <div className="profile-usermenu">
                                        <ul className="nav d-flex flex-column mt-5">
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-6 ">
                                                        <Link to="#">
                                                            <i className="fa fa-home"></i>
                                                            Status
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6 status" id="setStatus"> Approved</div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa fa-cog"></i>
                                                    Change Settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/updatePass">
                                                    <i className="fa fa-key"></i>
                                                    Update Password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/login">
                                                    <i className="fa fa-user"></i>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <div className="profile-right px-2">
                                <h2 className="text-center text-lg-center text-md-center">Change Settings</h2>
                                <form action="#">
                                    <h3 className="text-left headingI mt-3">Merchant Bank Account Information</h3>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"> <label>Company Registered Address </label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="stAdd" placeholder="Street Address" />
                                            <input type="text" class="form-control" name="stAdd2" placeholder="Street Address Line 2" />
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="stCity" placeholder="City" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="stZip" placeholder="Postal/ Zip Code" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="stState" placeholder="State/ Province" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Account Number</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="merAccNum" placeholder="" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Account Currency</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="merAccCurr" placeholder="" />
                                        </div>
                                    </div>

                                    <h3 className="text-left headingI">Beneficial Owner 1</h3>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Name </label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12"><input type="text" class="form-control" name="beneFrstName" placeholder="First Name" /></div>
                                                <div className="col-md-6 col-lg-6 col-sm-12"><input type="text" class="form-control" name="beneLstName" placeholder="Last Name" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Phone</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-4 col-sm-12"><input type="text" class="form-control" name="beneCode" placeholder="Country Code" /></div>
                                                <div className="col-md-8 col-lg-8 col-sm-12"><input type="text" class="form-control" name="beneNum" placeholder="Phone Number" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Email</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="beneEmail" placeholder="" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label> Company Registered Address </label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="beneAdd" placeholder="Street Address" />
                                            <input type="text" class="form-control" name="beneAdd2" placeholder="Street Address Line 2" />
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="beneCity" placeholder="City" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="beneZip" placeholder="Postal/ Zip Code" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="beneState" placeholder="State/ Province" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-left headingI">Beneficial Owner 2</h3>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Name </label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12"><input type="text" class="form-control" name="bene2FrstName" placeholder="First Name" /></div>
                                                <div className="col-md-6 col-lg-6 col-sm-12"><input type="text" class="form-control" name="bene2LstName" placeholder="Last Name" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Phone </label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-4 col-sm-12"><input type="text" class="form-control" name="bene2Code" placeholder="Country Code" /></div>
                                                <div className="col-md-8 col-lg-8 col-sm-12"><input type="text" class="form-control" name="bene2Num" placeholder="Phone Number" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Email</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="bene2Email" placeholder="" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label> Company Registered Address</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="bene2Add" placeholder="Street Address" />
                                            <input type="text" class="form-control" name="bene2Add2" placeholder="Street Address Line 2" />
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="bene2City" placeholder="City" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="bene2Zip" placeholder="Postal/ Zip Code" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="bene2State" placeholder="State/ Province" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-left headingI">Director/Authorised Signatory</h3>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Name</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12"><input type="text" class="form-control" name="authFrstName" placeholder="First Name" /></div>
                                                <div className="col-md-6 col-lg-6 col-sm-12"><input type="text" class="form-control" name="authLstName" placeholder="Last Name" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Phone</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-4 col-sm-12"><input type="text" class="form-control" name="authCode" placeholder="Country Code" /></div>
                                                <div className="col-md-8 col-lg-8 col-sm-12"><input type="text" class="form-control" name="authNum" placeholder="Phone Number" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label>Email</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="authEmail" placeholder="" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-12"><label> Current Home Address</label></div>
                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                            <input type="text" class="form-control" name="authAdd" placeholder="Street Address" />
                                            <input type="text" class="form-control" name="authAdd2" placeholder="Street Address Line 2" />
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="authCity" placeholder="City" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="authZip" placeholder="Postal/ Zip Code" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                    <input type="text" class="form-control" name="authState" placeholder="State/ Province" />
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center m-auto w-auto">
                                        <button type="submit" class="btn btn-primary w-50" id="passChange"> Save Changes </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
