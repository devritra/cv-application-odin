import { useState } from "react"
import { FormHolder } from "./FormHolder"

export function MainPage(){
    const cvTemplate = {
        Name: '',
        Email: '',
        Phone: ''
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
    console.log(cvObj);
    
    return(
        <>
            <h1>CV Application</h1>
            <FormHolder
                name={cvObj.Name}
                email={cvObj.Email}
                phone={cvObj.Phone}
                handleNameInputChanges={handleNameInputChanges}
                handleEmailInputChanges={handleEmailInputChanges}
                handlePhoneInputChanges={handlePhoneInputChanges}
            />
        </>
    )
}