export function InputComponent({label,type ='text',inputId,value,onChange,IsTextarea}){
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            {IsTextarea?(
                <textarea
                    type={type}
                    id={inputId}
                    value={value}
                    onChange={onChange}
                />
            ):(
                <input 
                    type={type}
                    id={inputId}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    )
}