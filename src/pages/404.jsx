import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div>
            <section className="area-404 pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="content-404 text-center mb-30">
                            <h2>404</h2>
                            <h4>Sorry We Couldn't Find That Page</h4>
                            <p>The Page you are looking for was moved, removed, renamed or never existed.
                                Please search anything ales you want.</p>
                            <div className="go-home mt-3">
                                <Link to="/" className="grb-border-btn st-1">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Notfound