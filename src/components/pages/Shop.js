import React from "react";
import { useParams } from "react-router-dom";
import AllFoodCards from "../common/AllFoodCards";

function Shop() {
    let params = useParams();
    console.log(params.id);
    return (
        <div style={{ marginTop: 70 }}>
            <AllFoodCards />
        </div>
    );
}

export default Shop;
