export function EmailInput({email, handleEmailInputChanges}){
    return (
        <>
            <label htmlFor="emailInput">Email: </label>
            <input 
                type="text"
                id="emailInput"
                value={email}
                onChange={handleEmailInputChanges}
            />
        </>
    )
}