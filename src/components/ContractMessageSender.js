import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";;
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormToSaveCredentials from "@components/FormToSaveCredentials";
import FormToGetCredentials from "@components/FormToGetCredentials";
import ConnectWallet from "@components/ConnectWallet";
import HashComponent from "@components/HashComponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Web3 from "web3";
import contract from "@components/contracts/Pass3Messenger.json";
const { abi } = contract;

const ContractMessageSender = () => {
    const contractAddress = "0xf5d8bbA9C48D6B9Ba37C838e902D2232516445Fa"; // dirección del contrato
    const [transactionHash, setTransactionHash] = useState("");
    const [walletConnected, setwalletConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [credentials, setCredentials] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const handleBack = () => {
        setTransactionHash("");
    };

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            setwalletConnected(false);
            return;
        } else {
            setwalletConnected(true);
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            setCurrentAccount(account);
            setwalletConnected(true);
        } else {
            setSnackOpen(true)
            setSnackMessage("No encontré una cuenta autorizada")
        }
    };

    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            setSnackOpen(true)
            setSnackMessage("Instale Metamask!")
        }

        try {
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
            setwalletConnected(true);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!window.ethereum) {
            console.error("No se encontró la billetera Ethereum.");
            return;
        }

        const formData = new FormData(event.currentTarget);
        const { user, password, url } = Object.fromEntries(formData);
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        try {
            await window.ethereum.enable();

            const response = await contract.methods
                .save_pair([user, password], url)
                .send({
                    from: currentAccount,
                });
            setTransactionHash(response.transactionHash);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetCredentials = (event) => {
        event.preventDefault();

        if (!window.ethereum) {
            console.error("No se encontró la billetera Ethereum.");
            return;
        }
        try {
            const formData = new FormData(event.currentTarget);
            const { url } = Object.fromEntries(formData);
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(abi, contractAddress);

            contract.methods
                .get_creds(url)
                .call({ from: currentAccount })
                .then((resp) => {
                    setCredentials(resp);
                });
        } catch (error) {
            setSnackOpen(true)
            setSnackMessage(error)
        }
    };

    useEffect(() => {
        checkWalletIsConnected();
    }, []);

    return (
        <Container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "100vh" }}
            >
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Password 3 Manager
                    </Typography>
                    {walletConnected ? (
                        transactionHash ? (
                            <HashComponent data={{ transactionHash, handleBack }} />
                        ) : (
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
                                        <FormToSaveCredentials
                                            data={{ credentials, handleSubmit }}
                                        />
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
                    ) : (
                        <ConnectWallet connectWalletHandler={connectWalletHandler} />
                    )}
                </Box>
            </Grid>

            < Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }
                }
                open={snackOpen}
                message={snackMessage}
            />
        </Container>
    );
};

export default ContractMessageSender;
