import { Route, Switch } from "wouter";
import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeDetail from "../views/RecipeDetail";
import NotFound from "../views/NotFound";
import RecipeForm from "../components/RecipeForm.jsx";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={NotFound} />
      <Route path="/recipes" component={RecipeList} />
      <Route path="/recipes/new" component={RecipeForm} />
      <Route path="/recipes/:id" component={RecipeDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}
