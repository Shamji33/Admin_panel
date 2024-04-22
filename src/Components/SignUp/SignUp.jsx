import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { userCreate } from '../../Services/Action/Auth.action';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


function SignUp() {

    const navigate = useNavigate();

    const {isSignUp} =useSelector(state => state.AuthReducer);

    const [signup ,setSignup] = useState({
        fname : '',
        email:'',
        password:'',
        c_password:''
    });

    const dispatch = useDispatch();
    
    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setSignup({...signup,[name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(userCreate(signup.email,signup.password));
        dispatch(addUser(signup.fname,signup.email))
        console.log("signup",signup);
    }
    const handleGoogleSignIn=()=>{

        dispatch(googleSignIn())

    }

    if(isSignUp){
        navigate('/');
    }
    else{
        return (
            <>
            <div className="flex justify-center items-center h-screen">
                <div className=" bg-gray-800 px-10 py-10 rounded-xl">
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        value={signup.fname}
                        onChange={handleChange}
                        name='fname' 
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Enter Full Name'
                    />
                </div>
                <div>
                    <input type="email"
                        value={signup.email}
                        onChange={handleChange}
                        name='email' 
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Enter Email'
                    />
                </div>
                <div>
                    <input type="password"
                        value={signup.password}
                        onChange={handleChange}
                        name='password' 
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Enter Password'
                    />
                </div>
                <div>
                    <input type="password"
                        value={signup.c_password}
                        onChange={handleChange}
                        name='c_password' 
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Confirm Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button type='submit'
                        onClick={handleSubmit}
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
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
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/'}>Login</Link></h2>
                </div>
                </div>
            </div>
            </>
        );
    }

    
}

export default SignUp;