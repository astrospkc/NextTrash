'use client'

import Link from "next/link";
import {useRouter, useSelectedLayoutSegment} from "next/navigation";
// import {axios} from "axios";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from "react-hot-toast";
import axios from "axios";


const SignUpPage = () => {
  const router = useRouter();


  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(true)


  const onSignup = async()=>{
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("signup success", response.data)
      router.push("/login")
      
    } catch (error:any) {
      console.log("signup failed", error.message)
      toast.error(error.message)
      
    }finally{
      setLoading(false)
    }

  }


  useEffect(() => {
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  }, [user])
  
  return (
    <div className='text-xl text-blue-400 flex flex-col justify-center items-center min-h-screen mx-10' style={{backgroundImage:'url("/public/image/dance1.jpg")'}}>
      <div><h1 className="text-7xl text-yellow-50 text-center">{loading ? "Processing":"Signup"}</h1></div>
      
      <div className="flex flex-row ">
      <div className="text-xl text-white w-[50%] text-center justify-center items-center m-auto mx-11">Dance is a form of self-expression that can be enjoyed by people of all ages and abilities.</div>
      <div className="w-[50%] ">
        <div className="my-5 flex flex-col"><label htmlFor="username">Username</label>
        <input id="username"
         type="text"
         value = {user.username}
         onChange={(e)=> setUser({...user,username : e.target.value})}
         className="rounded-lg p-3 text-black"
         placeholder="username" /></div>


         <div className="my-5 flex flex-col"> <label htmlFor="email">Email</label>
        <input id="email"
         type="email"
         value = {user.email}
         onChange={(e)=> setUser({...user,email : e.target.value})}
         className="rounded-lg p-3 text-black"
         placeholder="email" /></div>
        
<div className="my-5 flex flex-col"> <label htmlFor="password">Password</label>
        <input id="password"
         type="password"
         value = {user.password}
         onChange={(e)=> setUser({...user,password : e.target.value})}
         className="rounded-lg p-3 text-black"
         placeholder="Password" /></div>

         <button  onClick={onSignup} className="text-xl rounded-lg text-white bg-gray-600 hover:cursor-pointer p-2 px-6">{buttonDisabled ? "No Signup" : "SignUp"}</button>
         
      </div>
      </div>

    </div>
  )
}

export default SignUpPage

