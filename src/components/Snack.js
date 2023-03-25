import React, { useEffect } from 'react'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snack({ data: { snackMessage, severity, snackOpen, setSnackOpen } }) {

    const handleClose = () => {
        setSnackOpen(false);
    };

    return (
        < Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={snackOpen}
            autoHideDuration={2000}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {snackMessage}
            </Alert>
        </Snackbar>
    )
}
