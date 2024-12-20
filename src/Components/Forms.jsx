import { useRef } from "react";
import MailInput from "./form/MailInput";
import NameInput from "./form/NameInput";
import PhoneNumberInput from "./form/PhoneNumberInput";
import BirthdateInput from "./form/BirthdateInut";
import '../style/components/forms.scss'

function Forms() {
    const formElement = useRef(null)

    function SubmitHandler(event) {
        event.preventDefault();

        const data = new FormData(formElement.current)
        const dataObject = Object.fromEntries(data.entries())

        localStorage.setItem('user', JSON.stringify(dataObject));

        formElement.current.reset();
        console.log();

    }
    return (
        <>
            <form ref={formElement} className="signup-form" onSubmit={SubmitHandler}>
                <label htmlFor="name" className="signup-form__lable">Your name</label>
                <NameInput className="signup-form__input" placeholder="Name" name='name' />
                <label htmlFor="email" className="signup-form__lable">Email adress</label>
                <MailInput className="signup-form__input" placeholder="Email" name='email' />
                <label htmlFor="phoneNumber" className="signup-form__lable">Phone number</label>
                <PhoneNumberInput className="signup-form__input" placeholder="Phone number" name='phoneNumber' />
                <label htmlFor="birthdate" className="signup-form__lable">Your birthdate</label>
                <BirthdateInput className="signup-form__input" name='birthDate' />
                
                <button name="submit" className="signup-form__button">
                    Add participant <span>+</span>
                </button>
            </form>
        </>
    );
}

export default Forms;