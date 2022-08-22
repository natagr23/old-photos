import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ListItemAvatar, Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const cities = [
    {
      id: 1,
      name: 'Bogota',
      imageUrl: 'https://source.unsplash.com/1600x900/?bogota',
      go: '../pages/photoscol',
    },
    {
      id: 2,
      name: 'Medellin',
      imageUrl: 'https://source.unsplash.com/1600x900/?medellin',
      go: '../pages/account',
    },
    {
      id: 3,
      name: 'Villavicencio',
      imageUrl: 'https://source.unsplash.com/1600x900/?villavicencio',
      go: '../pages/photoscol',
    },
    {
      id: 4,
      name: 'Barranquilla',
      imageUrl: 'https://source.unsplash.com/1600x900/?barranquilla',
      go: '../pages/account',
    },
    {
      id: 5,
      name: 'Pasto',
      imageUrl: 'https://source.unsplash.com/1600x900/?pasto',
      go: '../pages/photoscol',
    },
    {
      id: 6,
      name: 'Buenaventura',
      imageUrl: 'https://source.unsplash.com/1600x900/?buenaventura',
      go: '../pages/account',
    },
    {
      id: 7,
      name: 'Ibague',
      imageUrl: 'https://source.unsplash.com/1600x900/?ibague',
      go: '../pages/photoscol',
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <IconButton
        color="secondary"
        size="small"
        component={Link}
        to={'/pages/index'}
      >
        <HomeIcon />
      </IconButton>
      <Toolbar
        sx={{
          background: 'rgb(255, 246, 241)',
        }}
      />

      <Divider />

      <List
        sx={{
          background: '#6b34a6',
        }}
      >
        {cities.map((city, i) => (
          <ListItem divider={i < cities.length - 1} key={city.id}>
            <ListItemButton
              component={Link}
              to={city.go}
              // onClick={city.go}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="5vh"
              maxWidth="50"
              sx={{
                background: 'rgb(255, 246, 241)',
                borderRadius: '4%',
                minHeight: 48,
                // justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemAvatar>
                <img
                  alt={city.name}
                  src={city.imageUrl}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: '25%',
                  }}
                />
              </ListItemAvatar>
              <ListItemText primary={city.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        background: 'rgb(255, 246, 241)',
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: '#6b34a6',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, background: '6b34a6' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Historical Photos from Colombia - Fotos Antiguas e Históricas de
            Colombia
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
