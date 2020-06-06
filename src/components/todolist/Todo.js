import React from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

export default function Todo(props) {
	const deltodo = (id) => {
		const ret = window.confirm(
			"Voulez-vous supprimer la tache ?"
    );
    console.log(ret)
		if (ret) {
			props.deleteTodo(id);
		}
	};

	return (
		<>
			<li className="list-group-item d-flex align-items-center">
				<span className="badge badge-info">
					{props.userid}/{props.id}
				</span>
				<span className="ml-3 text-capitalize">
					{props.title}
				</span>

				<button
					className={`btn btn-sm ml-auto ${
						props.completed
							? "btn-success"
							: "btn-outline-success"
					}`}
					onClick={() => {
						props.majStatusTodo(props.id);
					}}
				>
					<FaCheck />
				</button>
				<button
					className="btn btn-sm btn-outline-danger ml-1"
					onClick={() => deltodo(props.id)}
				>
					<FaTrashAlt />
				</button>
			</li>
		</>
	);
}
