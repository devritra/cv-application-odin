export function SchoolNameInput({schoolName,handleSchoolNameInputChanges}){
    return (
        <>
            <label htmlFor="schoolNameInput">SchoolName: </label>
            <input 
                type="text"
                id="schoolNameInput"
                value={schoolName}
                onChange={handleSchoolNameInputChanges}
            />
        </>
    )
}