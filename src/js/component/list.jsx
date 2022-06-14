import React, { useState, forwardRef, useImperativeHandle } from "react";
import ListItem from "./listItem.jsx";

const List = forwardRef((props, ref) => {
	const [items, setItems] = useState([
		"Hacer tareas",
		"Llamar al medico",
		"Preparar la cena",
		"Bañar al perro",
	]);

	useImperativeHandle(ref, () => ({
		newItem: (itemText) => {
			setItems([...items, itemText]);
		},
	}));

	function deleteItem(id) {
		console.log("Eliminando el " + id);
		let itemsTmp = [...items];
		itemsTmp.splice(id, 1);
		setItems(itemsTmp);
	}

	return (
		<ul className="list-group">
			{items.map((itemText, id) => (
				<ListItem
					itemValue={itemText}
					key={id}
					itemId={id}
					delete={deleteItem}
				/>
			))}
		</ul>
	);
});

export default List;
