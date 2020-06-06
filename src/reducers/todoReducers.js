const initTodo = {
	todos: [],
};

export default function todoReducers(
	state = initTodo,
	action
) {
	switch (action.type) {
		case "LIST_TODO":
			const todos10 = action.payload.splice(0, 10);
			return { ...state, todos: [...todos10] };

		case "PUT_TODO":
			const updTodo = action.payload;
			const newTodos = state.todos.map((t) =>
				t.id !== updTodo.id ? t : updTodo
			);
			return { ...state, todos: [...newTodos] };
		case "DEL_TODO":
			let restTodos = state.todos.filter(f => f.id !== action.payload.id)
			return { ...state, todos: [...restTodos] };
		case "COMPLETED_TODO":
			return state;
		default:
			return state;
	}
}
