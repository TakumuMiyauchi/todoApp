import React from "react";
import Button from "../components/Button";

export default function ListTodo({ menu }) {
  return (
    <ul>
      {menu.map((item) => (
        <React.Fragment key={item.id}>
          <li>
            {item.title}
          </li>
					<li>
            {item.category}
          </li>
					<li>
						<a href= {item.url}>{item.url}</a>
          </li>
					<li>
            {item.comment}
          </li>
					{item.fab ? <p>お気に入り</p> : "" }
        </React.Fragment>
      ))}
    </ul>
  );
}
