import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/settings.css'
import Footer from './Footer';
import $ from 'jquery'

class updatePass extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#passChange').click(function (event) {
                if ($('input[type=password]').val() === "") {
                    $('#emptyError').show();
                    $('#passError').hide();
                }
                else if ($('#newPass').val() === $('#confirmPass').val()) {
                    $('#emptyError').hide();
                    $('#passError').hide();
                    return true;
                }
                else {
                    $('#emptyError').hide();
                    $('#passError').show();
                    event.preventDefault();
                }
            })

            $('input').on('focus', function () {
                $('#emptyError').hide();
                $('#passError').hide();
            })
        })
    }

    render() {
        return (
            <div className="updatePass">
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
                                                <Link to="/settings">
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
                                <h2 className="text-center text-lg-center text-md-center">Update Password</h2>
                                <form action="#">
                                    <div className="row mt-5">
                                        <div className="col-md-6 col lg-6 col-sm-12">
                                            <label>Enter the new password</label>
                                        </div>
                                        <div className="col-md-6 col lg-6 col-sm-12">
                                         <input type="password" class="form-control" name="newPass" id="newPass" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col lg-6 col-sm-12">
                                            <label>Confirm the password</label>
                                        </div>
                                        <div className="col-md-6 col lg-6 col-sm-12">
                                         <input type="password" class="form-control" name="confirmPass" id="confirmPass" placeholder="" />
                                        </div>
                                    </div>
                                    <p className="text-left mt-3 text-center" style={{"display":"none", "color": "red","fontWeight": "bold"}} id="passError">Passwords are not matching. Please enter the correct password. </p>
                                    <p className="text-left mt-3 text-center" style={{"display":"none", "color": "red", "fontWeight": "bold"}} id="emptyError">Fields cannot be empty. Please enter the password.</p>

                                    <div className="d-flex justify-content-center m-auto w-50">
                                        <button type="submit" className="btn btn-primary" id="passChange">Save changes </button>
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

export default updatePass