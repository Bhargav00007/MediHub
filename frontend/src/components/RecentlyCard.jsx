export default function RecentlyCard({ title, description }) {
	return (
		<div>
			<div className="flex flex-col p-5 bg-blue-100 border border-blue-400 min-h-44 min-w-56 rounded-xl hover:scale-90">
				<h2 className="pb-6 text-2xl font-bold ">{title}</h2>
				<div>
					<b>Added on: </b>
					{description}
				</div>
			</div>
		</div>
	);
}
