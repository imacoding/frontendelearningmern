import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import LibraryIcon from '@material-ui/icons/LocalLibrary';
import Button from '@material-ui/core/Button';
import auth from './../auth/auth-helper'

const isActive = (currentPath, path) => {
  return currentPath === path ? { color: '#f57c00' } : { color: '#fffde7' };
};

const isPartActive = (currentPath, path) => {
  return currentPath.includes(path)
    ? { color: '#fffde7', backgroundColor: '#f57c00', marginRight: 10 }
    : { color: '#616161', backgroundColor: '#fffde7', border: '1px solid #f57c00', marginRight: 10 };
};

const Menu = () => {
  const location = useLocation();
 // const auth = useAuth();

  return (
    <AppBar position="fixed" style={{ zIndex: 12343455 }}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          MERN Classroom
        </Typography>
        <div>
          <NavLink exact to="/" activeClassName="active-link">
            <IconButton aria-label="Home" style={isActive(location.pathname, '/')}>
              <HomeIcon />
            </IconButton>
          </NavLink>
        </div>
        <div style={{ position: 'absolute', right: '10px' }}>
          <span style={{ float: 'right' }}>
            {!auth.isAuthenticated() && (
              <span>
                <Link to="/signup">
                  <Button style={isActive(location.pathname, '/signup')}>Sign up</Button>
                </Link>
                <Link to="/signin">
                  <Button style={isActive(location.pathname, '/signin')}>Sign In</Button>
                </Link>
              </span>
            )}
            {auth.isAuthenticated() && (
              <span>
                {auth.isAuthenticated().user.educator && (
                  <NavLink to="/teach/courses" activeClassName="active-link">
                    <Button style={isPartActive(location.pathname, '/teach/')}>
                      <LibraryIcon /> Teach
                    </Button>
                  </NavLink>
                )}
                <Link to={`/user/${auth.isAuthenticated().user._id}`}>
                  <Button style={isActive(location.pathname, `/user/${auth.isAuthenticated().user._id}`)}>
                    My Profile
                  </Button>
                </Link>
                <Button
                  color="inherit"
                  onClick={() => {
                    auth.clearJWT(() => window.location.href = '/')
                  }}
                >
                  Sign out
                </Button>
              </span>
            )}
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
