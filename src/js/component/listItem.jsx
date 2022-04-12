import React from "react";

const ListItem = (props) => {
	console.log(props.itemId);
	return <li className="list-group-item">{props.itemValue}</li>;
};

export default ListItem;
