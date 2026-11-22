import { InputComponent } from "./InputComponent"
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
        handleCompanyExitDateInputChanges,
        isActive,
        handleSubmit
    }
){
    return(
        <form>  
            {isActive?(
                <>
                    <h2>General Information</h2>
                    <InputComponent
                        label={'Name: '}
                        inputId={'nameInput'}
                        value={name}
                        onChange={handleNameInputChanges}
                    />
                    <InputComponent
                        label={'Email: '}
                        type={'email'}
                        inputId={'emailInput'}
                        value={email}
                        onChange={handleEmailInputChanges}
                    />
                    <InputComponent
                        label={'Phone: '}
                        type={'tel'}
                        inputId={'phoneInput'}
                        value={phone}
                        onChange={handlePhoneInputChanges}
                    />
                    <h2>Educational Information</h2>
                    <InputComponent
                        label={'School Name: '}
                        inputId={'schoolNameInput'}
                        value={schoolName}
                        onChange={handleSchoolNameInputChanges}
                    />
                    <InputComponent
                        label={'School start date: '}
                        type={'date'}
                        inputId={'schoolStartDateInput'}
                        value={schoolStartDate}
                        onChange={handleSchoolStartDateInputChanges}
                    />
                    <InputComponent
                        label={'School end date: '}
                        type={'date'}
                        inputId={'schoolEndDateInput'}
                        value={schoolEndDate}
                        onChange={handleSchoolEndDateInputChanges}
                    />
                    <h2>Work Experience</h2>
                    <InputComponent
                        label={'Company Name: '}
                        inputId={'companyNameInput'}
                        value={companyName}
                        onChange={handleCompanyNameInputChanges}
                    />
                    <InputComponent
                        label={'Position Title: '}
                        inputId={'positionTitleInput'}
                        value={positionTitle}
                        onChange={handlePositionTitleInputChanges}
                    />
                    <InputComponent
                        label={'Main responsibilities you had in your company: '}
                        inputId={'companyResponsibilityInput'}
                        value={companyResponsibility}
                        onChange={handleCompanyResponsibilityInputChanges}
                        IsTextarea={true}
                    />
                    <InputComponent
                        label={'You joined on: '}
                        type={'date'}
                        inputId={'companyJoiningDateInput'}
                        value={companyJoiningDate}
                        onChange={handleCompanyJoiningDateInputChanges}
                    />
                    <InputComponent
                        label={'You left on: '}
                        type={'date'}
                        inputId={'companyExitDateInput'}
                        value={companyExitDate}
                        onChange={handleCompanyExitDateInputChanges}
                    />
                    <input type="submit" onClick={handleSubmit}/>
                </>
            ):('')}
        </form>
    )
}