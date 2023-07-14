import React from 'react'
import { routes } from '@/routes'
import List from '@mui/material/List';
import Link from 'next/link';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

const Menu = () => {
    return (
        <List>
            {routes.map((item, index) => (
                <Link href={item.path} style={{ textDecoration: 'none', color: 'black' }} key={index}>
                    {/* <MenuItem selected={activeRoute(item.path, router.pathname)}> */}
                    <ListItem key={index}  >
                        <ListItemIcon> <item.icon size={25} /> </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                    {/* </MenuItem> */}
                </Link>
            ))}
        </List>
    )
}

export default Menu