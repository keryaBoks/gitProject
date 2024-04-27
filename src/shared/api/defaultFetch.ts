export async function fetchData(url: string): Promise<Response> {
	const response = await fetch(url, {
		headers: {
			Authorization: `token ${process.env.REACT_APP_TOKEN}`,
			Accept: "application/json",
		},
	});
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response;
}
