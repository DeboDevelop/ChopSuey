import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Cart from "./components/pages/Cart";
import FoodDetail from "./components/pages/FoodDetail";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Shop from "./components/pages/Shop";
import { store } from "./redux/store";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#BC4639",
        },
        secondary: {
            main: "#D4A59A",
        },
        background: {
            paper: "#F3E0DC",
            default: "#5C2018",
        },
    },
});

function App() {
    return (
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="App">
                        <NavBar />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/shop">
                                <Shop />
                            </Route>
                            <Route exact path="/shop/:id">
                                <Shop />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/register">
                                <Register />
                            </Route>
                            <Route exact path="/food/:id">
                                <FoodDetail />
                            </Route>
                            <Route exact path="/cart">
                                <Cart />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </ThemeProvider>
            </Provider>
        </Router>
    );
}

export default App;
