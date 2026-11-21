import { NameInput } from "./NameInput"
import { EmailInput } from "./EmailInput"
import { PhoneInput } from "./PhoneInput"
import { SchoolNameInput } from "./SchoolNameInput"
import { SchoolStartDateInput } from "./SchoolStartDateInput"
import { SchoolEndDateInput } from "./SchoolEndDate"
export function FormHolder(
    {
        name,
        email,
        phone,
        schoolName,
        schoolStartDate,
        schoolEndDate,
        handleNameInputChanges,
        handleEmailInputChanges,
        handlePhoneInputChanges,
        handleSchoolNameInputChanges,
        handleSchoolStartDateInputChanges,
        handleSchoolEndDateInputChanges
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
            <SchoolEndDateInput
                schoolEndDate={schoolEndDate}
                handleSchoolEndDateInputChanges={handleSchoolEndDateInputChanges}
            />
            <h2>Work Experience</h2>
        </>
    )
}