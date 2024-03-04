import {Route, Switch} from "wouter";

export default function Routes() {
    return (
        <Switch>

            /* Default | 404 Not found */
            <Route component={() => <h1>404 Not Found</h1>} />
        </Switch>
    )
}