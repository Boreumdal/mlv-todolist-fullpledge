import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { AiFillHome, AiTwotoneHourglass, AiFillCheckCircle } from 'react-icons/ai'
import { useAppContext } from '../context/TodoContext'
import { ObjectInterface } from '../utilities/UtilityFunctions'

const OptionField: React.FC = () => {
    const { setData, data } = useAppContext()
    const purgeLocalStorage = (): void => {
        localStorage.storageTodo = '[]'
        console.log('Purged');
        setData(JSON.parse(localStorage.storageTodo))
    }

    const todoItems: number = data.filter((task: ObjectInterface) => task.stats === 'todo').length
    const doingItems: number = data.filter((task: ObjectInterface) => task.stats === 'doing').length
    const doneItems: number = data.filter((task: ObjectInterface) => task.stats === 'done').length

  return (
    <div className='flex flex-col justify-between items-between h-full'>
        <div className=''>
            <nav>
                <div className='bg-gray-50 p-2 flex flex-row justify-between items-center'>
                    <h1 className='text-lg font-bold'>Tabs</h1>
                    <div className=''>
                        <button className='bg-gray-800 text-white p-2 rounded-full text-xl'><MdOutlineDarkMode /></button>
                    </div>
                </div>
                <ul className='flex flex-col gap-1 p-2'>
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'border-l-4 border-blue-500' : '' ) + ' text-sm w-full hover:border-l-4 hover:border-blue-500 px-2 py-2 flex flex-row justify-between duration-300'}>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='text-lg'><AiFillHome /></span>
                            <p>Todo</p>
                        </div>
                        <p className='text-sm font-bold'>{todoItems}</p>
                        
                    </NavLink>
                    <NavLink to={'/doing'} className={({ isActive }) => (isActive ? 'border-l-4 border-blue-500' : '' ) + ' text-sm w-full hover:border-l-4 hover:border-blue-500 px-2 py-2 flex flex-row justify-between duration-300'}>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='text-lg'><AiTwotoneHourglass /></span>
                            <p>Doing</p>
                        </div>
                        <p className='text-sm font-bold'>{doingItems}</p>
                        
                    </NavLink>
                    <NavLink to={'/done'} className={({ isActive }) => (isActive ? 'border-l-4 border-blue-500' : '' ) + ' text-sm w-full hover:border-l-4 hover:border-blue-500 px-2 py-2 flex flex-row justify-between duration-300'}>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='text-lg'><AiFillCheckCircle /></span>
                            <p>Done</p>
                        </div>
                        <p className='text-sm font-bold'>{doneItems}</p>
                        
                        
                    </NavLink>
                    
                </ul>
            </nav>
        </div>
        <div className='h-fit'>
            <button className='w-full bg-red-500 text-white py-1 text-sm h-full' onClick={purgeLocalStorage}>Purge</button>
        </div>
    </div>
  )
}

export default OptionField