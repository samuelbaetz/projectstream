import React from 'react'
import { Typography, Paper, Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { signInWithGithub } from '../../services/auth';
import { signInWithTwitter } from '../../services/auth';
const useStyles = makeStyles((theme) => ({
    loginbox:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 50
    },
    margin:{
        margin: theme.spacing(1)
    },
    title:{
        marginBottom: 50,
        fontFamily: [
            'Pacifico',
            'cursive'
        ]
    }

}))
const Login = () => {
    const classes = useStyles()
    return (
        <div>
           <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
    <Typography variant="h2" className={classes.title}>
        blobbr
    </Typography>
        
        <Paper className={classes.loginbox} elevation={2} square={false}>
           
        <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GitHubIcon/>}
        className={classes.margin}
        onClick={signInWithGithub}
        >Sign In With GitHub</Button>
        <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={signInWithTwitter}
        startIcon={<TwitterIcon/>}
        className={classes.margin}
        >Sign In With Twitter</Button>
        </Paper>
        </Grid>
        </div>
    )
}

export default Login