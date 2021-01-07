import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllFoodCards from "../common/AllFoodCards";

function Shop() {
    const params = useParams();
    const [foodlist, setFoodlist] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:1337/dishes")
            .then(res => {
                let newFoodlist = [];
                if (params.id !== undefined)
                    newFoodlist = res.data.filter(food => food.category["Food_type"] === params.id);
                else newFoodlist = res.data;
                setFoodlist(() => [...newFoodlist]);
            })
            .catch(err => {
                setFoodlist([]);
                console.log(err);
            });
    }, [params.id]);
    return (
        <div style={{ marginTop: 70 }}>
            <AllFoodCards foodlist={foodlist} />
        </div>
    );
}

export default Shop;
