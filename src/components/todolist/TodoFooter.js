import React from "react";
import {
	FaCheckSquare,
	FaListAlt,
	FaPlusSquare,
	// FaTrash,
} from "react-icons/fa";

export default function TodoFooter() {
	return (
		<>
			<div className="btn-group">
				<a
					href="/"
					className="btn btn-outline-dark bg-light"
				>
					<FaListAlt />
				</a>
				<a
					href="/"
					className="btn btn-outline-dark bg-light"
				>
					<FaCheckSquare />
				</a>
			</div>
			<button className="btn btn-outline-dark bg-light float-right">
				<FaPlusSquare />
			</button>
		</>
	);
}
