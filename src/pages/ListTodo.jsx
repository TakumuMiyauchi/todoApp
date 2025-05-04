export default function ListTodo ({todo,handleDone}) {
 return (
	<ul>
		{todo.map(item =>
			<li key={item.id} className={item.isDone ? 'done' : ''}>
				{item.title}
				<button type="button" onClick={handleDone} data-id={item.id}>
					済
				</button>
			</li>
		 )}
	</ul>
 )
}
