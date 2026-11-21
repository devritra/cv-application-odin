import { useState } from "react"
import { FormHolder } from "./FormHolder"

export function MainPage(){
    const cvTemplate = {
        Name: '',
        Email: '',
        Phone: '',
        'School Name': '',
        'School start date': '',
        'School end date': ''
    }
    const [cvObj, setCvObj] = useState(cvTemplate);
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
                handleNameInputChanges={handleNameInputChanges}
                handleEmailInputChanges={handleEmailInputChanges}
                handlePhoneInputChanges={handlePhoneInputChanges}
                handleSchoolNameInputChanges={handleSchoolNameInputChanges}
                handleSchoolStartDateInputChanges={handleSchoolStartDateInputChanges}
                handleSchoolEndDateInputChanges={handleSchoolEndDateInputChanges}
            />
        </>
    )
}