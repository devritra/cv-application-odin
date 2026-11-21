export function NameInput({name,handleNameInputChanges}){
    return (
        <>
            <label htmlFor="nameInput">Name: </label>
            <input 
                type="text"
                id="nameInput"
                value={name}
                onChange={handleNameInputChanges}
            />
        </>
    )
}