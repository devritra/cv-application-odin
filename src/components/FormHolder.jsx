import { NameInput } from "./NameInput"
import { EmailInput } from "./EmailInput"
import { PhoneInput } from "./PhoneInput"
import { SchoolNameInput } from "./SchoolNameInput"
import { SchoolStartDateInput } from "./SchoolStartDateInput"
import { SchoolEndDateInput } from "./SchoolEndDate"
import { CompanyNameInput } from "./CompanyNameInput"
import { PositionTitleInput } from "./PositionTitleInput"
import { CompanyResponsibilityInput } from "./CompanyResponsibilityInput"
import { CompanyJoiningDateInput } from "./CompanyJoiningDateInput"
import { CompanyExitDateInput } from "./CompanyExitDate"
export function FormHolder(
    {
        name,
        email,
        phone,
        schoolName,
        schoolStartDate,
        schoolEndDate,
        companyName,
        positionTitle,
        companyResponsibility,
        companyJoiningDate,
        companyExitDate,
        handleNameInputChanges,
        handleEmailInputChanges,
        handlePhoneInputChanges,
        handleSchoolNameInputChanges,
        handleSchoolStartDateInputChanges,
        handleSchoolEndDateInputChanges,
        handleCompanyNameInputChanges,
        handlePositionTitleInputChanges,
        handleCompanyResponsibilityInputChanges,
        handleCompanyJoiningDateInputChanges,
        handleCompanyExitDateInputChanges
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
            <CompanyNameInput
                companyName={companyName}
                handleCompanyNameInputChanges={handleCompanyNameInputChanges}
            />
            <PositionTitleInput
                positionTitle={positionTitle}
                handlePositionTitleInputChanges={handlePositionTitleInputChanges}
            />
            <CompanyResponsibilityInput
                companyResponsibility={companyResponsibility}
                handleCompanyResponsibilityInputChanges={handleCompanyResponsibilityInputChanges}
            />
            <CompanyJoiningDateInput
                companyJoiningDate={companyJoiningDate}
                handleCompanyJoiningDateInputChanges={handleCompanyJoiningDateInputChanges}
            />
            <CompanyExitDateInput
                companyExitDate={companyExitDate}
                handleCompanyExitDateInputChanges={handleCompanyExitDateInputChanges}
            />
        </>
    )
}