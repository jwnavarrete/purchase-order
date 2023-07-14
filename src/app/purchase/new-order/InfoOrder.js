'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography, TextField} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function InfoOrder() {
  return (
    <Box
      component="form"
      // noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">
            Facturar a:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            Comprar a:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Nombre"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Nombre"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Direccion"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Direccion"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Numero de contacto"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Numero de contacto"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            fullWidth
          />
        </Grid>

      </Grid>
    </Box>
  );
}