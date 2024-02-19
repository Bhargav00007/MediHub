import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
				</Routes>
			</BrowserRouter>
			{/* <Signup></Signup>
			 */}
			{/* <Signin></Signin> */}
		</>
	);
}

export default App;
