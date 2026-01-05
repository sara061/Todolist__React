import {Button} from './Button';
import {FilterValues, Task} from './App.tsx';

type Props = {
  title: string,
  tasks: Task[],
  date?: string,
  deleteTask: (taskId: string) => void
  changeFilter: (filter: FilterValues) => void
};


export const TodoListItem = (props: Props) => {
  const {title, tasks, date, deleteTask, changeFilter} = props;

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
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
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button title={'x'} onClick={() => deleteTask(task.id)} />
              </li>
            );
          })}
        </ul>
      )}

      <div>
        <Button title={'all'} onClick={() => changeFilter('all')} />
        <Button title={'active'} onClick={() => changeFilter('active')} />
        <Button title={'completed'} onClick={() => changeFilter('completed')}/>
      </div>
      <div>{date}</div>
    </div>
  );
};
