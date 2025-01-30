// Challenge / Exercise

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditEventPage from "./pages/EditEvent";
import EventPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RoorLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RoorLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventPage />,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						element: <EventDetailPage />,
					},
					{
						path: "new",
						element: <NewEventPage />,
					},
					{
						path: ":eventId/edit",
						element: <EditEventPage />,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
