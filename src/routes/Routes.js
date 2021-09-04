import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { Home } from '../components/Home'
import { Favorite } from '../components/Favorite'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    exact
                    path="/favorite"
                    component={Favorite}
                />
            </Switch>
        </Router>
    )
}

export default Routes