import { Check } from "@mui/icons-material";
import { Avatar, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { decodeNfcRecord, readNfc, writeNfc } from "../Utils/nfc";

interface IProps {
  amount: number;
  onClose: () => void;
}

type Status = "init" | "scanned" | "finished" | "error";

export default function ChangeMoneyAmount({ amount, onClose }: IProps) {
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("init"); // TODO change to init

  useEffect(() => {
    if (status === "init") {
      readNfc(
        (message) => {
          const msgText = decodeNfcRecord(message.records[0]);
          if (msgText.indexOf(";") < 0) alert("Malformed card data: " + msgText); // TODO layout error
          else {
            const b = parseInt(msgText.split(";")[1]) + amount;
            if (b < 0) {
              alert("Error - low account balance"); // TODO layout
              setStatus("error");
            } else {
              // TODO layout success
              setBalance(b);
              setName(msgText.split(";")[0]);
              setStatus("scanned");
            }
          }
        },
        () => {
          alert("Error"); // TODO
        }
      );
    }
    if (status === "scanned") {
      writeNfc(
        `${name};${balance}`,
        () => {
          setStatus("finished");
          setName("");
        },
        () => {
          alert("error"); // TODO layout error
          setStatus("error");
        }
      );
    }
    //eslint-disable-next-line
  }, [status]);

  return (
    <Container maxWidth="sm">
      {status === "init" ? (
        <>
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6">Hold the card near the reader</Typography>
          </div>
          <Button style={{ position: "absolute", bottom: 16 }} onClick={onClose}>
            Back
          </Button>
        </>
      ) : status === "scanned" ? (
        <>
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6">Hold the card near the reader</Typography>
            <Typography>Current balance scanned, updating...</Typography>
          </div>
          <Button style={{ position: "absolute", bottom: 16 }} onClick={onClose}>
            Back
          </Button>
        </>
      ) : status === "finished" ? (
        <>
          <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <Check />
            </Avatar>
            <Typography variant="h1">{balance}</Typography>
            <br />
            <br />
            <Typography variant="h4">{name}</Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button variant="contained" fullWidth onClick={onClose}>
              RETURN
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
