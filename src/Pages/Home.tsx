import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <Container maxWidth="sm">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
          color: "white",
        }}
      >
        {[
          { name: "Školící centrum", link: "center" },
          { name: "Certifikační agentura", link: "center" },
          { name: "Underground base", link: "center" },
          { name: "Elektro", link: "center" },
          { name: "Smíšené zboží", link: "center" },
          { name: "Chemoshop", link: "center" },
          { name: "Nemocnice", link: "center" },
          { name: "Kostel", link: "center" },
        ].map(({ name, link }) => (
          <>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                width: "30%",
                margin: "3%",
                padding: "15%",
                boxSizing: "border-box",
                backgroundColor: blue[900],
                border: "1px solid blue",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {name}
            </div>
            <br />
          </>
        ))}
      </div>

      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/read")}>
        Read
      </div>
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/write")}>
        Write
      </div>
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/showBalance")}>
        Show balance
      </div>
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/init")}>
        Init card
      </div>
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/addMoney")}>
        Add money
      </div>
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/subsMoney")}>
        Subs money
      </div>
    </Container>
  );
}
