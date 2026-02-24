import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from '../store/authSlice';
import { Btn, Inputt as Input, Logo } from "./index"
import { useDispatch } from 'react-redux';
import auth_service from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, seterror] = useState("");

    const login = async (data) => {
        seterror("");//  good for code ..... 
        try {
            const session = await auth_service.login(data);
            if (session) {
                const userData = await auth_service.curr_user()
                if (userData) dispatch(authLogin(userData));
                navigate("/")// programitically forwerded to the home page.
            }
        } catch (error) {
            seterror(error.message)
        }

    }
    return (
        <div className='flex items-center justify-center w-full page-bg'>
            <div className={`mx-auto w-full max-w-lg card p-8`}>

                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>


                </div>
                <h2 className="text-center text-2xl heading leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base subtle">
                    Don't have any account?&nbsp;
                    <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                     Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input //calling the custome input which we make and passing the arguments
                        label="Email" 
                        placeholder="Enter the email please"
                        type="email"
                        {...register("email",{required:true,
                            validate:{
                                matchPattern:(value)=>{/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||     // .test(value)---> agar valid hai to thek warna neeche wala syntax print  coro niche aur Walla
                        "Email address must be a valid address"}
                            }

                        })}                              //advantage of using ... is it prevent the input values from overriding 
                        />

                        <Input
                        label="password"
                        placeholder="enter the password"
                        type="password"
                        {...register("password",{
                            required:true
                        })}
                        />
                <Btn type="submit" className="w-full">Sign in</Btn>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Login

// use react-hook-form documentation


//  --------------- ---------------handleSubmit(login) ka kaam ------------------------------
// Browser reload rokna
// Form ka saara data easily data object me dena
// Fir aap us data ko use karke login API call ya koi bhi action perform kar sakte ho
// Form ko reload hone se rokna (event.preventDefault automatically karta hai).
// Jo bhi input fields aapne register('email') se register kiye, unka data khud collect karke login(data) function me bhejna


//  --------------- ---------------...register ------------------------------

// ...register("keyword",{options})