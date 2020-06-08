import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

import Header from "./components/interface/Header";
import ListeContacts from "./components/contact/ListeContacts";
import AddContact from "./components/contact/AddContact";
import Apropos from "./components/interface/Apropos";
import Erreur404 from "./components/interface/Erreur404";
import Accueil from "./components/interface/Accueil";
import TodoList from "./components/todolist/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/AjouteContact"
						component={AddContact}
					/>
					<Route
						exact
						path="/ListeContact"
						component={ListeContacts}
					/>
					<Route
						exact
						path="/TodoList"
						component={TodoList}
					/>
					<Route
						exact
						path="/Apropos"
						component={Apropos}
					/>
					<Route exact path="/" component={Accueil} />
					<Route
						exact
						path="/appcontacts"
						component={Accueil}
					/>
					<Route component={Erreur404} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
