import React from 'react'
import { ObjectInterface } from '../utilities/UtilityFunctions';
import { FaEdit, FaTrash, FaCheck, FaHourglassHalf } from 'react-icons/fa'
import { useAppContext } from '../context/TodoContext';

const TaskBlock: React.FC<ObjectInterface> = ({id, task, due, stats}) => {
    const { setData } = useAppContext()

    const moveToDoing = (id: number) => {
        const loc = JSON.parse(localStorage.storageTodo)
        const aa = loc.findIndex((loc: any) => loc.id === id)
        loc[aa].stats = 'doing'
        localStorage.storageTodo = JSON.stringify(loc)
        setData(loc)
    }

    const moveToDone = (id: number) => {
        const loc = JSON.parse(localStorage.storageTodo)
        const aa = loc.findIndex((loc: any) => loc.id === id)
        loc[aa].stats = 'done'
        localStorage.storageTodo = JSON.stringify(loc)
        setData(loc)
    }

    const deleteTask = (id: number) => {
        const deleted = JSON.parse(localStorage.storageTodo).filter((task: any) => task.id !== id)
        localStorage.storageTodo = JSON.stringify(deleted)
        setData(deleted)
    }

  return (
    <div style={{background: '#ffff99'}} className='shadow-md w-full py-4 px-3 overflow-hidden'>
        <div className='flex flex-col justify-between items-between h-full'>
            <div className='flex flex-row justify-between py-1'>
                <p className='text-xs italic font-medium text-gray-500'>ID: {id}</p>
                <div className='flex flex-row gap-2'>
                    <button onClick={() => deleteTask(id)} className='border rounded-full hover:text-red-500 duration-300'><FaTrash /></button>
                </div>
            </div>
            <div className='pt-3 pb-4'>
                <p className='font-bold text-lg'>{task}</p>
                <p className='text-xs text-gray-500 py-1'>{due} days</p>
            </div>
            <div className='flex flex-row gap-1 justify-between'>
                <button onClick={() => moveToDone(id)} className='rounded-full flex flex-row gap-1 hover:text-green-500 duration-200'>
                    <FaCheck />
                    <p className='text-xs'>Done</p>
                </button>
                <button onClick={() => moveToDoing(id)} className='rounded-full flex flex-row gap-1 hover:text-yellow-500 duration-200'>
                    <FaHourglassHalf />
                    <p className='text-xs'>Doing</p>
                </button>
                <button className='rounded-full flex flex-row gap-1 hover:text-orange-500 duration-200'>
                    <FaEdit />
                    <p className='text-xs'>Edit</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TaskBlock