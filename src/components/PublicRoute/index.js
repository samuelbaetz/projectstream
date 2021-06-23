import {Route, Redirect} from 'react-router-dom'
import React from 'react'
function PublicRoute({component: Component, authenticated, ...rest}){
    return (
        <Route
        {...rest}
        render={(props) => authenticated === false
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/home', state: {from: props.location}}} />}
        />
    )
}

export default PublicRoute