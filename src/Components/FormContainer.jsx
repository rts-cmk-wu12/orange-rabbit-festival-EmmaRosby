import { BsCalendar3 } from "react-icons/bs";
import { RiMap2Line } from "react-icons/ri";
import Forms from "./Forms";
import '../style/components/formContainer.scss'


function FormContainer() {
    return (  
        <>
            <div className="formContainer">
                <div className="formContainer__information">
                    <p className="formContainer__information__description">Signup for the event</p>
                    <h1 >Orange Festival 2025 - Full Festival Ticket</h1>
                    <p className="formContainer__information__time-location"><BsCalendar3 /> 24 June 2025 - 1 July 2025</p>
                    <p className="formContainer__information__time-location"><RiMap2Line /> Festivalsgaden 22, 2300, Roskilde</p>
                </div>
                <div className="formContainer__dotted"></div>
                <Forms/>
            </div>
        </>
    );
}

export default FormContainer;