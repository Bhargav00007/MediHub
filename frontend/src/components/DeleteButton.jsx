import axios from "axios";

export default function DeleteButton({ type, ele }) {
	function deleteReport(ele) {
		axios.delete("http://localhost:3000/api/v1/report/delete/" + ele, {
			headers: {
				Authorization: "Bearer " + localStorage.token,
			},
		});
	}
	if (type == "report") {
		return (
			<div className="bg-red-300 rounded-sm">
				<button
					onClick={(e) => {
						deleteReport(ele);
					}}>
					Delete Report
				</button>
			</div>
		);
	} else {
		return (
			<div className="bg-red-300 rounded-sm">
				<button>Delete Remainder</button>
			</div>
		);
	}
}
