import { NameInput } from "./NameInput"
import { EmailInput } from "./EmailInput"
export function FormHolder(
    {
        name,
        email,
        handleNameInputChanges,
        handleEmailInputChanges
    }
){
    console.log(handleEmailInputChanges)
    return(
        <>
            <h2>General Information</h2>
            <NameInput
                name={name}
                handleNameInputChanges={handleNameInputChanges}
            />
            <EmailInput
                email={email}
                handleEmailInputChanges={handleEmailInputChanges}
            />
            <h2>Educational Information</h2>
            <h2>Work Experience</h2>
        </>
    )
}