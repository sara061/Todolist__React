import {Button} from './Button';

type Props = {
  title: string,
  tasks: Task[],
  date?: string,
  deleteTask: (taskId: number) => void
};

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export const TodoListItem = (props: Props) => {
  const {title, tasks, date, deleteTask} = props;

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
                <button style={{marginLeft: '5px', borderRadius: '5px'}} onClick={() => deleteTask(task.id)}>x</button>
              </li>
            );
          })}
        </ul>
      )}

      <div>
        <Button title={'All'} />
        <Button title={'Active'} />
        <Button title={'Completed'} />
      </div>
      <div>{date}</div>
    </div>
  );
};
