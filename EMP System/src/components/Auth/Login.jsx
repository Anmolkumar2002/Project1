 import React from "react";

 const Login = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20">
                <form className="flex flex-col items-center justify-center">
                    <input className="outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400" type="email" placeholder="Enter your Email" />
                    <input className="outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray-400" type="password" placeholder="Enter your password" />
                    <button className="text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-xl mt-5 placeholder:text-gray-400">Log In</button>
                </form>
            </div>
        </div>
    )
 }

 export default Login