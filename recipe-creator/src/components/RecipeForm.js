import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeForm = props => {
    const [recipe, setRecipe] = useState({name:'', category:'', source:'', ingredients:'', instructions:''})

    const handleChanges = event => {
        setRecipe({...recipe, [event.target.name]: event.target.value})
        // console.log(event.target.name);
    }

    useEffect(() => {
        setRecipe(props.recipeToEdit)
    }, [props.recipeToEdit])

    const submitForm = event => {
        event.preventDefault();
        // props.addNewRecipe(recipe);
        setRecipe({name:'', category:'', source:'', ingredients:'', instructions:''})
    }

    return (
        <div>
            <h1>Add Recipe</h1>
            <div className='form-wrapper'>
                <form onSubmit={submitForm}>
                    <input type='text' name='name' placeholder='name' onChange={handleChanges} ></input>
                    <input type='text' name='category' placeholder='category'></input>
                    <input type='text' name='source' placeholder='source'></input>
                    <input type='text' name='ingredients' placeholder='ingredients'></input>
                    <input type='text' name='instructions' placeholder='instructions'></input>
                    <button type='submit'>Add Recipe</button>
                </form>
            </div>
        </div>
    )
}


// function RecipeList() {
//     const [recipes, setRecipes] = useState([]);
//     const [input, setInput] = useState('');

//     useEffect(() => {
//         .get('')
//         .then(response => {
//             const searchRecipe = response.data.results.filter(rec => 
//                 rec.name.toLowerCase().includes(input.toLowerCase())
//             )
//             setRecipes(searchRecipe);
//         })
//         .catch(error => {
//             console.log('you have no idea what you are doing, do you?', error);
//         })
//     }, [input])

//     const handleInputChange = event => {
//         event.preventDefault();
//         setInput(event.target.value);
//     }

//     return (
//         <h1>TestList</h1>
//     )
// }

export default RecipeForm;