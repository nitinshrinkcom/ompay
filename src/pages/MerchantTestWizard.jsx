import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import logo from '../components/img/logo/compnyLog.png'
import '../components/css/test.css'
import $ from "jquery"
import BusinessOwners from './BusinessOwners';
import BillingImg from '../components/img/billing.png'
import DynamicDD from './DynamicDropdown';
import CountryDropdown from './CountrySelectDD'
import CountryCodeDD from './CountryCodeDD'
import bullets from '../components/img/bullet_arrow.png'


export default class MerchantTestWizard extends Component {



    constructor() {
        super();
        this.state = {
            shareholders: [], //============== **** USED THIS THING IN OLD MERCHANT CODE WHERE WE ARE ADDING AND DELETING SHAREHOLDER INPUT FIELDS DYNAMICALLY **** ====
            selectedValue: '', //===================== Default select tag value  =====================
            webChecked: false, //===================== Default value for website live is "False" =====================
            goodsYes: false, //======================= Default value for physical goods - "Yes" =====================
            goodsNo: false, //======================== Default value for physical goods - "No" =====================
            serverRadioBtn: false, //===================== default value for server integration - If Yes selected =====================
            selectedBankVal: '', //===================== Default value for "Bank Select" select tag =====================
            directorHolder: [], //===================== Initial empty array for adding director form on button click =====================
            currIBAN: '', //===================== Initial empty value of Iban input field =====================
            billingDesc: 'WWW.OPAC.COM',
            descriptorVal: '',
            transactionCheck: 'no'
        };

        this.handleCompany = this.handleCompany.bind(this); //=============== Select company value on change =====================
        this.handleWebChange = this.handleWebChange.bind(this); //===================== If user clicks on website is not live checkbox =====================
        this.handleGoodsChange = this.handleGoodsChange.bind(this); //=====================  If user clicks on 'Yes' in physical goods =====================
        this.handleGoodsChangeNo = this.handleGoodsChangeNo.bind(this); //===================== If user clicks on 'No' in physical goods =====================
        this.handleServerRadioBtn = this.handleServerRadioBtn.bind(this); //===================== If user clicks yes in server integration =====================
        // this.handleBankChange = this.handleBankChange.bind(this); //===================== If Select tag value of bank =====================
        this.directorFormDetails = this.directorFormDetails.bind(this); //===================== Calling Director form =====================
        this.onChangeIBAN = this.onChangeIBAN.bind(this); //===================== Input Field changing from null to something =====================
        this.checkIBAN = this.checkIBAN.bind(this); //===================== IBAN VALIDATOR =====================
        this.handleDescriptor = this.handleDescriptor.bind(this);
        this.handleTransaction = this.handleTransaction.bind(this);

    }


    handleDescriptor(event) {
        this.setState({ billingDesc: event.target.value });
        this.setState({ descriptorVal: event.target.value })
    }

    // =============== Passing IBAN Number to the input field ====================
    onChangeIBAN(event) {
        this.setState({ currIBAN: event.target.value });
    }

    //===================== Valiating IBAN Number =====================
    checkIBAN() {
        isValidIBANNumber(this.state.currIBAN)
        function isValidIBANNumber(input) {
            var CODE_LENGTHS = {
                AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
                CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
                FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
                HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
                LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
                MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
                RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26,
                AL: 28, BY: 28, EG: 29, GE: 22, IQ: 23, LC: 32, SC: 31, ST: 25,
                SV: 28, TL: 23, UA: 29, VA: 22, VG: 24, XK: 20
            };
            var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), //===================== Keep only alphanumeric characters =====================
                code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), //== Match and capture (1) the country code, (2) the check digits, and (3) the rest ====
                digits;

            //===================== Check syntax and length =====================

