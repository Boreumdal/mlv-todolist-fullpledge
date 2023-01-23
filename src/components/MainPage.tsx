import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppContext } from '../context/TodoContext'
import { ObjectInterface } from '../utilities/UtilityFunctions'
import InputField from './InputField'
import OptionField from './OptionField'
import Todo from '../pages/Todo'
import Doing from '../pages/Doing'
import Done from '../pages/Done'
import Archive from '../pages/Archive'


const MainPage: React.FC = () => {
    const { data, setData, sortBy } = useAppContext()
    let [switcher, setSwitcher] = useState(true)

    useEffect(() => {
        if (localStorage.storageTodo){
            return setData(JSON.parse(localStorage.storageTodo))
        } 
        localStorage.storageTodo = '[]'
    }, [])

    useEffect(() => {
        if (switcher){
            setSwitcher(!switcher)
        }
        else {
            let arr = [...data]
            switch(sortBy){
                case 'firstasc':
                    return setData(arr.sort((a: ObjectInterface, b: ObjectInterface) => {
                        if (a.task.toLowerCase() > b.task.toLowerCase()) { return 1 }
                        if (b.task.toLowerCase() > a.task.toLowerCase()) { return -1 }
                        return 0
                    }))
                case 'firstdsc':
                    return setData(arr.sort((a: ObjectInterface, b: ObjectInterface) => {
                        if (a.task.toLowerCase() > b.task.toLowerCase()) { return -1 }
                        if (b.task.toLowerCase() > a.task.toLowerCase()) { return 1 }
                        return 0
                    }))
                case 'dayasc':
                    return setData(arr.sort((a: ObjectInterface, b: ObjectInterface) => a.due - b.due));
                case 'daydsc':
                    return setData(arr.sort((a: ObjectInterface, b: ObjectInterface) => b.due - a.due));
                case 'addasc':
                    return setData(arr.sort((a: ObjectInterface, b: ObjectInterface) => a.id - b.id))
                case 'adddsc':
                    return setData(arr.sort((a: ObjectInterface, b: ObjectInterface) => b.id - a.id))
                default:
                    return setData(data)
            }
        }
    }, [sortBy])

  return (
    <div className='flex flex-row w-full gap-3 p-4 border h-screen'>
        <div className='bg-white shadow-md py-4 flex flex-col w-1/3 px-4 h-full'>
            <div className='h-1/3'>
                <h1 className='text-2xl font-bold py-1 px-2 bg-gray-50'>Todo List</h1>
                <InputField />    
            </div>
            <div className='h-2/3 pt-3'>
                <OptionField />
            </div>
        </div>
        <div className='w-2/3 overflow-y-auto'>
            <Routes>
                <Route path='/' element={<Todo />} />
                <Route path='/doing' element={<Doing />} />
                <Route path='/done' element={<Done />} />
                <Route path='/archive' element={<Archive />} />
            </Routes>
        </div>
    </div>
  )
}

export default MainPage