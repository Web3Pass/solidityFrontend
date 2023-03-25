import React from 'react'
import FormToGetCredentials from "@components/FormToGetCredentials";
import FormToSaveCredentials from "@components/FormToSaveCredentials";

import HashComponent from "@components/HashComponent";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Accordions({ data: { credentials, transactionHash, loading, handleSubmit, handleGetCredentials, handleBack } }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: 900, typography: 'body1', height: 450 }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Guardar contraseña" value="1" />
                            <Tab label="Recuperar Contraseña" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {transactionHash ? (
                            <HashComponent data={{ transactionHash, handleBack }} />
                        ) : (
                            <FormToSaveCredentials
                                data={{ handleSubmit, loading }}
                            />
                        )}
                    </TabPanel>
                    <TabPanel value="2">
                        <FormToGetCredentials
                            data={{ handleGetCredentials, loading }}
                        />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    )
}
