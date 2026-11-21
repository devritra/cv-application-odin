import { NameInput } from "./NameInput"
import { EmailInput } from "./EmailInput"
export function FormHolder(){
    return(
        <>
            <h2>General Information</h2>
            <NameInput/>
            <EmailInput/>
            <h2>Educational Information</h2>
            <h2>Work Experience</h2>
        </>
    )
}