import {Link} from "wouter";
import {useContext} from "react";
import {AuthContext} from "../../contexts/auth/AuthContext.js";
import {getLoginUrl, getLogoutUrl} from "../../services/api/auth.js";
import RecipeForm from "../RecipeForm.jsx";

export default function UserButton() {
  const user = useContext(AuthContext);

  return (
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      {user && <li>
        <Link href="/profile">
          Profile
        </Link>
      </li>}
      <li>
        {user === null && <a href={getLoginUrl()}>Se connecter</a>}
        {user && <a href={getLogoutUrl()} className="bg-primary text-white">Se déconnecter</a>}
          {user && <Link href={"http://localhost:5173/recipes/new"} className="bg-secondary">Créer une recette  </Link>}
      </li>
    </ul>
  );
}