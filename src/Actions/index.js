import axios from "axios";

export const fTodoListData = () => {
	return (dispatch) =>
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((response) => {
				dispatch({
					type: "LIST_TODO",
					payload: response.data,
				});
			})
			.catch((error) =>
				dispatch({
					type: "LIST_TODO_ERR",
					payload: error.data,
				})
			);
};

export const fTodoPutData = (id, newtodo) => {
	return (dispatch) =>
		axios
			.put(
				"https://jsonplaceholder.typicode.com/todos/" + id,
				newtodo
			)
			.then((response) => {
				dispatch({
					type: "PUT_TODO",
					payload: response.data,
				});
			})
			.catch((error) =>
				dispatch({
					type: "PUT_TODO_ERR",
					payload: error.data,
				})
			);
};


export const fTodoDelData = (id) => {
	return (dispatch) =>
		axios
			.delete(
				"https://jsonplaceholder.typicode.com/todos/" + id,
			)
			.then((response) => {

				dispatch({
					type: "DEL_TODO",
					payload: {id:id,status:response.status},
				});
			})
			.catch((error) =>
				dispatch({
					type: "DEL_TODO_ERR",
					payload: error.data,
				})
			);
};