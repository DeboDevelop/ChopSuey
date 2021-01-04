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
    inpDiv: {
        marginTop: 5,
        marginBottom: 5,
    },
});

function Register() {
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
                    <Typography variant="h3">Register</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.formDiv}>
                        <FormControl noValidate autoComplete="off">
                            <TextField
                                id="username"
                                placeholder="username"
                                label="Username"
                                variant="outlined"
                                className={classes.inpDiv}
                            />
                            <TextField
                                id="email"
                                type="email"
                                placeholder="user@example.com"
                                label="Email"
                                variant="outlined"
                                className={classes.inpDiv}
                            />
                            <TextField
                                id="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                className={classes.inpDiv}
                            />
                            <TextField
                                id="password2"
                                type="password"
                                label="Confirm Password"
                                variant="outlined"
                                className={classes.inpDiv}
                            />
                            <Button variant="contained" color="secondary" className={classes.inpDiv}>
                                Register
                            </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Register;
