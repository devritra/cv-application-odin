export function SchoolEndDateInput({schoolEndDate,handleSchoolEndDateInputChanges}){
    return (
        <>
            <label htmlFor="schoolEndDateInput">School end date: </label>
            <input 
                type="date"
                id="schoolEndDateInput"
                value={schoolEndDate}
                onChange={handleSchoolEndDateInputChanges}
            />
        </>
    )
}