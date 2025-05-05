import { useState } from "react";
import AddMenu from "./AddMenu";
import ListMenu from "./ListMenu";

let maxId = 0;
export default function StateMenu() {
  const [title, setTitle] = useState("");
  const [menu, setMenu] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setMenu([
      ...menu,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
  };

  const handleDone = (e) => {
    setMenu(
      menu.map(item => {
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
      <AddMenu
        handleClick={handleClick}
        handleChangeTitle={handleChangeTitle}
        title={title}
      />
      <ListMenu menu={menu} handleDone={handleDone}/>
    </>
  );
}
