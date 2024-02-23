import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import UploadComponent from "./components/UploadComponent";
import ShowReports from "./pages/Reports";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/signup"
						element={<Signup></Signup>}></Route>
					<Route
						path="/login"
						element={<Login></Login>}></Route>
					<Route
						path="/dashboard"
						element={<Dashboard></Dashboard>}></Route>
					<Route
						path="/reports"
						element={<ShowReports></ShowReports>}></Route>
					<Route
						path="/upload"
						element={<UploadComponent></UploadComponent>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
