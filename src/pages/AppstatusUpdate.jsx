import React from 'react'
import '../components/css/udashboard.css';
import companylogo1 from '../components/img/logo/logo_1.png'

function AppstatusUpdate() {
    return (
        <div>
            <main className="main">
                <div className="main_con">
                    <section className="wrapper customUpdateWrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 text-center">
                                <img src={companylogo1} className="logimg text-center" alt="loging comp logo" />
                            </div>
                        </div>
                        <h2 className="text-center mt-3">Application Status</h2>
                        <p className="text-center py-5 updatePara">Your account has been Approved / Declined / Under Review.</p>
                    </section>
                </div>
            </main>
        </div>
    )

}

export default AppstatusUpdate
