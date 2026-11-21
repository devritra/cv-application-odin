import { NameInput } from "./NameInput"
import { EmailInput } from "./EmailInput"
import { PhoneInput } from "./PhoneInput"
export function FormHolder(
    {
        name,
        email,
        phone,
        handleNameInputChanges,
        handleEmailInputChanges,
        handlePhoneInputChanges
    }
){
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
            <PhoneInput
                phone={phone}
                handlePhoneInputChanges={handlePhoneInputChanges}
            />
            <h2>Educational Information</h2>
            <h2>Work Experience</h2>
        </>
    )
}