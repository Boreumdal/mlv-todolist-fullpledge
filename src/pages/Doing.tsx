import { useAppContext } from '../context/TodoContext'
import { ObjectInterface } from '../utilities/UtilityFunctions'
import TaskBlock from '../components/TaskBlock'

const Doing = () => {
  const { data } = useAppContext()
  
  return (
    <div className='grid grid-cols-4 gap-3'>
      {
        data.length === 0 && <p className='text-xs'>No todo found. Add your things to do...</p>
      }
      {
        data.length !== 0 && data.map((data: ObjectInterface) => (
            data.stats === 'doing' && (
              <TaskBlock key={data.id} id={data.id} task={data.task} due={data.due} />
            )
          )
        )
      }
    </div>
  )
}

export default Doing