import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";
import Notes from "../pages/Notes";

const useStyles = makeStyles({
	test: {
		border: (note) => {
			if (note.category === "work") return "1px solid red";
		},
	},
	avatar: {
		backgroundColor: (note) => {
			if (note.category === "work") {
				return yellow[700];
			}
			if (note.category === "money") {
				return green[500];
			}
			if (note.category === "work") {
				return pink[500];
			}
			return blue[500];
		},
	},
});

const NoteCard = ({ note, handleDelete }) => {
	// passing arguments to the makeStyles function
	const classes = useStyles(note);
	return (
		<div>
			{" "}
			{/* elevation controls shadow */}
			<Card elevation={1} className={classes.test}>
				<CardHeader
					avatar={
						<Avatar className={classes.avatar}>
							{note.category[0].toUpperCase()}{" "}
						</Avatar>
					}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							{" "}
							<DeleteOutlined />{" "}
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default NoteCard;
