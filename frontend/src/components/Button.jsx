import React from "react";

function Button({ label }) {
	return (
		<>
			<button className="bg-blue-700 hover:scale-105 text-white py-2 mt-6 rounded-xl">
				{label}
			</button>
		</>
	);
}

export default Button;
