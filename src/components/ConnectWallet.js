import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';

export default function ConnectWallet({ data: { loading, connectWalletHandler } }) {
    return (
        <LoadingButton
            loading={loading} onClick={connectWalletHandler} fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Conectar Billetera
        </LoadingButton>
    )
}
