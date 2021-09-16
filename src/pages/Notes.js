import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../App";
import NoteCard from "../components/NoteCard";
import { deleteNote, getNotes } from "../queriesFunctions";

export default function Notes() {
	const { data, error, isLoading, isError, status } = useQuery(
		"notes",
		getNotes
	);
	console.log(data);
	const { mutateAsync: DeleteNote, isLoading } = useMutation(deleteNote);
	const handleDelete = async () => {
		await DeleteNote(id);
		queryClient.invalidateQueries("notes");
	};

	return (
		<Container>
			Notes page
			{/* 3* base spacing value of material ui */}
			<Grid container spacing={3}>
				{" "}
				{data &&
					React.Children.toArray(
						data.map((note) => (
							<Grid item xs={12} md={6} lg={4}>
								<NoteCard note={note} handleDelete={handleDelete} />
							</Grid>
						))
					)}
			</Grid>
		</Container>
	);
}
