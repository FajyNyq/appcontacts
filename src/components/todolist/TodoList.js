import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';

//Les actions
import {
	fTodoListData,
	fTodoPutData,
	fTodoDelData,
} from "../../Actions/index";

import Todo from "./Todo";
import TodoFooter from "./TodoFooter";

export default function TodoList() {
	const {todos} = useSelector(state => ({
		...state.todoReducers
	}))
	const dispatch = useDispatch();
//	console.log("list ",todos);

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
  

  const deleteTodo =(id) => {
		dispatch(fTodoDelData(id));
  }

	return (
		<div className="container">
			<div className="card border-secondary">
				<div className="card-header h2">TodoList</div>
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
	);
}
