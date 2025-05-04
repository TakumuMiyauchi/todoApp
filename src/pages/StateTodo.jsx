import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

let maxId = 0;
export default function StateTodo() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
  };

  const handleDone = (e) => {
    setTodo(
      todo.map(item => {
        if (item.id === Number(e.target.dataset.id)) {
          return {
						...item,
						isDone: true
					};
        }else {
					return item;
				}
      })
    );
  };

  return (
    <>
      <AddTodo
        handleClick={handleClick}
        handleChangeTitle={handleChangeTitle}
        title={title}
      />
      <ListTodo todo={todo} handleDone={handleDone}/>
    </>
  );
}
