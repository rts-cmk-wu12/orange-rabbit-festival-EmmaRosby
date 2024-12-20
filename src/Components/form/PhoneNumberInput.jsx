import { useRef, useState } from "react";

function PhoneNumberInput(props) {
    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {

        const value = inputElement.current.value;

        const phoneNumberRegex = /^\+?(\d[\d-.() ]+)?(\([\d-.() ]+\))?[\d-.() ]+$/;

        if (!phoneNumberRegex.test(value)) {
            setError('Invalid phone number format');
            return;
        }

        if (value.length < 8 ) {
            setError('Number is too short');
            return; 
        }
        if (value.length > 8 ) {
            setError('Number is too long');
            return; 
        }
        setError(null);
    } 

    
    return (
        <>
            <input ref={inputElement} onInput={inputHandler} type="tel" {...props} />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default PhoneNumberInput;