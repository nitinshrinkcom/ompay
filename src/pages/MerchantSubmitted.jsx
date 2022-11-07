import React, { Component } from 'react'
import logo from '../components/img/logo/compnyLog.png'
import '../components/css/test.css'

export default class MerchantSubmitted extends Component {
    render() {
        return (
            <div className="merchant-submitted py-4">
                <div className="col-md-7 mx-auto sucess-page">
                    <div className="container bg-light rounded py-3">
                        <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-12">
                                <div className="row mx-3">
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <img src={logo} alt="companyLogo" className="img-fluid img-responsive omPay-logo-merchant" />
                                    </div>
                                    <div className="col-md-6 col-sm-12 mt-2">
                                        <h1 className="merchantForm_heading mt-3 font-size-35"> Merchant Application Form </h1>
                                    </div>
                                    <hr className="mt-3" />
                                </div>
                            </div>

                            <h4 className="text-center app-sucess-text">Application Submitted</h4>
                            <div className="d-flex flex-column justify-content-start align-items-start px-4 appDetails">
                                <p className="mt-4">Dear (NAME OF THE COMPANY REPRESENTATIVE),</p>
                                <p className="mt-3">Your application has been submitted and our team is currently reviewing same. You can track the status and progress of your application by login onto your account anytime.</p>
                                <p className="mt-3">You will also be notified through email whenever there is a progress on your application.</p>
                                <p className="mt-4">Kind Regards</p>
                                <p className="my-2">OmPay Team</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
