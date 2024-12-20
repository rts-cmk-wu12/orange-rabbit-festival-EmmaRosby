import { useRef, useState } from "react";
import '../../style/components/errorStyle.css'

function NameInput(props) {
    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {

        const value = inputElement.current.value;

        

        if (/\d/.test(value)) {
            setError('Name cannot contain number');
            return; 
        }

        setError(null);
 
    }
    return (
        <>
            <input ref={inputElement} onInput={inputHandler} type="text" {...props} />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default NameInput;