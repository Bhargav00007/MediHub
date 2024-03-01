import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp({ pdfFile }) {
	return (
		<div className="p-10 border border-red-500 ">
			{pdfFile !== "" ? (
				<embed
					className="w-full h-screen"
					src={`http://localhost:3000/files/${pdfFile}.pdf`}
					height="500px"
					width="auto"
				/>
			) : (
				<div>No pdf</div>
			)}
		</div>
	);
}
export default PdfComp;
