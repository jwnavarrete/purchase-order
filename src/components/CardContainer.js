import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActions, CardContent, CardHeader, Avatar, IconButton } from '@mui/material';
import { MdMoreHoriz } from "react-icons/md";
import Button from '@mui/material/Button';

function CardContainer({ title }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar aria-label="user-avatar">U</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MdMoreHoriz />
                        </IconButton>
                    }
                    title="Ejemplo de tarjeta"
                    subheader="Subtítulo de la tarjeta"
                />
                <CardContent>
                   ...
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More 2</Button>
                </CardActions>
            </Card>
        </Box >
    );
}

export default CardContainer