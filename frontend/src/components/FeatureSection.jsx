import FeaturesCards from "./FeaturesCards";

export default function FeatureSection() {
	return (
		<div className="grid gap-10 lg:grid-cols-2 px-9 ">
			<FeaturesCards
				title={"Lab Reports"}
				description={
					"View all your medical reports and test results here."
				}
				imgLink={
					"https://www.newbreedrevenue.com/hs-fs/hubfs/reporting.png?width=775&name=reporting.png"
				}></FeaturesCards>
			<FeaturesCards
				title={"Diagnosis Reports"}
				description={
					"Manage your appointments and medication reminders here."
				}
				imgLink={
					"https://www.newbreedrevenue.com/hs-fs/hubfs/reporting.png?width=775&name=reporting.png"
				}></FeaturesCards>
		</div>
	);
}
// https://assets-global.website-files.com/62396affb4902b847d57a975/634e255a9b0c00443eefb0fc_whatsapp%20reminder.png
// "https://www.newbreedrevenue.com/hs-fs/hubfs/reporting.png?width=775&name=reporting.png"
