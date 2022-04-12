import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
	return (
		<ul className="list-group">
			{props.items.map((itemText, id) => (
				<ListItem itemValue={itemText} key={id} itemId={id} />
			))}
		</ul>
	);
};

export default List;
