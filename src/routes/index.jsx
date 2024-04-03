import { Route, Switch } from "wouter";
import ToolNewItem from "../views/ToolNewItem.jsx";

export default function Routes() {
  return (
    <Switch>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Route
        path="/"
        component={() => <h1>Home</h1>}
      />

      <Route
        path="/tools/new"
        component={ToolNewItem}
      />
      /* Default | 404 Not found */
      <Route component={() => <h1>404 Not Found</h1>} />
    </Switch>
  );
}
