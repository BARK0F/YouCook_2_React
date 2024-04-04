import FormField from "../components/molecule/FormField.jsx";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/auth/AuthContext.js";
import {getLoginUrl} from "../services/api/auth.js";
import {createTool, getToolCategories} from "../services/api/tool.js";
import {useLocation} from "wouter";

export default function ToolNewItem() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState('1');
  const [name, setName] = useState('');
  const [location, setLocation] = useLocation();
  const user = useContext(AuthContext);

  useEffect(() => {
    getToolCategories()
      .then(data => {
        setCategories(data['hydra:member'])
      });
  }, []);

  if (user === null) {
    window.location.href = getLoginUrl();
    return;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.set('name', name);
    formData.set('toolCategory', `/api/tool_categories/${selected}`);

    const payload = JSON.stringify(Object.fromEntries(formData));

    createTool(payload)
      .then((data) => {
        setLocation('/');
      });
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  const onSelect = (e) => {
    setSelected(e.target.value)
  }
  
  return (
    <div className="flex items-center justify-center flex-col" onSubmit={onSubmit}>
      <h1 className="text-3xl font-extrabold my-5">Création d'un outil</h1>
      <form method="POST" className="flex flex-col gap-5">
        <FormField label="Nom" placeholder="Nom de l'outil..." type="text" className="input input-bordered w-full max-w-xs" value={name} onChange={onChange} />

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Catégorie</span>
          </div>
          <select defaultValue={selected} onChange={onSelect} name="categories" id="categories" className="select select-bordered w-full max-w-xs">
            {categories.map((category) => {
              return (<option value={category.id} key={category.id}>{category.name}</option>)
            })}
          </select>
        </label>

        <button className="btn btn-secondary" disabled={loading}>Créer</button>
      </form>
    </div>

  )
}