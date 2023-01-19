import React from 'react'
import { useAppContext } from '../context/TodoContext'
import { objToString, toObj } from '../utilities/UtilityFunctions'

const InputField: React.FC = () => {
    const {setTask, due, task, setDue, setData} = useAppContext()
    const stats: string = 'todo'


    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.id === 'task'){
            setTask(e.target.value)
        } else {
            setDue(+e.target.value)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const storageForTodo = JSON.parse(localStorage.storageTodo)
        const modded = [...storageForTodo, toObj(Date.now(), task, due, stats)]
        localStorage.storageTodo = objToString(modded)
        setData(JSON.parse(localStorage.storageTodo))
        setTask('')
        setDue(1)
    }

    const disable: boolean = task === ''

  return (
    <form className='py-1 px-2' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="task">Task</label>
            <input type="text" id='task' onChange={handleChanges} value={task} className='border-b block w-full text-sm py-2 px-3 my-1 outline-none' placeholder='Task to do...' />
        </div>
        <div>
            <label htmlFor="due">Due date:</label>
            <input type="number" id='due' onChange={handleChanges} value={due} className='border-b block w-full text-sm py-2 px-3 my-1 outline-none' placeholder='Due date in days...' />
        </div>
        <button className='text-sm py-2 bg-blue-500 text-white w-full mt-2 disabled:bg-gray-600 disabled:cursor-not-allowed duration-150' disabled={disable}>Add Task</button>
    </form>
  )
}

export default InputField