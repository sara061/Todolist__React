import './App.css';
import {Task, TodoListItem} from './TodoListItem';
import {useState} from 'react';

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ])

  const deleteTask = (taskId: number) => {
    const filteredTasks = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(filteredTasks)
  }

  return (
    <div className="app">
      <TodoListItem title="What to learn"
                    tasks={tasks}
                    deleteTask={deleteTask}/>
    </div>
  )
}
