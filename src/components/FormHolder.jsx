import { NameInput } from "./NameInput"
import { EmailInput } from "./EmailInput"
import { PhoneInput } from "./PhoneInput"
import { SchoolNameInput } from "./SchoolNameInput"
import { SchoolStartDateInput } from "./SchoolStartDateInput"
export function FormHolder(
    {
        name,
        email,
        phone,
        schoolName,
        schoolStartDate,
        handleNameInputChanges,
        handleEmailInputChanges,
        handlePhoneInputChanges,
        handleSchoolNameInputChanges,
        handleSchoolStartDateInputChanges
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
            <SchoolNameInput
                schoolName={schoolName}
                handleSchoolNameInputChanges={handleSchoolNameInputChanges}
            />
            <SchoolStartDateInput
                schoolStartDate={schoolStartDate}
                handleSchoolStartDateInputChanges={handleSchoolStartDateInputChanges}
            />
            <h2>Work Experience</h2>
        </>
    )
}