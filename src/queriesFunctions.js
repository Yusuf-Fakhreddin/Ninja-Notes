import axios from "axios";

export const getNotes = async () => {
	const { data } = await axios.get("http://localhost:8000/notes");
	console.log(data.data);
	return data;
};

export const postNote = async ({ title, details, category }) => {
	const { data } = await axios.post(
		"http://localhost:8000/notes",
		{
			title,
			details,
			category,
		},
		{
			headers: {
				"Content-type": "application/json",
			},
		}
	);
	console.log(data.data);
	return data;
};
export const deleteNote = async (id) => {
	const { data } = await axios.delete("http://localhost:8000/notes/" + id);
	console.log(data);
	return data;
};
