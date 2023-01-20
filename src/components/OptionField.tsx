import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { AiFillHome, AiTwotoneHourglass, AiFillCheckCircle } from 'react-icons/ai'
import { FaArchive, FaTrash } from 'react-icons/fa'
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
            <div className=''>
                <div className='bg-gray-50 p-2 flex flex-row justify-between items-center'>
                    <h1 className='text-lg font-bold'>Search and Setting</h1>
                    <div className=''>
                        <button className='bg-gray-800 text-white p-2 rounded-full text-xl'><MdOutlineDarkMode /></button>
                    </div>
                </div>
                <div className='px-2 pt-2'>
                    <input type="text" placeholder='Search task...' className='border-b block w-full text-sm py-2 px-3 my-1 outline-none' />
                </div>
                <div className='flex flex-row text-sm gap-1 pt-3 pb-2 px-2 justify-between'>
                    <div className='w-1/2 flex flex-row items-center gap-1'>
                        <p className='font-medium'>Search by</p>
                        <select name="sort" id="sort" className='border'>
                            <option value="">Task title</option>
                            <option value="">Date</option>
                        </select>
                    </div>
                    <div className='w-1/2 flex flex-row items-center gap-1'>
                        <p className='font-medium'>Sort by</p>
                        <select name="sort" id="sort" className='border'>
                            <option value="">First letter (asc)</option>
                            <option value="">First letter (desc)</option>
                            <option value="">Days (asc)</option>
                            <option value="">Days (desc)</option>
                            <option value="">Date added (asc)</option>
                            <option value="">Date added (desc)</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <nav className='pt-3'>
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
                <div className='flex flex-row justify-between gap-1 p-2'>
                    <NavLink to={'/archive'} className={({ isActive }) => (isActive ? 'border-l-4 border-blue-500' : '' ) + ' border w-1/2 bg-orange-400 text-white text-sm duration-300 flex flex-col justify-center items-center py-2 rounded shadow-sm'}>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='text-md'><FaTrash /></span>
                            <p>Archive</p>
                        </div>
                    </NavLink>
                
                    <button onClick={purgeLocalStorage} className=' border w-1/2 bg-red-400 text-white text-sm duration-300 flex flex-col justify-center items-center py-2 rounded shadow-sm'>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='text-md'><FaArchive /></span>
                            <p>Delete All</p>
                        </div>
                    </button>
                </div>
            </nav>
            
        </div>
    </div>
  )
}

export default OptionField