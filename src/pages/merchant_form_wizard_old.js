/* eslint-disable no-lone-blocks */
// ===================== OLD WIZARD MERCHANT FORM CODE =======================================

// ===================== OLD MERCHANT FORM CODE =======================================
{
    /* Section 2: Beneficial Owners And Director */
} {
    /* <div className="step">
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
                                                                              <p id="selectValue" style={{ "display": "none", "color": "red" }}>*** Please Select an option.. ***</p>
                                                                          </div>
                                                                      </div>
                                                                      <p className="errorbeneOwe" id="errorbeneOwe"> This is mandatory. Please select one..</p>
                                                                  </div>
                                                              </section>
                                                          </div> */
}

{
    /* Section 2: Beneficial Owner 1 */
} {
    /* <div className="step">
                                                              <section className="three mt-4">
                                                                  <h3 className="text-start">Beneficial Owner 1</h3>
                                                                  <div className="row">
                                                                      <div className="col-md-6 col-sm-12">
                                                                          <label>Name <span className="text-danger">*</span></label>
                                                                      </div>
                                                                      <div className="col-md-6 col-sm-12">
                                                                          <div className="row">
                                                                              <div className="col-md-6 col-sm-12">
                                                                                  <input type="text" className="form-control " name="beneficial_fname" placeholder="Firstname" />
                                                                                  <p id="benefname" className="errorClass mt-1 text-danger" style={{ "display": "none", "fontSize": "10px" }}>This Field is ..</p>
                                                                              </div>
                                                                              <div className="col-md-6 col-sm-12">
                                                                                  <input type="text" className="form-control " name="beneficial_lname" placeholder="Lastname" />
                                                                                  <p id="benelname" className="errorClass mt-1 text-danger" style={{ "display": "none", "fontSize": "10px" }}>This Field is ..</p>
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
                                                                                  <div className="col-md-8 col-sm-12">
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
                                                                                      <input type="text" className="form-control mt-2" placeholder="Postal/ Zip Code" />
                                                                                  </div>
                                                                                  <div className="col-md-6 col-12"></div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </section>
                                                          </div> */
}

{
    /* Section 2: Beneficial Owner 2 */
} {
    /* <div className="step">
                                                              <section className="three mt-4">
                                                                  <h3 className="text-start">Beneficial Owner 2</h3>
                                                                  <div className="row">
                                                                      <div className="col-md-6 col-sm-12">
                                                                          <label>Name <span className="text-danger">*</span></label>
                                                                      </div>
                                                                      <div className="col-md-6 col-sm-12">
                                                                          <div className="row">
                                                                              <div className="col-md-6 col-sm-12">
                                                                                  <input type="text" className="form-control bene2" name="beneficial2_fname" placeholder="Firstname" />
                                                                                  <p id="bfname" className="errorClass mt-1 text-danger" style={{ "display": "none", "fontSize": "10px" }}>This Field is ..</p>
                                                                              </div>
                                                                              <div className="col-md-6 col-sm-12">
                                                                                  <input type="text" className="form-control bene2" name="beneficial2_lname" placeholder="Lastname" />
                                                                                  <p id="blname" className="errorClass mt-1 text-danger" style={{ "display": "none", "fontSize": "10px" }}>This Field is ..</p>
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
                                                                                  <div className="col-md-8 col-sm-12">
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
                                                                                      <input type="text" className="form-control mt-2" placeholder="Postal/ Zip Code" />
                                                                                  </div>
                                                                                  <div className="col-md-6 col-12"></div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </section>
                                                          </div> */
}

{
    /* Director/Authorised Signatory */
} {
    /* <div className="step">
                                                              <section className="directorSection mt-4">
                                                                  <h3 className="text-start">Director/Authorised Signatory</h3>
                                                                  <div className="row">
                                                                      <div className="col-md-6 col-sm-12">
                                                                          <label for="comp_name text-bold">Name <span className="text-danger">*</span></label>
                                                                      </div>
                                                                      <div className="col-md-6 col-sm-12">
                                                                          <div className="row">
                                                                              <div className="col-md-6 col-sm-12">
                                                                                  <input type="text" className="form-control " name="director_fname" placeholder="Firstname" />
                                                                              </div>
                                                                              <div className="col-md-6 col-sm-12">
                                                                                  <input type="text" className="form-control " name="director_lname" placeholder="Lastname" />
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
                                                                                  <div className="col-md-8 col-sm-12">
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
                                                          </div> */
}

{
    /* DSection 3: Additional Information */
} {
    /* <div className="step">
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
                                                          </div> */
}

{
    /* <div className="step">
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
                                                          </div> */
}