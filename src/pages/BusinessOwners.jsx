import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Results from './ShowCompanyinCE'


export default class BusinessOwners extends Component {
    constructor(props) {
        super();
        this.state = {
            shareHolderFormDetails: [],
            companyShareHolds: [],
            value: '',
            showResults: false
        }
        this.shareHolderFormDetails.bind(this);
        this.companyShareHolder.bind(this);
        // this.handleCompanyValue1 = this.handleCompanyValue1.bind(this);
    }


    //===================== Removing the INDIVIDUAL SHAREHOLDER form on clicking remove btn =====================
    deleteIndividualShareHolder = (i) => {
        let options = [...this.state.shareHolderFormDetails];
        options.splice(i, 1);
        this.setState({ shareHolderFormDetails: options });
    }

    //===================== Removing the COMPANY SHAREHOLDER form on clicking remove btn =====================
    deleteCompanyHolder = (i) => {
        let options = [...this.state.companyShareHolds];
        options.splice(i, 1);
        this.setState({ companyShareHolds: options });
    }


    //=======================Select the user selected value =========================
    // handleCompanyValue1(event) {
    //     const getValue = event.target.value;
    //     if(getValue === "company_y"){
    //         // alert('trueee')
    //         this.setState({ showResults: true })
    //     }else{
    //         // alert('falseee')
    //         this.setState({ showResults: false })
    //     }
    // }

    //======defining the functionality if company value is selected =================
    // renderCompanyChoices(param) {
    //     switch (param) {
    //         case 'individual/sole_trader': return null;
    //         case 'company':
    //             return <div className="mt-2">
    //                 <div className="companiesSelection d-flex flex-column">
    //                     <div className="form-check form-check-inline">
    //                         <input classname="form-check-input" type="radio" name="companyChoices" id="choice1" defaultValue="choice1" />
    //                         <label classname="form-check-label" htmlfor="choice1">&nbsp; Limite Liability Partnership</label>
    //                     </div>

    //                     <div className="form-check form-check-inline">
    //                         <input classname="form-check-input" type="radio" name="companyChoices" id="choice2" defaultValue="choice2" />
    //                         <label classname="form-check-label" htmlfor="choice2">&nbsp; Private Limited Company </label>
    //                     </div>

    //                     <div className="form-check form-check-inline">
    //                         <input classname="form-check-input" type="radio" name="companyChoices" id="choice3" defaultValue="choice3" />
    //                         <label classname="form-check-label" htmlfor="choice3">&nbsp; Public Listed Company </label>
    //                     </div>

    //                     <div className="form-check form-check-inline">
    //                         <input classname="form-check-input" type="radio" name="companyChoices" id="choice4" defaultValue="choice4" />
    //                         <label classname="form-check-label" htmlfor="choice4">&nbsp; Unincorporated Partnership </label>
    //                     </div>
    //                 </div>
    //             </div>;

    //         case 'non-profit': return null;
    //         case 'trust': return null;

    //         default: return null;
    //     }
    // }

