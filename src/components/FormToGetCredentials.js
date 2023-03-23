import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function FormToGetCredentials({ handleGetCredentials }) {
    return (
        <Box component="form" onSubmit={handleGetCredentials} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="url"
                label="Ingrese la URL"
                type="url"
                id="urlGot"
                autoComplete="url"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Obtener
            </Button>

        </Box>
    )
}
