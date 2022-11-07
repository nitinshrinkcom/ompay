import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/test.css'
import '../components/css/wizard.css'
import companylogo1 from '../components/img/logo/logo_1.png';
import checkLogo from '../components/img/logo/check.png';
import $ from "jquery";


class Test extends Component {
    constructor() {
        super();
        this.state = {
            company_name: "",
            company_number: "",
            stOne: "",
            stTwo: "",
            city: "",
            stateAdd: "",
            zipCode: "",
            firsName: "",
            lasName: "",
            email: "",
            weburl: "",
            emv: "",
            checkBxVal: false,
            value: "", //Select tag initial Value
        }
    }
    handleCompany_name = event => {
        this.setState({ company_name: event.target.value });
    }

    handleCompany_number = event => {
        this.setState({ company_number: event.target.value });
    }

    handleStreetOne = event => {
        this.setState({ stOne: event.target.value });
    }
    handleStreetTwo = event => {
        this.setState({ stTwo: event.target.value });
    }
    handleCity = event => {
        this.setState({ city: event.target.value });
    }
    handleStateAdd = event => {
        this.setState({ stateAdd: event.target.value });
    }
    handleZipCode = event => {
        this.setState({ zipCode: event.target.value });
    }


    handleFirstName = event => {
        this.setState({ firsName: event.target.value });
    }

