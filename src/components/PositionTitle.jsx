export function PositionTitleInput({positionTitle,handlePositionTitleInputChanges}){
    return (
        <>
            <label htmlFor="positionTitleInput">Position Title: </label>
            <input 
                type="text"
                id="positionTitleInput"
                value={positionTitle}
                onChange={handlePositionTitleInputChanges}
            />
        </>
    )
}