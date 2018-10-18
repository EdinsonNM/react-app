import React from 'react';
import { AppBar, IconButton, Typography, Button, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const Header = ({title}) => (
    <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
);
export default Header;