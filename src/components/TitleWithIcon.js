import React from 'react'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function TitleWithIcon() {
    return (<Box sx={{
        marginBottom: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Password 3 Manager
        </Typography>
    </Box>

    )
}
