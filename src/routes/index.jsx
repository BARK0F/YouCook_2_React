import { Route, Switch } from "wouter";
import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeDetail from "../views/RecipeDetail";
import NotFound from "../views/NotFound";
import Profile from "../views/Profile";
import RecipeForm from "../components/RecipeForm";
import ToolNewItem from "../views/ToolNewItem";

export default function Routes() {
  return (
    <Switch>
      <Route path="/tools/new" component={ToolNewItem} />
      <Route path="/" component={RecipeList} />
      <Route path="/recipes/:id" component={RecipeDetail} />
      <Route path="/recipes/new" component={RecipeForm} />
      <Route path="/profile" component={Profile} />
      <Route path="/:id" component={NotFound} />
    </Switch>
  );
}
