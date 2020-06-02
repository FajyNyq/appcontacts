
const init001 = JSON.parse(window.localStorage.getItem(
	"appcontacts"
));

const init002 = undefined
// [
// 	{
// 		id: "1",
// 		nom: "ANKUIH FRANCK",
// 		email: "Fankuih@react.com",
// 		tel: "76-740-35-24",
// 	},
// 	{
// 		id: "2",
// 		nom: "ANKUIH MARUIS",
// 		email: "Mankuih@react.com",
// 		tel: "76-740-35-00",
// 	},
// 	{
// 		id: "3",
// 		nom: "ANKUIH FABRICE",
// 		email: "Fabankuih@react.com",
// 		tel: "76-740-35-66",
// 	},
// ];

const initialData = init001 ? init001 : init002;




export default function contactReducer(
	state = initialData,
	action
) {
	switch (action.type) {
		case "DEL_CONTACT":
			const nvcontact = state.filter(
				(contact) => contact.id !== action.payload
			);
			return nvcontact;
		case "ADD_CONTACT":
			if (state !== undefined){
				return [...state, action.payload]
			} else {
				return [action.payload]
			}
		default:
			return state;
	}
}
