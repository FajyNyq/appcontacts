import React from "react";
import {useDispatch} from 'react-redux';
import {
	FaCheckSquare,
	FaListAlt,
	FaPlusSquare,
	// FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom"; 
import {
	fTodoListData,
} from "../../Actions/index";

export default function TodoFooter() {
	const dispatch = useDispatch();

	const handlecompletedtodo = () => {
		dispatch({ type: "COMPLETED_TODO" });
	}

		const handlelisttodo = () => {
			dispatch(fTodoListData());
		};

	return (
		<>
			<div className="btn-group">
				<Link
					to="/TodoList"
					className="btn btn-outline-dark bg-light"
				>
					<FaListAlt onClick={handlelisttodo} />
				</Link>
				<Link
					to="/TodoList"
					className="btn btn-outline-dark bg-light"
				>
					<FaCheckSquare onClick={handlecompletedtodo} />
				</Link>
			</div>
			<button className="btn btn-outline-dark bg-light float-right">
				<FaPlusSquare />
			</button>
		</>
	);
}

