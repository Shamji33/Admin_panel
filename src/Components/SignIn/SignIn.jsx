import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignIn, userCreate, userLogin } from '../../Services/Action/Auth.action';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { FcGoogle } from "react-icons/fc";

export const SignIn = () => {

    const navigate = useNavigate();

    const { isLogin, err } = useSelector(state => state.AuthReducer);

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }
    const handleGoogleSignIn=()=>{

        dispatch(googleSignIn())

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(login.email, login.password));
    }

    if(err){
        return(
            <Container>

             
                <Row>
                <p className='text-center text-danger p-5'>{err}</p>
                <div className=' flex justify-center mb-3'>
                    <button
                   onClick={()=>{navigate("/SignUp")}}
                        className=' bg-yellow-500 w-50 text-black font-bold  px-2 py-2 rounded-lg'>
                       Sign Up
                    </button>
                </div>
                </Row>
              
            </Container>
        )
    }
    else if (isLogin) {
        
        navigate('/home');
    }
    else {
        return (
            <>
            <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={login.email} 
                        onChange={handleChange}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name='password'
                        value={login.password} 
                        onChange={handleChange}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={handleSubmit}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                     onClick={handleGoogleSignIn}
                        className=' bg-green-500 w-full text-black font-bold  px-2 py-2 rounded-lg flex justify-center items-center'
                        style={{backgroundColor: 'white'}}>
                          Login  <FcGoogle   style={{marginRight:'10px',marginLeft:'15px'}}/>
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
            </>
        );
    }
  

 
}

export default SignIn;