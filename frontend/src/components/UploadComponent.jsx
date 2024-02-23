import { useState } from "react";
import axios from "axios";

export default function UploadComponent() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [reportdate, setReportDate] = useState("");
	const [tags, setTags] = useState("");
	const [file, setFile] = useState("");

	async function submitFile(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("reportDate", reportdate);
		formData.append("tags", tags);
		formData.append("file", file);
		console.log(title, file);

		const result = await axios.post(
			"http://localhost:3000/api/v1/report/upload",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ4MzcxNzE2NDNkY2YwYTQ5MmZhYzgiLCJpYXQiOjE3MDg2Njg2OTh9.VpSEFhDeqMzvQo9zVStVf_Lf0HjLVvbmSPVXv8yofkM",
				},
			}
		);
	}
	return (
		<div className="flex justify-center p-3 bg-red-300 ">
			<form onSubmit={submitFile}>
				<label>
					Title
					<input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						type="text"
						required
					/>
				</label>
				<br />
				<br />

				<label>
					Description
					<input
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						type="text"
					/>
				</label>
				<br />
				<br />

				<label>
					Report Date
					<input
						onChange={(e) => {
							setReportDate(e.target.value);
						}}
						max={new Date().toISOString().split("T")[0]} // Set max attribute to today's date
						type="date"
						required
					/>
				</label>
				<br />
				<br />

				<label>
					Tags
					<input
						onChange={(e) => {
							setTags(e.target.value);
						}}
						type="text"
					/>
				</label>
				<br />
				<br />

				<label>
					File
					<input
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
						type="file"
						accept="application/pdf"
						required
					/>
				</label>
				<br />
				<br />
				<button
					type="submit"
					className="bg-blue-400">
					Submit
				</button>
			</form>
		</div>
	);
}
