import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import FoodDetail from "./components/pages/FoodDetail";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Shop from "./components/pages/Shop";
import { store } from "./redux/store";

function App() {
    return (
        <Router>
            <Provider store={store}>
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
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
