import React, { useState } from "react";
import { useDispatch } from 'react-redux'

export default function AddContact(props) {
	const [nom, setNom] = useState("");
	const [email, setEmail] = useState("");
	const [tel, setTel] = useState("");
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type:'ADD_CONTACT',
			payload: {id:Date.now(),nom,email,tel}
		});

		setNom('');
		setEmail('');
		setTel('');

		props.history.push('/ListeContact');
	};

	return (
		<div className="card mb-3">
			<div className="card-header">Ajouter un contact</div>
			<div className="card-body">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="nom">Nom</label>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Entrer un nom"
							name="nom"
							value={nom}
							onChange={(e) => setNom(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Entrer un email ..."
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="tel">Nom</label>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Saisir un numero ..."
							name="tel"
							value={tel}
							onChange={(e) => setTel(e.target.value)}
						/>
					</div>
					<input
						type="submit"
						className="btn btn-block btn-primary"
					/>
				</form>
			</div>
		</div>
	);
}
