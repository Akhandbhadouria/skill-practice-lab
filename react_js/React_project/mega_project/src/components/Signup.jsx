import React, { useState } from 'react'
import  auth_service  from "../appwrite/auth"
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Btn, Inputt, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError("");
    try {
      const account = await auth_service.createAccount(data)
      if (account) {
        const current = await auth_service.curr_user();
        if (current) {
          dispatch(login(current));
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center page-bg">
      <div className={`mx-auto w-full max-w-lg card p-8`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width='100%' />
          </span>
        </div>
        <h2 className="text-center text-2xl heading leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base subtle">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Inputt
             label="Full Name: "
              placeholder="enter your full name"
              {...register("name",{
                required:true
              })}
            />
            <Inputt 
            label="User Email"
            type="email"
            placeholder="Enter the valid email"
            {...register("email",{
              required:true,
              validate:{
                matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address"
              }
            })}
            />
            <Inputt 
            label="Password"
            type="password"
            placeholder="Enter new password"
            {...register("password",{
              required:true,
             
            })}
            />
            <Btn type="submit" className="w-full">
              Create Account
            </Btn>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Signup