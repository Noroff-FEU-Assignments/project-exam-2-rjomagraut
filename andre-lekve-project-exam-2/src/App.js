import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import AccommodationsPage from "./components/pages/accommodations/AccommodationsPage";
import SingleAccommodation from "./components/pages/accommodations/SingleAccommodation";
import ContactPage from "./components/pages/contact/ContactPage";
import AdminPage from "./components/pages/admin/AdminPage";
import LoginPage from "./components/pages/login/LoginPage";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import PostPage from "./components/pages/admin/adminPosts/PostPage";
import AddPost from "./components/pages/admin/adminPosts/AddPost";
import EditPost from "./components/pages/admin/adminPosts/EditPost";
import BookingsPage from "./components/pages/admin/adminBookings/BookingsPage";
import EnquiriesPage from "./components/pages/admin/adminEnquiries/EnquiriesPage";
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
							<HomePage />
						</Route>
            			<Route exact path="/accommodations">
							<AccommodationsPage />
						</Route>
						<Route path="/accommodations/:id">
							<SingleAccommodation />
						</Route>
            			<Route exact path="/contact">
							<ContactPage />
						</Route>
						<Route path="/admin" exact>
							<AdminPage />
						</Route>
						<Route path="/admin/posts" exact>
							<PostPage />
						</Route>
						<Route path="/admin/posts/add">
							<AddPost />
						</Route>
						<Route path="/admin/posts/edit/:id">
							<EditPost />
						</Route>
						<Route path="/admin/enquiries" exact>
							<EnquiriesPage />
						</Route>
						<Route path="/admin/bookings" exact>
							<BookingsPage />
						</Route>
						<Route path="/login">
							<LoginPage />
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
