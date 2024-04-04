import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth/AuthContext.js";
import { getLoginUrl } from "../services/api/auth.js";
import { createIngredient } from "../services/api/ingredient.js";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipeName: "",
    CategorieDeRecette: "",
    Difficulte: "",
    NbPersonnes: "",
    Jour: "",
    Heures: "",
    Minutes: "",
    Description: "",
    ingredients: [], // Ajout du tableau pour stocker les ingrédients
    steps: [],
  });

  const user = useContext(AuthContext);

  if (user === null) {
    window.location.href = getLoginUrl();
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: ingredients creation

    const formDataIngr = new FormData();

    formData.ingredients.map((ingrdient) => {
      formDataIngr.set('name', )
    })

    createIngredient()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][name] = value;
    setFormData({
      ...formData,
      ingredients: updatedIngredients,
    });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [
        ...formData.ingredients,
        { name: "", quantity: "", unit: "" },
      ],
    });
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients.splice(index, 1);
    setFormData({
      ...formData,
      ingredients: updatedIngredients,
    });
  };

  const handleStepChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSteps = [...formData.steps];
    updatedSteps[index][name] = value;
    setFormData({
      ...formData,
      steps: updatedSteps,
    });
  };

  const addStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, { name: "", description: "" }],
    });
  };

  const removeStep = (index) => {
    const updatedSteps = [...formData.steps];
    updatedSteps.splice(index, 1);
    setFormData({
      ...formData,
      steps: updatedSteps,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      <br />
      <br />
      <label htmlFor="CategorieDeRecette">Categorie:</label>
      <input
        type="text"
        id="CategorieDeRecette"
        name="CategorieDeRecette"
        value={formData.CategorieDeRecette}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="Difficulte">Difficulté:</label>
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
      <br />
      <br />
      <label htmlFor="NbPersonnes">Nombre de Personnes:</label>
      <input
        type="number"
        id="NbPersonnes"
        name="NbPersonnes"
        value={formData.NbPersonnes}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="Jour">Jour:</label>
      <input
        type="text"
        id="Jour"
        name="Jour"
        value={formData.Jour}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="Heures">Heures:</label>
      <input
        type="number"
        id="Heures"
        name="Heures"
        value={formData.Heures}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="Minutes">Minutes:</label>
      <input
        type="number"
        id="Minutes"
        name="Minutes"
        value={formData.Minutes}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="Description">Description:</label>
      <textarea
        id="Description"
        name="Description"
        value={formData.Description}
        onChange={handleChange}
      />
      <br />
      <br />
      <label>Ingrédients:</label>
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
          <button
            type="button"
            className="delete-btn"
            onClick={() => removeIngredient(index)}
          >
            Supprimer
          </button>
        </div>
      ))}
      <button type="button" className="append-btn" onClick={addIngredient}>
        Ajouter Ingrédient
      </button>
      <label>Étapes:</label>
      {formData.steps.map((step, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Nom de l'étape"
            value={step.name}
            onChange={(e) => handleStepChange(e, index)}
          />
          <textarea
            name="duration"
            placeholder="Description"
            value={step.duration}
            onChange={(e) => handleStepChange(e, index)}
          />
          <button
            type="button"
            className="delete-btn"
            onClick={() => removeStep(index)}
          >
            Supprimer
          </button>
        </div>
      ))}
      <button type="button" className="append-btn" onClick={addStep}>
        Ajouter Étape
      </button>

      <br />
      <br />
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default RecipeForm;
