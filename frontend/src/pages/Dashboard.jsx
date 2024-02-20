import React from "react";
import SideBar from "../components/SideBar";
import Section from "../components/Section";

export default function Dashboard() {
	return (
		<div className="h-screen bg-blue-50">
			<SideBar></SideBar>
			<div className="grid grid-cols-1 gap-3 p-3 justify-items-center md:grid-cols-2 lg:grid-cols-3 ">
				<Section
					label={
						"Sugar report long very veryreport long very veryreport long very very"
					}
					description={
						"Some random text to show on both mobile and desktop"
					}></Section>
				<Section
					label={"Reporst"}
					description={
						"Some random text to show on both mobile and desktop"
					}></Section>
				<Section
					label={"Reporst"}
					description={
						"Some random text to show on both mobile and desktop"
					}></Section>
				<Section
					label={"Reporst"}
					description={
						"Some random text to show on both mobile and desktop"
					}></Section>
				<Section
					label={"Reporst"}
					description={
						"Some random text to show on both mobile and desktop"
					}></Section>
			</div>
		</div>
	);
}

function InputBox({ type, label, placeholder }) {
	return (
		<>
			<input
				className="p-2 rounded-xl"
				type={type}
				name={label}
				id={label}
				placeholder={placeholder}
			/>
		</>
	);
}
