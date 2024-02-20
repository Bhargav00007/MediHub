import RecentSection from "../components/RecentSection";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import FeatureSection from "../components/FeatureSection";

export default function Home() {
	return (
		<div className="flex flex-col justify-center bg-blue-50 ">
			<SideBar></SideBar>
			<main className="min-h-screen">
				<div className="p-3 py-4">
					<RecentSection></RecentSection>
				</div>
				<div className="p-3 py-4">
					<FeatureSection></FeatureSection>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}
