import React from 'react'
import { makeStyles,fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, ListItemIcon, Divider, Drawer,List,ListItem, ListItemText,ListSubheader} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { signOut } from '../../services/auth';
import {connect} from 'react-redux'
import {setTheUser} from '../../store/actions/auth'
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import {Link} from 'react-router-dom'
import GroupIcon from '@material-ui/icons/Group';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CategoryIcon from '@material-ui/icons/Category';
import Collapse from '@material-ui/core/Collapse';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow:1
    },
    search: {
        position: 'relative',
        display: 'flex',
        flexGrow: 5,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(4),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'secondary'
    },
    inputInput:{
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }

    },
    drawer: {
        width: 300,
        maxWidth: 360
    },
    linkLight: {
        color:'#212121',
        textDecoration: 'none'
    },
    subHeader:{
        color: '#212121',
        fontFamily: [
            'Pacifico',
            'cursive'
        ]
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },

}))

const Navigation = (props) => {
    const classes = useStyles()
    useEffect(() => {
        props.onUser()
    },[])
   const [anchorEl, setAnchorEl] = useState(null)
   const [openDrawer, setOpenDrawer] = useState(false)
   const [openCatagories, setOpenCatagories] = useState(true)
   const open = Boolean(anchorEl)
   const handleMenu = (e) => {
       setAnchorEl(e.currentTarget)
   }
   const handleMenuClose = () => {
       setAnchorEl(null)
   }
   const setDrawerOpen = () => {
       setOpenDrawer(true)
   }
   const setDrawerClose = () =>{
       setOpenDrawer(false)
   }
   const handleCatagories = () =>{
       setOpenCatagories(!open)
   }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    
                <IconButton edge="start" className={classes.menuButton} onClick={setDrawerOpen} color="secondary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
                   <div className={classes.searchIcon}>
                    <SearchIcon/>
                   </div>
                   <InputBase classes={{root: classes.inputRoot, input: classes.inputInput}} inputProps={{'aria-label': 'search'}}/>
                </div>
          <IconButton color="inherit">
              <Badge badgeContent={2} color="error">
                  <NotificationsIcon/>
              </Badge>
          </IconButton>
          <IconButton
          onClick={handleMenu}>
              <Avatar alt={props.auth.user.username} src={props.auth.user.avatar_url} />
          </IconButton>
          <Menu
          id="menu"
          anchorEl={anchorEl}
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
          }}
          open={open}
          onClose={handleMenuClose}>
              <Link
            className={classes.linkLight}
            to="/profile">
              <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                      <AccountCircleIcon/>
                  </ListItemIcon>
                  Profile
                  </MenuItem>
                  </Link>
                  <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                      <SettingsIcon/>
                  </ListItemIcon>
                  Settings
                  </MenuItem>
                  <Divider/>
              <MenuItem onClick={signOut}>
                  <ListItemIcon>
                      <ExitToAppIcon/>
                  </ListItemIcon>
                  Sign Out
                  </MenuItem>

          </Menu>
          <Drawer anchor="left" open={openDrawer} onClose={setDrawerClose}>
          <List className={classes.drawer} component="nav"
          subheader={
            <ListSubheader>
                <h1 className={classes.subHeader}>blobbr</h1>
            </ListSubheader>
          }
          >
          <Link
            className={classes.linkLight}
            to="/home">
            <ListItem button>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Home"></ListItemText>
            </ListItem>
            </Link>
            <ListItem button onClick={handleCatagories}>
          <ListItemIcon>
              <CategoryIcon/>
          </ListItemIcon>
          <ListItemText primary="Catagories"></ListItemText>
          {openCatagories ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={openCatagories} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                </List>
            </Collapse>
            <Link
            className={classes.linkLight}
            to="/discover">
            <ListItem button>
                <ListItemIcon><ExploreIcon/></ListItemIcon>
                <ListItemText primary="Discover"></ListItemText>
            </ListItem>
            </Link>
            <Link
            className={classes.linkLight}
            to="/collab">
            <ListItem button>
                <ListItemIcon><GroupIcon/></ListItemIcon>
                <ListItemText primary="Collaborate"></ListItemText>
            </ListItem>
            </Link>
          </List>
          </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
      loading: state.loading
    }
  }
const mapDispatchToProps = dispatch => {
    return {
      onUser: () => dispatch(setTheUser())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (Navigation)