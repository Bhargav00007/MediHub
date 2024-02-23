import axios from "axios";

export default function DeleteButton({ type, ele }) {
	function deleteReport(ele) {
		axios.delete("http://localhost:3000/api/v1/report/delete/" + ele, {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ4MzcxNzE2NDNkY2YwYTQ5MmZhYzgiLCJpYXQiOjE3MDg2OTM4MDR9.sm13PKxTztbK-UueC4e9X6Qw6G5QAwElnLTAJzWSoNk",
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
