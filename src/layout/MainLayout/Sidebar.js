import React from 'react'
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image'
import Logo from '@/static/images/dires2-1.png'
import {IconButton, Divider} from '@mui/material';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Menu from './Menu'

const Index = ({ open, drawerWidth, handleDrawerClose }) => {
    const theme = useTheme();

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
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
                <Image
                    src={Logo}
                    width={180}
                    height={50}
                    alt="Logo de la empresa"
                />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
                </IconButton>
            </DrawerHeader>

            <Menu />

            <Divider />
        </Drawer>
    )
}

export default Index