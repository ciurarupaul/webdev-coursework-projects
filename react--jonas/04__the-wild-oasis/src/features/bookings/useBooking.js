import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
	const { bookingId } = useParams();

	const {
		isLoading,
		data: booking,
		error,
	} = useQuery({
		queryKey: ["booking"],
		queryFn: () => getBooking(bookingId),
		retry: false,
		// react query tries to fetch the data 3 times, dont here
	});

	return { isLoading, error, booking };
}
