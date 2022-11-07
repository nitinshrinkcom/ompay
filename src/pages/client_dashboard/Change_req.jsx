import React, { useState, useEffect } from 'react'
import Sidebar from './Client_sidebar'
import Navbar from './Client_navbar'
import './client_dash.css'
import $ from 'jquery'

const Change_req = () => {

    const [mobileToggle, setMobileToggle] = useState(false);
    const [processCurrency, setProcessCurrency] = useState(false);
    const [settleBank, setsettleBank] = useState(false);
    const [formValues, setFormValues] = useState([{
        name: "", email: "", dob: "", nationality: "", passportNum: "", address: "", ownership: "", checkBox: ""
    }]);

    useEffect(() => {
        $('#sidebarToggleTop').click(() => {
            $('#accordionSidebar').toggleClass('toggled')
        })
    }, [])

    const handleToggle = () => {
        mobileToggle === true ? setMobileToggle(false) : setMobileToggle(true);
    }

    const addProcessingCurrency = () => {
        processCurrency === true ? setProcessCurrency(false) : setProcessCurrency(true);
    }

    const settlementBankClick = () => {
        settleBank === true ? setsettleBank(false) : setsettleBank(true);
    }

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addShareholder = () => {
        setFormValues([...formValues, { name: "", dob: "", nationality: "", passportNum: "", address: "", ownership: "", checkBox: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    return (
        <div className={`client_body ${mobileToggle === true ? 'sidebar-toggled' : ''}`} id="page-top">
            <div id="wrapper" className="d-flex">
                {/* =============== SIDEBAR ================= */}
                <Sidebar toggleClick={handleToggle} />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* =========  Main Content ============= */}
                    <div id="content">
                        <Navbar toggleClick={handleToggle} />
                        <div className="container-fluid changeREQ">
                            <div className="row">
                                <div className="col-xl-12 col-md-12 col-sm-12">
                                    <div className="card border-left-warning shadow h-100 py-2 navbar_shadow">
                                        <div className="card-body">
                                            <h3 className="text-center">Change Request</h3>
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12">
                                                    <form className="mt-4">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">Change Existing Settlement Bank Account</label>
                                                                    <input type="text" className="form-control" name="update_bankAcc" placeholder="Change Bank Account" value={'user12345'} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">Add/Edit Url</label>
                                                                    <input type="text" className="form-control" name="update_url" placeholder="Change Url" value={'https://www.openacquiring.com'} />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">Change Biling Descriptor</label>
                                                                    <input type="text" className="form-control" name="update_bdescriptor" placeholder="Change Bill Descriptor" value={'DES123456889'} />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group mt-3">
                                                                    <label className="font-weight-bolder">Change in Company Name</label>
                                                                    <input type="text" className="form-control" name="update_cName" placeholder="Change Company Name" value={'e.g. Rockstar_games'} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">Add/Remove Processing Currency</label>
                                                                    <button type="button" className="btn m-0 update_btn-chnge_request" onClick={addProcessingCurrency}>Add</button>
                                                                </div>
                                                                <div className={`d-flex justify-content-between align-items-center mt-3 ${processCurrency === true ? 'd-block' : 'd-none'}`}>
                                                                    <select className="form-select w-100">
                                                                        <option value={''} disabled selected>Please Select...</option>
                                                                        <option value={'INR'}>INR</option>
                                                                        <option value={'EUR'}>EUR</option>
                                                                        <option value={'USD'}>USD</option>
                                                                        <option value={'GBP'}>GBP</option>
                                                                        <option value={'CHF'}>CHF</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">Add new settlement Currency Bank Account</label>
                                                                    <button type="button" className="btn m-0 update_btn-chnge_request" onClick={settlementBankClick}>Add</button>
                                                                </div>

                                                                <div className={`d-flex justify-content-between align-items-center mt-3 ${settleBank === true ? 'd-block' : 'd-none'}`}>
                                                                    <select className="form-select w-100">
                                                                        <option value={''} disabled selected>Please Select...</option>
                                                                        <option value={'B1'}>BANK 1</option>
                                                                        <option value={'B2'}>Australia Banking Group Ltd</option>
                                                                        <option value={'3'}>New Zeland Banking Group Ltd</option>
                                                                        <option value={'B4'}>Axis Bank</option>
                                                                        <option value={'B5'}>HSBC Bank</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 col-sm-12">
                                                                <div className="form-group">
                                                                    <label className="font-weight-bolder">Add/Remove Shareholder</label>
                                                                    <button type="button" className="btn m-0 update_btn-chnge_request" onClick={addShareholder}>Add</button>
                                                                </div>
                                                                {
                                                                    formValues.map((element, index) => {
                                                                        return (
                                                                            <>
                                                                                <div className="row mt-2">
                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        {
                                                                                            index ?
                                                                                                <div className="d-flex justify-content-center align-items-center mx-auto">
                                                                                                    <button type="button" className="removeAbleBtn remove" onClick={() => removeFormFields(index)}><i className="fas fa-fw fa-trash" /></button>
                                                                                                </div>
                                                                                                : null
                                                                                        }
                                                                                    </div>
                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="name">Name</label>
                                                                                            <input type="text" name="name" className="form-control" placeholder="Name" id="name" value={element.name || " "} onChange={(e) => handleChange(index, e)} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="dob">Date Of Birth</label>
                                                                                            <input type="date" name="dob" className="form-control" placeholder="Date" id="dob" value={element.dob || " "} onChange={(e) => handleChange(index, e)} />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="nationality">Nationality</label>
                                                                                            <input type="text" name="nationality" className="form-control" placeholder="Nationality" id="nationality" value={element.nationality || " "} onChange={(e) => handleChange(index, e)} />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="passport">Passport</label>
                                                                                            <input type="text" name="passportNum" className="form-control" placeholder="Passport" id="passport" value={element.passportNumb || " "} onChange={(e) => handleChange(index, e)} />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="address">Address</label>
                                                                                            <input type="text" name="address" className="form-control" placeholder="address" id="address" value={element.address || " "} onChange={(e) => handleChange(index, e)} />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="ownership">Ownership</label>
                                                                                            <input type="text" name="ownership" className="form-control" placeholder="ownership" id="ownership" value={element.ownership || " "} onChange={(e) => handleChange(index, e)} />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-md-12 col-sm-12">
                                                                                        <div className="form-group">
                                                                                            <label>Is this Shareholder a Director/Authorised Signatory</label>
                                                                                            <div className="d-flex justify-content-around align-items-center flex-wrap">
                                                                                                <div className="radio-bx-1 d-flex ">
                                                                                                    <input type="radio" name="checkBox" className="form-check" value={element.checkBox || " "} onChange={(e) => handleChange(index, e)} />
                                                                                                    <label className="font-weight-bolder ms-1">Yes</label>
                                                                                                </div>
                                                                                                <div className="radio-bx-2 d-flex ">
                                                                                                    <input type="radio" name="checkBox" className="form-check" value={element.checkBox || " "} onChange={(e) => handleChange(index, e)} />
                                                                                                    <label className="font-weight-bolder ms-1">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="my-2" />
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>

                                                        <div className="row mt-4">
                                                            <div className="col-md-12 col-sm-12">
                                                                <button type="submit" className="btn m-0 update_btn-dash">Submit Changes</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer> */}
                </div>
            </div >
        </div >
    )
}

export default Change_req