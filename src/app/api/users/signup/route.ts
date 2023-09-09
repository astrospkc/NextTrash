import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs";

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {username, password, email} = reqBody
        console.log(reqBody)
        
        //check if user exist or not
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"}, {status:400})
        }

        // hashed password
        const salt = await bcryptjs.gensalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        const newUser =new User({
            username,
            email,
            password:hashedPassword

        })
// save to the database
        const savedUser = await newUser.save()
        console.log("saved user ", savedUser)

        return NextResponse.json({
            message:"user created successfully", 
            success:true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500})
        
    }
}