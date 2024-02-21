import axios from "axios";
import { useState } from "react";
import Date from "../components/Date";

function Upload() {
	//     title, description, type, date added, report date, tags(sugar, bg...)

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState();
	const [file, setFile] = useState("");
	const [tags, setTags] = useState([]);

	//post
	const submitImage = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("title", title);
		formData.append("date", date);
		formData.append("tags", tags);
		formData.append("file", file);
		console.log(title, file);

		const result = await axios.post(
			"http://localhost:3000/upload",
			formData,
			{
				headers: { "Content-Type": "multipart/form-data" },
			}
		);
	};

	//     title, description, type, date added, report date, tags(sugar, bg...)
	return (
		<div className="bg-blue-100 p-9">
			<form onSubmit={submitImage}>
				<label>
					title
					<br />
					<input
						name="title"
						type="text"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<br />
				<br />
				<label>
					description
					<br />
					<input
						name="description"
						type="text"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<br />
				<br />
				<label>
					report type
					<br />
					<select
						name="type"
						id="type">
						<option value="">selet type</option>
						<option value="diagnosis">Diagnosis</option>
						<option value="lab">lab</option>
					</select>
				</label>
				<br />
				<br />
				<Date
					date={date}
					setDate={setDate}></Date>
				<br />
				<br />
				<label>
					file
					<br />
					<input
						name="title"
						type="file"
						accept="application/pdf"
						required
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</label>
				<br />
				<br />
				<label>
					Tags
					<br />
					<input
						name="tags"
						type="text"
						onChange={(e) => {
							const string = e.target.value;
							const val = new Set(string.split(" "));
							setTags(Array.from(val));
						}}
					/>
				</label>
				<br />
				<br />
				<button
					className="p-3 text-white bg-blue-700"
					type="submit">
					Button
				</button>
			</form>
		</div>
	);
}
export default Upload;
