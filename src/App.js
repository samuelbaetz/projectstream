import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {auth} from './services/firebase'
import {setAuth} from './store/actions/auth'
function App(props) {
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user){
        props.onAuth(true)
        
      } else {
        props.onAuth(false)
      }
    })
    
  },[])
  return (
    <div className="App">
<Router>
  <Switch>
  <PrivateRoute path="/profile" authenticated={props.auth.authenticated} component={Profile}></PrivateRoute>
    <PrivateRoute path="/home" authenticated={props.auth.authenticated} component={Home}></PrivateRoute>
    <PublicRoute path="/" authenticated={props.auth.authenticated} component={Login}></PublicRoute>
  </Switch>
</Router>


    </div>
    
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (value) => dispatch(setAuth(value))  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
