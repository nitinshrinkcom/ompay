import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/login.css';
import ReCaptchaV2 from 'react-google-recaptcha';
import companylogo1 from '../components/img/logo/logo_1.png'
import registerLogo from '../components/img/ai-human-walking.jpg';
import Modal from './Modal'

const Login = () => {
	const [checked, setchecked] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const handleUserAgreement = () => {
		setchecked(true);
	}

	const captcha_site_key = '6Ld1KPEdAAAAAO-b362D1ycTBmpMCGyRX5c_OwP5';

	return (
		<div>
			<main className="main signup-func">
				<div className="main_con">
					<section className="wrapper customsectionWrapper">

						{/* <div className="d-flex justify-content-end align-items-center">
							<img src={companylogo1} className="logimg text-center" alt="loging comp logo" />
						</div> */}


						<div className="row mt-3">
							<div className="col-md-6 col-12">
								<div className="d-flex justify-content-end align-items-end">
									<img src={companylogo1} className="logo_width" alt="logo" />
								</div>
								<h1 className="text text-large text-center">Sign Up </h1>
								<form name="login" className="form">
									<div className="input-control customICO">
										<input type="email" name="register_name" className="input-field" placeholder="Your Name" />
									</div>
									<div className="input-control emailICO">
										<input type="email" name="register_email" className="input-field" placeholder="Please provide a business email address" />
									</div>
									<div className="input-control customLockIcon">
										<label for="password" className="input-label" hidden>Password</label>
										<input type="password" name="register_password" className="input-field" placeholder="Password" />
									</div>
									<div className="input-control customLockIcon">
										<label for="password" className="input-label" hidden>Password</label>
										<input type="password" name="register_cPassword" className="input-field" placeholder="Repeat your password" />
									</div>
									<div className="input-control justify-content-start">
										<input type="checkbox" idName="statements" name="statements" className="mx-2" value="agree" onChange={handleUserAgreement} checked={checked} />
										<label> I accept the <Link to="/tos" className="signupLink">terms of use</Link> and <Link to="/privacy" className="signupLink">privacy policy</Link></label>
									</div>
									<div className="input-control justify-content-start">
										<ReCaptchaV2 sitekey={captcha_site_key} />
									</div>
									<div className="input-control">
										<button type="button" className={`btn btn-primary designSignUpBtn ${checked === true ? '' : 'disabled'} `} onClick={() => setOpenModal(true)}>Register</button>
									</div>

								</form>
							</div>

							<div className="col-md-6 col-12 mt-2">
								<img src={registerLogo} className="img-fluid signUpLogo shadow mt-5" alt=" comp logo" />
								<div className="customText mt-4">
									<Link to="/login" className="text text-links">I already have an account</Link>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/* ====== SignUp Modal ========== */}
				<Modal open={openModal} onClose={() => setOpenModal(false)} />

			</main>
		</div>
	)
}

export default Login
