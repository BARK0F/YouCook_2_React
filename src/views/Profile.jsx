import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import Badge from "../components/Badge";

export default function Profile() {
  const user = useContext(AuthContext);
  if (user === undefined) {
    return <p>fetch du user en cours</p>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4">Profil</h1>
      <div className="flex">
        <div className="w-1/2 flex justify-center">
          <div className="ml-5">
            <h4 className="text-1xl font-bold mt-4">
              Informations personnelles
            </h4>
            <div className="ml-5">
              <p>Nom : {user.lastname}</p>
              <p>Prénom : {user.firstname}</p>
              <p>Email : {user.email}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-5 flex justify-center">
          <div>
            <h4 className="text-1xl font-bold mt-4">Rôle(s) attribué(s)</h4>
            <div className="ml-5">
              {user.roles.map((role) => (
                <Badge key={user.roles.indexOf(role)}>{role}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
