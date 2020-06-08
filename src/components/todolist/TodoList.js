import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlusSquare } from "react-icons/fa";

//Les actions
import {
	fTodoListData,
	fTodoPutData,
	fTodoDelData,
} from "../../Actions/index";

import Todo from "./Todo";
import TodoFooter from "./TodoFooter";
import TodoAdd from "./TodoAdd";

export default function TodoList() {
	const { todos } = useSelector((state) => ({
		...state.todoReducers,
	}));
	const dispatch = useDispatch();
	const [showTodo, setShowTodo] = useState(true);

	useEffect(() => {
		dispatch(fTodoListData());
	}, [dispatch]);

	const majStatusTodo = (id) => {
		const untodo = todos.find((todo) => todo.id === id);

		const updtodo = {
			id: untodo.id,
			userId: untodo.userId,
			title: untodo.title,
			completed: !untodo.completed,
		};
		dispatch(fTodoPutData(id, updtodo));
	};

	const deleteTodo = (id) => {
		dispatch(fTodoDelData(id));
	};

	const showTodoAdd = (vshow) => {
		setShowTodo(vshow);
	};

	return (
		<>
			{showTodo ? (
				<TodoAdd
					showTodoAdd={showTodoAdd}
					show={showTodo}
				/>
			) : null}
			<div className="container">
				<div className="card border-secondary">
					<div className="card-header h3">
						<span className="font-weight-bold text-dark">
							Liste des tâches
						</span>

						<button
							className="btn btn-outline-primary float-right"
							onClick={() => {
								showTodoAdd(true);
							}}
						>
							<FaPlusSquare />
						</button>
					</div>
					<div className="card-body">
						<section id="todolist">
							<ul className="list-group m-3">
								{todos
									? todos.map((todo) => (
											<Todo
												key={todo.id}
												id={todo.id}
												title={todo.title}
												completed={todo.completed}
												userid={todo.userId}
												majStatusTodo={majStatusTodo}
												deleteTodo={deleteTodo}
											/>
									  ))
									: null}
							</ul>
						</section>
					</div>
					<div className="card-footer bg-secondary">
						<TodoFooter />
					</div>
				</div>
			</div>
		</>
	);
}
