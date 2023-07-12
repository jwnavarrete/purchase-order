import React from 'react';
import clsx from 'clsx';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import ListItemButton from '@mui/material/ListItemButton';

// import { useTheme } from '@mui/material/styles';

// import { ThemeProvider } from '@mui/material/styles';
// import { makeStyles, useTheme } from '@mui/styles';

// import { makeStyles, useTheme, createTheme } from '@mui/styles';
// import {makeStyles, useTheme, createTheme } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { FaBeer } from 'react-icons/fa';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdHome, MdAddBusiness, MdOutlineChecklistRtl } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router'

import Container from '@mui/material/Container';
const drawerWidth = 240;

export default function PersistentDrawerLeft(props) {
  // const classes = useStyles();
  const classes = null;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const activeRoute = (routeName, currentRoute) => {
    return routeName === currentRoute ? true : false;
  }

  const routes = [
    {
      id: 1,
      label: 'Inicio',
      path: '/',
      icon: MdHome
    },
    {
      id: 2,
      label: 'Nueva Orden',
      path: '/purchase/new-order',
      icon: MdAddBusiness
    },
    {
      id: 2,
      label: 'Consultar Orden',
      path: '/purchase/list-order',
      icon: MdOutlineChecklistRtl
    },
    // {
    //   id: 2,
    //   label: 'Login',
    //   path: '/login',
    //   icon: LoginIcon
    // },
    // {
    //   id: 3,
    //   label: 'Register',
    //   path: '/register',
    //   icon: RegisterIcon
    // }
  ]

  const drawerWidth = 240;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <FaBeer />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <FaBeer /> : <FaBeer />}
          </IconButton>
        </DrawerHeader>
        <List>
          {routes.map((item, index) => (
            <Link href={item.path} style={{ textDecoration: 'none', color: 'black' }} key={index}>
              <MenuItem selected={activeRoute(item.path, router.pathname)}>
                <ListItem button key={index}  >
                  <ListItemIcon> <item.icon /> </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </MenuItem>
            </Link>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <FaBeer /> : <FaBeer />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Container maxWidth="xl">
          {props.mainPage}
        </Container>
      </Main>
    </Box>
  );
}