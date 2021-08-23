import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

import Container from "react-bootstrap/Container";

function App() {
	return (
    <>
		<AuthProvider>
			<Router>
				<NavBar />
				<main className="main">
          <Container>
					<Switch>
						<Route exact path="/">
					
						</Route>
					</Switch>
          </Container>
          </main>
				<Footer />
			</Router>
		</AuthProvider>
    </>
	);
}

export default App;