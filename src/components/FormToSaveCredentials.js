import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function FormToSaveCredentials({ data: { handleSubmit, loading } }) {
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                label="Email Address"
                name="user"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="url"
                label="Url"
                type="url"
                id="url"
                autoComplete="url"
            />

            <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Guardar
            </LoadingButton>



        </Box>
    )
}
