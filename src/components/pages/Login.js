import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
    formDiv: {
        padding: 5,
        margin: 10,
    },
});

function Login() {
    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}>
                <Grid item xs={12}>
                    <Typography variant="h3">Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.formDiv}>
                        <FormControl noValidate autoComplete="off">
                            <TextField id="email" placeholder="user@example.com" label="Email" variant="outlined" />
                            <TextField id="password" type="password" label="Password" variant="outlined" />
                            <Button variant="contained" color="secondary">
                                Login
                            </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
