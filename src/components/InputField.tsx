import React from 'react'
import { useAppContext } from '../context/TodoContext'
import { objToString, toObj } from '../utilities/UtilityFunctions'
import { optionFieldStyle } from '../utilities/UtilityStyles'

const InputField: React.FC = () => {
    const {setTask, due, task, setDue, setData} = useAppContext()
    const stats: string = 'todo'
    const disable: boolean = task === ''

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.id !== 'task'){
            return setDue(+e.target.value)
        }
        return setTask(e.target.value)
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

  return (
    <form className='py-1 px-2' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="task">Task</label>
            <input type="text" id='task' onChange={handleChanges} value={task} className={optionFieldStyle.searchInput} placeholder='Task to do...' />
        </div>
        <div>
            <label htmlFor="due">Due date:</label>
            <input type="number" id='due' onChange={handleChanges} value={due} className={optionFieldStyle.searchInput} placeholder='Due date in days...' />
        </div>
        <button className={optionFieldStyle.optionButton} disabled={disable}>Add Task</button>
    </form>
  )
}

export default InputField