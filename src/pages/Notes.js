import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../App";
import NoteCard from "../components/NoteCard";
import { deleteNote, getNotes } from "../queriesFunctions";
import Masonry from "react-masonry-css";
export default function Notes() {
	const { data, error, isLoading, isError, status } = useQuery(
		"notes",
		getNotes
	);
	console.log(data);
	const { mutateAsync: DeleteNote, isLoading: loading } =
		useMutation(deleteNote);
	const handleDelete = async (id) => {
		await DeleteNote(id);
		queryClient.invalidateQueries("notes");
	};

	const breakPoints = {
		default: 3,
		// at page width: number of columns
		1100: 2,
		700: 1,
	};

	return (
		<Container>
			{/* 3* base spacing value of material ui */}{" "}

			<Masonry
				breakpointCols={breakPoints}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{data &&
					React.Children.toArray(
						data.map((note) => (
							<div>
								<NoteCard note={note} handleDelete={handleDelete} />
							</div>
						))
					)}
			</Masonry>
		</Container>
	);
}
