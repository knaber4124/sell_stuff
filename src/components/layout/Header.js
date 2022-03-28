import './layout.css';
import React, { useState, useContext } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UsersContext from '../../context/users/usersContext';


// theme for MaterializeUI
const theme = createTheme({
    palette: {
        neutral: {
            main: '#00000',
        }
    }
})





const Header = () => {

    const usersContext = useContext(UsersContext);

    const { loggedIn, user, logOut } = usersContext;


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOutUser = () => {
        logOut();
        console.log('logged out');
    }




    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 5 }
        } className='header' >
            <item className='title'>Sell Stuff Point of Sale</item>
            <item>
                <ThemeProvider theme={theme}>
                    <Button id='menuButton' size='small' color='neutral' className='title'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >Menu
                    </Button>
                </ThemeProvider>
                {loggedIn ?
                    <Menu id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>

                        <MenuItem className='menuItem' component='a' href='/'>Home</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/pointofsale'>Point of Sale</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/reporting'>Sales Reporting</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/inventory'>Inventory Management</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/usermanagement'>User Management</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/' onClick={logOutUser}>Log Out</MenuItem>
                    </Menu>

                    :
                    <Menu id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>

                        <MenuItem className='menuItem' component='a' href='/'>Home</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/signup' >Sign Up For A New Account</MenuItem>
                        <MenuItem className='menuItem' component='a' href='/login'>Log In</MenuItem>

                    </Menu>
                }
            </item>
        </Box >

    )
}




export default Header;