import React, { useEffect } from 'react'
import InputField from './InputField'
import OptionField from './OptionField'
import { Routes, Route } from 'react-router-dom'
import Todo from '../pages/Todo'
import Doing from '../pages/Doing'
import Done from '../pages/Done'
import { useAppContext } from '../context/TodoContext'

const MainPage: React.FC = () => {
    const { task, setTask, due, setDue, dark, setDark, data, setData } = useAppContext()

    useEffect(() => {
        if (!localStorage.storageTodo){
            localStorage.storageTodo = '[]'
        } else {
            setData(JSON.parse(localStorage.storageTodo))
        }
    }, [])

  return (
    <div className='flex flex-row w-full gap-3 p-4 border h-screen'>
        <div className='bg-white shadow-md py-4 flex flex-col w-1/3 px-4 h-full'>
            <div className='border-b h-1/3'>
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
            </Routes>
        </div>
    </div>
  )
}

export default MainPage