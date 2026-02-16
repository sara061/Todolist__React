import './App.css';
import {TodoListItem} from './TodoListItem';
import {useState} from 'react';
import {v1} from 'uuid';

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type Todolist = {
    id: string
    title: string
    filter: FilterValues
}
export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {

    const [todolist, setTodoLists] = useState<Todolist[]>([
        { id: v1(), title:'What to learn', filter: 'all'},
        { id: v1(), title:'What to buy', filter: 'all'},
    ])




  const [tasks, setTasks] = useState<Task[]>([
    { id:  v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])


  const changeFilter = (todolistId: string, filter: FilterValues) => {
        setTodoLists(todolist.map(todolist => todolist.id === todolistId ? {...todolist, filter} : todolist))
  }


  const deleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(filteredTasks)
  }


  // Создание  новой таски
 const createTask = (title: string) => {
    const newTask = { id: v1(), title: title, isDone: false}
   const newTasks = [newTask, ... tasks]
   setTasks(newTasks)
  }

  // Изменение чекбокса

  const changeTaskStatus = (taskId: string, isDone: boolean) => {
 const task = tasks.find(t => t.id === taskId)
      if(task) {
          task.isDone = isDone
          setTasks([...tasks])
      }
  }
  return (
    <div className="app">

        { todolist.map(todolist => {

            let filteredTasks = tasks
            if (todolist.filter === 'active') {
                filteredTasks = tasks.filter(task => !task.isDone)
            }
            if (todolist.filter === 'completed') {
                filteredTasks = tasks.filter(task => task.isDone)
            }

            return (
                <TodoListItem
                    key={todolist.id}
                    todolist= {todolist}
                    tasks={filteredTasks}
                    deleteTask={deleteTask}
                    changeFilter={changeFilter}
                    createTask={createTask}
                    changeTaskStatus={changeTaskStatus}/>
            )
        })}


    </div>
  )
}
