import Button from "../components/Button"

export default function ListTodo ({menu,handleDone}) {
 return (
	<ul>
		{menu.map(item =>
			<li key={item.id} className={item.isDone ? 'done' : ''}>
				{item.title}
				<Button onClick={handleDone} dataId={item.id}>
					済
				</Button>
			</li>
		 )}
	</ul>
 )
}
