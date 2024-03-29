import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DeleteButton from "../components/DeleteButton";
import PdfComp from "../components/PdfComp";
import Logout from "../components/Logout";

export default function ShowReports({ type }) {
	const [allReports, setAllReports] = useState(null);
	const [pdfFile, setPdfFile] = useState("");

	async function getReports(type) {
		const res = await axios.get(
			"http://localhost:3000/api/v1/report/bulk?type=",
			{
				headers: {
					Authorization: "Bearer " + localStorage.token,
				},
			}
		);
		setAllReports(res.data.allPdfs);
		console.log(allReports);
	}

	useEffect(() => {
		getReports();
	}, []);

	function ReportSection({ reports }) {
		return (
			<div className="grid grid-cols-3 pt-10">
				{reports === null
					? console.log("empty")
					: reports.map(({ title, description, filename }) => {
							return (
								<SingleReport
									key={filename}
									title={title}
									description={description}
									filename={filename}></SingleReport>
							);
					  })}
			</div>
		);
	}

	function SingleReport({ title, description, filename }) {
		return (
			<div className="flex flex-col justify-start gap-2 bg-blue-200 border border-black ">
				<h1>{title}</h1>
				<p>{description}</p>
				<DeleteButton
					type={"report"}
					ele={filename}></DeleteButton>
				<button
					className="bg-green-400 rounded-sm"
					onClick={(e) => {
						setPdfFile(filename);
					}}>
					Show Report
				</button>
			</div>
		);
	}

	return (
		<div className="text-center">
			<h4>All reports</h4>
			<p>add reports inorder to view them</p>

			<div>
				<Link
					className="pl-1 underline cursor-pointer pointer"
					to="/upload">
					Upload page
				</Link>
			</div>

			<Logout></Logout>
			<div className="grid ">
				<ReportSection reports={allReports}></ReportSection>
			</div>
			<PdfComp pdfFile={pdfFile}></PdfComp>
		</div>
	);
}
