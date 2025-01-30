import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import { Suspense } from "react";

// export const metadata = {
//   title: "Cabin",
// };

export async function generateMetadata({ params }) {
	const { name } = await getCabin(params.cabinId);
	return { title: `Cabin ${name}` };
}

// tell nextJS all the possible child routes, so it can load all of them static
// best practice for finite num of children routes
export async function generateStaticParams() {
	const cabins = await getCabins();

	const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

	return ids;
}

export default async function Page({ params }) {
	// now good, they have to wait for the previous one to load
	// const cabin = await getCabin(params.cabinId);
	// const settings = await getSettings();
	// const bookedDates = await getBookedDatesByCabinId(params.cabinId);

	// not great, as fast as the slowest one
	// const [cabin, settings, bookdeDate] = await Promise.all([
	// 	getCabin(params.cabinId),
	// 	getSettings(),
	// 	getBookedDatesByCabinId(params.cabinId),
	// ]);

	// best solution, each one in a component, each component renders as it loads, better ux
	const cabin = await getCabin(params.cabinId);

	return (
		<div className="max-w-6xl mx-auto mt-8">
			<Cabin cabin={cabin} />

			<div>
				<h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
					Reserve {cabin.name} today. Pay on arrival.
				</h2>

				<Suspense fallback={<Spinner />}>
					<Reservation cabin={cabin} />
				</Suspense>
			</div>
		</div>
	);
}
