import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function HashComponent({ data: { transactionHash, handleBack } }) {
    return (
        <Box sx={{ mt: 1 }}>
            <div>
                <p>Hash de transacción: {transactionHash}</p>
            </div>

            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleBack}
            >
                {'< Regresar'}
            </Button>
        </Box>
    )
}
