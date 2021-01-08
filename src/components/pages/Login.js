import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/dispatchers/loginUserDispatcher";

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

const handleAxios = async user => {
    try {
        let res = await axios.get("http://localhost:1337/users/me", {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        });
        console.log("res" + res);
        if (res.status === 200) return 1;
        else return 0;
    } catch (err) {
        console.log(err);
        return 0;
    }
};

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
    let history = useHistory();
    const user = useSelector(state => state.login.user);
    const dispatch = useDispatch();
    const classes = useStyles();
    if (typeof user === "string") {
        console.log("user " + user);
        if (handleAxios(user) === 1) {
            console.log("Hoorey");
            history.push("/someRoute");
        } else console.log("NOOOOOOO!!!!");
    }
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
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
