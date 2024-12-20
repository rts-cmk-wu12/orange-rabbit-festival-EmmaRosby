import { useRef, useState } from "react";

function BirthdateInput(props) {
    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1;
        let year = date.getFullYear()
    
        const currentDate = `${day} - ${month} - ${year}`
        const adultYear = year - 18; 
        const validDate = `${adultYear}-${month}-${day} `
        console.log(validDate); 
        
        const value = inputElement.current.value;
        
        console.log(value);
        


        if (value <  validDate ) {
            setError('Too young');
            return;
        }

        setError(null);
 
    }
    
    return (
        <>
            <input ref={inputElement} onInput={inputHandler} type="date" {...props} />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default BirthdateInput;