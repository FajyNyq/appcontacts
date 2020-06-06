import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

export default function ListeContacts(props) {
	const { contacts } = useSelector((state) => ({
		...state.contactReducer,
	}));

	console.log("list", contacts);

	useEffect(() => {
		console.log("setItem", contacts);
	//	if (contacts.length !== 0) {
			window.localStorage.setItem(
				"appcontacts",
				JSON.stringify(contacts)
			);
//		}
	}, [contacts]);

	return (
		<div className="container">
			{
				//contacts	? 
			contacts.map((contact) => (
						<Contact
							key={contact.id}
							id={contact.id}
							nom={contact.nom}
							email={contact.email}
							tel={contact.tel}
						/>
				  ))
			//	: null
				}
			<input
				type="button"
				className="btn btn-primary"
				value="Ajouter un contact"
				onClick={() => props.history.push("/AjouteContact")}
			/>
		</div>
	);
}
