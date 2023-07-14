"use client"
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header'
import Sidebar from './Sidebar'

const drawerWidth = 240;

export default function MainLayaout(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const router = useRouter();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const activeRoute = (routeName, currentRoute) => {
        return routeName === currentRoute ? true : false;
    }

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

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Header
                open={open}
                drawerWidth={drawerWidth}
                handleDrawerOpen={handleDrawerOpen}
            />

            <Sidebar
                open={open}
                drawerWidth={drawerWidth}
                handleDrawerClose={handleDrawerClose}
            />

            <Main open={open}>
                <DrawerHeader />
                {/* maxWidth="xl" */}
                <Container>
                    {props.children}
                </Container>
            </Main>
        </Box>
    );
}