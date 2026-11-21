export function SchoolStartDateInput({schoolStartDate,handleSchoolStartDateInputChanges}){
    return (
        <>
            <label htmlFor="schoolStartDateInput">School start date: </label>
            <input 
                type="date"
                id="schoolStartDateInput"
                value={schoolStartDate}
                onChange={handleSchoolStartDateInputChanges}
            />
        </>
    )
}