import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const paffichage = {
	visible: false,
};

export default function Contact(props) {
	const dispatch = useDispatch();


	const [affichemoi, setaffichemoi] = useState(
		paffichage.visible
	);

	const afficheContact = () => {
		setaffichemoi(!affichemoi);
	};

	const supprContact = (id) => {
		const res = window.confirm(
			"Voulez-vous supprimer le contact ?"
		);
		if (res) {
			dispatch({
				type: "DEL_CONTACT",
				payload: id,
			});
		}
	};



	return (
		<div className="card card-body mb-3">
			<h4>
				Nom: {props.nom}{" "}
				<i
					className="fas fa-sort-down"
					onClick={afficheContact}
					style={{ cursor: "pointer" }}
				></i>
				<i
					className="fas fa-times-circle"
					style={{
						cursor: "pointer",
						float: "right",
						color: "red",
					}}
					onClick={() => supprContact(props.id)}
				></i>
			</h4>
			{affichemoi ? (
				<ul className="card card-body mb-3">
					<li className="list-group-item">
						Email: {props.email}
					</li>
					<li className="list-group-item">
						Téléphone : {props.tel}
					</li>
				</ul>
			) : null}
		</div>
	);
}

Contact.propTypes = {
	nom: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	tel: PropTypes.string.isRequired,
};
