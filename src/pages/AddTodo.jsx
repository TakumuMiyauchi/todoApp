export default function AddTodo({handleClick, handleChangeTitle, title}) {

	return (
		<div>
			<label>
				やること:
				<input type="text" name="title" value={title} onChange={handleChangeTitle}></input>
			</label>
			<button type="button" onClick={handleClick}>追加</button>
		</div>
	)
}