    //==================== When user clicks on  Individual Shareholder button ==========
    shareHolderFormDetails() {
        var arr = this.state.shareHolderFormDetails;
        arr.push(
            <div>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12"></div>
                        <div className="col-md-8 col-sm-12">
                            <Link to="#" className="btn-danger add-trash-btn w-auto float-right" onClick={this.deleteIndividualShareHolder.bind(this)}><i className="fas fa-trash text-light me-2"></i>Remove</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 sm-12">
                            <h2 className="text-bold text-center text-decoration-underline text-heading-shareholders">Individual Shareholder Details</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3 col-sm-12 pl-0">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8 col-sm-12 px-2">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <input type="text" name="share_fname" id="share_fname" className="form-control" />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <input type="text" name="share_lname" id="share_lname" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <label>Date of Birth</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="date" name="share_date" id="share_date" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <label htmlFor="share_name">Nationality</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <select name="nationality" id="nationality" className="form-control">
                                <option value="">-- select one --</option>
                                <option value="afghan">Afghan</option>
                                <option value="albanian">Albanian</option>
                                <option value="algerian">Algerian</option>
                                <option value="american">American</option>
                                <option value="andorran">Andorran</option>
                                <option value="angolan">Angolan</option>
                                <option value="antiguans">Antiguans</option>
                                <option value="argentinean">Argentinean</option>
                                <option value="armenian">Armenian</option>
                                <option value="australian">Australian</option>
                                <option value="austrian">Austrian</option>
                                <option value="azerbaijani">Azerbaijani</option>
                                <option value="bahamian">Bahamian</option>
                                <option value="bahraini">Bahraini</option>
                                <option value="bangladeshi">Bangladeshi</option>
                                <option value="barbadian">Barbadian</option>
                                <option value="barbudans">Barbudans</option>
                                <option value="batswana">Batswana</option>
                                <option value="belarusian">Belarusian</option>
                                <option value="belgian">Belgian</option>
                                <option value="belizean">Belizean</option>
                                <option value="beninese">Beninese</option>
                                <option value="bhutanese">Bhutanese</option>
                                <option value="bolivian">Bolivian</option>
                                <option value="bosnian">Bosnian</option>
                                <option value="brazilian">Brazilian</option>
                                <option value="british">British</option>
                                <option value="bruneian">Bruneian</option>
                                <option value="bulgarian">Bulgarian</option>
                                <option value="burkinabe">Burkinabe</option>
                                <option value="burmese">Burmese</option>
                                <option value="burundian">Burundian</option>
                                <option value="cambodian">Cambodian</option>
                                <option value="cameroonian">Cameroonian</option>
                                <option value="canadian">Canadian</option>
                                <option value="cape verdean">Cape Verdean</option>
                                <option value="central african">Central African</option>
                                <option value="chadian">Chadian</option>
                                <option value="chilean">Chilean</option>
                                <option value="chinese">Chinese</option>
                                <option value="colombian">Colombian</option>
                                <option value="comoran">Comoran</option>
                                <option value="congolese">Congolese</option>
                                <option value="costa rican">Costa Rican</option>
                                <option value="croatian">Croatian</option>
                                <option value="cuban">Cuban</option>
                                <option value="cypriot">Cypriot</option>
                                <option value="czech">Czech</option>
                                <option value="danish">Danish</option>
                                <option value="djibouti">Djibouti</option>
                                <option value="dominican">Dominican</option>
                                <option value="dutch">Dutch</option>
                                <option value="east timorese">East Timorese</option>
                                <option value="ecuadorean">Ecuadorean</option>
                                <option value="egyptian">Egyptian</option>
                                <option value="emirian">Emirian</option>
                                <option value="equatorial guinean">Equatorial Guinean</option>
                                <option value="eritrean">Eritrean</option>
                                <option value="estonian">Estonian</option>
                                <option value="ethiopian">Ethiopian</option>
                                <option value="fijian">Fijian</option>
                                <option value="filipino">Filipino</option>
                                <option value="finnish">Finnish</option>
                                <option value="french">French</option>
                                <option value="gabonese">Gabonese</option>
                                <option value="gambian">Gambian</option>
                                <option value="georgian">Georgian</option>
                                <option value="german">German</option>
                                <option value="ghanaian">Ghanaian</option>
                                <option value="greek">Greek</option>
                                <option value="grenadian">Grenadian</option>
                                <option value="guatemalan">Guatemalan</option>
                                <option value="guinea-bissauan">Guinea-Bissauan</option>
                                <option value="guinean">Guinean</option>
                                <option value="guyanese">Guyanese</option>
                                <option value="haitian">Haitian</option>
                                <option value="herzegovinian">Herzegovinian</option>
                                <option value="honduran">Honduran</option>
                                <option value="hungarian">Hungarian</option>
                                <option value="icelander">Icelander</option>
                                <option value="indian">Indian</option>
                                <option value="indonesian">Indonesian</option>
                                <option value="iranian">Iranian</option>
                                <option value="iraqi">Iraqi</option>
                                <option value="irish">Irish</option>
                                <option value="israeli">Israeli</option>
                                <option value="italian">Italian</option>
                                <option value="ivorian">Ivorian</option>
                                <option value="jamaican">Jamaican</option>
                                <option value="japanese">Japanese</option>
                                <option value="jordanian">Jordanian</option>
                                <option value="kazakhstani">Kazakhstani</option>
                                <option value="kenyan">Kenyan</option>
                                <option value="kittian and nevisian">Kittian and Nevisian</option>
                                <option value="kuwaiti">Kuwaiti</option>
                                <option value="kyrgyz">Kyrgyz</option>
                                <option value="laotian">Laotian</option>
                                <option value="latvian">Latvian</option>
                                <option value="lebanese">Lebanese</option>
                                <option value="liberian">Liberian</option>
                                <option value="libyan">Libyan</option>
                                <option value="liechtensteiner">Liechtensteiner</option>
                                <option value="lithuanian">Lithuanian</option>
                                <option value="luxembourger">Luxembourger</option>
                                <option value="macedonian">Macedonian</option>
                                <option value="malagasy">Malagasy</option>
                                <option value="malawian">Malawian</option>
                                <option value="malaysian">Malaysian</option>
                                <option value="maldivan">Maldivan</option>
                                <option value="malian">Malian</option>
                                <option value="maltese">Maltese</option>
                                <option value="marshallese">Marshallese</option>
                                <option value="mauritanian">Mauritanian</option>
                                <option value="mauritian">Mauritian</option>
                                <option value="mexican">Mexican</option>
                                <option value="micronesian">Micronesian</option>
                                <option value="moldovan">Moldovan</option>
                                <option value="monacan">Monacan</option>
                                <option value="mongolian">Mongolian</option>
                                <option value="moroccan">Moroccan</option>
                                <option value="mosotho">Mosotho</option>
                                <option value="motswana">Motswana</option>
                                <option value="mozambican">Mozambican</option>
                                <option value="namibian">Namibian</option>
                                <option value="nauruan">Nauruan</option>
                                <option value="nepalese">Nepalese</option>
                                <option value="new zealander">New Zealander</option>
                                <option value="ni-vanuatu">Ni-Vanuatu</option>
                                <option value="nicaraguan">Nicaraguan</option>
                                <option value="nigerien">Nigerien</option>
                                <option value="north korean">North Korean</option>
                                <option value="northern irish">Northern Irish</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="omani">Omani</option>
                                <option value="pakistani">Pakistani</option>
                                <option value="palauan">Palauan</option>
                                <option value="panamanian">Panamanian</option>
                                <option value="papua new guinean">Papua New Guinean</option>
                                <option value="paraguayan">Paraguayan</option>
                                <option value="peruvian">Peruvian</option>
                                <option value="polish">Polish</option>
                                <option value="portuguese">Portuguese</option>
                                <option value="qatari">Qatari</option>
                                <option value="romanian">Romanian</option>
                                <option value="russian">Russian</option>
                                <option value="rwandan">Rwandan</option>
                                <option value="saint lucian">Saint Lucian</option>
                                <option value="salvadoran">Salvadoran</option>
                                <option value="samoan">Samoan</option>
                                <option value="san marinese">San Marinese</option>
                                <option value="sao tomean">Sao Tomean</option>
                                <option value="saudi">Saudi</option>
                                <option value="scottish">Scottish</option>
                                <option value="senegalese">Senegalese</option>
                                <option value="serbian">Serbian</option>
                                <option value="seychellois">Seychellois</option>
                                <option value="sierra leonean">Sierra Leonean</option>
                                <option value="singaporean">Singaporean</option>
                                <option value="slovakian">Slovakian</option>
                                <option value="slovenian">Slovenian</option>
                                <option value="solomon islander">Solomon Islander</option>
                                <option value="somali">Somali</option>
                                <option value="south african">South African</option>
                                <option value="south korean">South Korean</option>
                                <option value="spanish">Spanish</option>
                                <option value="sri lankan">Sri Lankan</option>
                                <option value="sudanese">Sudanese</option>
                                <option value="surinamer">Surinamer</option>
                                <option value="swazi">Swazi</option>
                                <option value="swedish">Swedish</option>
                                <option value="swiss">Swiss</option>
                                <option value="syrian">Syrian</option>
                                <option value="taiwanese">Taiwanese</option>
                                <option value="tajik">Tajik</option>
                                <option value="tanzanian">Tanzanian</option>
                                <option value="thai">Thai</option>
                                <option value="togolese">Togolese</option>
                                <option value="tongan">Tongan</option>
                                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                <option value="tunisian">Tunisian</option>
                                <option value="turkish">Turkish</option>
                                <option value="tuvaluan">Tuvaluan</option>
                                <option value="ugandan">Ugandan</option>
                                <option value="ukrainian">Ukrainian</option>
                                <option value="uruguayan">Uruguayan</option>
                                <option value="uzbekistani">Uzbekistani</option>
                                <option value="venezuelan">Venezuelan</option>
                                <option value="vietnamese">Vietnamese</option>
                                <option value="welsh">Welsh</option>
                                <option value="yemenite">Yemenite</option>
                                <option value="zambian">Zambian</option>
                                <option value="zimbabwean">Zimbabwean</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <label>Passport Number</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="share_passport" id="share_passport" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <label>Home Address</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
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
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <label>%  of Ownership</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="share_ownership" id="share_ownership" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <label>Is this Shareholder a Director/Authorised Signatory</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="d-flex ">
                                <div className="form-check form-check-inline">
                                    <input classname="form-check-input" type="radio" name="shareh1" id="sh1" defaultValue="yes" />
                                    <label classname="form-check-label" htmlfor="sh1">&nbsp; Yes</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input classname="form-check-input" type="radio" name="shareh1" id="sh2" defaultValue="no" />
                                    <label classname="form-check-label" htmlfor="sh2">&nbsp; No </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{ "color": "#213b60 !important", "height": "2px", "width": "95%" }} />

            </div>
        );
        this.setState({ shareHolderFormDetails: arr });
    }

    //==================== When user clicks on  Comapny Shareholder button ==========
    companyShareHolder() {
        var getCompanyFormPage = this.state.companyShareHolds;
        getCompanyFormPage.push(
            <div>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-md-3 col-sm-12"></div>
                        <div className="col-md-9 col-sm-12">
                            <Link to="#" className="btn-danger add-trash-btn w-auto float-right" onClick={this.deleteCompanyHolder.bind(this)}><i className="fas fa-trash text-light me-2"></i>Remove</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 sm-12">
                            <h2 className="text-bold text-center text-decoration-underline text-heading-shareholders">Company Shareholder Details</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="legal_comp">Legal Company Name</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="legal_comp" id="legal_comp" className="form-control" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label>Country</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <select className="form-control" name="legal_country" >
                                <option value="">Select Country...</option>
                                <option value="Afganistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire">Bonaire</option>
                                <option value="Bosnia & Herzegovina">Bosnia &amp; Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Canary Islands">Canary Islands</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Channel Islands">Channel Islands</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Island">Cocos Island</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote DIvoire">Cote DIvoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaco">Curacao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Ter">French Southern Ter</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Great Britain">Great Britain</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="India">India</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea North">Korea North</option>
                                <option value="Korea Sout">Korea South</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Midway Islands">Midway Islands</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Nambia">Nambia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherland Antilles">Netherland Antilles</option>
                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                <option value="Nevis">Nevis</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau Island">Palau Island</option>
                                <option value="Palestine">Palestine</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Phillipines">Philippines</option>
                                <option value="Pitcairn Island">Pitcairn Island</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                <option value="Republic of Serbia">Republic of Serbia</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="St Barthelemy">St Barthelemy</option>
                                <option value="St Eustatius">St Eustatius</option>
                                <option value="St Helena">St Helena</option>
                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                <option value="St Lucia">St Lucia</option>
                                <option value="St Maarten">St Maarten</option>
                                <option value="St Pierre & Miquelon">St Pierre &amp; Miquelon</option>
                                <option value="St Vincent & Grenadines">St Vincent &amp; Grenadines</option>
                                <option value="Saipan">Saipan</option>
                                <option value="Samoa">Samoa</option>
                                <option value="Samoa American">Samoa American</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome & Principe">Sao Tome &amp; Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Tahiti">Tahiti</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad & Tobago">Trinidad &amp; Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks & Caicos Is">Turks &amp; Caicos Is</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Erimates">United Arab Emirates</option>
                                <option value="United States of America">United States of America</option>
                                <option value="Uraguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican City State">Vatican City State</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                <option value="Wake Island">Wake Island</option>
                                <option value="Wallis & Futana Is">Wallis &amp; Futana Is</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zaire">Zaire</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="legal_comp_reg">Company Registration Number</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="legal_comp_reg" id="legal_comp_reg" className="form-control" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="legal_date">Date of Incorporation</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="date" name="legal_date" id="legal_date" className="form-control" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="legal_address">Company Address</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="legal_address" id="legal_address" className="form-control" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label>Company Structure</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <select className="form-control" id="handleCompanyVal" name="comp_type" >
                                <option value="">Please select...</option>
                                <option value="individual/sole_trader">Limited Liability Partnership</option>
                                <option value="company_y">Private Limited Company</option>
                                <option value="non-profit">Public Listed company</option>
                                <option value="trust">Unincorporated Partnership</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-12"></div>
                        <div className="col-md-8 col-sm-12 mb-3" >
                            {/* { this.renderCompanyChoices(this.state.value)} */}
                            {this.state.showResults === true ? <Results /> : null}
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <label>%  of Ownership</label>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="share_ownership" id="share_ownership" className="form-control" />
                        </div>
                    </div>

                </div>
                <hr style={{ "color": "#213b60 !important", "height": "2px", "width": "95%" }} />
            </div>
        );

        this.setState({ companyShareHolds: getCompanyFormPage });
    }

    render() {
        return (
            <div>
                <p className="text-left"><h3> Business Owners</h3> </p>
                <hr />
                <p className="text-start">Due to regulatory requirements, we are mandated to collect and verify information on anyone who has significant ownership in your company. Kindly ensure that these information are correct. We may verify the authenticity of information with the relevant authorities and may need to report discrepanies to them(if any)
                </p>
                <p className="text-start">
                    Please add any Shareholders who owns 25% or more of the company.
                </p>

                <div className="d-flex justify-content-center align-items-center">
                    <Link to="#" onClick={this.shareHolderFormDetails.bind(this)} className="btn btn-primary mx-2"> <i className="fas fa-plus-circle ms-2"></i> Individual as Shareholder </Link>
                    <Link to="#" className="btn btn-primary mx-2" onClick={this.companyShareHolder.bind(this)} ><i className="fas fa-plus-circle ms-2"></i> Company as Shareholder</Link>
                </div>

                <div className="row mt-2">
                    <div className="col-md-12 col-sm-12">
                        {this.state.shareHolderFormDetails ? this.state.shareHolderFormDetails.map(input => {
                            return input;
                        }) : null}
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-12 col-sm-12">
                        {this.state.companyShareHolds ? this.state.companyShareHolds.map(data1 => {
                            return data1;
                        }) : null}
                    </div>
                </div>

                <hr />
                <p className="text-start text-dark font-weight-bolder">Note:- If one or more of your company’s shareholders are legal entities such as a private companies, partnership, trust etc; OmPay will need to verify the information for the owners of that legal entity.</p>
            </div>
        )
    }
}


