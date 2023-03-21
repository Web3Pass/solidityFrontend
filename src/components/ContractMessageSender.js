import React, { useState } from "react";
import ABI from '@components/abi.json'
import { Container, TextField, Grid } from '@mui/material';

const ContractMessageSender = () => {
    const [message, setMessage] = useState("");
    const [transactionHash, setTransactionHash] = useState("");

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendClick = async () => {
        if (!window.ethereum) {
            console.error("No se encontró la billetera Ethereum.");
            return;
        }

        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            const contractAddress = "0x1234567890123456789012345678901234567890"; // dirección del contrato
            const contract = new web3.eth.Contract(ABI, contractAddress);
            const accounts = await web3.eth.getAccounts();
            const response = await contract.methods.save_pair({
                user, password
            }).send({
                from: accounts[0],
            });
            setTransactionHash(response.transactionHash);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <h2>Password 3 Manager</h2>
                <div>
                    <TextField
                        multiline
                        label="Url"
                        placeholder="facebook.com/login"
                    />
                    <TextField
                        multiline
                        label="User"
                        placeholder="hello@mail.com"
                    />
                    <TextField
                        multiline
                        label="Password"
                    />
                </div>
                <label>
                    Mensaje:
                    <input type="text" value={message} onChange={handleInputChange} />
                </label>
                <br />
                <button onClick={handleSendClick}>Enviar mensaje</button>
                <br />
                {transactionHash && (
                    <div>
                        <p>Hash de transacción: {transactionHash}</p>
                    </div>
                )}
            </Grid>


        </Container>
    );
};

export default ContractMessageSender;
