import React from 'react'
import Button from '@mui/material/Button';

export default function ConnectWallet({ connectWalletHandler }) {
    return (
        <Button onClick={connectWalletHandler} variant="contained" fullWidth sx={{ mt: 5 }}
        >
            Conectar Billetera
        </Button>
    )
}
