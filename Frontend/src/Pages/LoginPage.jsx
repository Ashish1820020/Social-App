import { useEffect, useState } from "react";
import LoginForm from "../Components/LoginOrSignUp/LoginForm";
import SignupForm from "../Components/LoginOrSignUp/SignupForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi, signupApi } from "../Store/api/authApi";
import Spinner from "../Utils/Spinner";

const LoginPage = () => {
    const [state, setState] = useState("login");
    const { isLoggedIn, userData } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogin = (e, {email, password}) => {
    e.preventDefault();
    dispatch(loginApi({email, password}))
    .then(() =>{
        navigate('/home');
    })
  }

  const handleSignup = async (e, {name, email, password, confirmPassword, avatar}) => {
    e.preventDefault();
    let signupForm = new FormData();
    signupForm.append("name", name);
    signupForm.append("email", email);
    signupForm.append("password", password);
    signupForm.append("confirmPassword", confirmPassword);
    signupForm.append("avatar", avatar);
    dispatch(signupApi(signupForm))
    .then(() =>{
        navigate('/home');
    });
  }

    return (
        <div className={`bg-white h-full md: mx-auto`}>
            <div className="text-gray text-center text-lg">Social Circle</div>
            <hr className="border-none h-px my-20px bg-black my-2" />

            {
                state === "login"?
                    <LoginForm handleLogin={handleLogin} />
                :
                    <SignupForm handleSignup={handleSignup} />

            }

            <div className="flex flex-col px-1 md:w-[550px] mx-auto p-4 mb-10">

                <div className='flex gap-2 items-center justify-center my-5'>
                    <hr className='border-none h-px w-1/5 my-20px bg-gray-500 my-2 mr-2'/>
                    <span className='text-lg'>or</span>
                    <hr className='border-none h-px w-1/5 my-20px bg-gray-500 my-2 ml-2'/>
                </div>

                <div className='flex items-center justify-center'>
                    {
                        state === 'login'?

                        <button type='submit' onClick={() => setState("signup")} 
                        className="bg-green-600 text-white text-lg mt-4 py-2 hover:bg-green-500 w-fit px-2">
                            Create New Account
                        </button>
                    :
                        <button type='submit' onClick={() => setState("login")} 
                        className="text-blue-500 text-lg mt-4 py-2 hover: w-fit px-2 ">
                            have an account?
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginPage;