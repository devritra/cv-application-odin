export function CompanyExitDateInput({companyExitDate,handleCompanyExitDateInputChanges}){
    return (
        <>
            <label htmlFor="companyExitDateInput">You left on: </label>
            <input 
                type="date"
                id="companyExitDateInput"
                value={companyExitDate}
                onChange={handleCompanyExitDateInputChanges}
            />
        </>
    )
}