            if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
                document.getElementById('iban').value =''
                return alert('ENTERED IBAN NUMBER IS NOT VALID!');

            }
            else {
                alert('Validated!');
            }

            //===================== Rearrange country code and check digits, and convert chars to integer =====================
            digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
                return letter.charCodeAt(0) - 55;
            });
            //===================== Final check =====================

            return mod97(digits);
        }

        function mod97(string) {
            var checksum = string.slice(0, 2), fragment;
            for (var offset = 2; offset < string.length; offset += 7) {
                fragment = String(checksum) + string.substring(offset, offset + 7);
                checksum = parseInt(fragment, 10) % 97;
            }
            return checksum;
        }
    }

    //===================== Defining the website is live functionality =====================
    handleWebChange() {
        this.setState({ webChecked: !this.state.webChecked })
    }

    //===================== Defining the functionality if "yes" is selected in physical goods. =====================
    handleGoodsChange() {
        this.setState({ goodsYes: !this.state.goodsYes });
    }

    //===================== Defining the functionality if "No" is selected in physical goods. =====================
    handleGoodsChangeNo() {
        this.setState({ goodsNo: !this.state.goodsNo });
    }

    //===================== Defining radio buttons when selected value is company. =====================
    renderSelectedForm(param) {
        switch (param) {
            case 'individual/sole_trader': return null;
            case 'company':
                return <div className="container-fluid mt-2">
                    <div className="companiesSelection d-flex flex-column">
                        <div className="form-check form-check-inline">
                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Limite Liability Partnership</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Private Limited Company </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Public Listed Company </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Unincorporated Partnership </label>
                        </div>
                    </div>
                </div>;

            case 'non-profit': return null;
            case 'trust': return null;

            default: return null;
        }
    }

    //===================== Defining the functionality if "yes" is selected by user in server integration =====================
    handleServerRadioBtn() {
        this.setState({ serverRadioBtn: !this.state.serverRadioBtn });
    }

    handleTransaction(event) {
        // alert(event.target.value)
        if(event.target.value === 'yes'){    
            this.setState({ transactionCheck: 'yes' });
        }
        else{
            this.setState({ transactionCheck: 'no' });
        }
    }

    //===================== Defining the functionality if a value is selected by user =====================
    handleBankChange(event) {
        this.setState({ selectedBankVal: event.target.value });
    }

    //===================== Render the form after the selecting the value in select tag. =====================
    renderBankForm(param) {
        switch (param) {
            case 'bank1': return null;
            case 'bank2':
                return <div className="container-fluid mt-2" id="form_data">
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-md-3 col-sm-12"></div>
                            <div className="col-md-8 col-sm-12">
                                <Link to="#" className="btn-danger add-trash-btn w-auto float-right" onClick={this.deleteBankDetailForm}><i className="fas fa-trash text-light me-2"></i>Remove</Link>
                            </div>
                        </div>
                        {/* <div className="form-group">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <label>SWIFT BIC</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="text" className="form-control" name="merchant_bic" placeholder="" />
                                </div>
                            </div>
                        </div> */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <label>Account Holder Name</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="text" className="form-control" name="holder_name" placeholder="" />
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
                                <div className="col-md-8 col-sm-12">
                                    <input type="text"
                                        className="form-control"
                                        name="merchant_accNum"
                                        onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                        maxLength={"12"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <label>Bank Name</label>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <input type="text" className="form-control" name="bank_name" placeholder="" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <label>Bank Address</label>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <input type="text" className="form-control" name="bank_address" placeholder="" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <label>Bank Country</label>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <CountryDropdown />
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <label>IBAN</label>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <input type="text"
                                        className="form-control"
                                        name="merchant_iban"
                                        onChange={this.onChangeIBAN}
                                        placeholder=""
                                        id="iban"
                                    />
                                </div>
                                <div className="col-md-2 col-sm-12">
                                    <span> <Link to="#" className="btn btn-warning ml-sm-n3 mt-0 mt-1 px-2" onClick={this.checkIBAN} > Check </Link> </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <label>SWIFT</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="text" className="form-control" name="swift" placeholder="" />
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
                                <div className="col-md-8 col-sm-12">
                                    <input type="text" className="form-control" name="merchant_accCurr" placeholder="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>;

            default: return null;
        }
    }

    // +++++++++++++++++++++++ DELETING ALL DYNAMIC INPUT FIELDS FUNCTIONALITY ON BUTTON CLICK ++++++++++++++++++++++++++

    //===================== Removing the bank form on clicking remove btn =====================
    // deleteBankDetailForm = (i) => {
    //     let options = [...this.state.selectedBankVal];
    //     options.splice(i, 1);
    //     this.setState({ selectedBankVal: options });
    // }

    //===================== Removing the DIrector form on clicking remove btn =====================
    deleteDirectorHolder = (i) => {
        let options = [...this.state.directorHolder];
        options.splice(i, 1);
        this.setState({ directorHolder: options });
    }

    // +++++++++++++++++++++++ END OF FUNCTIONALITY ++++++++++++++++++++++++++

    //===================== Rendering the director form data =====================
    directorFormDetails() {
        var getFormData = this.state.directorHolder
        getFormData.push(
            <div>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-3 col-sm-12"></div>
                            <div className="col-md-8 col-sm-12">
                                <Link to="#" className="btn-danger add-trash-btn w-auto float-right" onClick={this.deleteDirectorHolder.bind(this)}><i className="fas fa-trash text-light me-2"></i>Remove</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-2">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8 col-sm-12 mt-2">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <input type="text" name="direc_fname" id="direc_fname" className="form-control" placeholder="Firstname" />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <input type="text" name="direc_lname" id="direc_lname" className="form-control" placeholder="Lastname" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label>Date</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="date" name="direc_date" id="direc_date" className="form-control" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label>Nationality</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <CountryDropdown />
                        </div>
                    </div>

                    {/*=====================  Country, State, City Dynamic Dependent Dropdown ===================== */}
                    <DynamicDD />
                </div>
            </div>
        );

        this.setState({ directorHolder: getFormData })
    }


    //=========== USED AND DEFINED THIS FUNCTIONALITY IN OLD CODE ================================
    handleCompany(event) { this.setState({ selectedValue: event.target.value }) }

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

    divstatus = (e) => {
        this.setState({ value: e.target.value });
    }
    //=========== END OF FUNCTIONALITY  ================================



    // ===================== Defining the Wizard Functionality in ComponentDidMount Lifecycle =====================
    componentDidMount() {

        // DEEPAK input value get

        $("#partNumberSearch").change(function () {
            var name = $('#fname_11').val();
            $('#fname1').val(name);
            var name_1 = $('#lname_11').val();
            $('#lname1').val(name_1);
            var name_2 = $('#e_mail_11').val();
            $('#e_mail1').val(name_2);
            var name_3 = $('#mobile_11').val();
            $('#mobile1').val(name_3);
            // var name_4 = $('#country').val();
            // $('#phone3').val(name_4);
        });

        $("#riskContact_1").change(function () {
            var name = $('#fname_11').val();
            $('#rf_fname2').val(name);
            var name_1 = $('#lname_11').val();
            $('#rf_lname2').val(name_1);
            var name_2 = $('#e_mail_11').val();
            $('#rf_mail2').val(name_2);
            var name_3 = $('#mobile_11').val();
            $('#rf_phone2').val(name_3);
        });

        $("#riskContact_22").change(function () {
            var name = $('#fname_11').val();
            $('#rsen_fname2').val(name);
            var name_1 = $('#lname_11').val();
            $('#rsen_lname2').val(name_1);
            var name_2 = $('#e_mail_11').val();
            $('#rsen_mail2').val(name_2);
            var name_3 = $('#mobile_11').val();
            $('#rsen_phone2').val(name_3);
        });


        // $("#riskContact").on('change', function () {
        //     var name = $('#risk_fname').val();
        //     $('#r_fname2').val(name);
        //     var name_1 = $('#risk_lname').val();
        //     $('#r_lname2').val(name_1);
        //     var name_2 = $('#risk_email').val();
        //     $('#re_mail2').val(name_2);
        //     var name_3 = $('#risk_pNumber').val();
        //     $('#r_phone2').val(name_3);
        // });



        $('#bill_descriptor').on('keydown', function () {
            let getInputVal = $(this).val();
            $('#billingDesc').val(getInputVal);
        });



        const checkButtons = (activeStep, stepsCount) => {
            const prevBtn = $("#wizard-prev");
            const nextBtn = $("#wizard-next");
            const submBtn = $("#wizard-subm");

            switch (activeStep / stepsCount) {
                case 0: //===================== First Step =====================
                    prevBtn.hide();
                    submBtn.hide();
                    nextBtn.show();
                    break;
                case 1: //===================== Last Step =====================
                    nextBtn.hide();
                    prevBtn.show();
                    submBtn.show();
                    break;
                default: //===================== Hide Submit Btn until we reaches the last page of the form =====================
                    submBtn.hide();
                    prevBtn.show();
                    nextBtn.show();
            }
        };

        const setWizardHeight = activeStepHeight => {
            $(".wizard-body").height(activeStepHeight);
        };

        $(function () {
            //===================== Form step counter (little cirecles at the top of the form) =====================
            const wizardSteps = $(".wizard-header .wizard-step");

            //===================== Form steps (actual steps) =====================
            const steps = $(".wizard-body .step");

            //===================== Number of steps (counting from 0) =====================
            const stepsCount = steps.length - 1;

            //=====================  Screen Height =====================
            //===================== Current step being shown (counting from 0) =====================
            let activeStep = 0;

            //===================== Height of the current step =====================
            let activeStepHeight = $(steps[activeStep]).height();
            checkButtons(activeStep, stepsCount);
            setWizardHeight(activeStepHeight);

            //===================== Resizing wizard body when the viewport changes =====================
            $(window).resize(function () {
                setWizardHeight($(steps[activeStep]).height());
            });

            //===================== Previous button handler =====================
            $("#wizard-prev").click(() => {
                //===================== Sliding out current step =====================
                $(steps[activeStep]).removeClass("active");
                $(wizardSteps[activeStep]).removeClass("active");

                activeStep--;

                //===================== Sliding in previous Steps  =====================
                $(steps[activeStep]).removeClass("off").addClass("active");
                $(wizardSteps[activeStep]).addClass("active");
                activeStepHeight = $(steps[activeStep]).height();
                setWizardHeight(activeStepHeight);
                checkButtons(activeStep, stepsCount);
            });

            //===================== Next button handler =====================
            $("#wizard-next").click(() => {
                // Sliding out current step
                $(steps[activeStep]).removeClass("inital").addClass("off").removeClass("active");
                $(wizardSteps[activeStep]).removeClass("active");

                //===================== Next step =====================
                activeStep++;

                //===================== Sliding in next step =====================
                $(steps[activeStep]).addClass("active");
                $(wizardSteps[activeStep]).addClass("active");
                activeStepHeight = $(steps[activeStep]).height();
                setWizardHeight(activeStepHeight);
                checkButtons(activeStep, stepsCount);
            });


        });

        // $('#country_selection').on('change', function(event){
        //     var setValuee =  $(this).find('option:selected').text();
        //     alert(setValuee);
        // })


    }

    // input value get

    // state = {
    //     value: "",
    //     buss_fname: "",
    //     buss_lname: ""
    // }

    // getInpvalue = (event) => {

    //     const name = event.target.name;
    //     const value = event.target.name;
    //     this.setState({ [name]: value });

    // }



    render() {

        //================= Display content when click on website is not live =============
        const websiteContent = this.state.webChecked ? <div>
            <div className="row mt-2">
                <div className="col-md-4 col-sm-12">
                    <label htmlFor="beta_url">Beta URL</label>
                </div>
                <div className="col-md-8 col-sm-12">
                    <input type="text" name="beta_url" id="beta_url" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <label htmlfor="username">Username</label>
                </div>
                <div className="col-md-8 col-sm-12">
                    <input type="text" name="username" id="username" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <label htmlfor="pass">Password</label>
                </div>
                <div className="col-md-8 col-sm-12">
                    <input type="password" name="pass" id="pass" className="form-control" />
                </div>
            </div>
        </div> : null;
        // ===================== End of Functionality =======================================


        //============================== Display content if yes is selected in phyiscal goods ============================
        const GoodsContent = this.state.goodsYes ? <div>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <label className="text-dark fw-bolder mt-1">Does your company ship the products yourself?</label>
                </div>

                <div className="col-md-12 col-sm-12">
                    <div className="d-flex flex-column">
                        <div className="form-check form-check-inline">
                            <input classname="form-check-input" type="radio" name="phy_goods_sub1" id="phy_goods_sub1" defaultValue="yes" />
                            <label classname="form-check-label" htmlfor="phy_goods2">&nbsp; Yes</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input classname="form-check-input" type="radio" name="phy_goods_sub1" id="phy_goods_sub2" defaultValue="no" />
                            <label classname="form-check-label" htmlfor="phy_goods2">&nbsp; No, products are shipped by a third party.</label>
                        </div>
                    </div>
                </div>
            </div>
        </div> : null;
        // ===================== End of Functionality =======================================


        //============= Display content if No is selected in phyiscal goods =====================
        const GoodsContentNO = this.state.goodsNo ? <div>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <label htmlFor="goodsNo" className="mt-1 text-dark fw-bolder">Please provide details of fullfilment house or third party shipping company.</label>
                </div>
                <div className="col-md-12 col-sm-12">
                    <textarea rows='{5}' name="goodsNo" id="goodsNo" className="form-control textarea-h" />
                </div>
            </div>
        </div> : null;
        //===================== End of Functionality =======================================


        //================== Display content if Yes is selected in Server Integartion ==========
        const serverBtnContent = this.state.serverRadioBtn ? <div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <label htmlFor="pciCertif" className="text-dark fw-bolder">PCI Certificate</label>
                </div>
                <div className="col-md-6 col-sm-12">
                    <input type="file" name="pci" id="pciCertif" />
                </div>
            </div>
        </div> : null;
        // ===================== End of Functionality =======================================

        //================== Display Transaction section if Yes is selected  ==========
        const transactionnContent = this.state.transactionCheck === 'yes' ? <div className="mt-2">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <label>Name of current/previous acquirer or PSP</label>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex flex-column">
                        <input type="text" name="psp" id="psp" className="form-control" />
                        {/* <div className="form-check form-check-inline mt-2">
                            <input classname="form-check-input" type="radio" name="never_processed" id="never_process" defaultValue="no" />
                            <label classname="form-check-label fw-bolder text-dark" htmlfor="never_process">&nbsp; Never processed online</label>
                        </div> */}
                    </div>
                </div>
            </div>
        </div> : null;
        // ===================== End of Functionality =======================================


        // ===================== MAIN WIZARD FORM =======================================
        return (
            <div className="merchant-section pt-5 bg-dark">
                <div className="container merchantBg bg-light rounded noPadding">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-lg-12">
                            <div className="row mx-3">
                                <div className="col-md-6 col-sm-12 mt-3">
                                    {/* <img src={logo} alt="companyLogo" className="img-fluid img-responsive omPay-logo-merchant" /> */}
                                    <h1 className="merchantForm_heading mt-3 font-size-35 ompay_logo_text"> OMPAY </h1>
                                </div>
                                <div className="col-md-6 col-sm-12 mt-4">
                                    <h1 className="merchantForm_heading mt-3 font-size-35"> Merchant Application Form </h1>
                                </div>
                                <p className="instructions mx-3"><span className="fw-bolder heading">Tell us about your business </span> <br />
                                    The data that OmPay collects about your business will help us meet requirements from regulators, financial partners, and also allows us to perform due diligence on your business.
                                </p>
                                <hr className="mt-3" />
                            </div>
                            <form action="/wizard_success" method="get" autoComplete="off">
                                <div className="wizard my-3 container-fluid">
                                    {/* // ===================== Progress BAR ======================================= */}
                                    <div className="wizard-header">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="steps text-center">
                                                    <div className="wizard-step active">
                                                        <span className="text-start"> About Your Company</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Business Details</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Company representative</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Company Owner/s</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Company executives</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Fulfillment info</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Billing Descriptor</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Bank Account Details</span>
                                                    </div>
                                                    <div className="wizard-step">
                                                        <span className="text-start"> Documents Submission</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-9 col-sm-12">
                                                <div className="wizard-body">
                                                    {/* // ===================== About Comapny Section ======================================= */}
                                                    <div className="step initial active">
                                                        <p className="text-left"><h3>Section 1: About Your Company</h3>
                                                            Please fill in the requisite details of your company.
                                                        </p>
                                                        <hr />
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label for="comp_name text-bold">Legal Company Name <span className="text-danger">*</span></label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="text" className="form-control " id="comp_name" placeholder="Company Name" />
                                                                    <span className="input-error"></span>
                                                                    <p id="error" className="error mt-1" style={{ "color": "red", "display": "none" }}>This field is ...!!</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Trading Name </label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="text" className="form-control" name="trading" placeholder="Trading name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Doing Business as (Trade/Brand name) : </label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="text" className="form-control" name="busin" placeholder="optional" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Type Of Business <span className="text-danger">*</span></label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="text" className="form-control errorBuss" name="tob" placeholder="e.g Mobile Phones/ Food Delivery" />
                                                                        <span className="input-error"></span>
                                                                        <p id="errorBuss" className=" mt-1" style={{ "color": "red", "display": "none" }}>This field is ...!!</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Country <span className="text-danger">*</span></label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <CountryDropdown />
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
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="text" className="form-control errorReg" name="regNum" placeholder="" />
                                                                        <span className="input-error"></span>
                                                                        <p id="errorReg" className="mt-1" style={{ "color": "red", "display": "none" }}>This field is required...!!</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Company Address  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                                <input type="text" className="form-control mt-2 errorAddr" placeholder="Postal/ Zip Code" />
                                                                                <span className="input-error"></span>
                                                                                <p id="errorAddr" className="mt-1" style={{ "color": "red", "display": "none" }}>All the fields are ...!!</p>
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
                                                                        <label>Date Of Incorporation  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="date" className="form-control errorYoi" name="yoi" />
                                                                        <span className="input-error"></span>
                                                                        <p id="errorYoi" className="mt-1" style={{ "color": "red", "display": "none" }}>This field is required...!!</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Type of company <span className="text-danger">*</span></label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <select className="form-control" name="comp_type" value={this.selectedValue} onChange={this.handleCompany} >
                                                                            <option value="">Please select...</option>
                                                                            <option value="individual/sole_trader">Individual/Sole Trader</option>
                                                                            <option value="company">Company</option>
                                                                            <option value="non-profit">Non-Profit</option>
                                                                            <option value="trust">Trust</option>
                                                                        </select>

                                                                        {this.renderSelectedForm(this.state.selectedValue)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <div classname="mt-3" id="company_chosen" className={this.state.value}>
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12"></div>
                                                                <div className="col-md-8 col-sm-12 ">
                                                                    <div className="companiesSelection d-flex flex-column">
                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Limite Liability Partnership</label>
                                                                        </div>

                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Private Limited Company </label>
                                                                        </div>

                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Public Listed Company </label>
                                                                        </div>

                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                                            <label classname="form-check-label" htmlfor="inlineRadio1">&nbsp; Unincorporated Partnership </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div> */}


                                                        {/* <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Current Monthly Sales Volume (USD)</label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="text" className="form-control" name="percentOrders" placeholder="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        {/* <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Website URL(s)</label>
                                                                    </div>
                                                                    <div className="col-md-8 col-12">
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
                                                        </div> */}

                                                        {/* <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Please Tick If Applicable To Your Website(s): <span className="text-danger">*</span></label>
                                                                    </div>
                                                                    <div className="col-md-9 col-sm-12">
                                                                        <div className="row">
                                                                            <div className="col-md-9 col-sm-12">
                                                                                <div className="d-block  px-2">
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
                                                                                    <p id="display_output" style={{ "display": "none", "color": "red" }}> Please select atleast one..</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-3 col-sm-12"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        {/* <div className="mt-3">
                                                            <div class="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Billing Descriptor</label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <input type="text" className="form-control" name="billing" placeholder="Max 25 Characters" />
                                                                        <small className="text-muted">How applicant would like to appear on a credit card statement.</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        

                                                        {/* <section className="block">
                                                            <h3 className="text-start">1.1 Contact Details</h3>
                                                            <p className="text-start">Please provide the relevant contact information. Applicants to inform RDP of any future changes of contacts.</p>
                                                            <hr />
                                                            <h4 className="text-start">Business Contact</h4>
                                                            <p className="text-start">Main contact person for liasing business with RDP.</p>
                                                            <form>
                                                                <div className="form-group">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <label>Name </label>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <div className="row">
                                                                                <div className="col-md-6 col-sm-12">
                                                                                    <input type="text" className="form-control" id="buss_fname" name="buss_fname" placeholder="Firstname" />
                                                                                </div>
                                                                                <div className="col-md-6 col-sm-12">
                                                                                    <input type="text" className="form-control" id="buss_lname" name="buss_lname" placeholder="Lastname" />
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
                                                                            <div className="col-md-8 col-sm-12">
                                                                                <input type="email" className="form-control" name="buss_email" id="buss_email" placeholder="example@example.com" />
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
                                                                            <div className="col-md-8 col-sm-12">
                                                                                <div className="row">
                                                                                    <div className="col-md-3 col-sm-12">
                                                                                        <select className="form-control" name="country" id="country">
                                                                                            <option data-countrycode="GB" value={44} selected="">
                                                                                                UK (+44)
                                                                                            </option>
                                                                                            <option data-countrycode="US" value={1}>
                                                                                                USA (+1)
                                                                                            </option>
                                                                                            <optgroup label="Other countries">
                                                                                                <option data-countrycode="DZ" value={213}>
                                                                                                    Algeria (+213)
                                                                                                </option>
                                                                                                <option data-countrycode="AD" value={376}>
                                                                                                    Andorra (+376)
                                                                                                </option>
                                                                                                <option data-countrycode="AO" value={244}>
                                                                                                    Angola (+244)
                                                                                                </option>
                                                                                                <option data-countrycode="AI" value={1264}>
                                                                                                    Anguilla (+1264)
                                                                                                </option>
                                                                                                <option data-countrycode="AG" value={1268}>
                                                                                                    Antigua &amp; Barbuda (+1268)
                                                                                                </option>
                                                                                                <option data-countrycode="AR" value={54}>
                                                                                                    Argentina (+54)
                                                                                                </option>
                                                                                                <option data-countrycode="AM" value={374}>
                                                                                                    Armenia (+374)
                                                                                                </option>
                                                                                                <option data-countrycode="AW" value={297}>
                                                                                                    Aruba (+297)
                                                                                                </option>
                                                                                                <option data-countrycode="AU" value={61}>
                                                                                                    Australia (+61)
                                                                                                </option>
                                                                                                <option data-countrycode="AT" value={43}>
                                                                                                    Austria (+43)
                                                                                                </option>
                                                                                                <option data-countrycode="AZ" value={994}>
                                                                                                    Azerbaijan (+994)
                                                                                                </option>
                                                                                                <option data-countrycode="BS" value={1242}>
                                                                                                    Bahamas (+1242)
                                                                                                </option>
                                                                                                <option data-countrycode="BH" value={973}>
                                                                                                    Bahrain (+973)
                                                                                                </option>
                                                                                                <option data-countrycode="BD" value={880}>
                                                                                                    Bangladesh (+880)
                                                                                                </option>
                                                                                                <option data-countrycode="BB" value={1246}>
                                                                                                    Barbados (+1246)
                                                                                                </option>
                                                                                                <option data-countrycode="BY" value={375}>
                                                                                                    Belarus (+375)
                                                                                                </option>
                                                                                                <option data-countrycode="BE" value={32}>
                                                                                                    Belgium (+32)
                                                                                                </option>
                                                                                                <option data-countrycode="BZ" value={501}>
                                                                                                    Belize (+501)
                                                                                                </option>
                                                                                                <option data-countrycode="BJ" value={229}>
                                                                                                    Benin (+229)
                                                                                                </option>
                                                                                                <option data-countrycode="BM" value={1441}>
                                                                                                    Bermuda (+1441)
                                                                                                </option>
                                                                                                <option data-countrycode="BT" value={975}>
                                                                                                    Bhutan (+975)
                                                                                                </option>
                                                                                                <option data-countrycode="BO" value={591}>
                                                                                                    Bolivia (+591)
                                                                                                </option>
                                                                                                <option data-countrycode="BA" value={387}>
                                                                                                    Bosnia Herzegovina (+387)
                                                                                                </option>
                                                                                                <option data-countrycode="BW" value={267}>
                                                                                                    Botswana (+267)
                                                                                                </option>
                                                                                                <option data-countrycode="BR" value={55}>
                                                                                                    Brazil (+55)
                                                                                                </option>
                                                                                                <option data-countrycode="BN" value={673}>
                                                                                                    Brunei (+673)
                                                                                                </option>
                                                                                                <option data-countrycode="BG" value={359}>
                                                                                                    Bulgaria (+359)
                                                                                                </option>
                                                                                                <option data-countrycode="BF" value={226}>
                                                                                                    Burkina Faso (+226)
                                                                                                </option>
                                                                                                <option data-countrycode="BI" value={257}>
                                                                                                    Burundi (+257)
                                                                                                </option>
                                                                                                <option data-countrycode="KH" value={855}>
                                                                                                    Cambodia (+855)
                                                                                                </option>
                                                                                                <option data-countrycode="CM" value={237}>
                                                                                                    Cameroon (+237)
                                                                                                </option>
                                                                                                <option data-countrycode="CA" value={1}>
                                                                                                    Canada (+1)
                                                                                                </option>
                                                                                                <option data-countrycode="CV" value={238}>
                                                                                                    Cape Verde Islands (+238)
                                                                                                </option>
                                                                                                <option data-countrycode="KY" value={1345}>
                                                                                                    Cayman Islands (+1345)
                                                                                                </option>
                                                                                                <option data-countrycode="CF" value={236}>
                                                                                                    Central African Republic (+236)
                                                                                                </option>
                                                                                                <option data-countrycode="CL" value={56}>
                                                                                                    Chile (+56)
                                                                                                </option>
                                                                                                <option data-countrycode="CN" value={86}>
                                                                                                    China (+86)
                                                                                                </option>
                                                                                                <option data-countrycode="CO" value={57}>
                                                                                                    Colombia (+57)
                                                                                                </option>
                                                                                                <option data-countrycode="KM" value={269}>
                                                                                                    Comoros (+269)
                                                                                                </option>
                                                                                                <option data-countrycode="CG" value={242}>
                                                                                                    Congo (+242)
                                                                                                </option>
                                                                                                <option data-countrycode="CK" value={682}>
                                                                                                    Cook Islands (+682)
                                                                                                </option>
                                                                                                <option data-countrycode="CR" value={506}>
                                                                                                    Costa Rica (+506)
                                                                                                </option>
                                                                                                <option data-countrycode="HR" value={385}>
                                                                                                    Croatia (+385)
                                                                                                </option>
                                                                                                <option data-countrycode="CU" value={53}>
                                                                                                    Cuba (+53)
                                                                                                </option>
                                                                                                <option data-countrycode="CY" value={90392}>
                                                                                                    Cyprus North (+90392)
                                                                                                </option>
                                                                                                <option data-countrycode="CY" value={357}>
                                                                                                    Cyprus South (+357)
                                                                                                </option>
                                                                                                <option data-countrycode="CZ" value={42}>
                                                                                                    Czech Republic (+42)
                                                                                                </option>
                                                                                                <option data-countrycode="DK" value={45}>
                                                                                                    Denmark (+45)
                                                                                                </option>
                                                                                                <option data-countrycode="DJ" value={253}>
                                                                                                    Djibouti (+253)
                                                                                                </option>
                                                                                                <option data-countrycode="DM" value={1809}>
                                                                                                    Dominica (+1809)
                                                                                                </option>
                                                                                                <option data-countrycode="DO" value={1809}>
                                                                                                    Dominican Republic (+1809)
                                                                                                </option>
                                                                                                <option data-countrycode="EC" value={593}>
                                                                                                    Ecuador (+593)
                                                                                                </option>
                                                                                                <option data-countrycode="EG" value={20}>
                                                                                                    Egypt (+20)
                                                                                                </option>
                                                                                                <option data-countrycode="SV" value={503}>
                                                                                                    El Salvador (+503)
                                                                                                </option>
                                                                                                <option data-countrycode="GQ" value={240}>
                                                                                                    Equatorial Guinea (+240)
                                                                                                </option>
                                                                                                <option data-countrycode="ER" value={291}>
                                                                                                    Eritrea (+291)
                                                                                                </option>
                                                                                                <option data-countrycode="EE" value={372}>
                                                                                                    Estonia (+372)
                                                                                                </option>
                                                                                                <option data-countrycode="ET" value={251}>
                                                                                                    Ethiopia (+251)
                                                                                                </option>
                                                                                                <option data-countrycode="FK" value={500}>
                                                                                                    Falkland Islands (+500)
                                                                                                </option>
                                                                                                <option data-countrycode="FO" value={298}>
                                                                                                    Faroe Islands (+298)
                                                                                                </option>
                                                                                                <option data-countrycode="FJ" value={679}>
                                                                                                    Fiji (+679)
                                                                                                </option>
                                                                                                <option data-countrycode="FI" value={358}>
                                                                                                    Finland (+358)
                                                                                                </option>
                                                                                                <option data-countrycode="FR" value={33}>
                                                                                                    France (+33)
                                                                                                </option>
                                                                                                <option data-countrycode="GF" value={594}>
                                                                                                    French Guiana (+594)
                                                                                                </option>
                                                                                                <option data-countrycode="PF" value={689}>
                                                                                                    French Polynesia (+689)
                                                                                                </option>
                                                                                                <option data-countrycode="GA" value={241}>
                                                                                                    Gabon (+241)
                                                                                                </option>
                                                                                                <option data-countrycode="GM" value={220}>
                                                                                                    Gambia (+220)
                                                                                                </option>
                                                                                                <option data-countrycode="GE" value={7880}>
                                                                                                    Georgia (+7880)
                                                                                                </option>
                                                                                                <option data-countrycode="DE" value={49}>
                                                                                                    Germany (+49)
                                                                                                </option>
                                                                                                <option data-countrycode="GH" value={233}>
                                                                                                    Ghana (+233)
                                                                                                </option>
                                                                                                <option data-countrycode="GI" value={350}>
                                                                                                    Gibraltar (+350)
                                                                                                </option>
                                                                                                <option data-countrycode="GR" value={30}>
                                                                                                    Greece (+30)
                                                                                                </option>
                                                                                                <option data-countrycode="GL" value={299}>
                                                                                                    Greenland (+299)
                                                                                                </option>
                                                                                                <option data-countrycode="GD" value={1473}>
                                                                                                    Grenada (+1473)
                                                                                                </option>
                                                                                                <option data-countrycode="GP" value={590}>
                                                                                                    Guadeloupe (+590)
                                                                                                </option>
                                                                                                <option data-countrycode="GU" value={671}>
                                                                                                    Guam (+671)
                                                                                                </option>
                                                                                                <option data-countrycode="GT" value={502}>
                                                                                                    Guatemala (+502)
                                                                                                </option>
                                                                                                <option data-countrycode="GN" value={224}>
                                                                                                    Guinea (+224)
                                                                                                </option>
                                                                                                <option data-countrycode="GW" value={245}>
                                                                                                    Guinea - Bissau (+245)
                                                                                                </option>
                                                                                                <option data-countrycode="GY" value={592}>
                                                                                                    Guyana (+592)
                                                                                                </option>
                                                                                                <option data-countrycode="HT" value={509}>
                                                                                                    Haiti (+509)
                                                                                                </option>
                                                                                                <option data-countrycode="HN" value={504}>
                                                                                                    Honduras (+504)
                                                                                                </option>
                                                                                                <option data-countrycode="HK" value={852}>
                                                                                                    Hong Kong (+852)
                                                                                                </option>
                                                                                                <option data-countrycode="HU" value={36}>
                                                                                                    Hungary (+36)
                                                                                                </option>
                                                                                                <option data-countrycode="IS" value={354}>
                                                                                                    Iceland (+354)
                                                                                                </option>
                                                                                                <option data-countrycode="IN" value={91}>
                                                                                                    India (+91)
                                                                                                </option>
                                                                                                <option data-countrycode="ID" value={62}>
                                                                                                    Indonesia (+62)
                                                                                                </option>
                                                                                                <option data-countrycode="IR" value={98}>
                                                                                                    Iran (+98)
                                                                                                </option>
                                                                                                <option data-countrycode="IQ" value={964}>
                                                                                                    Iraq (+964)
                                                                                                </option>
                                                                                                <option data-countrycode="IE" value={353}>
                                                                                                    Ireland (+353)
                                                                                                </option>
                                                                                                <option data-countrycode="IL" value={972}>
                                                                                                    Israel (+972)
                                                                                                </option>
                                                                                                <option data-countrycode="IT" value={39}>
                                                                                                    Italy (+39)
                                                                                                </option>
                                                                                                <option data-countrycode="JM" value={1876}>
                                                                                                    Jamaica (+1876)
                                                                                                </option>
                                                                                                <option data-countrycode="JP" value={81}>
                                                                                                    Japan (+81)
                                                                                                </option>
                                                                                                <option data-countrycode="JO" value={962}>
                                                                                                    Jordan (+962)
                                                                                                </option>
                                                                                                <option data-countrycode="KZ" value={7}>
                                                                                                    Kazakhstan (+7)
                                                                                                </option>
                                                                                                <option data-countrycode="KE" value={254}>
                                                                                                    Kenya (+254)
                                                                                                </option>
                                                                                                <option data-countrycode="KI" value={686}>
                                                                                                    Kiribati (+686)
                                                                                                </option>
                                                                                                <option data-countrycode="KP" value={850}>
                                                                                                    Korea North (+850)
                                                                                                </option>
                                                                                                <option data-countrycode="KR" value={82}>
                                                                                                    Korea South (+82)
                                                                                                </option>
                                                                                                <option data-countrycode="KW" value={965}>
                                                                                                    Kuwait (+965)
                                                                                                </option>
                                                                                                <option data-countrycode="KG" value={996}>
                                                                                                    Kyrgyzstan (+996)
                                                                                                </option>
                                                                                                <option data-countrycode="LA" value={856}>
                                                                                                    Laos (+856)
                                                                                                </option>
                                                                                                <option data-countrycode="LV" value={371}>
                                                                                                    Latvia (+371)
                                                                                                </option>
                                                                                                <option data-countrycode="LB" value={961}>
                                                                                                    Lebanon (+961)
                                                                                                </option>
                                                                                                <option data-countrycode="LS" value={266}>
                                                                                                    Lesotho (+266)
                                                                                                </option>
                                                                                                <option data-countrycode="LR" value={231}>
                                                                                                    Liberia (+231)
                                                                                                </option>
                                                                                                <option data-countrycode="LY" value={218}>
                                                                                                    Libya (+218)
                                                                                                </option>
                                                                                                <option data-countrycode="LI" value={417}>
                                                                                                    Liechtenstein (+417)
                                                                                                </option>
                                                                                                <option data-countrycode="LT" value={370}>
                                                                                                    Lithuania (+370)
                                                                                                </option>
                                                                                                <option data-countrycode="LU" value={352}>
                                                                                                    Luxembourg (+352)
                                                                                                </option>
                                                                                                <option data-countrycode="MO" value={853}>
                                                                                                    Macao (+853)
                                                                                                </option>
                                                                                                <option data-countrycode="MK" value={389}>
                                                                                                    Macedonia (+389)
                                                                                                </option>
                                                                                                <option data-countrycode="MG" value={261}>
                                                                                                    Madagascar (+261)
                                                                                                </option>
                                                                                                <option data-countrycode="MW" value={265}>
                                                                                                    Malawi (+265)
                                                                                                </option>
                                                                                                <option data-countrycode="MY" value={60}>
                                                                                                    Malaysia (+60)
                                                                                                </option>
                                                                                                <option data-countrycode="MV" value={960}>
                                                                                                    Maldives (+960)
                                                                                                </option>
                                                                                                <option data-countrycode="ML" value={223}>
                                                                                                    Mali (+223)
                                                                                                </option>
                                                                                                <option data-countrycode="MT" value={356}>
                                                                                                    Malta (+356)
                                                                                                </option>
                                                                                                <option data-countrycode="MH" value={692}>
                                                                                                    Marshall Islands (+692)
                                                                                                </option>
                                                                                                <option data-countrycode="MQ" value={596}>
                                                                                                    Martinique (+596)
                                                                                                </option>
                                                                                                <option data-countrycode="MR" value={222}>
                                                                                                    Mauritania (+222)
                                                                                                </option>
                                                                                                <option data-countrycode="YT" value={269}>
                                                                                                    Mayotte (+269)
                                                                                                </option>
                                                                                                <option data-countrycode="MX" value={52}>
                                                                                                    Mexico (+52)
                                                                                                </option>
                                                                                                <option data-countrycode="FM" value={691}>
                                                                                                    Micronesia (+691)
                                                                                                </option>
                                                                                                <option data-countrycode="MD" value={373}>
                                                                                                    Moldova (+373)
                                                                                                </option>
                                                                                                <option data-countrycode="MC" value={377}>
                                                                                                    Monaco (+377)
                                                                                                </option>
                                                                                                <option data-countrycode="MN" value={976}>
                                                                                                    Mongolia (+976)
                                                                                                </option>
                                                                                                <option data-countrycode="MS" value={1664}>
                                                                                                    Montserrat (+1664)
                                                                                                </option>
                                                                                                <option data-countrycode="MA" value={212}>
                                                                                                    Morocco (+212)
                                                                                                </option>
                                                                                                <option data-countrycode="MZ" value={258}>
                                                                                                    Mozambique (+258)
                                                                                                </option>
                                                                                                <option data-countrycode="MN" value={95}>
                                                                                                    Myanmar (+95)
                                                                                                </option>
                                                                                                <option data-countrycode="NA" value={264}>
                                                                                                    Namibia (+264)
                                                                                                </option>
                                                                                                <option data-countrycode="NR" value={674}>
                                                                                                    Nauru (+674)
                                                                                                </option>
                                                                                                <option data-countrycode="NP" value={977}>
                                                                                                    Nepal (+977)
                                                                                                </option>
                                                                                                <option data-countrycode="NL" value={31}>
                                                                                                    Netherlands (+31)
                                                                                                </option>
                                                                                                <option data-countrycode="NC" value={687}>
                                                                                                    New Caledonia (+687)
                                                                                                </option>
                                                                                                <option data-countrycode="NZ" value={64}>
                                                                                                    New Zealand (+64)
                                                                                                </option>
                                                                                                <option data-countrycode="NI" value={505}>
                                                                                                    Nicaragua (+505)
                                                                                                </option>
                                                                                                <option data-countrycode="NE" value={227}>
                                                                                                    Niger (+227)
                                                                                                </option>
                                                                                                <option data-countrycode="NG" value={234}>
                                                                                                    Nigeria (+234)
                                                                                                </option>
                                                                                                <option data-countrycode="NU" value={683}>
                                                                                                    Niue (+683)
                                                                                                </option>
                                                                                                <option data-countrycode="NF" value={672}>
                                                                                                    Norfolk Islands (+672)
                                                                                                </option>
                                                                                                <option data-countrycode="NP" value={670}>
                                                                                                    Northern Marianas (+670)
                                                                                                </option>
                                                                                                <option data-countrycode="NO" value={47}>
                                                                                                    Norway (+47)
                                                                                                </option>
                                                                                                <option data-countrycode="OM" value={968}>
                                                                                                    Oman (+968)
                                                                                                </option>
                                                                                                <option data-countrycode="PW" value={680}>
                                                                                                    Palau (+680)
                                                                                                </option>
                                                                                                <option data-countrycode="PA" value={507}>
                                                                                                    Panama (+507)
                                                                                                </option>
                                                                                                <option data-countrycode="PG" value={675}>
                                                                                                    Papua New Guinea (+675)
                                                                                                </option>
                                                                                                <option data-countrycode="PY" value={595}>
                                                                                                    Paraguay (+595)
                                                                                                </option>
                                                                                                <option data-countrycode="PE" value={51}>
                                                                                                    Peru (+51)
                                                                                                </option>
                                                                                                <option data-countrycode="PH" value={63}>
                                                                                                    Philippines (+63)
                                                                                                </option>
                                                                                                <option data-countrycode="PL" value={48}>
                                                                                                    Poland (+48)
                                                                                                </option>
                                                                                                <option data-countrycode="PT" value={351}>
                                                                                                    Portugal (+351)
                                                                                                </option>
                                                                                                <option data-countrycode="PR" value={1787}>
                                                                                                    Puerto Rico (+1787)
                                                                                                </option>
                                                                                                <option data-countrycode="QA" value={974}>
                                                                                                    Qatar (+974)
                                                                                                </option>
                                                                                                <option data-countrycode="RE" value={262}>
                                                                                                    Reunion (+262)
                                                                                                </option>
                                                                                                <option data-countrycode="RO" value={40}>
                                                                                                    Romania (+40)
                                                                                                </option>
                                                                                                <option data-countrycode="RU" value={7}>
                                                                                                    Russia (+7)
                                                                                                </option>
                                                                                                <option data-countrycode="RW" value={250}>
                                                                                                    Rwanda (+250)
                                                                                                </option>
                                                                                                <option data-countrycode="SM" value={378}>
                                                                                                    San Marino (+378)
                                                                                                </option>
                                                                                                <option data-countrycode="ST" value={239}>
                                                                                                    Sao Tome &amp; Principe (+239)
                                                                                                </option>
                                                                                                <option data-countrycode="SA" value={966}>
                                                                                                    Saudi Arabia (+966)
                                                                                                </option>
                                                                                                <option data-countrycode="SN" value={221}>
                                                                                                    Senegal (+221)
                                                                                                </option>
                                                                                                <option data-countrycode="CS" value={381}>
                                                                                                    Serbia (+381)
                                                                                                </option>
                                                                                                <option data-countrycode="SC" value={248}>
                                                                                                    Seychelles (+248)
                                                                                                </option>
                                                                                                <option data-countrycode="SL" value={232}>
                                                                                                    Sierra Leone (+232)
                                                                                                </option>
                                                                                                <option data-countrycode="SG" value={65}>
                                                                                                    Singapore (+65)
                                                                                                </option>
                                                                                                <option data-countrycode="SK" value={421}>
                                                                                                    Slovak Republic (+421)
                                                                                                </option>
                                                                                                <option data-countrycode="SI" value={386}>
                                                                                                    Slovenia (+386)
                                                                                                </option>
                                                                                                <option data-countrycode="SB" value={677}>
                                                                                                    Solomon Islands (+677)
                                                                                                </option>
                                                                                                <option data-countrycode="SO" value={252}>
                                                                                                    Somalia (+252)
                                                                                                </option>
                                                                                                <option data-countrycode="ZA" value={27}>
                                                                                                    South Africa (+27)
                                                                                                </option>
                                                                                                <option data-countrycode="ES" value={34}>
                                                                                                    Spain (+34)
                                                                                                </option>
                                                                                                <option data-countrycode="LK" value={94}>
                                                                                                    Sri Lanka (+94)
                                                                                                </option>
                                                                                                <option data-countrycode="SH" value={290}>
                                                                                                    St. Helena (+290)
                                                                                                </option>
                                                                                                <option data-countrycode="KN" value={1869}>
                                                                                                    St. Kitts (+1869)
                                                                                                </option>
                                                                                                <option data-countrycode="SC" value={1758}>
                                                                                                    St. Lucia (+1758)
                                                                                                </option>
                                                                                                <option data-countrycode="SD" value={249}>
                                                                                                    Sudan (+249)
                                                                                                </option>
                                                                                                <option data-countrycode="SR" value={597}>
                                                                                                    Suriname (+597)
                                                                                                </option>
                                                                                                <option data-countrycode="SZ" value={268}>
                                                                                                    Swaziland (+268)
                                                                                                </option>
                                                                                                <option data-countrycode="SE" value={46}>
                                                                                                    Sweden (+46)
                                                                                                </option>
                                                                                                <option data-countrycode="CH" value={41}>
                                                                                                    Switzerland (+41)
                                                                                                </option>
                                                                                                <option data-countrycode="SI" value={963}>
                                                                                                    Syria (+963)
                                                                                                </option>
                                                                                                <option data-countrycode="TW" value={886}>
                                                                                                    Taiwan (+886)
                                                                                                </option>
                                                                                                <option data-countrycode="TJ" value={7}>
                                                                                                    Tajikstan (+7)
                                                                                                </option>
                                                                                                <option data-countrycode="TH" value={66}>
                                                                                                    Thailand (+66)
                                                                                                </option>
                                                                                                <option data-countrycode="TG" value={228}>
                                                                                                    Togo (+228)
                                                                                                </option>
                                                                                                <option data-countrycode="TO" value={676}>
                                                                                                    Tonga (+676)
                                                                                                </option>
                                                                                                <option data-countrycode="TT" value={1868}>
                                                                                                    Trinidad &amp; Tobago (+1868)
                                                                                                </option>
                                                                                                <option data-countrycode="TN" value={216}>
                                                                                                    Tunisia (+216)
                                                                                                </option>
                                                                                                <option data-countrycode="TR" value={90}>
                                                                                                    Turkey (+90)
                                                                                                </option>
                                                                                                <option data-countrycode="TM" value={7}>
                                                                                                    Turkmenistan (+7)
                                                                                                </option>
                                                                                                <option data-countrycode="TM" value={993}>
                                                                                                    Turkmenistan (+993)
                                                                                                </option>
                                                                                                <option data-countrycode="TC" value={1649}>
                                                                                                    Turks &amp; Caicos Islands (+1649)
                                                                                                </option>
                                                                                                <option data-countrycode="TV" value={688}>
                                                                                                    Tuvalu (+688)
                                                                                                </option>
                                                                                                <option data-countrycode="UG" value={256}>
                                                                                                    Uganda (+256)
                                                                                                </option>
                                                                                                <option data-countrycode="UA" value={380}>
                                                                                                    Ukraine (+380)
                                                                                                </option>
                                                                                                <option data-countrycode="AE" value={971}>
                                                                                                    United Arab Emirates (+971)
                                                                                                </option>
                                                                                                <option data-countrycode="UY" value={598}>
                                                                                                    Uruguay (+598)
                                                                                                </option>
                                                                                                <option data-countrycode="UZ" value={7}>
                                                                                                    Uzbekistan (+7)
                                                                                                </option>
                                                                                                <option data-countrycode="VU" value={678}>
                                                                                                    Vanuatu (+678)
                                                                                                </option>
                                                                                                <option data-countrycode="VA" value={379}>
                                                                                                    Vatican City (+379)
                                                                                                </option>
                                                                                                <option data-countrycode="VE" value={58}>
                                                                                                    Venezuela (+58)
                                                                                                </option>
                                                                                                <option data-countrycode="VN" value={84}>
                                                                                                    Vietnam (+84)
                                                                                                </option>
                                                                                                <option data-countrycode="VG" value={84}>
                                                                                                    Virgin Islands - British (+1284)
                                                                                                </option>
                                                                                                <option data-countrycode="VI" value={84}>
                                                                                                    Virgin Islands - US (+1340)
                                                                                                </option>
                                                                                                <option data-countrycode="WF" value={681}>
                                                                                                    Wallis &amp; Futuna (+681)
                                                                                                </option>
                                                                                                <option data-countrycode="YE" value={969}>
                                                                                                    Yemen (North)(+969)
                                                                                                </option>
                                                                                                <option data-countrycode="YE" value={967}>
                                                                                                    Yemen (South)(+967)
                                                                                                </option>
                                                                                                <option data-countrycode="ZM" value={260}>
                                                                                                    Zambia (+260)
                                                                                                </option>
                                                                                                <option data-countrycode="ZW" value={263}>
                                                                                                    Zimbabwe (+263)
                                                                                                </option>
                                                                                            </optgroup>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="col-md-8 col-sm-12">
                                                                                        <input type="text"
                                                                                            className="form-control"
                                                                                            name="buss_pNumber"
                                                                                            id="buss_pNumber"
                                                                                            placeholder="Phone Number"
                                                                                            onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                            maxLength={"10"}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </section> */}
                                                        {/* <hr /> */}

                                                        {/* <section className="block">
                                                            <h4 className="text-start">Technical / Integration Contact</h4>
                                                            <p className="text-start">Main contact person for integration of payment solutions onto applicant's platform (if any).</p>
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Name </label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <div className="row">
                                                                                <div className="col-md-3 col-sm-12">
                                                                                    <CountryCodeDD />
                                                                                </div>
                                                                                <div className="col-md-9 col-sm-12">
                                                                                    <input type="text"
                                                                                        className="form-control"
                                                                                        name="tech_pNumber"
                                                                                        placeholder="Phone Number"
                                                                                        onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                        maxLength={"10"}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <hr /> */}

                                                        {/* <section className="block">
                                                            <h4 className="text-start">Risk / Chargeback Contact</h4>
                                                            <p className="text-start">Main contact person for chargeback cases of applicant's transactions.</p>
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Name</label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
                                                                        <div className="row">
                                                                            <div className="col-md-6 col-sm-12">
                                                                                <input type="text" className="form-control" name="risk_fname" id="risk_fname" placeholder="Firstname" />
                                                                            </div>
                                                                            <div className="col-md-6 col-sm-12">
                                                                                <input type="text" className="form-control" name="risk_lname" id="risk_lname" placeholder="Lastname" />
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
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="email" className="form-control" name="risk_email" id="risk_email" placeholder="example@example.com" />
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
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <div className="row">
                                                                                <div className="col-md-3 col-sm-12">
                                                                                    <CountryCodeDD />
                                                                                </div>
                                                                                <div className="col-md-9 col-sm-12">
                                                                                    <input type="text"
                                                                                        className="form-control"
                                                                                        name="risk_pNumber"
                                                                                        id="risk_pNumber"
                                                                                        placeholder="Phone Number"
                                                                                        onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                        maxLength={"10"}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <hr /> */}

                                                        {/* <section className="block">
                                                            <h4 className="text-start">Support / E-mail Notification Contact</h4>
                                                            <p className="text-start">Main contact person for updates.</p>
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Name </label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <div className="row">
                                                                                <div className="col-md-3 col-sm-12">
                                                                                    <CountryCodeDD />
                                                                                </div>
                                                                                <div className="col-md-9 col-sm-12">
                                                                                    <input type="text"
                                                                                        className="form-control"
                                                                                        name="support_pNumber"
                                                                                        placeholder="Phone Number"
                                                                                        onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                        maxLength={"10"}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section> */}

                                                        {/* <section className="block mt-4">
                                                            <h3 className="text-start">1.2 Merchant Bank Account Information</h3>
                                                            <p className="text-start">Please provide account details in which RDP will fund to.</p>
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-12">
                                                                        <label>Bank Name </label>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
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
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text" className="form-control" name="merchant_bbr" placeholder="e.g. Fedwire Number, IFSC" />
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
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text" className="form-control" name="dbc" placeholder="e.g. Sort code, Brach code" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section> */}
                                                    </div>

                                                    {/* // ===================== Business Details  Section ======================================= */}
                                                    <div className="step">
                                                        <p className="text-left"><h3> Business Details</h3> </p>
                                                        <hr />
                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Website address</label>
                                                            </div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="web_address" id="web_address" className="form-control" />
                                                                <div className="form-check mt-2">
                                                                    <input className="form-check-input"
                                                                        type="checkbox"
                                                                        id="weblive"
                                                                        name="weblive"
                                                                        defaultValue="weblive"
                                                                        checked={this.state.webChecked}
                                                                        onChange={this.handleWebChange}
                                                                    />
                                                                    <label className="form-check-label">My Website is not live</label>
                                                                </div>
                                                                {websiteContent}
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Line of Business</label></div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="line_business" id="line_business" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Brief description of what is being sold</label></div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <textarea name="description" id="description" rows="3" className="form-control textarea-h" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Expected Monthly Volume (USD)</label></div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="emv_usd" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Average Transaction Value (USD)</label></div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="avg_usd" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Lowest Transaction Value (USD)</label></div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="low_usd" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 col-sm-12"><label>Highest Transaction Value (USD)</label></div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="high_usd" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 bullet-points">
                                                            <div className="col-md-12 col-sm-12">
                                                                <p className="text-start text-dark fw-boldest">
                                                                    Please ensure that the following is available on your website:
                                                                </p>
                                                                <ul className="text-dark fw-boldest customWizardUL">
                                                                    <li><img src={bullets} className="img-responsive img-fluid bulletsImg" alt="bullet" /><span>Clear description of the goods/services being sold.</span></li>
                                                                    <li><img src={bullets} className="img-responsive img-fluid bulletsImg" alt="bullet" /><span>Terms and conditions are clearly displayed.</span></li>
                                                                    <li><img src={bullets} className="img-responsive img-fluid bulletsImg" alt="bullet" /><span>Refund, return and cancellation policy are clearly displayed.</span></li>
                                                                    <li><img src={bullets} className="img-responsive img-fluid bulletsImg" alt="bullet" /><span>Privacy Policy policy are clearly displayed.</span></li>
                                                                    <li><img src={bullets} className="img-responsive img-fluid bulletsImg" alt="bullet" /><span>Pricing of goods/services clearly displayed.</span></li>
                                                                    <li><img src={bullets} className="img-responsive img-fluid bulletsImg" alt="bullet" /><span>Your website is TLS secure.</span></li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* // ===================== Company Representatives  Section ======================================= */}
                                                    <div className="step">
                                                        <p className="text-left"><h3> Company Representatives</h3> </p>
                                                        <hr />
                                                        <p className="text-start">Your merchant account must be activated by an executive, senior manager or someone who has the authority for the control and management of your business. If that's not you, please ask the right person to fill out this form.
                                                        </p>
                                                        <div className="row">

                                                        </div>
                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Legal name</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="fname_11" id="fname_11" className="form-control" placeholder='First Name' />
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="lname_11" id="lname_11" className="form-control" placeholder='Last Name' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Email</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="email" name="e_mail_11" id="e_mail_11" placeholder="Please enter your work email address" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Job Title</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="text" name="title" id="title" placeholder="CEO, Manager, Partner" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        {/* <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Date of birth</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="date" name="dob" id="dob" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        {/* <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Home Address</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-12 col-sm-12">
                                                                            <CountryDropdown />
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12 col-sm-12">
                                                                            <input type="text" name="add1" id="add1" placeholder="Address line 1" className="form-control" />
                                                                        </div>
                                                                        <div className="col-md-12 col-sm-12">
                                                                            <input type="text" name="add2" id="add2" placeholder="Address line 2" className="form-control" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="state" id="state" className="form-control" placeholder='State' />
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="city" id="city" className="form-control" placeholder='City/Town' />
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="postal" id="postal" className="form-control" placeholder='Postal Code' />
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12">
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Mobile Number</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <CountryCodeDD />
                                                                        </div>
                                                                        <div className="col-md-9 col-sm-12">
                                                                            <input type="text"
                                                                                name="mobile_11"
                                                                                id="mobile_11"
                                                                                className="form-control"
                                                                                onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                maxLength={"10"}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-5">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <h4 className="text-start text-dark fw-boldest">Risk/Chargeback Contact</h4>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <select className="form-control" name="contact1" id="partNumberSearch">
                                                                        <option value="">Use same contact as</option>
                                                                        <option value="CR">Company Representative</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <p className="text-start fw-boldest">Name</p>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="fname1" id="fname1" className="form-control" placeholder='First Name' />
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="lname1" id="lname1" className="form-control" placeholder='Last Name' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Email</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="email" name="e_mail1" id="e_mail1" placeholder="Please enter your work email address" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Phone Number</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <CountryCodeDD />
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text"
                                                                                name="mobile1"
                                                                                id="mobile1"
                                                                                className="form-control"
                                                                                onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                maxLength={"10"}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-5">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <h4 className="text-start text-dark fw-boldest">Finance Contact</h4>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <select className="form-control" name="conatct2" id="riskContact_1">
                                                                        <option value="">Use same contact as</option>
                                                                        <option value="CR">Company Representative</option>
                                                                        <option value="RC">Risk Contact</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <p className="text-start fw-boldest">Name</p>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="rf_fname2" id="rf_fname2" className="form-control" placeholder='First Name' />
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="rf_lname2" id="rf_lname2" className="form-control" placeholder='Last Name' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Email</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="email" name="rf_mail2" id="rf_mail2" placeholder="Please enter your work email address" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Phone Number</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <CountryCodeDD />
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text"
                                                                                name="r_phone2"
                                                                                id="rf_phone2"
                                                                                className="form-control"
                                                                                onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                maxLength={"10"}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-5">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <h4 className="text-start text-dark fw-boldest">Support/email notification</h4>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <select className="form-control" name="contact3" id='riskContact_22'>
                                                                        <option value="">Use same contact as</option>
                                                                        <option value="CR">Company Representative</option>
                                                                        <option value="RC">Risk Contact</option>
                                                                        <option value="FC">Finance Contact</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <p className="text-start fw-boldest">Name</p>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="rsen_fname2" id="rsen_fname2" className="form-control" placeholder='First Name' />
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12">
                                                                            <input type="text" name="rsen_lname2" id="rsen_lname2" className="form-control" placeholder='Last Name' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Email</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <input type="email" name="rsen_mail2" id="rsen_mail2" placeholder="Please enter your work email address" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group mt-3">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12">
                                                                    <label className="text-dark fw-boldest">Phone Number</label>
                                                                </div>
                                                                <div className="col-md-8 col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <CountryCodeDD />
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text"
                                                                                name="rsen_phone2"
                                                                                id="rsen_phone2"
                                                                                className="form-control"
                                                                                onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                maxLength={"10"}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* // ===================== Compnay Owners Section ======================================= */}
                                                    <div className="step">
                                                        <BusinessOwners />
                                                    </div>

                                                    {/* // ===================== Company Executives  Section ======================================= */}
                                                    <div className="step">
                                                        <p className="text-left"><h3> Company Executives</h3> </p>
                                                        <hr />
                                                        <p className="text-start">Please provide the list of Directors/Authorised signatories for signing of Merchant Service agreement.
                                                        </p>

                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <Link to="#" className="btn btn-primary mx-2" onClick={this.directorFormDetails}><i className="fas fa-plus-circle ms-2"></i> Add a new Director/Authorised signatory</Link>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12">
                                                                {this.state.directorHolder.map(input => {
                                                                    return input;
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* // ===================== Fulfillment Info  Section ======================================= */}
                                                    <div className="step">
                                                        <p className="text-left"><h3> Fulfillment Info</h3> </p>
                                                        <hr />
                                                        <p className="text-start">Tell how do you conduct the business.</p>
                                                        <div className="mt-3">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label> Do you sell physical goods</label>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12 ">
                                                                    <div className="companiesSelection d-flex">
                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input"
                                                                                type="radio"
                                                                                name="phy_goods"
                                                                                id="phy_goods"
                                                                                defaultValue="yes"
                                                                                checked={this.state.goodsYes}
                                                                                onChange={this.handleGoodsChange}
                                                                            />
                                                                            <label classname="form-check-label" htmlfor="phy_goods">&nbsp;Yes</label>
                                                                        </div>

                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input"
                                                                                type="radio"
                                                                                name="phy_goods"
                                                                                id="phy_goods2"
                                                                                defaultValue="no"
                                                                                checked={this.state.goodsNo}
                                                                                onChange={this.handleGoodsChangeNo}
                                                                            />
                                                                            <label classname="form-check-label" htmlfor="phy_goods2">&nbsp; No</label>
                                                                        </div>
                                                                    </div>
                                                                    {GoodsContent}
                                                                    {GoodsContentNO}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label>On Average, how long after paying, do your customers recieve their goods or services</label>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12">
                                                                    <input type="text" name="avg_pay" id="avg_pay" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label>Will you be using Server to Server Integration</label>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12">
                                                                    <div className="companiesSelection d-flex">
                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input"
                                                                                type="radio"
                                                                                name="s2s"
                                                                                id="s2s"
                                                                                defaultValue="yes"
                                                                                checked={this.serverRadioBtn}
                                                                                onChange={this.handleServerRadioBtn}
                                                                            />
                                                                            <label classname="form-check-label" htmlfor="s2s">&nbsp;Yes</label>
                                                                        </div>

                                                                        <div className="form-check form-check-inline">
                                                                            <input classname="form-check-input" type="radio" name="s2s" id="s2s2" defaultValue="no" />
                                                                            <label classname="form-check-label" htmlfor="s2s2">&nbsp; No</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-start text-primary fw-bolder">PCI Certificate must be provided if server to server integration will be used.</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label>Have you processed Card transaction online before:</label>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12">
                                                                    <div className="form-check form-check-inline">
                                                                        <input classname="form-check-input"
                                                                            type="radio"
                                                                            name="card_transaction"
                                                                            id="ct_1"
                                                                            defaultValue="yes"
                                                                            checked={this.transactionCheck}
                                                                            onClick={this.handleTransaction}
                                                                        />
                                                                        <label classname="form-check-label" htmlfor="ct_1">&nbsp;Yes</label>
                                                                    </div>

                                                                    <div className="form-check form-check-inline">
                                                                        <input classname="form-check-input" 
                                                                        type="radio" 
                                                                        name="card_transaction" 
                                                                        id="ct_2" 
                                                                        defaultValue="no"
                                                                        checked={this.transactionCheck}  
                                                                        onClick={this.handleTransaction} />
                                                                        <label classname="form-check-label" htmlfor="ct_2">&nbsp; No</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {transactionnContent}
                                                        </div>

                                                        {/* <div className="mt-3">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label>Name of current/previous acquirer or PSP</label>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12">
                                                                    <div className="d-flex flex-column">
                                                                        <input type="text" name="psp" id="psp" className="form-control" />
                                                                        <div className="form-check form-check-inline mt-2">
                                                                            <input classname="form-check-input" type="radio" name="never_processed" id="never_process" defaultValue="no" />
                                                                            <label classname="form-check-label fw-bolder text-dark" htmlfor="never_process">&nbsp; Never processed online</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                                        <div className="mt-3">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label>Reason for applying to OmPay</label>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12">
                                                                    <textarea rows={"5"} name="apply_OA" id="apply_OA" className="form-control textarea-h" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* // ===================== Billing Descriptor Section ======================================= */}
                                                    <div className="step">
                                                        <h3 className="text-start"> Billing Descriptor</h3>
                                                        <p className="text-start">This information helps your customers to recognise transactions performed on your website. This information will be visible on their credit card statements.</p>
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12 mx-auto">
                                                                <div className="card card-relative" style={{ "borderRadius": "10px" }}>
                                                                    <div className="card-body">
                                                                        <div className="images_texct_section">
                                                                            <img src={BillingImg} alt="card_img" className="img-fluid" />
                                                                            <input type="text" name="billingDesc" placeholder="Enter your billing descriptor" id="billingDesc" className="form-control desc-formControl" value={this.billingDesc}  />
                                                                        </div>

                                                                        <p className="text-justify text-wrap">
                                                                            A billing descriptor is the label which appears a cardholder's statement, which is used to postively identify the transaction. The information usually include the date of each payment and the company/website from which it was purchased.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-12">
                                                                <label htmlFor="bill_descriptor">Billing Descriptor</label>
                                                            </div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text" name="bill_descriptor" id="bill_descriptor" maxLength={20} className="form-control" value={this.descriptorVal} onChange={this.handleDescriptor} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-2">
                                                            <div className="col-md-4 col-sm-12">
                                                                <label htmlFor="support_number">Customer support phone number</label>
                                                            </div>

                                                            <div className="col-md-8 col-sm-12">
                                                                <input type="text"
                                                                    name="support_number"
                                                                    id="support_number"
                                                                    maxLength={"10"}
                                                                    className="form-control"
                                                                    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* // ===================== Bank Account Details Section ======================================= */}
                                                    <div className="step">
                                                        <h3 className="text-start"> Bank Account Details</h3>
                                                        <p className="text-start">A payout is the transfer of funds from Open Acquring merchant account to your company's bank account.</p>
                                                        <div className="row">
                                                            {/* <div className="col-md-3 col-sm-12">
                                                                <label>Select Bank</label>
                                                            </div> */}
                                                            <div className="col-md-12 col-sm-12">
                                                                {/* <select className="form-control" name="comp_type" value={this.selectedBankVal} onChange={this.handleBankChange} >
                                                                    <option value="">Please select...</option>
                                                                    <option value="bank1">Bank 1</option>
                                                                    <option value="bank2">Bank 2</option>
                                                                </select> */}

                                                                <div className="form-group mt-2">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <label>Account Holder Name</label>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text" className="form-control" name="holder_name" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <div className="form-group">
                                                                        <div className="row">
                                                                            <div className="col-md-3 col-sm-12">
                                                                                <label>Account Number</label>
                                                                            </div>
                                                                            <div className="col-md-8 col-sm-12">
                                                                                <input type="text"
                                                                                    className="form-control"
                                                                                    name="merchant_accNum"
                                                                                    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                                                                    maxLength={"12"}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <label>Bank Name</label>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text" className="form-control" name="bank_name" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <label>Bank Address</label>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <input type="text" className="form-control" name="bank_address" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group">
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <label>Bank Country</label>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <CountryDropdown />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <div className="form-group">
                                                                        <div className="row">
                                                                            <div className="col-md-3 col-sm-12">
                                                                                <label>IBAN</label>
                                                                            </div>
                                                                            <div className="col-md-7 col-sm-12">
                                                                                <input type="text"
                                                                                    className="form-control"
                                                                                    name="merchant_iban"
                                                                                    onChange={this.onChangeIBAN}
                                                                                    placeholder=""
                                                                                    id="iban"
                                                                                />
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-12">
                                                                                <span> <Link to="#" className="btn btn-warning ml-sm-n3 mt-0 mt-1 px-2" onClick={this.checkIBAN} > Check </Link> </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <div className="form-group">
                                                                        <div className="row">
                                                                            <div className="col-md-3 col-sm-12">
                                                                                <label>SWIFT</label>
                                                                            </div>
                                                                            <div className="col-md-8 col-sm-12">
                                                                                <input type="text" className="form-control" name="swift" placeholder="" />
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
                                                                            <div className="col-md-8 col-sm-12">
                                                                                <input type="text" className="form-control" name="merchant_accCurr" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        {/* <div className="mt-2">
                                                            <div className="row">
                                                                <div className="col-md-12 col-sm-12">
                                                                    {this.renderBankForm(this.state.selectedBankVal)}
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <p className="text-start text-dark fw-bolder">
                                                            I, the account holder, am the person required to authorise debits. By submitting a bank account, I authorise Open Acquring to transfer to this bank account our payouts as per agreed fee schedule and according to the Merchant Service Agreement.
                                                        </p>
                                                    </div>

                                                    {/* // ===================== Documents Submission Section ======================================= */}
                                                    <div className="step">
                                                        <section className="five mt-4">
                                                            <h3 className="text-start">Documents Submission</h3>
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <label>Certificate Of Incorporation or trade licence</label>
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
                                                                        <label>Latest Shareholder Certificate</label>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="custom-file">
                                                                            <input type="file" className="share_certificate" id="share_certificate" />
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
                                                                        <label>Proof of Address of Beneficial Owner(s) </label>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="custom-file">
                                                                            <input type="file" className="beneOwner" id="beneOwner" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mt-3">
                                                                <div className="row">
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <label>Certificate Of Incorporation of Shareholder</label>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="custom-file">
                                                                            <input type="file" className="shareholder_certificate" id="shareholder_certificate" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mt-3">
                                                                <div className="row">
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <label>Latest Share Certificate</label>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="custom-file">
                                                                            <input type="file" className="shareholder_certificate" id="latest_shareCertificate" />
                                                                        </div>
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
                                                                        <label>Share Certificate</label>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="custom-file">
                                                                            <input type="file" className="share" id="share" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <div className="mt-3">
                                                                <div className="row">
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <label>PCI Certificate</label>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="custom-file">
                                                                            <input type="file" className="pci" id="pci" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}

                                                            <div className="mt-3">
                                                                {serverBtnContent}
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
                                                            <hr />
                                                            <p className="text-left">Max file size - 1.0MB. Acceptable files formats: pdf or jpeg.</p>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* // ===================== Wizard form buttons ======================================= */}
                                    <div className="wizard-footer d-flex align-items-center justify-content-center">
                                        <button
                                            id="wizard-prev"
                                            type="button"
                                            className="btn btn-irv btn-irv-default w-auto"
                                        >
                                            Previous
                                        </button>
                                        <button id="wizard-next" type="button" className="btn btn-irv ms-3 w-auto">
                                            Next
                                        </button>

                                        <button id="wizard-subm" type="submit" className="btn btn-irv ms-2 w-auto">
                                            Submit
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >

            </div>
        )

        // ===================== End of WIZARD FORM =======================================
    }
}
