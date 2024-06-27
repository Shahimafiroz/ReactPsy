import React, { useState } from 'react'
function Todo() {

    const [taskList, setTaskList] = useState([])
    const [tsk, setTsk] = useState('')


    // useEffect(() => {

    // })
    const tskKeep = (e) => {
        setTsk(e.target.value)
    }
    const addTask = () => {
        console.log(tsk, taskList)
        // setTaskList(taskList.push(tsk))  --> tis is not how u do it 

        // setTaskList(prev => {
        //     let newArr = [...prev, tsk]
        //     return newArr
        // }) --> other syntax 
        let tskObject = {
            id: Date.now(),
            tskName: tsk
        }
        console.log(tskObject)
        setTaskList(prev => [...prev, tskObject])
        console.log(taskList)

    }

    const deleteTask = (id) => {
        console.log(id);
        const updatedtaskList = taskList.filter((task) => {
            if (task.id !== id) {
                return task;
            }

        })
        console.log("Final returned Task list  : " + taskList)
        setTaskList(updatedtaskList)
    }


    return (
        <div>
            <h1>Tasks : </h1>
            <h3>Enter task </h3>
            <br></br><br></br>
            <input value={tsk} onChange={tskKeep} />
            <button onClick={addTask}>Add Task</button>
            <ol>
                {
                    taskList.map((task) => (<li key={task.id}>{task.tskName}<button onClick={() => deleteTask(task.id)}>Delete</button></li>))
                }
            </ol>

        </div>
    )
}

export default Todo
