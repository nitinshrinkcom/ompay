import React from 'react'
import signupImg from '../components/img/signup_image.png'
import '../components/css/modal.css';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div onClick={onClose} className='overlay_modal'>
                <div className="grid_center">
                    <div className='modalContainer container' onClick={(e) => { e.stopPropagation(); }}>
                        <div className='d-flex justify-content-end align-items-center mt-3'>
                            <h5 className='closeBtn' onClick={onClose}>X</h5>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-7 col-sm-12">
                                <div className="content-section mt-2">
                                    <p className="head-text m-0"> Dear Username,</p>
                                    <p className="desc_text mt-4">
                                        Your OmPay account has been successfully created. Kindly check your email and verify your account to be able to Login. Once verified, you will be able to request your test account, access API docs and submit your complate application form.
                                    </p>
                                    <p className="company-textt mt-5">
                                        Kind regards,<br />
                                        The OmPay Team
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <div className="img-content">
                                    <img src={signupImg} alt="signup_image" className="img-fluid signup-Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal