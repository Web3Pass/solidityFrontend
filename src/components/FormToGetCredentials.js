import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function FormToGetCredentials({ data: { loading, handleGetCredentials } }) {
    return (
        <Box component="form" onSubmit={handleGetCredentials} noValidate sx={{ mt: 1, width: 900, height: 450 }}>
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

            <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Obtener
            </LoadingButton>

        </Box>
    )
}
