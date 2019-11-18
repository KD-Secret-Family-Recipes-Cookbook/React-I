import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recipes = props => {
    return (
        <div className='recipe-list'>
            <form>
                <input type='text' name='name' placeholder='name'></input>
                <input type='text' name='category' placeholder='category'></input>
                <input type='text' name='source' placeholder='source'></input>
                <input type='text' name='ingredients' placeholder='ingredients'></input>
                <input type='text' name='instructions' placeholder='instructions'></input>
            </form>
        </div>
    )
}

export default Recipes;