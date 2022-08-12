import React from "react";
import { blue } from "@mui/material/colors";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <Container maxWidth="sm">
      {[
        [
          { name: "Školící centrum", link: "1" },
          { name: "Certifikační agentura", link: "2" },
          { name: "Underground base", link: "3" },
        ],
        [
          { name: "Elektro", link: "4" },
          { name: "Smíšené zboží", link: "5" },
          { name: "Chemoshop", link: "6" },
        ],
        [
          { name: "Nemocnice", link: "7" },
          { name: "Kostel", link: "8" },
        ],
      ].map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            width: "100%",
            color: "white",
          }}
        >
          {row.map(({ name, link }) => (
            <>
              <div
                key={link}
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
      ))}

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
