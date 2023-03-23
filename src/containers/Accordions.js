import React from 'react'
import FormToGetCredentials from "@components/FormToGetCredentials";
import FormToSaveCredentials from "@components/FormToSaveCredentials";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import HashComponent from "@components/HashComponent";

export default function Accordions({ data: { credentials, transactionHash, handleSubmit, handleGetCredentials } }) {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Guardar contraseña</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {transactionHash ? (
                        <HashComponent data={{ transactionHash, handleBack }} />
                    ) : (
                        <FormToSaveCredentials
                            data={{ credentials, handleSubmit }}
                        />
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Recuperar Contraseña</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormToGetCredentials
                        handleGetCredentials={handleGetCredentials}
                    />
                </AccordionDetails>
            </Accordion>
        </>
    )
}
