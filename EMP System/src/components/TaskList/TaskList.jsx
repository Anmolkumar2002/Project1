import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({data}) => {
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
            {data.tasks.map((ele, idx) => {
                if(ele.completed) {
                    return <CompleteTask key={idx} data={ele}/>
                }
                if(ele.active) {
                    return <AcceptTask key={idx} data={ele}/>
                }
                if(ele.newTask) {
                    return <NewTask key={idx} data={ele}/>
                }
                if(ele.failed) {

                    return <FailedTask key={idx} data={ele}/>
                }
            })}
            {/* <CompleteTask/>
            <AcceptTask/>
            <NewTask/>
            <FailedTask/> */}
        </div>
    )
}

export default TaskList