import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import registerImage from "../../assets/img/registerImage.jpg";
import { registerUser } from "../../redux/dispatchers/registerUserDispatcher";

const useStyles = makeStyles(theme => ({
    formDiv: {
        padding: 5,
        margin: 10,
    },
    inpDiv: {
        marginTop: 5,
        marginBottom: 5,
    },
    paper: {
        padding: 30,
        width: 300,
        height: 470,
        marginBottom: 5,
        borderRadius: "0px 25px 25px 0px",
        [theme.breakpoints.down("xs")]: {
            borderRadius: "25px 0px 25px 0px",
            marginLeft: -100,
        },
    },
    img: {
        borderRadius: "25px 0px 0px 25px",
    },
    item: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

function Register() {
    const classes = useStyles();
    const [userInput, setUserInput] = useState(() => {
        return { username: "", email: "", password: "", password2: "" };
    });
    const handleEmail = value => {
        setUserInput(() => ({ ...userInput, email: value }));
    };
    const handlePassword = value => {
        setUserInput(() => ({ ...userInput, password: value }));
    };
    const handlePassword2 = value => {
        setUserInput(() => ({ ...userInput, password2: value }));
    };
    const handleUsername = value => {
        setUserInput(() => ({ ...userInput, username: value }));
    };
    const handleRegister = () => {
        if (userInput.password === userInput.password2) {
            dispatch(registerUser(userInput.username, userInput.email, userInput.password));
            setUserInput(() => ({ username: "", email: "", password: "", password2: "" }));
        } else {
            alert("Password doesn't match. Please re enter the values.");
            setUserInput(() => ({ ...userInput, password: "", password2: "" }));
        }
    };
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    if (user === "") {
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
                        <Grid container direction="row" spacing={0} alignItems="center" justify="center">
                            <Grid item xs={6} className={classes.item}>
                                <img src={registerImage} alt="Login Food" className={classes.img} />
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={0} className={classes.paper} square={true}>
                                    <Typography variant="h3">
                                        <Box fontWeight="fontWeightBold" textAlign="center" className={classes.inpDiv}>
                                            Register
                                        </Box>
                                    </Typography>
                                    <FormControl noValidate autoComplete="off">
                                        <TextField
                                            id="username"
                                            placeholder="username"
                                            label="Username"
                                            variant="outlined"
                                            className={classes.inpDiv}
                                            value={userInput.username}
                                            onChange={e => handleUsername(e.target.value)}
                                        />
                                        <TextField
                                            id="email"
                                            type="email"
                                            placeholder="user@example.com"
                                            label="Email"
                                            variant="outlined"
                                            className={classes.inpDiv}
                                            value={userInput.email}
                                            onChange={e => handleEmail(e.target.value)}
                                        />
                                        <TextField
                                            id="password"
                                            type="password"
                                            label="Password"
                                            variant="outlined"
                                            className={classes.inpDiv}
                                            value={userInput.password}
                                            onChange={e => handlePassword(e.target.value)}
                                        />
                                        <TextField
                                            id="password2"
                                            type="password"
                                            label="Confirm Password"
                                            variant="outlined"
                                            className={classes.inpDiv}
                                            value={userInput.password2}
                                            onChange={e => handlePassword2(e.target.value)}
                                        />
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.inpDiv}
                                            onClick={() => handleRegister()}>
                                            Register
                                        </Button>
                                        <Typography variant="body1">
                                            <Box
                                                fontWeight="fontWeightBold"
                                                textAlign="center"
                                                className={classes.inpDiv}>
                                                Already Have a Account? Login <Link to="/login">Here</Link>.
                                            </Box>
                                        </Typography>
                                    </FormControl>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
}

export default Register;
