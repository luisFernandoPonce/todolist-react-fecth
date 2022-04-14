import React from "react";

const ListItem = (props) => {
	function click() {
		props.delete(props.itemId);
	}
	return (
		<li onClick={click} className="list-group-item list-group-item-action">
			{props.itemValue}
		</li>
	);
};

export default ListItem;
