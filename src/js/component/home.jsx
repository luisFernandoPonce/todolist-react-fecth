import React, { useState } from "react";

//include images into your bundle
import List from "./list.jsx";

//create your first component
const Home = () => {
	const [items, setItems] = useState([
		"Lavar la ropa",
		"Fregar los platos",
		"Dar clases",
	]);
	function addItem(event) {
		// Previene el comportamiento por defecto, evitando que la pagina se recargue
		event.preventDefault();
		// Se crea un objeto "FormData" con los datos del formulario
		let data = new FormData(event.target);
		// Se obtiene el nuevo item del formulario
		let newItem = data.get("newItem");
		// Se establece el estado del items al mismo arreglo con el nuevo elemento al final
		setItems([...items, newItem]);
		// Reinicia el formulario
		event.target.reset();
	}
	return (
		<div>
			<h1 className="text-center mt-5">ToDo list</h1>
			<form onSubmit={addItem}>
				<div className="form-group">
					<label htmlFor="newItem">Nueva tarea</label>
					<input
						required
						id="newItem"
						type="text"
						className="form-control"
						placeholder="Ingrese una nueva tarea"
						name="newItem"></input>
				</div>
				{/* <button className="btn btn-primary" type="submit">
					Agregar ToDo
				</button> */}
			</form>
			<div>
				<List items={items} />
			</div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
