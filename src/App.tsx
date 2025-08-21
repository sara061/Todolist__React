import "./App.css";
import { Task, TodoListItem } from "./TodoListItem";

export const App = () => {
  const tasks1: Task[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Redux tulkit", isDone: true },
  ];

  const tasks2: Task[] = [
/*     { id: 1, title: "Hello world", isDone: true },
    { id: 2, title: "I am happy", isDone: true },
    { id: 3, title: "Yo", isDone: true }, */
  ];
  return (
    <div className="app">
      <>
        <TodoListItem title="What to learn" tasks={tasks1} date="20.08.2025" />
        <TodoListItem title="What to buy" tasks={tasks2} />
      </>
    </div>
  );
};
