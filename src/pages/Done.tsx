import { useAppContext } from '../context/TodoContext'
import { ObjectInterface } from '../utilities/UtilityFunctions'
import TaskBlock from '../components/TaskBlock'

const Done = () => {
  const { data } = useAppContext()
  
  return (
    <div className='grid grid-cols-4 gap-3'>
      {
        data.map((data: ObjectInterface) => (
            data.stats === 'done' && (
              <TaskBlock key={data.id} id={data.id} task={data.task} due={data.due} />
            )
          )
        )
      }
    </div>
  )
}

export default Done