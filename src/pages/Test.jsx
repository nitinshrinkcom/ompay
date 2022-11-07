import React, { Component } from 'react'
import '../components/css/test.css'
import $ from "jquery";
import logo from '../components/img/logo/compnyLog.png'

class Test extends Component {

    constructor() {
        super();
        this.state = {
            shareholders: [],
        };
    }

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    }

    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    }

    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }


    componentDidMount() {

        function scroll_to_class(element_class, removed_height) {

            var scroll_to = $(element_class).offset().top - removed_height;
            if ($(window).scrollTop() !== scroll_to) {
                $('.form-wizard').stop().animate({ scrollTop: scroll_to }, 0);
            }

        }

        function bar_progress(progress_line_object, direction) {
            var number_of_steps = progress_line_object.data('number-of-steps');
            var now_value = progress_line_object.data('now-value');
            var new_value = 0;
            if (direction === 'right') {
                new_value = now_value + (100 / number_of_steps);
            }
            else if (direction === 'left') {
                new_value = now_value - (100 / number_of_steps);
            }
            progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
        }

        $(document).ready(function () {

            $('.form-wizard fieldset:first').fadeIn('slow');

            $('.form-wizard .required').on('focus', function () {
                $(this).removeClass('input-error');
                $('#error').hide();
            });

            $('.errorBuss').on('focus', function () {
                $(this).removeClass('input-error');
                $('#errorBuss').hide();  
            });

            $('.errorReg').on('focus', function () {
                $(this).removeClass('input-error');
                $('#errorReg').hide();  
            });

            $('.errorAddr').on('focus', function () {
                $(this).removeClass('input-error');
                $('#errorAddr').hide();  
            });

            $('.errorYoi').on('focus', function () {
                $(this).removeClass('input-error');
                $('#errorYoi').hide(); 
            });

            $("input[type='checkbox'").on('focus', function (){
                $('#display_output').hide();
            });

            // next step
            $('.form-wizard .btn-next').on('click', function () {
                var parent_fieldset = $(this).parents('fieldset');
                var next_step = true;
                // navigation steps / progress steps
                var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
                var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');

                // fields validation
                if ($('input').val() === "") {
                    // $('this').addClass('input-error');
                    $('#error').show();
                    $('#errorBuss').show(); 
                    $('#errorReg').show(); 
                    $('#errorAddr').show(); 
                    $('#errorYoi').show(); 
                    $('#benefname').show(); 
                    $('#benelname').show();  
                    $('#bfname').show(); 
                    $('#bname').show(); 
                    
                    next_step = false;
                }
                else {
                    $('#error').hide();
                    $('#errorBuss').hide(); 
                    $('#errorReg').hide(); 
                    $('#errorAddr').hide(); 
                    $('#errorYoi').hide(); 
                    $('#bfname').hide(); 
                    $('#blname').hide();
                }

                if($("input[type='checkbox']").val() === ""){
                    $('#display_output').show();
                    next_step = false;
    
                }else{
                    $('#display_output').show();
                }
                // fields validation

                if (next_step) {
                    parent_fieldset.fadeOut(400, function () {
                        // change icons
                        current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                        // progress bar
                        bar_progress(progress_line, 'right');
                        // show next step
                        $(this).next().fadeIn();
                        // scroll window to beginning of the form
                        scroll_to_class($('.form-wizard'), 20);
                    });
                }

            });

           

            // previous step
            $('.form-wizard .btn-previous').on('click', function () {
                // navigation steps / progress steps
                var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
                var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');

                $(this).parents('fieldset').fadeOut(400, function () {
                    // change icons
                    current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
                    // progress bar
                    bar_progress(progress_line, 'left');
                    // show previous step
                    $(this).prev().fadeIn();
                    // scroll window to beginning of the form
                    scroll_to_class($('.form-wizard'), 20);
                });
            });

            // submit
            $('.form-wizard').on('submit', function (e) {
                // fields validation
                $(this).find('.required').each(function () {
                    if ($(this).val() === "") {
                        e.preventDefault();
                        $(this).addClass('input-error');
                        $('#errorBuss').show(); 
                        $('#errorReg').show(); 
                        $('#errorAddr').show(); 
                        $('#errorYoi').show(); 
                    }
                    else {
                        $(this).removeClass('input-error');
                    }
                });
            });
        });
    }



    render() {
        return (
            <div>
                <section className="form-box">
                    <div className="container">
                        <div className="">
                            <div className="col-sm-12 col-md-12 col-lg-12 form-wizard ">

                                <form action="#">
                                    <fieldset>
                                        <div className="row mx-3">
                                            <div className="col-md-6 col-sm-12 mt-3">
                                                <img src={logo} alt="companyLogo" className="img-fluid img-responsive" />
                                            </div>
                                            <div className="col-md-6 col-sm-12 mt-4">
                                                <h2 className="heading"> Merchant Application Form </h2>

                                            </div>
                                        </div>

                                        <p className="instructions mx-3"><span className="fw-bolder heading">Tell us about your business </span> <br />
                                            The data that Open Acquring collects about your business will help us meet requirements from regulators, financial partners, and also allows us to perform due diligence on your business. 
                                        </p>
                                        <p className="mt-3 mx-3 font-weight-bold">Please prepare information for the following sections:</p>





                                        
                                        <ul className="mt-4 mb-4 mx-3 c-Details">
                                            <li>Section 1 - <b>Company Details</b>
                                                <ul>
                                                    <li><b>1.1 Contact Details</b></li>
                                                    <li><b>1.2 Merchant Bank Account Information
                                                    </b></li>
                                                </ul>
                                            </li>
                                            <li>Section 2 - <b>Beneficial Owners And Director</b> </li>
                                            <li>Section 3 - <b>Additional Information</b> </li>
                                            <li>Section 4 - <b>Official Documents</b> </li>
                                        </ul>
                                        <hr />

                                        <p className="text-left"><h3>Section 1: Company Details </h3>
                                            Please fill in the requisite details of your company.
                                        </p>
                                        <hr />
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-12">
                                                    <label for="comp_name text-bold">Legal Company Name <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-9 col-sm-12">
                                                    <input type="text" className="form-control required" id="comp_name" placeholder="name@example.com" required />
                                                    <span className="input-error"></span> 
                                                    <p id="error" className="error mt-1" style={{"color": "red","display":"none"}}>This field is required...!!</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Trading Name </label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="trading" placeholder="name@example.com" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Type Of Business <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control errorBuss" name="tob" placeholder="e.g Mobile Phones/ Food Delivery" required />
                                                        <span className="input-error"></span> 
                                                        <p id="errorBuss" className=" mt-1" style={{"color": "red","display":"none"}}>This field is required...!!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Company Registration Number <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control errorReg" name="regNum" placeholder="" required />
                                                        <span className="input-error"></span> 
                                                        <p id="errorReg" className="mt-1" style={{"color": "red","display":"none"}}>This field is required...!!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Company Registered Address  <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control errorAddr" name="regAdd" placeholder="Street Address" />
                                                        <span className="input-error"></span> 
                                            
                                                        <input type="text" className="form-control mt-2 errorAddr" placeholder="Street Address Line 2" />
                                                        <span className="input-error"></span> 

                                                        <div className="row">
                                                            <div className="col-md-3 col-12">
                                                                <input type="text" className="form-control mt-2 errorAddr" placeholder="City" />
                                                                <span className="input-error"></span> 
    
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2 errorAddr" placeholder="State/Province" />
                                                                <span className="input-error"></span> 
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2 errorAddr" placeholder="Postal/ Zip Code" required />
                                                                <span className="input-error"></span> 
                                                                <p id="errorAddr" className="mt-1" style={{"color": "red","display":"none"}}>All the fields are required...!!</p>
                                                            </div>
                                                            <div className="col-md-6 col-12"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Year Of Incorporation  <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="date" className="form-control errorYoi" name="yoi" required />
                                                        <span className="input-error"></span> 
                                                        <p id="errorYoi" className="mt-1" style={{"color": "red","display":"none"}}>This field is required...!!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Current Monthly Sales Volume (USD)</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="cms" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Expected Monthly Sales Volume (USD)</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="ems" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Lowest Ticket Size (USD)</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="lts" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Highest Ticket Size (USD)</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="hts" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Average Ticket Size (USD)</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="ats" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>% Of Orders Processed By Telephone</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="percentOrders" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Website URL(s)</label>
                                                    </div>
                                                    <div className="col-md-9 col-12">
                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12 " >
                                                                <input type="text" className="form-control element" name="websiteUrl" placeholder="www.example.com" />
                                                                <div className="BoxContainer">

                                                                </div>

                                                                {this.state.shareholders.map((shareholder, idx) => (
                                                                    <div className="shareholder">
                                                                        <input
                                                                            type="text"
                                                                            name="websiteurl"
                                                                            className="form-control"
                                                                            placeholder={`www.example.com`}
                                                                            value={shareholder.name}
                                                                            onChange={this.handleShareholderNameChange(idx)}
                                                                        />
                                                                        <button type="button" onClick={this.handleRemoveShareholder(idx)} className="remove append">Remove</button>
                                                                    </div>
                                                                ))}
                                                                <button type="button" onClick={this.handleAddShareholder} className=" append">Add More</button>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Please Tick If Applicable To Your Website(s): <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-9 col-sm-12">
                                                                <div className="d-block border px-2">
                                                                    <div className="form-check form-check">
                                                                        <input type="checkbox" className="form-check-input" id="inlineCheckbox1" value="option1" />
                                                                        <label className="form-check-label" for="inlineCheckbox1">Detailed description of the goods or services being sold</label>
                                                                    </div>
                                                                    <div className="form-check form-check">
                                                                        <input type="checkbox" className="form-check-input" id="inlineCheckbox2" value="option2" />
                                                                        <label className="form-check-label" for="inlineCheckbox2">Terms and Conditions are clearly displayed</label>
                                                                    </div>
                                                                    <div className="form-check form-check">
                                                                        <input type="checkbox" className="form-check-input" id="inlineCheckbox3" value="option3" />
                                                                        <label className="form-check-label" for="inlineCheckbox3">Return, refund and cancellation policy are clearly displayed</label>
                                                                    </div>
                                                                    <div className="form-check form-check">
                                                                        <input type="checkbox" className="form-check-input" id="inlineCheckbox4" value="option4" />
                                                                        <label className="form-check-label" for="inlineCheckbox4">Privacy policy is clearly displayed</label>
                                                                    </div>
                                                                    <div className="form-check form-check">
                                                                        <input type="checkbox" className="form-check-input" id="inlineCheckbox5" value="option5" />
                                                                        <label className="form-check-label" for="inlineCheckbox5">Pricing of good/services clearly displayed</label>
                                                                    </div>
                                                                    <div className="form-check form-check">
                                                                        <input type="checkbox" className="form-check-input" id="inlineCheckbox6" value="option6" />
                                                                        <label className="form-check-label" for="inlineCheckbox6">Your website is TLS secure</label>
                                                                    </div>
                                                                    <p id="display_output" style={{"display":"none", "color":"red"}}> Please select atleast one..</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 col-sm-12"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Billing Descriptor</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="billing" placeholder="Max 25 Characters" />
                                                        <small className="text-muted">How applicant would like to appear on a credit card statement.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <section className="block">
                                            <h3 className="text-start">1.1 Contact Details</h3>
                                            <p className="text-start">Please provide the relevant contact information. Applicants to inform RDP of any future changes of contacts.</p>
                                            <hr />
                                            <h4 className="text-start">Business Contact</h4>
                                            <p className="text-start">Main contact person for liasing business with RDP.</p>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Name </label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="buss_fname" placeholder="Firstname" />
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="buss_lname" placeholder="Lastname" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Email </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="email" className="form-control" name="buss_email" placeholder="example@example.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Phone Number </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <input type="text" className="form-control" name="buss_countryCode" placeholder="Country Code" />
                                                                </div>
                                                                <div className="col-md-9 col-sm-12">
                                                                    <input type="text" className="form-control" name="buss_pNumber" placeholder="Phone Number" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <hr />

                                        <section className="block">
                                            <h4 className="text-start">Technical / Integration Contact</h4>
                                            <p className="text-start">Main contact person for integration of payment solutions onto applicant's platform (if any).</p>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Name </label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="tech_fname" placeholder="Firstname" />
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="tech_lname" placeholder="Lastname" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Email </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="email" className="form-control" name="tech_email" placeholder="example@example.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Phone Number </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <input type="text" className="form-control" name="tech_countryCode" placeholder="Country Code" />
                                                                </div>
                                                                <div className="col-md-9 col-sm-12">
                                                                    <input type="text" className="form-control" name="tech_pNumber" placeholder="Phone Number" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <hr />

                                        <section className="block">
                                            <h4 className="text-start">Risk / Chargeback Contact</h4>
                                            <p className="text-start">Main contact person for chargeback cases of applicant's transactions.</p>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="risk_fname" placeholder="Firstname" />
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="risk_lname" placeholder="Lastname" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Email </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="email" className="form-control" name="risk_email" placeholder="example@example.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Phone Number </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <input type="text" className="form-control" name="risk_countryCode" placeholder="Country Code" />
                                                                </div>
                                                                <div className="col-md-9 col-sm-12">
                                                                    <input type="text" className="form-control" name="risk_pNumber" placeholder="Phone Number" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <hr />

                                        <section className="block">
                                            <h4 className="text-start">Support / E-mail Notification Contact</h4>
                                            <p className="text-start">Main contact person for updates.</p>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Name </label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="support_fname" placeholder="Firstname" />
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <input type="text" className="form-control" name="support_lname" placeholder="Lastname" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Email </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="email" className="form-control" name="support_email" placeholder="example@example.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Phone Number </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <input type="text" className="form-control" name="support_countryCode" placeholder="Country Code" />
                                                                </div>
                                                                <div className="col-md-9 col-sm-12">
                                                                    <input type="text" className="form-control" name="support_pNumber" placeholder="Phone Number" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="block mt-4">
                                            <h3 className="text-start">1.2 Merchant Bank Account Information</h3>
                                            <p className="text-start">Please provide account details in which RDP will fund to.</p>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>Bank Name </label>
                                                    </div>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input type="text" className="form-control" name="merchant_bank" placeholder="Bank Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div class="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Company Registered Address </label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="merchant_add" placeholder="Street Address" />
                                                            <input type="text" className="form-control mt-2" placeholder="Street Address Line 2" />
                                                            <div className="row">
                                                                <div className="col-md-6 col-12">
                                                                    <input type="text" className="form-control mt-2" placeholder="City" />
                                                                </div>
                                                                <div className="col-md-6 col-12">
                                                                    <input type="text" className="form-control mt-2" placeholder="Postal/ Zip Code" />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 col-12">
                                                                    <input type="text" className="form-control mt-2" placeholder="State/Province" />
                                                                </div>
                                                                <div className="col-md-6 col-12"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>SWIFT BIC</label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="merchant_bic" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Account Number</label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="merchant_accNum" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>IBAN</label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="merchant_iban" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Account Currency</label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="merchant_accCurr" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Beneficiary Bank Rounting Number</label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="merchant_bbr" placeholder="e.g. Fedwire Number, IFSC" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <label>Local / Domestic Bank Code</label>
                                                        </div>
                                                        <div className="col-md-9 col-sm-12">
                                                            <input type="text" className="form-control" name="dbc" placeholder="e.g. Sort code, Brach code" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="d-flex form-wizard  mt-5 w-50 m-auto">

                                            <button type="button" class="btn btn-next me-3 ">Next</button>
                                            <button type="button" class="btn btn-save">Save</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="two mt-4">
                                            <h3 className="text-start">Section 2: Beneficial Owners And Director</h3>
                                            <p className="text-start">
                                                Please ensure that all owners with 25% (or more) direct or indirect ownership in the applying company are listed down with their following details.
                                            </p>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Number(s) Of Beneficial Owner(s) <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <select className="form-control" name="beneficial_num" >
                                                            <option value="">Choose...</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                        <p id="selectValue" style={{ "display":"none", "color": "red"}}>*** Please Select an option.. ***</p>
                                                    </div>
                                                </div>
                                                <p className="errorbeneOwe" id="errorbeneOwe"> This is mandatory. Please select one..</p>
                                            </div>
                                        </section>
                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center w-50 align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="button" class="btn btn-save me-3">Save</button>
                                            <button type="button" class="btn btn-next">Next</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="three mt-4">
                                            <h3 className="text-start">Beneficial Owner 1</h3>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Name <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <input type="text" className="form-control required" name="beneficial_fname" placeholder="Firstname" required />
                                                            <p id="benefname" className="errorClass mt-1 text-danger" style={{"display":"none", "fontSize":"10px"}}>This Field is required..</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <input type="text" className="form-control required" name="beneficial_lname" placeholder="Lastname" required />
                                                            <p id="benelname" className="errorClass mt-1 text-danger" style={{"display":"none", "fontSize":"10px"}}>This Field is required..</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Ownership</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="option1" />
                                                            <label className="form-check-label" for="exampleRadios1"> Direct ownership </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option2" />
                                                            <label className="form-check-label" for="exampleRadios2"> Indirect ownership </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>% Of Ownership</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="perOfowener" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Is This Beneficial Owner A Director/Authorised Signatory? <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios22" id="exampleRadios3" value="option1" />
                                                            <label className="form-check-label" for="exampleRadios3"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios22" id="exampleRadios4" value="option2" />
                                                            <label className="form-check-label" for="exampleRadios4"> No </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Nationality</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="beneficial_nationality" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>ID Document Number</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="beneficial_iIdDoc" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>ID Document Type</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="beneficial_docType" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Phone Number</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-12">
                                                                <input type="text" className="form-control" name="beneficial_CountryCode" placeholder="Country Code" />
                                                            </div>
                                                            <div className="col-md-9 col-sm-12">
                                                                <input type="text" className="form-control" name="beneficial_pNumber" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>E-mail</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="email" className="form-control" name="beneficial_email" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Company Registered Address</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" id="beneficial_Addr" placeholder="Street Address" />
                                                        <input type="text" className="form-control mt-2" placeholder="Street Address Line 2" />
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="City" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="State/Province" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="Postal/ Zip Code" required />
                                                            </div>
                                                            <div className="col-md-6 col-12"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="button" class="btn btn-save me-3">Save</button>
                                            <button type="button" class="btn btn-next">Next</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="three mt-4">
                                            <h3 className="text-start">Beneficial Owner 2</h3>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Name <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <input type="text" className="form-control bene2" name="beneficial2_fname" placeholder="Firstname" required />
                                                            <p id="bfname" className="errorClass mt-1 text-danger" style={{"display":"none", "fontSize":"10px"}}>This Field is required..</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <input type="text" className="form-control bene2" name="beneficial2_lname" placeholder="Lastname" required />
                                                            <p id="blname" className="errorClass mt-1 text-danger" style={{"display":"none", "fontSize":"10px"}}>This Field is required..</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Ownership</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios21" id="exampleRadios111" value="option1" />
                                                            <label className="form-check-label" for="exampleRadios111"> Direct ownership </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios21" id="exampleRadios222" value="option2" />
                                                            <label className="form-check-label" for="exampleRadios222"> Indirect ownership </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>% Of Ownership</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="perOwne" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Is This Beneficial Owner A Director/Authorised Signatory? <span className="text-danger">*</span></label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios32" id="exampleRadios333" value="option1" />
                                                            <label className="form-check-label" for="exampleRadios333"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios32" id="exampleRadios444" value="option2" />
                                                            <label className="form-check-label" for="exampleRadios444"> No </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Nationality</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="beneficial2_nationality" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>ID Document Number</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="beneficial2_iIdDoc" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>ID Document Type</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="beneficial2_docType" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Phone Number</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-12">
                                                                <input type="text" className="form-control" name="beneficial2_CountryCode" placeholder="Country Code" />
                                                            </div>
                                                            <div className="col-md-9 col-sm-12">
                                                                <input type="text" className="form-control" name="beneficial2_pNumber" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>E-mail</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="email" className="form-control" name="beneficial2_email" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Company Registered Address</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" id="beneficial2_Addr" placeholder="Street Address" />
                                                        <input type="text" className="form-control mt-2" placeholder="Street Address Line 2" />
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="City" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="State/Province" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="Postal/ Zip Code" required />
                                                            </div>
                                                            <div className="col-md-6 col-12"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="button" class="btn btn-save me-3">Save</button>
                                            <button type="button" class="btn btn-next">Next</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="directorSection mt-4">
                                            <h3 className="text-start">Director/Authorised Signatory</h3>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label for="comp_name text-bold">Name <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <input type="text" className="form-control required" name="director_fname" placeholder="Firstname" required />
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <input type="text" className="form-control required" name="director_lname" placeholder="Lastname" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Nationality</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="director_nationality" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>ID Document Number</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="director_idDoc" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>ID Document Type</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="director_docType" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Phone Number</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-12">
                                                                <input type="text" className="form-control" name="director_cCode" placeholder="Country Code" />
                                                            </div>
                                                            <div className="col-md-9 col-sm-12">
                                                                <input type="text" className="form-control" name="directo_pNumber" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>E-mail</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="email" className="form-control" name="director_email" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Current Home Address</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="text" className="form-control" name="director_current" placeholder="Street Address" />
                                                        <input type="text" className="form-control mt-2" placeholder="Street Address Line 2" />
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="City" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="State/Province" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text" className="form-control mt-2" placeholder="Postal/ Zip Code" />
                                                            </div>
                                                            <div className="col-md-6 col-12"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="button" class="btn btn-save me-3">Save</button>
                                            <button type="button" class="btn btn-next">Next</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="four mt-4">
                                            <h3 className="text-start">Section 3: Additional Information</h3>
                                            <p className="text-left">Please provide further information about your company.</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Does Your Company Fulfill Orders Directly?</label>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios5" value="option1" />
                                                        <label className="form-check-label" for="exampleRadios5"> Yes </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios6" value="option2" />
                                                        <label className="form-check-label" for="exampleRadios6"> No </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios7" value="option3" />
                                                        <label className="form-check-label" for="exampleRadios7"> Not Applicable </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>If 'No', Please Provide Fulfillment Details</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="textArea1" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Does Your Company Operate Affiliate Programs?</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios4" id="exampleRadios8" value="option1" />
                                                            <label className="form-check-label" for="exampleRadios8"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios4" id="exampleRadios9" value="option2" />
                                                            <label className="form-check-label" for="exampleRadios9"> No </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>If 'Yes', Please Provide Details Of Your Affiliate Programme</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="textArea2" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Name Of Previous/Current Processor(s) And/Or Acquirers(s)</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="addiName" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Reason For Applying To RDP</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="reason" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>E-mail</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="addiEmail" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Is Your Website PCI DSS Compliant Or Are You Using The Services Of A PCI Compliant Host?</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option selected disabled></option>
                                                                <option value="Website is PCI DSS compliant.">Website is PCI DSS compliant.</option>
                                                                <option value="Using a PCI compliant host.">Using a PCI compliant host.</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="button" class="btn btn-save me-3">Save</button>
                                            <button type="submit" class="btn btn-next">Next</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="five mt-4">
                                            <h3 className="text-start">Section 4: Official Documents</h3>
                                            <p className="text-left">Multiple files can be uploaded per field. Space limit per field - 5.0MB. Acceptable files formats: pdf, doc, docx, zip, jpg, jpeg, png.</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Certification Of Incorporation</label>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="custom-file">
                                                        <input type="file" className="certification" id="certificate" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Extract Of Company's Bank Statement</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div Name="custom-file">
                                                            <input type="file" className="companyBankStat" id="bankStat" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Latest Share Register/Alternative Proof Of Ownership</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="custom-file">
                                                            <input type="file" className="alternative" id="alternative" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Passport Of Beneficial Owner(s)</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="custom-file">
                                                            <input type="file" className="pass" id="pass" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <label>Beneficial Owner(s) Proof of Address</label>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="custom-file">
                                                            <input type="file" className="beneOwner" id="beneOwner" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="button" class="btn btn-save me-3">Save</button>
                                            <button type="button" class="btn btn-next">Next</button>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <section className="six mt-5">
                                            <h3 className="text-start">Section 5: Terms And Conditions</h3>
                                            <p className="text-left">Please read the below T&Cs before proceeding to submit the Merchant Application Form.</p>
                                            <hr />
                                            <h5 className="text-left">Terms And Conditions<span className="text-danger">*</span></h5>
                                            <div className="d-flex flex-row align-items-start">
                                                <input type="checkbox" name="agree" id="agree" className="mx-3" />
                                                <p className="text-start">By clicking the submit button, I agree to the following: <span className="text-danger">*</span></p>
                                            </div>
                                            <p className="text-start">
                                                The Individual submitting this Merchant Application Form certifies that all the information and documentation submitted in connection with this application form is: <br />
                                                (i) correct and complete and <br />
                                                (ii) undertakes to inform us immediately in case of any material changes to the information or documentation provided and this in particular in case of any changes of Owners/Shareholders, or Ultimate Beneficial Owners.
                                            </p>
                                        </section>
                                        <div className="form-wizard-buttons d-flex flex-row justify-content-center align-items-center px-5 mt-3">
                                            <button type="button" class="btn btn-previous me-3">Previous</button>
                                            <button type="submit" class="btn btn-submit">Submit</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Test

