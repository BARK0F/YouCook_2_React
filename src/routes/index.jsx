import { Route, Switch } from "wouter";
import React from "react";

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        component={() => <h1 className="text-red-500">Home</h1>}
      />
      /* Default | 404 Not found */
      <Route component={() => <h1>404 Not Found</h1>} />
    </Switch>
  );
}
