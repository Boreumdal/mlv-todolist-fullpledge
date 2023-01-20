import React, { createContext, useContext, useState } from 'react'
import { ObjectInterface } from '../utilities/UtilityFunctions'

type TodoContextChildren = {
    children: React.ReactNode
}

export const TodoAppContext = createContext<any>(null)

export const TodoContext = ({children}: TodoContextChildren) => {
    const [task, setTask] = useState<string>('')
    const [due, setDue] = useState<number>(1)
    const [dark, setDark] = useState<boolean>(false)
    const [sortBy, setSortBy] = useState<string>('firstasc')
    const [data, setData] = useState<ObjectInterface[]>([])

    return (
        <TodoAppContext.Provider value={{ task, setTask, due, setDue, dark, setDark,data, setData, sortBy, setSortBy }}>{children}</TodoAppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(TodoAppContext)
}