import FormContainer from '../Components/FormContainer';
import Participants from '../Components/Participants';

import '../style/views/signup.scss'


function SignupPage() {
    return (  
        <>
            <div className='container'>
                <img className='container__image' src="src\assets\bgWithTitle.jpg" alt="" />    
                <FormContainer />
            </div>

            <Participants/>
        </>
    
    );
}

export default SignupPage;