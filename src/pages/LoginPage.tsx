import Poster from "../assets/images/cover_photo.jpg";
import { LoginForm } from "../components";

const LoginPage = () => {

    return (
        <div className='login-page'>
            <section className='section-one'>
                <img src={Poster} alt='sky.rider' className='login-poster'/>
            </section>
            <section className='section-two'>
                <div className='centered'>
                     <LoginForm/>
                </div>
            </section>
        </div>
    )
}

export default LoginPage;
