import { useState } from "react"
import { FormHolder } from "./FormHolder"

export function MainPage(){
    const cvTemplate = {
        Name: '',
        Email: ''
    }
    const [cvObj, setCvObj] = useState(cvTemplate);
    const handleNameInputChanges = (e) => {
        setCvObj({...cvObj, Name: e.target.value})
    }
    const handleEmailInputChanges = (e) => {
        setCvObj({...cvObj, Email: e.target.value})
    }
    console.log(cvObj);
    console.log(handleNameInputChanges);
    
    return(
        <>
            <h1>CV Application</h1>
            <FormHolder
                name={cvObj.Name}
                email={cvObj.Email}
                handleNameInputChanges={handleNameInputChanges}
                handleEmailInputChanges={handleEmailInputChanges}
            />
        </>
    )
}