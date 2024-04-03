import {AuthContext} from "./AuthContext.js";
import {useEffect, useState} from "react";
import {fetchUser} from "../../services/api/auth.js";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetchUser()
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        setUser(null);
      })
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}