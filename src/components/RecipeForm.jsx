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
        <form onSubmit={handleSubmit} className="recipe-form">
            <label htmlFor="recipeName">Nom de la Recette:</label>
            <input
                type="text"
                id="recipeName"
                name="recipeName"
                value={formData.recipeName}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="CategorieDeRecette">Categorie:</label>
            <input
                type="text"
                id="CategorieDeRecette"
                name="CategorieDeRecette"
                value={formData.CategorieDeRecette}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Difficulte">Difficulté:</label>
            <select
                id="Difficulte"
                name="Difficulte"
                value={formData.Difficulte}
                onChange={handleChange}
            >
                <option value="">Difficulté</option>
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
            </select>
            <br/><br/><label htmlFor="NbPersonnes">Nombre de Personnes:</label>
            <input
                type="number"
                id="NbPersonnes"
                name="NbPersonnes"
                value={formData.NbPersonnes}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Jour">Jour:</label>
            <input
                type="text"
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
            <textarea
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
            />
            <br/><br/><label htmlFor="Image">Image:</label>
            <input
                type="file"
                id="Image"
                name="Image"
                onChange={handleChange}
                className="upload-btn"
            />
            <br/><br/><button className="submit-btn" type="submit">Submit</button>
        </form>
    );
}

export default RecipeForm;
