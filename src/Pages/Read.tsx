import React from "react";
import { useNavigate } from "react-router-dom";
import Nfc from "nfc-react-web";

export default function Read() {
  const nav = useNavigate();

  return (
    <>
      <h1>Reading...</h1>
      <br />
      <Nfc
        read={(data: any) => {
          alert(`Data read from tag: ${JSON.stringify(data)}`);
        }}
        timeout={60}
      />
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/")}>
        Back
      </div>
    </>
  );
}
