import React from 'react'

const ShowCompanyinCE = () => {
    return (
        <div className="mt-2" id="showBusinessBox">
            <div className="companiesSelection d-flex flex-column">
                <div className="form-check form-check-inline">
                    <input classname="form-check-input" type="radio" name="companyChoices" id="choice1" defaultValue="choice1" />
                    <label classname="form-check-label" htmlfor="choice1">&nbsp; Limite Liability Partnership</label>
                </div>

                <div className="form-check form-check-inline">
                    <input classname="form-check-input" type="radio" name="companyChoices" id="choice2" defaultValue="choice2" />
                    <label classname="form-check-label" htmlfor="choice2">&nbsp; Private Limited Company </label>
                </div>

                <div className="form-check form-check-inline">
                    <input classname="form-check-input" type="radio" name="companyChoices" id="choice3" defaultValue="choice3" />
                    <label classname="form-check-label" htmlfor="choice3">&nbsp; Public Listed Company </label>
                </div>

                <div className="form-check form-check-inline">
                    <input classname="form-check-input" type="radio" name="companyChoices" id="choice4" defaultValue="choice4" />
                    <label classname="form-check-label" htmlfor="choice4">&nbsp; Unincorporated Partnership </label>
                </div>
            </div>
        </div>
    )
}

export default ShowCompanyinCE