import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffffff', // Set secondary color to white
    },
  },
});

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
        {['Home', 'FAQ', 'About', 'Contact'].map((text) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`} className="text-white text-lg">
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box className='navbar'>
        <div className='logo md:ml-20 '>
          <Link to="/" className="no-underline text-white">
            <img src={require('../Assets/yosa.png')} alt="Logo" className="h-20 relative -top-5" />
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
          <div className='navButtons px-4 py-2 mr-20'>
            <Button variant='text' size="large" component={Link} to="/" className="text-white text-lg" color='secondary'>
              Home
            </Button>
            <Button variant='text' size="large" component={Link} to="/faq" color='secondary' className="text-white text-lg">
              FAQ
            </Button>
            <Button variant='text' size="large" component={Link} to="/about" color='secondary' className="text-white text-lg">
              About
            </Button>
            <Button variant='text' size="large" component={Link} to="/contact" color='secondary' className="text-white text-lg">
              Contact
            </Button>
          </div>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
