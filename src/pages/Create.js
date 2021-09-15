import { Button, ButtonGroup, Container, Typography } from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/core/Send";
import KeyboardArrowRightIcon from "@material-ui/core/KeyboardArrowRight";
import { makeStyles } from "@material-ui/styles";

// create different css classes and rules
const useStyles = makeStyles({
	// each property is a css class
	btn: {
		backgroundColor: "violet",
		// applying hover state
		"&:hover": {
			backgroundColor: "blue",
		},
	},
	title: {
		textDecoration: "underline",
	},
});

export default function Create() {
	// to access the classes we created:
	const classes = useStyles();
	return (
		<Container>
			{/* Looks like h6 but rendered as h2,
       noWrap: truncates text,
       gutterBottom: for margin buttom */}
			<Typography
				className="classes.title"
				variant="h6"
				component="h2"
				noWrap
				gutterBottom
				color="textSecondary"
			>
				Create a new note
			</Typography>
			<Button
				className={classes.btn}
				onClick={() => console.log("Clicked")}
				type="submit"
				color="secondary"
				variant="contained"
				// startIcon={<SendIcon />}
				endIcon={<KeyboardArrowRightIcon />}
			>
				Submit
			</Button>

			{/* <Button color="primary" variant="outlined" type="submit">
				Submit
			</Button>
			<Button color="primary" variant="contained" type="submit">
				Submit
			</Button>

			// Button Group Styles applies to all children 
			<ButtonGroup color="secondary" variant="contained">
				<Button>One</Button> <Button>Two</Button>
			</ButtonGroup> */}
		</Container>
	);
}
