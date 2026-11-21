export function SchoolNameInput({schoolName,handleSchoolNameInputChanges}){
    return (
        <>
            <label htmlFor="schoolNameInput">School Name: </label>
            <input 
                type="text"
                id="schoolNameInput"
                value={schoolName}
                onChange={handleSchoolNameInputChanges}
            />
        </>
    )
}