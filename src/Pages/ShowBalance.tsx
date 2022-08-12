import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeNfcRecord, readNfc } from "../Utils/nfc";
import { Avatar, Button, Container, Typography } from "@mui/material";
import { Sensors } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export default function ShowBalance() {
  const [scanned, setScanned] = useState(false);
  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);

  const nav = useNavigate();

  useEffect(() => {
    if (!scanned) {
      readNfc(
        (message) => {
          const msgText = decodeNfcRecord(message.records[0]);
          if (msgText.indexOf(";") < 0) alert("Malformed card data: " + msgText);
          else {
            // TODO layout success
            setScanned(true);
            setName(msgText.split(";")[0]);
            setMoney(parseInt(msgText.split(";")[1]));
          }
        },
        () => alert("Error while reading card.") // TODO layout error
      );
    }
  }, [scanned]);

  return (
    <Container maxWidth="sm">
      {scanned ? (
        <>
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h1">{money}</Typography>
            <br />
            <br />
            <Typography variant="h4">{name}</Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              fullWidth
              onClick={() => (window.history.state && window.history.state.idx > 0 ? nav(-1) : nav("/", { replace: true }))}
            >
              RETURN
            </Button>
          </div>
        </>
      ) : (
        <>
          <Avatar sx={{ m: 1, bgcolor: blue[500], width: 156, height: 156 }}>
            <Sensors style={{ fontSize: "5rem" }} />
          </Avatar>
          <br />
          <br />
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6">Hold the card near the reader</Typography>
          </div>
          <Button
            style={{ position: "absolute", bottom: 16 }}
            onClick={() => (window.history.state && window.history.state.idx > 0 ? nav(-1) : nav("/", { replace: true }))}
          >
            Back
          </Button>
        </>
      )}
    </Container>
  );
}
