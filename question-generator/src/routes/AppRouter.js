import React , { Fragment}from "react";
import {BrowserRouter , Route,Switch } from  "react-router-dom";
import {questionPage} from '../components/questionPage';
import App from '../App';
class AppRouter extends React.Component {
 
    render() {
        return(
            <Fragment>
                <BrowserRouter>
                <Switch>
                    <Route path = "/" component= {App} exact={true}/>
                    <Route path = "/home" component = {questionPage}  />
                </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default AppRouter;