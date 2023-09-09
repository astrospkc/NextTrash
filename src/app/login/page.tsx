'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";
// import {axios} from "axios";
import React, { useState } from 'react';
import Image from 'next/image';


const loginPage = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  })

  const onSignup = async()=>{

  }
  return (
    <div className='text-xl text-blue-400 flex flex-col justify-center items-center min-h-screen mx-10' style={{backgroundImage:'url("/public/image/dance1.jpg")'}}>
      <div><h1 className="text-7xl text-yellow-50 text-center">Login</h1></div>
      
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
        
<div className="my-5 flex flex-col"> <label htmlFor="password">Password</label>
        <input id="password"
         type="password"
         value = {user.password}
         onChange={(e)=> setUser({...user,password : e.target.value})}
         className="rounded-lg p-3 text-black"
         placeholder="Password" /></div>

         <button className="text-xl rounded-lg text-white bg-gray-600 hover:cursor-pointer p-2 px-6">Login</button>
         
      </div>
      </div>

    </div>
  )
}

export default loginPage

