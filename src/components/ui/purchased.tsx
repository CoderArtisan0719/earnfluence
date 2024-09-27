import Link from "next/link";
import { stars } from "@/app/fantasy-football/page";
import KindFirst from "../carousel/kindFirst";

const Purchased = () => {
	return (
		<div>
			<div className="text-center mt-[20px]">
				<h1 className="text-3xl font-bold">No purchased Cameos</h1>
				<Link href="#" className="text-blue-400 text-[17px]">Browse talent</Link>
				<p className="text-gray-200">You might like.</p>
			</div>
			<KindFirst stars={stars} title="Recommended for you"/>
		</div>
	)
}

export default Purchased;