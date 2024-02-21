export default function Date({ date, setDate }) {
	return (
		<div>
			<h1>Report Date: {date} </h1>
			<input
				type="date"
				onChange={(e) => {
					setDate(e.target.value);
				}}
			/>
		</div>
	);
}
