const initContacts = {
	contacts: JSON.parse(
		window.localStorage.getItem("appcontacts")
	),
};

const init002 = {
	contacts: [],
};

const initialData = initContacts.contacts
	? initContacts
	: init002;

export default function contactReducer(
	state = initialData,
	action
) {
	switch (action.type) {
		case "DEL_CONTACT":
			const nvcontact = state.contacts.filter(
				(contact) => contact.id !== action.payload
			);
			return { contacts: nvcontact };
		case "ADD_CONTACT":
			console.log(state)
				return {
					...state,
					contacts: [...state.contacts, action.payload],
				};
		default:
			return state;
	}
}
