import React from 'react'
import sample from './assets/sample1.jpg'


{/* 
                        Heading: reci.recipe.label,
                        Ig: reci.recipe.image,
                        diet: reci.recipe.dietLabels,
                        detailedRecipe: reci.recipe.url,
                        Ingredients: reci.recipe.ingredientLines,



                        
*/}

const
    Card = ({ recipeData }) => {
        console.log('recipeDetails from card component', recipeData)
        return (
            <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '50rem', height: '18rem', backgroundColor: '#fde4c7', overflow: 'auto' }}>
                    <div>
                        <img src={recipeData.Ig} alt="errr" style={{ width: '20rem', height: "18rem" }}></img>
                    </div>
                    <div style={{ width: '100%', display: 'grid', textAlign: 'start', padding: '10px' }}>
                        {/* heading */}
                        <h3 style={{ color: '#a36041' }}>{recipeData.Heading}</h3>
                        <p><span style={{ fontWeight: 'bold' }}>Ingedients : </span>{
                            recipeData.Ingredients.map(dietlabel => (<p>{dietlabel}</p>))
                        }</p>
                        <label><span style={{ fontWeight: 'bold' }}>Health : </span> {recipeData.diet.map(dietlabel => (<p>{dietlabel}</p>))}</label>
                        <a href={recipeData.detailedRecipe}>
                            <button style={{
                                height: '2rem', width: '6rem', background: '#A36041', color: '#fde4c7', fontFamily: 'Dancing Script', fontSize: 'large'
                            }}
                            >View recipe</button>
                        </a>

                    </div>
                </div>
            </div>
        )
    }

export default Card



{/* <p>{recipeDetails.Heading}</p>


                {
                    recipeDetails.testLabels.map(item => <div>
                        <p>{item}</p>
                    </div>)
                } */}




