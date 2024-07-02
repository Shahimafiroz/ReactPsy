import React from "react";
import sample from "./assets/sample1.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";

function MostImp() {
    // const [rawRecies, setRawRecies] = useState();
    const [finalRecies, setFinalRecies] = useState([]);
    const [dish, setDish] = useState("");

    const keepDish = (e) => {
        setDish(e.target.value);
    };

    const search = () => {
        // console.log('button was clicked', dish)
        axios
            .get(
                `https://api.edamam.com/search?q=${dish}&app_id=8ab14eb9&app_key=4ac283b2ad4d0a72799ec2980ed2b3b2`
            )
            .then((res) => {
                let finaleResponse = res.data.hits.map((reci) => ({
                    Heading: reci.recipe.label,
                    Ig: reci.recipe.image,
                    diet: reci.recipe.dietLabels,
                    detailedRecipe: reci.recipe.url,
                    Ingredients: reci.recipe.ingredientLines,
                }));
                setFinalRecies(finaleResponse);
                console.log(finalRecies);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // console.log(dish)
    return (
        <div
            style={{
                fontFamily: "Mate",
                margin: "8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",

            }}
        >
            {/* the top heading */}
            <div>
                <p
                    style={{ fontSize: "xx-large", fontWeight: "bold", color: "#345222" }}
                >
                    {" "}
                    Most Popular Recipes{" "}
                </p>
                <p style={{ fontSize: "xxx-large", color: "#A36041" }}>~</p>
            </div>
            {/* end */}

            <Search buttonHandler={search} searchValue={dish} keepDish={keepDish} />

            <div>
                {finalRecies.map((item) => (
                    <Card recipeData={item} />
                ))}
            </div>
        </div>
    );
}

export default MostImp;

// let updatedResponse = res.data.hits.map(item => ({
//     label: item.recipe.label,
//     testLabels: item.recipe.healthLabels
// }))
// setFinalRecies(updatedResponse)

// setRawRecies(res.data.hits)
// console.log(rawRecies)
