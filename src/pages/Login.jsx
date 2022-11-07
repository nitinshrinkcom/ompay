import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/login.css';
import companylogo1 from '../components/img/logo/logo_1.png'
import signInLogo from '../components/img/signInImage.jpg';
const Login = () => {
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
								<img src={signInLogo} className="img-fluid" alt=" comp logo" />
								<div className="customText mt-4">
									<Link to="/signup" className="textcustom mt-3">Create an account</Link>
								</div>
							</div>

							<div className="col-md-6 col-12">
								<h1 className="text text-large display-3 text-center">Login </h1>
								<form name="login" className="form">
									<div className="input-control customICO">
										<input type="email" name="email" className="input-field" placeholder="Email Address" />
									</div>
									<div className="input-control customLockIcon">
										<label for="password" className="input-label" hidden>Password</label>
										<input type="password" name="password" className="input-field" placeholder="Password" />
									</div>
									<div className="input-control justify-content-start">
										<input type="checkbox" idName="statements" name="statements" className="mx-2" />
										<label for="vehicle1"> Remember Me</label>
									</div>
									<div className="input-control">
										<input type="button" name="submit" className="input-submit customsigninBtn" value="Login" disabled />
										<Link to="/forgot" className="text text-links">Forgot Password</Link>
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

export default Login
