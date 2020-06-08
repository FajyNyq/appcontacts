import React from "react";
// Import Ecran modal
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
// Fin Import Ecran modal

export default function TodoAdd(props) {
	return (
		<Modal
			show={props.show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			onHide={() => props.showTodoAdd(false)}
		>
			<ModalHeader closeButton className="bg-light">
				<ModalTitle id="contained-modal-title-vcenter">
					<span className="font-weight-bold text-dark">
						Formulaire tâche
					</span>
				</ModalTitle>
			</ModalHeader>
			<form>
				<ModalBody>
					<div className="form-group">
						<label htmlFor="todoTitle">Tâche à faire</label>
						<input
							type="text"
							className="form-control"
							id="todoTitle"
							aria-describedby="todoTitleHelp"
							placeholder="Entrer une tâche"
						/>
						<small
							id="todoTitleHelp"
							className="form-text text-muted"
						>
							Vous devez saisir une tâche à faire...
						</small>
					</div>
				</ModalBody>
				<ModalFooter className="bg-secondary">
					<button
						type="button"
						// onClick={() => props.showTodoAdd(false)}
						className="btn btn-primary"
					>
						Valider
					</button>
					<button
						type="button"
						onClick={() => props.showTodoAdd(false)}
						className="btn btn-danger"
					>
						Fermer
					</button>
				</ModalFooter>
			</form>
		</Modal>
	);
}
