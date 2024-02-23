export default function Logout() {
	function logoutUser() {
		console.log(localStorage.token);
		localStorage.token = "";
		// localStorage.removeItem("token"); // Remove the token from localStorage
		window.location.reload();
	}
	return (
		<div>
			<button
				className="p-3 font-bold text-white bg-blue-600 rounded-lg"
				onClick={() => logoutUser()}>
				Log out
			</button>
		</div>
	);
}
