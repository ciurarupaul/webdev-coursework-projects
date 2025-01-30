import { useParams } from "react-router-dom";

function EventDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>Events Detail Page</h1>
			<p>Event id: {params.eventId}</p>
		</>
	);
}

export default EventDetailPage;
