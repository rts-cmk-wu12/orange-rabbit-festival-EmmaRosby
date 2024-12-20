import { useRef, useState } from "react";

function MailInput(props) {
    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {

        const value = inputElement.current.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setError('Invalid email format');
            return;
        }

        setError(null);
 
    }
    return (
        <>
            <input ref={inputElement} onInput={inputHandler} type="email" {...props} />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default MailInput;