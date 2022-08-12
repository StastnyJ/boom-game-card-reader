import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { writeNfc } from "../Utils/nfc";
import { Avatar, Button, Container, TextField, Typography } from "@mui/material";
import { Sensors } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export default function InitCard() {
  const [scanning, setScanning] = useState(false);
  const [name, setName] = useState("");

  const nav = useNavigate();

  const write = () => {
    setScanning(true);
    writeNfc(
      name + ";0",
      () => {
        alert("success"); // TODO layout success
        setScanning(false);
        setName("");
      },
      () => {
        alert("error"); // TODO layout error
        setScanning(false);
      }
    );
  };

  return (
    <Container maxWidth="sm">
      {scanning ? (
        <>
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: blue[500], width: 156, height: 156 }}>
              <Sensors style={{ fontSize: "5rem" }} />
            </Avatar>
            <br />
            <br />
            <Typography variant="h6">Hold the card near the reader</Typography>
          </div>
          <Button
            style={{ position: "absolute", bottom: 16 }}
            onClick={() => (window.history.state && window.history.state.idx > 0 ? nav(-1) : nav("/", { replace: true }))}
          >
            Back
          </Button>
        </>
      ) : (
        <>
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TextField label="Holder name" fullWidth variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <Button variant="contained" disabled={name.length === 0} onClick={write}>
              Init card
            </Button>
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
