import React from 'react'
import Navigation from '../../components/Nav'
import { Paper, Container,Avatar, Typography } from '@material-ui/core'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        padding: 30
      },
      profileInfo:{
          display: "flex"
      },
      fullName:{
          marginTop: 50
      }
}))

const Profile = (props) => {
    const classes = useStyles()
    return(
        <div>
        <Navigation/>
        <Container>
        <Paper elevation={3}>
            <div className={classes.profileInfo}>
        <Avatar className={classes.large} alt={props.auth.user.username} src={props.auth.user.avatar_url} />
        <Typography className={classes.fullName} variant="h2">{props.auth.user.full_name}</Typography>
        
        </div>
        </Paper>
        </Container>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      auth: state.auth,
      loading: state.loading
    }
  }

export default connect(mapStateToProps)(Profile)