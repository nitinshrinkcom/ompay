import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/login.css';
import companylogo1 from '../components/img/logo/logo_1.png'
import forgetPassLogo from '../components/img/ForgetPass.jpg';
const ForgetPass = () => {
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
							<div className="col-md-6 col-12">
								<img src={forgetPassLogo} className="img-fluid forgetPass" alt=" comp logo" />
								<div className="customText mt-4">
									<Link to="/signup" className="textcustom mt-3">Create an account</Link>
								</div>
							</div>

							<div className="col-md-6 col-12">
								<h1 className="text text-large display-3 text-center">Forgot Password </h1>
								<form name="login" className="form">
									<div className="input-control customICO">
										<input type="email" name="email" className="input-field" placeholder="Email Address" />
									</div>
							
									<div className="input-control mt-4 customsubmitBtn">
										<input type="button" name="submit" className="input-submit customsigninBtn" value="Submit" disabled />
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}

export default ForgetPass
