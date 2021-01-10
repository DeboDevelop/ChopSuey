import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import AllFoodCards from "../common/AllFoodCards";

function Shop() {
    const params = useParams();
    const [foodlist, setFoodlist] = useState([]);
    const [loading, setLoading] = useState(true);
    TopBarProgress.config({
        barColors: {
            "1.0": "#4285F4",
        },
        shadowBlur: 5,
    });
    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:1337/dishes")
            .then(res => {
                let newFoodlist = [];
                if (params.id !== undefined)
                    newFoodlist = res.data.filter(food => food.category["Food_type"] === params.id);
                else newFoodlist = res.data;
                setFoodlist(() => [...newFoodlist]);
                setLoading(false);
            })
            .catch(err => {
                setFoodlist([]);
                setLoading(false);
                console.log(err);
            });
    }, [params.id]);
    return (
        <div style={{ marginTop: 70 }}>
            {loading && <TopBarProgress />}
            <AllFoodCards foodlist={foodlist} />
        </div>
    );
}

export default Shop;
