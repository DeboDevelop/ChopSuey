import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../redux/dispatchers/registerUserDispatcher";

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
    const [userInput, setUserInput] = useState(() => {
        return { username: "", email: "", password: "", password2: "" };
    });
    const [token, setToken] = useState("");
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
    const handleAxios = async user => {
        try {
            let res = await axios.get("http://localhost:1337/users/me", {
                headers: {
                    Authorization: `Bearer ${user}`,
                },
            });
            if (res.status === 200) {
                setToken(user);
            } else {
                setToken("");
            }
        } catch (err) {
            console.log(err);
            setToken("");
        }
    };
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user !== "") {
            handleAxios(user);
        }
    }, [user]);
    if (token === "") {
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
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
}

export default Register;
