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
        ingredients: [] // Ajout du tableau pour stocker les ingrédients
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const updatedIngredients = [...formData.ingredients];
        updatedIngredients[index][name] = value;
        setFormData({
            ...formData,
            ingredients: updatedIngredients
        });
    };

    const addIngredient = () => {
        setFormData({
            ...formData,
            ingredients: [...formData.ingredients, { name: '', quantity: '', unit: '' }]
        });
    };

    const removeIngredient = (index) => {
        const updatedIngredients = [...formData.ingredients];
        updatedIngredients.splice(index, 1);
        setFormData({
            ...formData,
            ingredients: updatedIngredients
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
            <br/><br/><label>Ingrédients:</label>
            {formData.ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom de l'ingrédient"
                        value={ingredient.name}
                        onChange={(e) => handleIngredientChange(e, index)}
                    />
                    <input
                        type="text"
                        name="quantity"
                        placeholder="Quantité"
                        value={ingredient.quantity}
                        onChange={(e) => handleIngredientChange(e, index)}
                    />
                    <input
                        type="text"
                        name="unit"
                        placeholder="Unité de mesure"
                        value={ingredient.unit}
                        onChange={(e) => handleIngredientChange(e, index)}
                    />
                    <button type="button" onClick={() => removeIngredient(index)}>Supprimer</button>
                </div>
            ))}
            <button type="button" className="submit-btn" onClick={addIngredient}>Ajouter Ingrédient</button>
            <br/><br/><button className="submit-btn" type="submit">Submit</button>
        </form>
    );
}

export default RecipeForm;
