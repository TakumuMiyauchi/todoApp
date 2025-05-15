import { useState } from "react";
import AddMenu from "./AddMenu";
import ListMenu from "./ListMenu";

let maxId = 0;
export default function StateMenu() {
	let defaultRecipe = [{
		id: 1,
		title:"かつおのニラ香味マリネ",
		category: "魚料理",
		url: "https://ttv.jeki.co.jp/go-torecipe/backnumber/32/",
		comment:"ごはんにも合う",
		fab: true
	}]
	
  const [menu, setMenu] = useState(defaultRecipe);
  const [title, setTitle] = useState("");
	const [category, setCategory] = useState("ごはん");
	const [url, setUrl] = useState("");
	const [comment, setComment] = useState("一言コメントを記載...");
	const [fab, setFab] = useState(true);

	// メニュー名
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

	const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
	// メニューサイトURL
	const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  };
	//コメント
	const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

	// お気に入り
	const handleCheckFab = (e) => {
		setFab(e.target.checked)
	}

	//
  const handleClick = () => {
    setMenu([
      ...menu,
      {
        id: ++maxId,
        title,
				category,
        created: new Date(),
				url,
				comment,
				fab,
        // isDone: false,
      },
    ]);
  };

  // const handleDone = (e) => {
  //   setMenu(
  //     menu.map(item => {
  //       if (item.id === Number(e.target.dataset.id)) {
  //         return {
	// 					...item,
	// 					isDone: true
	// 				};
  //       }else {
	// 				return item;
	// 			}
  //     })
  //   );
  // };

  return (
    <>
      <AddMenu
        handleClick={handleClick}
        handleChangeTitle={handleChangeTitle}
        title={title}
				handleChangeCategory= {handleChangeCategory}
				category={category}
				handleChangeUrl={handleChangeUrl}
				url={url}
				handleChangeComment={handleChangeComment}
				comment={comment}
				handleCheckFab={handleCheckFab}
				fab={fab}

      />
      <ListMenu menu={menu}/>
    </>
  );
}
