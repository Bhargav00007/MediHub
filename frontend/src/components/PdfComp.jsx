import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp(props) {
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div className="p-10 border border-red-500 ">
			<p>
				Page {pageNumber} of {numPages}
			</p>
			<Document
				className="m-3 border border-black w-fit"
				file={props.pdfFile}
				onLoadSuccess={onDocumentLoadSuccess}>
				{Array.apply(null, Array(numPages))
					.map((x, i) => i + 1)
					.map((page) => {
						return (
							<div className="mb-12">
								<Page
									pageNumber={page}
									renderTextLayer={false}
									renderAnnotationLayer={false}
								/>
							</div>
						);
					})}
			</Document>
		</div>
	);
}
export default PdfComp;
