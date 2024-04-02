import React, { useState } from 'react';

function RecipeForm() {
    const [formData, setFormData] = useState({
        recipeName: '',
        CategorieDeRecette: '',
        Difficulte: '',
        NbPersonnes: '',
        Jour: '',
        Heures: '',
        Minutes: '',
        Description: '',
        Image: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Ici, vous pouvez envoyer les données à votre backend ou effectuer toute autre action nécessaire
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="recipeName">RecipeName:</label>
            <input
                type="text"
                id="recipeName"
                name="recipeName"
                value={formData.recipeName}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="CategorieDeRecette">CategorieDeRecette:</label>
            <input
                type="text"
                id="CategorieDeRecette"
                name="CategorieDeRecette"
                value={formData.CategorieDeRecette}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Difficulte">Difficulte:</label>
            <input
                type="text"
                id="Difficulte"
                name="Difficulte"
                value={formData.Difficulte}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="NbPersonnes">NbPersonnes:</label>
            <input
                type="number"
                id="NbPersonnes"
                name="NbPersonnes"
                value={formData.NbPersonnes}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Jour">Jour:</label>
            <input
                type="Jour"
                id="Jour"
                name="Jour"
                value={formData.Jour}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Heures">Heures:</label>
            <input
                type="number"
                id="Heures"
                name="Heures"
                value={formData.Heures}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Minutes">Minutes:</label>
            <input
                type="number"
                id="Minutes"
                name="Minutes"
                value={formData.Minutes}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Description">Description:</label>
            <input
                type="number"
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
            />
            <br/><br/><label  htmlFor="Image">Image:</label>
            <input
                type="image"
                id="Image"
                name="Image"
                value={formData.Image}
                onChange={handleChange}
                className={"chanpForm"}
              alt={"inserer image"}/>
            <br/><br/><button className="btn bouton" type="submit">Submit</button>
        </form>
    );
}

export default RecipeForm;
