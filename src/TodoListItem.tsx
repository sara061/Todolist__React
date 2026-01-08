import {Button} from './Button';
import {FilterValues, Task} from './App.tsx';
import {ChangeEvent, useState, KeyboardEvent} from 'react';
// import {useRef} from 'react';

type Props = {
    title: string,
    tasks: Task[],
    date?: string,
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValues) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
};


export const TodoListItem = (props: Props) => {
    const {title, tasks, date, deleteTask, changeFilter, createTask, changeTaskStatus} = props;
    const [taskTitle, setTaskTitle] = useState('')

    // const inputRef= useRef<HTMLInputElement>(null) инпут с юзрефом
// Создание таски с помощью useState
    const createTaskHandler = () => {
        const trimmedTitle = taskTitle.trim()

        if(trimmedTitle !== ''){
            createTask(trimmedTitle)
            setTaskTitle('')
        }

    }

    //изменение значения инпута
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const onKeyTaskTitleHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input /*ref = {inputRef}*/ value={taskTitle}
                                            onChange={changeTaskTitleHandler}
                                            onKeyDown={onKeyTaskTitleHandler}
                />
                <Button
                    title={'+'}
                    onClick={createTaskHandler}
                />
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
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} onChange={(e) =>changeTaskStatus(task.id, e.target.checked)}/>
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={() => deleteTask(task.id)}/>
                            </li>
                        );
                    })}
                </ul>
            )}

            <div>
                <Button title={'all'} onClick={() => changeFilter('all')}/>
                <Button title={'active'} onClick={() => changeFilter('active')}/>
                <Button title={'completed'} onClick={() => changeFilter('completed')}/>
            </div>
            <div>{date}</div>
        </div>
    );
};
