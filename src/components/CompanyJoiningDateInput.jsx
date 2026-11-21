export function CompanyJoiningDateInput({companyJoiningDate,handleCompanyJoiningDateInputChanges}){
    return (
        <>
            <label htmlFor="companyJoiningDateInput">You joined on: </label>
            <input 
                type="date"
                id="companyJoiningDateInput"
                value={companyJoiningDate}
                onChange={handleCompanyJoiningDateInputChanges}
            />
        </>
    )
}