import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-60 ">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">Completed</h3>
                <h5 className="text-lg font-medium w-1/5">Accepted</h5>
                <h5 className="text-lg font-medium w-1/5">New Task</h5>
                <h5 className="text-lg font-medium w-1/5">Failed</h5>
            </div>

            <div className="">
                {userData.map(function(ele, idx){
                    return <div key={idx} className="bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium w-1/5">{ele.name}</h2>
                    <h3 className="text-lg font-medium w-1/5 text-blue-800">{ele.taskCount.completed}</h3>
                    <h5 className="text-lg font-medium w-1/5 text-green-800">{ele.taskCount.active}</h5>
                    <h5 className="text-lg font-medium w-1/5 text-yellow-800">{ele.taskCount.newTask}</h5>
                    <h5 className="text-lg font-medium w-1/5 text-red-800">{ele.taskCount.failed}</h5>
                </div>
                })}
            </div>
            
            
        </div>
    )
}

export default AllTask