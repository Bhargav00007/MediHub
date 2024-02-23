import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import UploadComponent from "./components/UploadComponent";
import ShowReports from "./pages/Reports";

function App() {
	const isLoggedIn = localStorage.token !== "";
	return (
		<>
			<BrowserRouter>
				<Routes>
					{isLoggedIn ? (
						<>
							<Route
								path="/dashboard"
								element={<Dashboard />}
							/>
							<Route
								path="/reports"
								element={<ShowReports />}
							/>
							<Route
								path="/upload"
								element={<UploadComponent />}
							/>
							{/* Redirect to reports page if logged in */}
							<Route
								path="*"
								element={<Navigate to="/reports" />}
							/>
						</>
					) : (
						<>
							<Route
								path="/signup"
								element={<Signup />}
							/>
							<Route
								path="/login"
								element={<Login />}
							/>
							{/* Redirect to login page if not logged in */}
							<Route
								path="*"
								element={<Navigate to="/login" />}
							/>
						</>
					)}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
