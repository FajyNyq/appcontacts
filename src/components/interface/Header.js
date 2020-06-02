import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<nav className="navbar navbar-dark bg-primary mb-3 py-0">
				<div className="container">
					<Link to="/" className="navbar-brand">
						Contact-Todo
					</Link>
					<ul className="navbar-nav d-inline-block">
						<li className="nav-item ml-3 d-inline-block">
							<Link to="/" className="nav-link">
								Accueil
							</Link>
						</li>
						<li className="nav-item ml-3 d-inline-block">
							<Link to="/ListeContact" className="nav-link">
								Contact
							</Link>
						</li>{" "}
						<li className="nav-item ml-3 d-inline-block">
							<Link to="/TodoList" className="nav-link">
								TodoList
							</Link>
						</li>
						<li className="nav-item ml-3 d-inline-block">
							<Link to="/Apropos" className="nav-link">
								A Propos
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
