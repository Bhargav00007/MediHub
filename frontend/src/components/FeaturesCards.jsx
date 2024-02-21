export default function FeaturesCards({ title, description, imgLink }) {
	return (
		<div className="p-2 bg-blue-100 border border-blue-200 rounded-xl pb-52 hover:scale-105">
			<div className="m-2 bg-cover ">
				<img
					className="w-full h-auto rounded-xl"
					src={imgLink}
					alt=""
				/>
			</div>
			<h2 className="px-2 pb-3 text-2xl font-bold ">{title}</h2>
			<p className="px-2">{description}</p>
		</div>
	);
}
