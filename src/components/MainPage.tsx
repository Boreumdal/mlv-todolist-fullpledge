import React, { useEffect, useRef, useState } from 'react'
import InputField from './InputField'
import OptionField from './OptionField'
import { Routes, Route } from 'react-router-dom'
import Todo from '../pages/Todo'
import Doing from '../pages/Doing'
import Done from '../pages/Done'
import { useAppContext } from '../context/TodoContext'
import Archive from '../pages/Archive'
import { ObjectInterface } from '../utilities/UtilityFunctions'

const MainPage: React.FC = () => {
    const { task, setTask, due, setDue, dark, setDark, data, setData, sortBy, searchBy, setSortBy } = useAppContext()
    let [switcher, setSwitcher] = useState(true)
    let [switcher2, setSwitcher2] = useState(true)

    useEffect(() => {
        if (!localStorage.storageTodo){
            localStorage.storageTodo = '[]'
        } else {
            setData(JSON.parse(localStorage.storageTodo))
        }
    }, [])

    useEffect(() => {
        if (switcher){
            setSwitcher(!switcher)
        }
        else {
            switch(sortBy){
                case 'firstasc':
                    let arr1 = [...data]
                    const firstasc = arr1.sort((a: ObjectInterface, b: ObjectInterface) => {
                        if (a.task.toLowerCase() > b.task.toLowerCase()) {return 1}
                        if (b.task.toLowerCase() > a.task.toLowerCase()) {return -1}
                        return 0
                    })
                    return setData(firstasc)
                case 'firstdsc':
                    let arr2 = [...data]
                    const firstdsc = arr2.sort((a: ObjectInterface, b: ObjectInterface) => {
                        if (a.task.toLowerCase() > b.task.toLowerCase()) {return -1}
                        if (b.task.toLowerCase() > a.task.toLowerCase()){ return 1}
                        return 0
                    })
                    return setData(firstdsc)
                case 'dayasc':
                    let arr3 = [...data]
                    const dayasc = arr3.sort((a: ObjectInterface, b: ObjectInterface) => a.due - b.due)
                    return setData(dayasc);
                case 'daydsc':
                    let arr4 = [...data]
                    const daydsc = arr4.sort((a: ObjectInterface, b: ObjectInterface) => b.due - a.due)
                    return setData(daydsc);
                case 'addasc':
                    let arr5 = [...data]
                    const addasc = arr5.sort((a: ObjectInterface, b: ObjectInterface) => a.id - b.id)
                    return setData(addasc)
                case 'adddsc':
                    let arr6 = [...data]
                    const adddsc = arr6.sort((a: ObjectInterface, b: ObjectInterface) => b.id - a.id)
                    return setData(adddsc)
                default:
                    return setData(data)
            }
        }
    }, [sortBy])

    useEffect(() => {
        if (switcher2){
            setSwitcher2(!switcher2)
        } else {
            switch(searchBy){
                case 'bytitle':
                    let arr1 = [...data]
                    const firstasc = arr1.sort((a: ObjectInterface, b: ObjectInterface) => {
                        if (a.task.toLowerCase() > b.task.toLowerCase()) {return 1}
                        if (b.task.toLowerCase() > a.task.toLowerCase()) {return -1}
                        return 0
                    })
                    return setData(firstasc)
                case 'bydue':
                    let arr2 = [...data]
                    const firstdsc = arr2.sort((a: ObjectInterface, b: ObjectInterface) => {
                        if (a.task.toLowerCase() > b.task.toLowerCase()) {return -1}
                        if (b.task.toLowerCase() > a.task.toLowerCase()){ return 1}
                        return 0
                    })
                    return setData(firstdsc)
                default:
                    return setData(data)
            }
        }
    }, [searchBy])

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