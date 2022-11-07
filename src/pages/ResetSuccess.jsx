import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/login.css';
import companylogo1 from '../components/img/logo/logo_1.png'

function ResetSuccess() {
    return (
        <div>
            <main className="main">
				<div className="main_con">
					<section className="wrapper customsectionWrapper">
						<div className="row">
							<div className="col-sm-12 col-md-6"></div>
							<div className="col-sm-12 col-md-6">
								<img src={companylogo1} className="logimg text-center" alt="loging comp logo" />
							</div>
						</div>

						<div className="row mt-3">
							<div className="col-md-12  col-lg-12 col-12">
                                <div class="success-animation">
                                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                                </div>   

                                <h1 className="text text-large text-center">Success !</h1>
                                <p className="text-center">
                                    Your password has been updated successfully...
                                </p>
                                <Link to ="/login" className="btn btn-primary d-block m-auto">Continue<i className="fa fa-arrow"></i></Link>
							</div>
						</div>
					</section>
				</div>
			</main>
        </div>
    )
}

export default ResetSuccess
