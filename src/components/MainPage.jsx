import { useState } from "react"
import { FormHolder } from "./FormHolder"
import { Display } from "./Display";

export function MainPage(){
    const cvTemplate = {
        Name: '',
        Email: '',
        Phone: '',
        'School Name': '',
        'School start date': '',
        'School end date': '',
        'Company Name': '',
        'Position Title': '',
        'Company Responsibility': '',
        'Company joining date': '',
        'Company exit date': ''
    }
    const [cvObj, setCvObj] = useState(cvTemplate);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleNameInputChanges = (e) => {
        setCvObj({...cvObj, Name: e.target.value})
    }
    const handleEmailInputChanges = (e) => {
        setCvObj({...cvObj, Email: e.target.value})
    }
    const handlePhoneInputChanges = (e) => {
        setCvObj({...cvObj, Phone: e.target.value})
    }
    const handleSchoolNameInputChanges = (e) => {
        setCvObj({...cvObj, 'School Name': e.target.value})
    }
    const handleSchoolStartDateInputChanges = (e) => {
        setCvObj({...cvObj, 'School start date': e.target.value})
    }
    const handleSchoolEndDateInputChanges = (e) => {
        setCvObj({...cvObj, 'School end date': e.target.value})
    }
    const handleCompanyNameInputChanges = (e) => {
        setCvObj({...cvObj, 'Company Name': e.target.value})
    }
    const handlePositionTitleInputChanges = (e) => {
        setCvObj({...cvObj, 'Position Title': e.target.value})
    }
    const handleCompanyResponsibilityInputChanges = (e) => {
        setCvObj({...cvObj, 'Company Responsibility': e.target.value})
    }
    const handleCompanyJoiningDateInputChanges = (e) => {
        setCvObj({...cvObj, 'Company joining date': e.target.value})
    }
    const handleCompanyExitDateInputChanges = (e) => {
        setCvObj({...cvObj, 'Company exit date': e.target.value})
    }
    const handleSubmit = () => {
        setActiveIndex(1);
    }
    const handleEdit = () => {
        setActiveIndex(0);
    }
    console.log(cvObj);
    
    return(
        <>
            <h1>CV Application</h1>
            <FormHolder
                name={cvObj.Name}
                email={cvObj.Email}
                phone={cvObj.Phone}
                schoolName={cvObj['School Name']}
                schoolStartDate={cvObj['School start date']}
                schoolEndDate={cvObj['School end date']}
                companyName={cvObj['Company Name']}
                positionTitle={cvObj['Position Title']}
                companyResponsibility={cvObj['Company Responsibility']}
                companyJoiningDate={cvObj['Company joining date']}
                companyExitDate={cvObj['Company exit date']}
                handleNameInputChanges={handleNameInputChanges}
                handleEmailInputChanges={handleEmailInputChanges}
                handlePhoneInputChanges={handlePhoneInputChanges}
                handleSchoolNameInputChanges={handleSchoolNameInputChanges}
                handleSchoolStartDateInputChanges={handleSchoolStartDateInputChanges}
                handleSchoolEndDateInputChanges={handleSchoolEndDateInputChanges}
                handleCompanyNameInputChanges={handleCompanyNameInputChanges}
                handlePositionTitleInputChanges={handlePositionTitleInputChanges}
                handleCompanyResponsibilityInputChanges={handleCompanyResponsibilityInputChanges}
                handleCompanyJoiningDateInputChanges={handleCompanyJoiningDateInputChanges}
                handleCompanyExitDateInputChanges={handleCompanyExitDateInputChanges}
                isActive={activeIndex === 0}
                handleSubmit={handleSubmit}
            />
            <Display
                cvObj={cvObj}
                isActive={activeIndex === 1}
                handleEdit={handleEdit}
            />
        </>
    )
}