    handleLastName = event => {
        this.setState({
            lasName: event.target.value
        });
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleUrl = event => {
        this.setState({ weburl: event.target.value });
    }

    handleEMV = event => {
        this.setState({ emv: event.target.value });
    }

    // CheckBox Value checking
    handleCheckBoxValue = event => {
        const checked = event.target.checked;
        if (checked) {
            const checkedValue = event.target.value;
            this.setState({ checkBxVal: checkedValue });
        }
    }

    // Select Tag data
    handleValue = event => {
        this.setState({ value: event.target.value });
        console.log(event.target.value);
    }

    handleSubmit = () => {
        // const { company_name, company_number, stOne, stTwo, stateAdd, city, zipCode, value, firsName, lasName, email, weburl, checkBxVal, emv } = this.state;
        // alert(`The details are :-> 
        //  Company name: ${company_name},
        //  Company number: ${company_number},
        //  Address: ${stOne}, ${stTwo}, ${city}, ${stateAdd}, ${zipCode}
        //  Country: ${value},
        //  FirstName: ${firsName},
        //  LastName: ${lasName},
        //  Email: ${email},
        //  URL: ${weburl},
        //  Use Transactions? : ${checkBxVal},
        //  Exp Monthly Volume: ${emv}
        //  `);
        //  alert("Your Form has been Submitted Successfully!");
    };

    componentDidMount() {

        $(document).ready(function () {

           $('.btn1').on('click', function(event){
               if(event.target.id === "transButton")
               {
                   $('#comp_name_error').show();
               }else{
                   return true;
               }
           });

           $('.btn2').on('click', function(event){
                if(event.target.id === "transButton2")
                {
                    $('#comp_number_error').show();
                
                }else{
                    return true;
                }
            });
            // $('.btn3').on('click', function(event){
            //     if(event.target.id === "transButton3")
            //     {
            //         $('#comp_country_error').show();
                
            //     }else{
            //         return true;
            //     }
            // });
            $('.btn4').on('click', function(event){
                if(event.target.id === "transButton4")
                {
                    $('#comp_AddressLineOne_error').show();
                    $('#comp_AddressLineTwo_error').show();
                    $('#comp_zipCode_error').show();
                
                }else{
                    return true;
                }
            });
            $('.btn5').on('click', function(event){
                if(event.target.id === "transButton5")
                {                 
                    $('#comp_firstName_error').show();
                    $('#comp_lastName_error').show();                     
                
                }else{
                    return true;
                }
            });
            $('.btn6').on('click', function(event){
                if(event.target.id === "transButton6")
                {
                    $('#comp_email_error').show();
                
                }else{
                    return true;
                }
            });
            $('.btn7').on('click', function(event){
                if(event.target.id === "transButton7")
                {
                    $('#comp_websiteURL_error').show();
                
                }else{
                    return true;
                }
            });

            $('.btn8').on('click', function(event){
                var radio = $('input[name="transaction_value"]:checked').val();
                if(!radio)
                {
                    alert('Please select a transaction')
                    $('#comp_transactions_error').show();
                
                }else{
                    return true;
                }
            });

            $('.btn9').on('click', function(event){
                if(event.target.id === "transButton9")
                {
                    $('#comp_expectedMonthly_error').show();
                
                }else{
                    return true;
                }
            });

            // =============== Dynamic Dropdown Select =============================
            var selectedCountry = "";
            var selectedRegion = "";
            var selectedCity = "";
            // This is a demo API key for testing purposes. You should rather request your API key (free) from http://battuta.medunes.net/
            var BATTUTA_KEY = "00000000000000000000000000000000";
            // Populate country select box from battuta API
           var url = "https://battuta.medunes.net/api/country/all/?key=" + BATTUTA_KEY + "&callback=?";
          
            // EXTRACT JSON DATA.
            $.getJSON(url, function(data) {
              console.log(data);
              $.each(data, function(index, value) {
                // APPEND OR INSERT DATA TO SELECT ELEMENT.
                $("#country").append(
                  '<option value="' + value.code + '">' + value.name + "</option>"
                );
              });
            });
            // Country selected --> update region list .
            $('.btn3').on('click', function(event){
                if(event.target.id === "transButton3")
                {
                    $('#comp_country_error').show();
                
                }else{
                    return true;
                }
            });
            $("#country").change(function() {
              selectedCountry = this.options[this.selectedIndex].text;
              var countryCode = $("#country").val();
             
             if(selectedCountry.length > 0){
                $('#comp_country_error').hide();                
                $('#transButton3').hide();   
             }
              // Populate country select box from battuta API
              url =
                "https://battuta.medunes.net/api/region/" +
                countryCode +
                "/all/?key=" +
                BATTUTA_KEY +
                "&callback=?";
                
              $.getJSON(url, function(data) {
              
                $("#region option").remove();
                $('#region').append('<option value="">Please select your region</option>');
                $.each(data, function(index, value) {
                  // APPEND OR INSERT DATA TO SELECT ELEMENT.
                  $("#region").append(
                    '<option value="' + value.region + '">' + value.region + "</option>"
                  );
                });

              });
            });     
            
            $('.btn4').on('click', function(event){
                if(event.target.id === "transButton4")
                {
                    $('#comp_region_error').show();                
                }else{
                    return true;
                }
            });

            // Region selected --> updated city list
            $("#region").on("change", function() {
              selectedRegion = this.options[this.selectedIndex].text;
              // Populate country select box from battuta API
              var countryCode = $("#country").val();
              var region = $("#region").val();

              if(selectedRegion.length > 0){
                $('#comp_region_error').hide();   
                $('#transButton4').hide();  
             }

            //   if(region.length > 0){
            //     $('#comp_country_error').hide();                
            //     $('#transButton4').hide();   
            //  }
              url =
                "https://battuta.medunes.net/api/city/" +
                countryCode +
                "/search/?region=" +
                region +
                "&key=" +
                BATTUTA_KEY +
                "&callback=?";
              $.getJSON(url, function(data) {
                console.log(data);
                $("#city option").remove();
                $('#city').append('<option value="">Please select your city</option>');
                $.each(data, function(index, value) {
                  // APPEND OR INSERT DATA TO SELECT ELEMENT.
                  $("#city").append(
                    '<option value="' + value.city + '">' + value.city + "</option>"
                  );
                });
              });
            });

            // city selected --> update location string
            $('.btn4').on('click', function(event){
                if(event.target.id === "transButton4")
                {
                    $('#comp_city_error').show();
                
                }else{
                    return true;
                }
            });
            $("#city").on("change", function() {
              selectedCity = this.options[this.selectedIndex].text;
              if(selectedCity.length > 0){
                $('#comp_city_error').hide();                
                $('#transButton4').hide();   
             }

              $("#location").html(
                "Locatation: Country: " +
                  selectedCountry +
                  ", Region: " +
                  selectedRegion +
                  ", City: " +
                  selectedCity
              );
            });

            // =============== Progress Bar =============================
            var progressBar = {
                Bar: $('#progress-bar'),
                Reset: function () {
                    if (this.Bar) {
                        this.Bar.find('li').removeClass('active');
                    }
                },
                Next: function () {
                    $('#progress-bar li:not(.active):first').addClass('active');
                },
                Back: function () {
                    $('#progress-bar li.active:last').removeClass('active');
                }
            }

            // =============== End of Progress Bar =============================

            $('.form-wizard fieldset:first').fadeIn('slow');
            $('#company_name_style').on('focus', function () {
                $('#submitAlert').hide();
                
                $('#comp_name_error').hide();
                $('#transButton').hide();               
            })           
            $('#company_number_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_number_error').hide();                
                $('#transButton2').hide();  
                 
            })  

            
            $('#company_streetAddressLineOne_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_AddressLineOne_error').hide();                           
            })
            $('#company_streetAddressLineTwo_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_AddressLineTwo_error').hide();              
            })

            $('#zipCode_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_zipCode_error').hide();  
                $('#transButton4').hide();                            
            })
           
           
            $('#firstName_style').on('focus', function () {
                $('#submitAlert').hide();  
               
                $('#comp_firstName_error').hide(); 
            })  
            $('#lastName_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_lastName_error').hide();                
                $('#transButton5').hide();
            })

            $('#email_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_email_error').hide(); 
                $('#transButton6').hide();
            })
            $('#websiteURL_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_websiteURL_error').hide(); 
                $('#transButton7').hide(); 

                $('#transButton8').hide(); 
            })
            
            $('#expectedMonthly_style').on('focus', function () {
                $('#submitAlert').hide();                
               
                $('#comp_expectedMonthly_error').hide(); 
                $('#transButton9').hide(); 
            })

           
           

            // next step
            $('.form-wizard .btn-next').on('click', function (e) {
                
                var parent_fieldset = $(this).parents('fieldset');
                var next_step = true;
                var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
                if (next_step) {
                    parent_fieldset.fadeOut(400, function () {
                        // change icons
                        current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                        // show next step
                        $(this).next().fadeIn();
                        progressBar.Next();
                    });
                }
            }
            );

            // previous step
            $('.form-wizard .btn-previous').on('click', function (e) {

                // navigation steps / progress steps
                $(this).parents('fieldset').fadeOut(400, function () {
                    // show previous step
                    $(this).prev().fadeIn();
                    progressBar.Back();
                });
            });

            // $('.form-wizard .btn-submit').on('click', function (event) {
            //     if ($('input').val() === '') {
            //         event.preventDefault();
            //         $('#submitAlert').show();
            //     }
            //     else {
            //         return true;
            //     }
            // });

        });

    }


    render() {
        const checkBoxVal1 = 'Yes'; //checkBox Values defined here.
        const checkBoxVal2 = 'No';

        return (
            <div className="wizardFormBox">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-4 col-12">
                        <Link className="logo-text-white" to="/"><img className="wizardLogo img-fluid" src={companylogo1} alt="companyLogo" /></Link>
                    </div>
                    <div className="col-md-6 col-lg-8 col-xl-8 col-12">
                        <h3 className="text-center customh3">
                            Create your Open Acquiring account
                        </h3>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-12 mt-5">
                        <div className="headingbox1 mx-5">
                            <div className="box1 d-flex flex-column">
                                <div className="text-2 d-flex">
                                    <img src={ checkLogo } alt="check" className='checkBoxImage img-fluid img-responsive'/><span><h3> Get Started quickly </h3></span>
                                </div>
                                <p className="text-justify boxparaText"> Integrate with developer-friendly APIs.</p>
                            </div>
                        </div>
                        <div className="headingbox1 mx-5 mt-3">
                            <div className="box1 d-flex flex-column">
                                <div className="text-2 d-flex">
                                    <img src={ checkLogo } alt="check" className='checkBoxImage img-fluid img-responsive' /><span><h3> We support any business model </h3></span>
                                </div>
                                <p className="text-justify boxparaText"> E-commerce, recurring, tokenisation and more - all within a unified platform.</p>
                            </div>
                        </div>
                        <div className="headingbox1 mx-5 mt-3">
                            <div className="box1 d-flex flex-column">
                                <div className="text-2 d-flex">
                                    <img src={ checkLogo } alt="check" className='checkBoxImage img-fluid img-responsive'/><span><h3> Bin tons of Businessess </h3></span>
                                </div>
                                <p className="text-justify boxparaText"> Open Acquiring is trusted by ambitious startups and enterprises of every size.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-12 mt-4">
                        <section className="form-box wizardBg" id="form-box">
                            <div className="container">
                                <div className="">
                                    <div className="row">
                                        <div className="col-12">
                                            <ul id="progress-bar" className="progressbar">
                                                <li className="active">1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12 form-wizard formwizardBg">
                                        <form onSubmit={this.handleSubmit} action="/thankyou" method="GET">
                                            <fieldset id="f1">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center">Company Name</h3>
                                                <div className="row mt-2">
                                                    <div className="col-md-12 col-xs-12 col-sm-12">
                                                        <input type="text"
                                                            className="form-control"
                                                            id="company_name_style"
                                                            name="company_name"
                                                            placeholder="Please insert your registered company name"
                                                            value={this.company_name}
                                                            onChange={this.handleCompany_name}
                                                        />
                                                        <p className="text-danger text-center" id="comp_name_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px", "display": "none" }}>Please first enter your details! </p>
                                                        <div className="form-wizard-buttons d-block m-auto mt-3 px-3 w-50 position-relative">
                                                            <button type="button" disabled={!this.state.company_name} className="btn btn-next me-3">Next <i className="fa fa-arrow-right me-2"></i></button>
                                                            <button type="button" className="customButtonTransparent btn1" id="transButton">&nbsp;</button>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset id="f2">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center">Company Number</h3>
                                                <div className="row mt-2">
                                                    <div className="col-md-12 col-xs-12 col-sm-12">
                                                        <input type="text"
                                                            className="form-control"
                                                            id="company_number_style"
                                                            name="company_number"
                                                            placeholder="Please insert your registered company number"
                                                            value={this.company_number}
                                                            onChange={this.handleCompany_number}
                                                        />
                                                        <p className="text-danger text-center" id="comp_number_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Company Number!</p>
                                                    </div>
                                                    <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                        <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                <button type="button" disabled={!this.state.company_number} className="btn btn-next me-3" >
                    Next <i className="fa fa-arrow-right me-2"></i></button>
                                                        <button type="button" className="buttonTransparentcust btn2" id="transButton2">&nbsp;</button>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset id="f3">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center">Country</h3>
                                                <div className="row mt-2">
                                                    <div className="col-md-12 col-xs-12 col-sm-12">
                                                        <div className="form-group mt-2">
                                                            <div id="select_country_style">
                                                                <select className="form-control" name="countries" 
                                                                id="country" onChange={this.handleValue} >
                                                                    <option value="" >Choose...</option>
                                                                </select>  
                                                                <p className="text-danger text-center" id="comp_country_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px", "display": "none" }}>Please first Select your Country!</p>                                                                                  
                                                                              
                                                            </div>     
                                                              
                                                            
                                                        </div>                                                      
                                                        
                                                        {/* <p className="text-danger text-center" id="comp_region_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first Select your Region!</p>
                                                        <p className="text-danger text-center" id="comp_city_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first Select your City!</p> */}
                                                    </div>                                                       
                                                    
                                                    <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                        <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                        <button type="button" className="btn btn-next" disabled={!this.state.value}>Next<i className="fa fa-arrow-right me-2"></i></button>
                                                        <button type="button" className="buttonTransparentcust btn3" id="transButton3">&nbsp;</button>
                                                    </div>
                                                    
                                              
                                                </div>
                                            </fieldset>
                                         
                                            {/* <fieldset id="f3">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center">Country</h3>
                                                <div className="form-group mt-2">
                                                    <select className="form-control" name="countries" id="country" onChange={this.handleValue} >
                                                        <option value="" >Choose...</option>
                                                    </select>
                                                    <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                        <button type="button" class="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                        <button type="button" class="btn btn-next" disabled={!this.state.value}>Next<i className="fa fa-arrow-right me-2"></i></button>
                                                        <button type="button" className="buttonTransparentcust" id="transButton3">&nbsp;</button>
                                                    </div>
                                                </div>
                                            </fieldset> */}

                                            <fieldset id="f4">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center">Address</h3>
                                                <div className="row mt-2">
                                                    <div className="col-md-2 col-xs-12 col-sm-12">
                                                    </div>
                                                    <div className="col-md-8 col-xs-12 col-sm-12">
                                                        
                                                        <input type="text"
                                                            className="form-control"
                                                            name="streetOne"
                                                            id="company_streetAddressLineOne_style"
                                                            placeholder="Street Address"
                                                            value={this.stOne}
                                                            onChange={this.handleStreetOne}
                                                        /> 
                                                         
                                                         <p className="text-danger text-center" id="comp_AddressLineOne_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Address Line One!</p>
                                                        <input type="text"
                                                            className="form-control mt-2"
                                                            name="streetTwo"
                                                            id="company_streetAddressLineTwo_style"
                                                            placeholder="Street Address Line 2"
                                                            value={this.stTwo}
                                                            onChange={this.handleStreetTwo}
                                                        /> 


                                                <p className="text-danger text-center" id="comp_AddressLineTwo_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Address Line two!</p>
                                                         
                                                       
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <div id="select_region_style">
                                                                    <select className="form-control mt-2" name="region" id="region" onChange={this.handleStateAdd} >
                                                                        <option value="" >Choose...</option>
                                                                    </select>

                                                                    <p className="text-danger text-center" id="comp_region_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first select your region!</p>
                                                                </div>
                                                                {/* <input type="text"
                                                                    className="form-control mt-2"
                                                                    name="state"
                                                                    placeholder="State/Province"
                                                                    value={this.stateAdd}
                                                                    onChange={this.handleStateAdd}
                                                                /> */}
                                                            </div>

                                                            <div className="col-md-6 col-12">
                                                                <div id="select_city_style">
                                                                    <select className="form-control mt-2" name="city" id="city" onChange={this.handleCity} >
                                                                        <option value="" >Choose...</option>
                                                                    </select>
                                                                    <p className="text-danger text-center" id="comp_city_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first select your city!</p>
                                                                </div>
                                                           
                                                                {/* <input type="text"
                                                                    className="form-control "
                                                                    name="city"
                                                                    placeholder="City"
                                                                    value={this.city}
                                                                    onChange={this.handleCity}
                                                                /> */}
                                                                
                                                            </div>

                                                           
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <input type="text"
                                                                    className="form-control mt-2"
                                                                    name="zipCode"
                                                                    id="zipCode_style"
                                                                    placeholder="Postal/ Zip Code"
                                                                    value={this.zipCode}
                                                                    onChange={this.handleZipCode}
                                                                />
                                                                <p className="text-danger text-center" id="comp_zipCode_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Zip Code!</p>
                                                            </div>
                                                            <div className="col-md-6 col-12"></div>
                                                        </div>
                                                       
                                                       
                                                        {/* <p className="text-danger text-center" id="comp_AddressLineTwo_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Address Line two!</p> */}
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-xs-12 col-sm-12">
                                                </div>
                                                {/* <p className="text-danger text-center" id="comp_AddressLineOne_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Address Line One!</p>
                                                <p className="text-danger text-center" id="comp_AddressLineTwo_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Address Line two!</p> */}
                                                
                                                <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                    <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                    <button type="button" className="btn btn-next" disabled={!this.state.stOne || !this.state.stTwo || !this.state.city || !this.state.stateAdd || !this.state.zipCode}>Next<i className="fa fa-arrow-right me-2"></i></button>

                                                    {/* <button type="button" className="btn btn-next" disabled={ !this.state.city || !this.state.stateAdd }>Next<i className="fa fa-arrow-right me-2"></i></button> */}
                                                    <button type="button" className="buttonTransparentcust btn4" id="transButton4">&nbsp;</button>
                                                </div>
                                            </fieldset>

                                            <fieldset id="f5">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center"> Contact Person</h3>
                                                <div className="row mt-2">
                                                    <div className="col-md-6 col-xs-12 col-sm-12">
                                                        <input type="text"
                                                            className="form-control mt-2"
                                                            name="firsName"
                                                            id="firstName_style"
                                                            placeholder="First Name"
                                                            value={this.firsName}
                                                            onChange={this.handleFirstName}
                                                        />
                                                        <p className="text-danger text-center" id="comp_firstName_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your First Name!</p>
                                                        
                                                    </div>
                                                    <div className="col-md-6 col-xs-12 col-sm-12">
                                                        <input type="text"
                                                            className="form-control mt-2"
                                                            name="lasName"
                                                            id="lastName_style"
                                                            placeholder="Last Name"
                                                            value={this.lasName}
                                                            onChange={this.handleLastName}
                                                        />
                                                        <p className="text-danger text-center" id="comp_lastName_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px","display": "none" }}>Please first enter your Last Name!</p>
                                                    
                                                    </div>
                                                    <p className="text-danger text-center" style={{ "fontWeight": "600", "wordSpacing": "1.5px" }}> </p>
                                                    <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                        <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                        <button type="button" className="btn btn-next" disabled={!this.state.firsName || !this.state.lasName} >Next<i className="fa fa-arrow-right me-2"></i></button>
                                                        <button type="button" className="buttonTransparentcust btn5" id="transButton5">&nbsp;</button>        
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset id="f6">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center"> Email</h3>
                                                <input type="text"
                                                    className="form-control mt-2"
                                                    id="email_style"
                                                    name="email" placeholder="Only corporate/work email is allowed"
                                                    value={this.email}
                                                    onChange={this.handleEmail}
                                                />
                                                <p className="text-danger text-center" id="comp_email_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px", "display": "none" }}>Please first enter your Email! </p>
                                                <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                    <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                    <button type="button" className="btn btn-next" disabled={!this.state.email} >Next<i className="fa fa-arrow-right me-2"></i></button>
                                                    <button type="button" className="buttonTransparentcust btn6" id="transButton6">&nbsp;</button>            
                                                </div>
                                            </fieldset>

                                            <fieldset id="f7">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center"> Website url</h3>
                                                <input type="text"
                                                    className="form-control mt-2"
                                                    name="webUrl"
                                                    id="websiteURL_style"
                                                    placeholder="Enter your website address here"
                                                    value={this.weburl}
                                                    onChange={this.handleUrl}
                                                />
                                                <p className="text-danger text-center" id="comp_websiteURL_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px", "display": "none" }}>Please first enter your Website URL! </p>
                                                
                                                <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                    <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                    <button type="button" className="btn btn-next" disabled={!this.state.weburl} >Next<i className="fa fa-arrow-right me-2"></i></button>
                                                    <button type="button" className="buttonTransparentcust btn7" id="transButton7">&nbsp;</button>
                                                </div>
                                            </fieldset>

                                            <fieldset id="f8">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center">Do you currently process transactions online <span className="text-danger">*</span> </h3>
                                                <div className="row">
                                                    <div className="col-md-4 col-xs-12 col-sm-12"></div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="radio-toolbar d-flex" id="radio_btns_tra">
                                                            <input
                                                                type="radio"
                                                                id="radioYes"
                                                                name="transaction_value"
                                                                value={checkBoxVal1}
                                                                defaultChecked={this.state.checkBxVal}
                                                                onChange={this.handleCheckBoxValue}
                                                            />
                                                            <label for="radioYes">YES</label>

                                                            <input
                                                                type="radio"
                                                                id="radioNo"
                                                                name="transaction_value"
                                                                value={checkBoxVal2}
                                                                defaultChecked={this.state.checkBxVal}
                                                                onChange={this.handleCheckBoxValue}
                                                            />
                                                            <label for="radioNo">NO</label>
                                                        </div>
                                                    </div>
                                                    <p className="text-danger text-center" id="comp_transactions_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px", "display": "none" }}>Please Select an option first! </p>
                                                    <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                        <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-1"></i>Previous</button>
                                                        <button type="button" className="btn btn-next" disabled={!this.state.checkBxVal}>Next<i className="fa fa-arrow-right me-2"></i></button>
                                                        <button type="button" className="buttonTransparentcust btn8" id="transButton8" style={{'display':'block'}}>&nbsp;</button>        
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12"></div>
                                                </div>
                                            </fieldset>

                                            <fieldset id="f9">
                                                <h3 className="text-center text-lg-center text-md-center text-sm-center"> Expected Monthly Volume (USD)</h3>
                                                <input type="text"
                                                    className="form-control mt-2"
                                                    name="emv"
                                                    id="expectedMonthly_style"
                                                    value={this.emv}
                                                    onChange={this.handleEMV}
                                                />
                                                <p id="submitAlert" style={{ "color": "red", "display": "none" }}> ** Please fill up all the details properly... **</p>
                                                <p className="text-danger text-center" id="comp_expectedMonthly_error" style={{ "fontWeight": "600", "wordSpacing": "1.5px", "display": "none" }}>Please first enter your Expected Monthly!</p>
                                                <div className="form-wizard-buttons d-flex flex-row justify-content-center w-100 align-items-center px-5 mx-3 mt-3 position-relative">
                                                    <button type="button" className="btn btn-previous me-3"><i className="fa fa-arrow-left me-2"></i>Previous</button>
                                                    <button type="submit" className="btn btn-submit" disabled={!this.state.emv} id="btn-submit" >Submit</button>
                                                    <button type="button" className="buttonTransparentcust btn9" id="transButton9">&nbsp;</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test

