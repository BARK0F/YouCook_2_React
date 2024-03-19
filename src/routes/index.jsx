import { Route, Switch } from "wouter";

export default function Routes() {
  return (
    <Switch>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Route
        path="/"
        component={() => <h1 className="text-red-500">Home</h1>}
      />
      /* Default | 404 Not found */
      <Route component={() => <h1>404 Not Found</h1>} />
    </Switch>
  );
}
