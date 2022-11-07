import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import './components/css/bootstrap.min.css';
import './components/css/swiper-bundle.css';
import './components/css/custom-animation.css';
import './components/css/main.css';

import Home from './pages/Index';
import About from './pages/About';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Wizard from './pages/Wizard';
import Test from './pages/Test';
import Notfound from './pages/404';
import Welcome from './pages/Welcome';
import Thankyou from './pages/Thankyou';
import updatePass from './pages/UpdatePass';
import Settings from './pages/Settings';
import ForgetPass from './pages/ForgetPass'
import ResetPass from './pages/ResetPass'
import ResetSuccess from './pages/ResetSuccess';
import Tos from './pages/Tos.jsx'
import Privacy from './pages/Privacy'
// import uDashboard from './pages/Udashboard';
import ChangePass from './pages/ChangePass';
import uProfile from './pages/UProfile';
import AppStatus from './pages/AppStatus'
import UpdateAppStatus from './pages/AppstatusUpdate'

import CheckWizard from './pages/MerchantTestWizard'
import formSuccess from './pages/MerchantSubmitted'
import CrmDashboard from "./pages/CrmDashboard";
import BO from './pages/BusinessOwners'
import Globe from './pages/ReactGlobes'
import ClientDashboard from './pages/client_dashboard/Dashboard_client'
import Change_request from './pages/client_dashboard/Change_req'
import TestAccount from './pages/client_dashboard/Test_account'

class App extends Component {

  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot" component={ForgetPass} />
        <Route exact path="/resetPass" component={ResetPass} />
        <Route exact path="/reset_success" component={ResetSuccess} />
        <Route exact path="/chngPass" component={ChangePass} />
        <Route exact path="/tos" component={Tos} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/wizard_1" component={Wizard} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/home" component={Welcome} />
        <Route exact path="/thankyou" component={Thankyou} />
        <Route exact path="/updatePass" component={updatePass} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/dashboard" component={ClientDashboard} />
        <Route exact path="/change_request" component={Change_request} />
        <Route exact path="/test_acc" component={TestAccount} />
        <Route exact path="/profile" component= {uProfile} />
        <Route exact path="/app_status" component= {AppStatus} />
        <Route exact path="/app_update" component= {UpdateAppStatus} />
        <Route exact path="/check_wizard" component={CheckWizard} />
        <Route exact path="/wizard_success" component={formSuccess} />
        <Route exact path="/businessOwn" component={BO} />
        <Route exact path="/crm" component={CrmDashboard} />
        <Route exact path="/globe" component={Globe} />
        {/* <Route exact path="/newDashboard" component={ClientDashboard} /> */}

        <Route path="/" component={Notfound} />
      </Switch>
    </Router>
  }

}
export default App;
