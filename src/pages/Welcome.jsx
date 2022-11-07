import React from 'react'
import { Link } from 'react-router-dom';
import '../components/css/welcome.css';

const Welcome = () => {
    return (
        <div className="welcomeBox">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12"></div>
                    <div className="col-md-8 col-sm-12">
                        <div className="box mt-2">
                            <i className="fa fa-shopping-cart fa-5x mt-2"></i>
                            <h2 className="text-align-justify mt-3">Welcome</h2>
                            <p className="text-align-justify mt-2">Hi there, please fill out and submit this form.</p>
                            <p className="text-align-justify mt-3 que">9 Questions</p>
                            <div className="startBtn">
                                <Link to="/wizard_1" className="btn btn-success startBtn">Start <i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
