export function PhoneInput({phone,handlePhoneInputChanges}){
    return (
        <>
            <label htmlFor="phoneInput">Phone: </label>
            <input 
                type="tel"
                id="phoneInput"
                value={phone}
                onChange={handlePhoneInputChanges}
            />
        </>
    )
}