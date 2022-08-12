import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";
import ChangeMoneyAmount from "./ChangeMoneyAmount";

interface IProps {
  mode: "add" | "subs";
}

export default function AddMoney({ mode }: IProps) {
  const [amount, setAmount] = useState(0);
  const [scanning, setScanning] = useState(false);

  const nav = useNavigate();

  return scanning ? (
    <ChangeMoneyAmount
      amount={mode === "add" ? amount : -1 * amount}
      onClose={() => {
        setScanning(false);
        setAmount(0);
      }}
    />
  ) : (
    <Container maxWidth="sm">
      <Button
        style={{ position: "absolute", top: 16, right: 16 }}
        onClick={() => (window.history.state && window.history.state.idx > 0 ? nav(-1) : nav("/", { replace: true }))}
      >
        Back
      </Button>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ height: "10vh" }}>&nbsp;</div>
        <Typography variant="h1">{amount}</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Grid container spacing={0}>
          {Array.from(new Array(9))
            .map((_, i) => i + 1)
            .map((num) => (
              <Grid
                xs={4}
                item
                key={num}
                style={{
                  borderLeft: num % 3 === 1 ? undefined : "1px solid grey",
                  borderBottom: "1px solid grey",
                  textAlign: "center",
                  height: "8vh",
                }}
              >
                <div
                  onClick={() => setAmount(amount * 10 + num)}
                  style={{ cursor: "pointer", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}
                >
                  <Typography variant="h4">{num}</Typography>
                </div>
              </Grid>
            ))}
          <Grid
            xs={4}
            item
            style={{
              textAlign: "center",
              height: "8vh",
            }}
          >
            <div
              onClick={() => setAmount(Math.floor(amount / 10))}
              style={{ cursor: "pointer", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}
            >
              <Typography variant="h4">{"<-"}</Typography>
            </div>
          </Grid>
          <Grid
            xs={4}
            item
            style={{
              borderLeft: "1px solid grey",
              textAlign: "center",
              height: "8vh",
            }}
          >
            <div
              onClick={() => setAmount(amount * 10)}
              style={{ cursor: "pointer", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}
            >
              <Typography variant="h4">0</Typography>
            </div>
          </Grid>
          <Grid
            xs={4}
            item
            style={{
              borderLeft: "1px solid grey",
              textAlign: "center",
              height: "8vh",
            }}
          >
            <div
              onClick={() => amount > 0 && setScanning(true)}
              style={{ cursor: "pointer", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}
            >
              <Typography variant="h4">{mode === "add" ? "ADD" : "SUB"}</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
