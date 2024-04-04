import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../contexts/auth/AuthContext.js";
import { getLoginUrl } from "../services/api/auth.js";
import {createConstitute, fetchAllIngredients} from "../services/api/ingredient.js";
import {useLocation} from "wouter";
import {createRecipe, createStep} from "../services/api/recipes.js";

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
    const [selectedValues, setSelectedValues] = useState([])
    const [location, setLocation] = useLocation();

  const user = useContext(AuthContext);

  if (user === null) {
    window.location.href = getLoginUrl();
  }

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        fetchAllIngredients()
            .then((data) => {
                setIngredients(data['hydra:member'])
            });
    }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const formDataRecipe = new FormData();

    formDataRecipe.set('name', formData.recipeName)
    formDataRecipe.set('difficulty', formData.Difficulte)
    formDataRecipe.set('description', formData.Description)
    formDataRecipe.set('nbDay', formData.Jour)
    formDataRecipe.set('nbHour', formData.Heures)
    formDataRecipe.set('nbMinute', formData.Minutes);
    formDataRecipe.set('nbPeople', formData.NbPersonnes)

    const payloadRecipe = Object.fromEntries(formDataRecipe);

    ['nbDay', 'nbHour', 'nbMinute', 'nbPeople'].forEach((fieldNumber) => {
        payloadRecipe[fieldNumber] = parseInt(payloadRecipe[fieldNumber])
    })

      createRecipe(JSON.stringify(payloadRecipe))
          .then((recipeData) => {
              const formDataIngr = new FormData();

              formData.ingredients.map((ingredient, index) => {
                  formDataIngr.set('ingredient', `/api/ingredients/${selectedValues[index]['index']}`)
                  formDataIngr.set('quantity', parseInt(ingredient.quantity))
                  formDataIngr.set('measure', ingredient.unit)
                  formDataIngr.set('recipe', `/api/recipes/${recipeData.id}`)

                  const payload = Object.fromEntries(formDataIngr);

                  payload.quantity = parseInt(payload.quantity);

                  createConstitute(JSON.stringify(payload))
                      .then((constituteData) => {
                          console.log("constitute created ", constituteData.id)
                      })
              })

              const formDataStep = new FormData();

              formData.steps.map((step, index) => {
                  formDataStep.set('name', step.name)
                  formDataStep.set('description', step.duration)
                  formDataStep.set('recipe', `/api/recipes/${recipeData.id}`)

                  const payloadStep = JSON.stringify(Object.fromEntries(formDataStep));

                  createStep(payloadStep).then((dataStep) => console.log("Created step ", dataStep.id))
              })
          })


    // TODO: ingredients creation

    //createIngredient()
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
    setSelectedValues([
        ...selectedValues,
        {index: '1'}
    ])
  };

  const selectOnChange = (e, index) => {
    if (selectedValues.length <= index) {
        setSelectedValues([{index: '1'}])
        return
    }
    selectedValues[index]['index'] = e.target.value;
    setSelectedValues(selectedValues)

  }

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
    <form onSubmit={onSubmit} className="recipe-form">
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
            <select defaultValue={selectedValues[index]} name="name" onChange={(e) => selectOnChange(e, index)}>
                {ingredients.map(ingr => (
                    <option key={ingr.id} value={ingr.id}>{ingr.name}</option>
                ))}
            </select>
          <input
            type="number"
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
