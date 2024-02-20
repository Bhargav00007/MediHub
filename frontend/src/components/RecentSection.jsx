import RecentlyCard from "./RecentlyCard";

export default function RecentSection() {
	return (
		<div className="px-4">
			<p className="pb-2 italic text-slate-700">Recently Added</p>
			<div className="flex flex-row gap-4 overflow-y-auto lg:overflow-hidden lg:grid lg:grid-cols-3">
				<RecentlyCard
					title={"Sugar Lab Report"}
					description={"22/jan/2003"}></RecentlyCard>
				<RecentlyCard
					title={"Sugar Lab Report"}
					description={"22/jan/2003"}></RecentlyCard>
				<RecentlyCard
					title={"Sugar Lab Report"}
					description={"22/jan/2003"}></RecentlyCard>
			</div>
		</div>
	);
}
