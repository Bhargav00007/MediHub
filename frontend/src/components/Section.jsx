import React from "react";

export default function Section({ label, description }) {
	return (
		<div>
			<a
				href="#"
				className="block max-w-sm p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
					{label}
				</h5>
				<p className="font-normal text-gray-700 ">{description}</p>
			</a>
		</div>
	);
}
