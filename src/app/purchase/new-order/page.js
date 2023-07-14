import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import Actions from './Actions'
import InfoOrder from './InfoOrder';
import SearchData from './SearchData';
import TableData from './TableData';

function NewOrder() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {/* CABECERA DEL CARD */}
        <CardHeader subheader="Nuevo pedido" />
        {/* CONTENIDO DE LA CARD */}
        <CardContent>
          <InfoOrder />
          <SearchData />
          <TableData />
        </CardContent>
        {/* SECCION DE ACCTIONS - PIE DE LA CARD */}
        <CardActions>
          <Actions />
        </CardActions>
      </Card>
    </Box >
  );
}

export default NewOrder