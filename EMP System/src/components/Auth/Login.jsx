 import React, { useState } from "react";

 const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email is", email);
        console.log("Password is", password);
        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20">
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className="flex flex-col items-center justify-center">
                    <input 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required 
                        className="outline-none bg-transparent border-2 border-emerald-600 font-medium rounded-full py-2 px-6 text-lg placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                    <input 
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className="outline-none bg-transparent border-2 border-emerald-600 font-medium rounded-full py-2 px-6 text-lg mt-3 placeholder:text-gray-400" type="password" placeholder="Enter your password" />
                    <button className="mt-7 text-white outline-none border-none hover:bg-emerald-700 font-semibold bg-emerald-600 w-full rounded-full py-3 px-8 text-xl placeholder:text-white">Log In</button>
                </form>
            </div>
        </div>
    )
 }

 export default Login