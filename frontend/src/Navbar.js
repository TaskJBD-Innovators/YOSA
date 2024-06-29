import React, { useState } from 'react'; // Import useState correctly
import './Navbar.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Causes', 'About', 'Contact'].map((text) => (
                    <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box className='navbar'>
            <div className='logo'>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={require('./Assets/yosa.png')} alt="Logo" style={{ height: '40px' }} />
                </Link>
            </div>
            {isSmallScreen ? (
                <>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {drawerContent}
                    </Drawer>
                </>
            ) : (
                <div className='navButtons'>
                    <Button variant='contained' size="medium" component={Link} to="/">
                        Home
                    </Button>
                    <Button size="medium" component={Link} to="/causes">
                        Causes
                    </Button>
                    <Button size="medium" component={Link} to="/about">
                        About
                    </Button>
                    <Button size="medium" component={Link} to="/contact">
                        Contact
                    </Button>
                </div>
            )}
        </Box>
    );
};

export default Navbar;
