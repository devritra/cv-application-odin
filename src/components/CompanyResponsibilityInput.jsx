export function CompanyResponsibilityInput({companyResponsibility,handleCompanyResponsibilityInputChanges}){
    return (
        <>
            <label htmlFor="companyResponsibilityInput">Main responsibilities you had in your company: </label>
            <textarea
                type="textarea"
                id="companyResponsibilityInput"
                value={companyResponsibility}
                onChange={handleCompanyResponsibilityInputChanges}
            />
        </>
    )
}