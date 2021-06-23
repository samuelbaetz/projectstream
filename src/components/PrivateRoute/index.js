import {Route, Redirect} from 'react-router-dom'
import React from 'react'
function PrivateRoute({component: Component, authenticated, ...rest}){
    return (
        <Route
        {...rest}
        render={(props) => authenticated === true
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
}

export default PrivateRoute