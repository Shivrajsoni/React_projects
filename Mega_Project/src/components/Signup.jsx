/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {login} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Logo,Input, Button} from "./index"
function Signup() {
    const navigate=useNavigate();
    const [error,setError]=useState("")
    const dispatch=useDispatch();
    const { register,handleSubmit}=useForm()

    const create = async(data)=>{
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData)
                    dispatch(login(userData));
                navigate('/')
            }
            
        } catch (error) {
            setError(error.message)
            
        }
    }
  return (
    <div className='flex items-center justify-center'>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    <div className='mb-2 flex justify-center'>
        <span className='inline-block w-full max-w-[100px]'>
            <Logo width="100%"/>
        </span>
    </div>
    <h2 className='text-center text-2xl font-bold leading-tight'>Sign Up to create Account </h2>
    <p className='mt-2 text-center text-base text-black/60'>
        Already have an Account?&nbsp;
        <Link
        to='/login'
        className='font-medium text-primary transition-all duartion-200 hover:underline'>
            Sign In
        </Link>
    </p>
    {error && <p className='text-red-600 mt-8 text-center'></p>}

    <form onSubmit={handleSubmit(create)}>
        <div className='space-y-5'>
            <Input
                label="Name :"
                placeholder="Enter your Full Name "
                {...register("name",{
                    required:true,
                })}
            />
            <Input
                label="Email:"
                placeholder="Enter your Email :"
                type="email"
                {...register("email", {
                    required: true,
                    validate:{
                        matchPattern:(value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                        "Email Address Must be valid Address"
                    }
                })}
            />
            <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true,
                })}
            />
            <Button
            type='submit'
            className='w-full'
            >Create Account</Button>
            

        </div>
    </form>

    </div>
      
    </div>
  )
}

export default Signup
