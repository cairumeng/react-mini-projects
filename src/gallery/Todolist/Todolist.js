import { useEffect, useState } from 'react'
import StatusSelector from './components/StatusSelector'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
const Todolist = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [selected, setSelected] = useState(2)

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('TODOLIST'))
    if (tasks) {
      setTasks(tasks)
    }
  }, [])
  const addTaskHandler = () => {
    const nextTasks = [...tasks, { value: newTask, status: false }]
    setTasks(nextTasks)
    localStorage.setItem('TODOLIST', JSON.stringify(nextTasks))
    setNewTask('')
  }

  const deleteTaskHandler = (id) => {
    const nextTasks = tasks.filter((task, index) => id !== index)
    setTasks(nextTasks)
    localStorage.setItem('TODOLIST', JSON.stringify(nextTasks))
  }

  const completeTaskHandler = (id) => {
    const nextTasks = tasks.map((task, index) => {
      if (index === id) {
        return { ...task, status: !task.status }
      }
      return task
    })
    setTasks(nextTasks)
    localStorage.setItem('TODOLIST', JSON.stringify(nextTasks))
  }
  return (
    <div className="mx-auto mt-20 w-10/12 md:w-5/12 ">
      <div className="text-4xl text-center font-bold">TodoList</div>
      <div className="flex justify-center mt-5 mb-2">
        <div className="flex mr-5 flex-grow">
          <input
            type="text"
            placeholder="Add your task here..."
            className="w-full appearance-none border border-gray-300 rounded-l-md py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2  focus:border-transparent"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 rounded-r-md"
            onClick={addTaskHandler}
          >
            Add
          </button>
        </div>
        <div className="w-40">
          <StatusSelector selected={selected} setSelected={setSelected} />
        </div>
      </div>
      {tasks?.map(
        (task, index) =>
          (task.status === !!selected || selected === 2) && (
            <div key={index} className="flex">
              <input
                type="text"
                className={`border border-gray-300 my-2 bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10 ${
                  task.status && 'line-through'
                }`}
                readOnly
                value={task.value || ''}
              />
              <button
                className="md:rounded bg-green-500 hover:bg-green-600 text-white px-3 h-10 my-auto mx-3 
          "
                onClick={() => completeTaskHandler(index)}
              >
                <AiOutlineCheckCircle />
              </button>
              <button
                className="md:rounded bg-red-400 hover:bg-red-500 text-white px-3 h-10 my-auto"
                onClick={() => deleteTaskHandler(index)}
              >
                <BsTrash />
              </button>
            </div>
          ),
      )}
    </div>
  )
}

export default Todolist
