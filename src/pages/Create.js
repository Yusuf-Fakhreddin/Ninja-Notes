import {
	Button,
	ButtonGroup,
	Container,
	RadioGroup,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import { makeStyles } from "@material-ui/styles";
import { useForm, Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useMutation } from "react-query";
import { postNote } from "../queriesFunctions";
import { useHistory } from "react-router";

// create different css classes and rules
const useStyles = makeStyles({
	// each property is a css class
	btn: {
		backgroundColor: "violet",
		// applying hover state
		"&:hover": {
			backgroundColor: "grey",
		},
	},
	title: {
		textDecoration: "underline",
	},

	field: {
		marginTop: 20,
		marginBottom: 20,
		display: "block",
	},
});

export default function Create() {
	// to access the classes we created:
	const classes = useStyles();
	const history = useHistory();
	const { register, handleSubmit, getValues, errors, control } = useForm({
		mode: "onChange",
	});

	const { mutateAsync, isLoading } = useMutation(postNote);
	const onSubmit = async (values) => {
		console.log(values);
		await mutateAsync(values);
		history.push("/");
	};

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

			<form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className={classes.field}
					label="Note Title"
					color="secondary"
					variant="outlined"
					fullWidth
					required // adds * after label, no validation
					inputRef={register}
					name="title"
					error={errors.noteTitle} // if true adds red border
				/>

				<TextField
					className={classes.field}
					label="Details"
					color="secondary"
					variant="outlined"
					fullWidth
					required // adds * after label, no validation
					multiline
					rows={4}
					inputRef={register}
					name="details"
					error={errors.details} // if true adds red border
				/>
				<FormControl className={classes.field}>
					<FormLabel>Category</FormLabel>
					<Controller
						rules={{ required: true }}
						control={control}
						defaultValue="money"
						name="category"
						as={
							<RadioGroup>
								<FormControlLabel
									control={<Radio />}
									value="money"
									label="Money"
								/>
								<FormControlLabel
									control={<Radio />}
									value="todos"
									label="Todos"
								/>
								<FormControlLabel
									control={<Radio />}
									value="work"
									label="Work"
								/>
							</RadioGroup>
						}
					/>
				</FormControl>

				<Button
					className={classes.btn}
					type="submit"
					color="secondary"
					variant="contained"
					// startIcon={<SendIcon />}
					endIcon={<KeyboardArrowRightOutlinedIcon />}
				>
					Submit
				</Button>
			</form>

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
