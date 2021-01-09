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
import loginImage from "../../assets/img/loginImage.jpg";
import { loginUser } from "../../redux/dispatchers/loginUserDispatcher";

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
        height: 350,
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

function Login() {
    const [userInput, setUserInput] = useState(() => {
        return { email: "", password: "" };
    });
    const handleEmail = value => {
        setUserInput(() => ({ ...userInput, email: value }));
    };
    const handlePassword = value => {
        setUserInput(() => ({ ...userInput, password: value }));
    };
    const handleLogin = () => {
        dispatch(loginUser(userInput.email, userInput.password));
        setUserInput(() => ({ email: "", password: "" }));
    };
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const classes = useStyles();

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
                                <img src={loginImage} alt="Login Food" className={classes.img} />
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={0} className={classes.paper} square={true}>
                                    <Typography variant="h3">
                                        <Box fontWeight="fontWeightBold" textAlign="center" className={classes.inpDiv}>
                                            Login
                                        </Box>
                                    </Typography>
                                    <FormControl noValidate autoComplete="off">
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
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.inpDiv}
                                            onClick={() => handleLogin()}>
                                            Login
                                        </Button>
                                        <Typography variant="body1">
                                            <Box
                                                fontWeight="fontWeightBold"
                                                textAlign="center"
                                                className={classes.inpDiv}>
                                                Don't Have a Account? Create One <Link to="/register">Here</Link>.
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

export default Login;
