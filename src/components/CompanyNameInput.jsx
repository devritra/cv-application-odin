export function CompanyNameInput({companyName,handleCompanyNameInputChanges}){
    return (
        <>
            <label htmlFor="companyNameInput">Company Name: </label>
            <input 
                type="text"
                id="companyNameInput"
                value={companyName}
                onChange={handleCompanyNameInputChanges}
            />
        </>
    )
}