import { Route, Switch } from "wouter";
import ToolNewItem from "../views/ToolNewItem.jsx";
import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeDetail from "../views/RecipeDetail";
import NotFound from "../views/NotFound";

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
      <Route path="/" component={NotFound} />
      <Route path="/recipes" component={RecipeList} />
      <Route path="/recipes/:id" component={RecipeDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}
