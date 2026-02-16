import {Button} from './Button';
import {FilterValues, Task, Todolist} from './App.tsx';
import {ChangeEvent, useState, KeyboardEvent} from 'react';
// import {useRef} from 'react';

type Props = {

    todolist: Todolist
    tasks: Task[],
    date?: string,
    deleteTask: (taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterValues) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void

};


export const TodoListItem = (props: Props) => {
    const {todolist:{id, title, filter},
         tasks,
        date,
        deleteTask,
        changeFilter,
        createTask,
        changeTaskStatus} = props;
    const [taskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    // const inputRef= useRef<HTMLInputElement>(null) инпут с юзрефом
// Создание таски с помощью useState

    const createTaskHandler = () => {
        const trimmedTitle = taskTitle.trim()


        if(trimmedTitle !== ''){
            createTask(trimmedTitle)
            setTaskTitle('')
        } else {
            setError('Title  is required')
        }

    }

    //изменение значения инпута
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(null)
    }

    const onKeyTaskTitleHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }

    const changeFilterHandler = (filter: FilterValues) => changeFilter(id, filter)
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input /*ref = {inputRef}*/ value={taskTitle}
                                            onChange={changeTaskTitleHandler}
                                            onKeyDown={onKeyTaskTitleHandler}
                                            className={error ? 'error' : ''}
                />
                <Button
                    title={'+'}
                    onClick={createTaskHandler}
                />
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {/* <li>
          <input type="checkbox" checked={tasks[0].isDone} />{" "}
          <span>{tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[1].isDone} />{" "}
          <span>{tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[2].isDone} /> <span>{tasks[2].title}</span>
        </li> */}

                    {tasks.map((task) => {
                        return (
                            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={task.isDone} onChange={(e) =>changeTaskStatus(task.id, e.target.checked)}/>
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={() => deleteTask(task.id)}/>
                            </li>
                        );
                    })}
                </ul>
            )}

            <div>
                <Button className={ filter === 'all' ? 'active-filter' : ''}
                        title={'all'}
                        onClick={() => changeFilterHandler('all')}/>

                <Button className={ filter === 'active' ? 'active-filter' : ''}
                        title={'active'}
                        onClick={() => changeFilterHandler('active')}/>

                <Button className={ filter === 'completed' ? 'active-filter' : ''}
                        title={'completed'} onClick={() => changeFilterHandler('completed')}/>
            </div>
            <div>{date}</div>
        </div>
    );
};
