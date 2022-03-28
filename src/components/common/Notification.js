import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {

		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Notification(props) {
	const classes = useStyles();
	const handleNotifyClose = () => {
		props.onClose();
	};

	return (
		<div className={classes.root}>
			{/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
			<Snackbar
				open={props.status}
				autoHideDuration={4000}
				onClose={handleNotifyClose}
			>
				<Alert className="incorrect" style={{width: 300}} onClose={handleNotifyClose} severity={props.type}>
					{props.successMessage}
				</Alert>
			</Snackbar>
		</div>
	);
}
