import React from "react";
import { useNavigate } from "react-router-dom";
// import Nfc from "nfc-react-web";

export default function Read() {
  const nav = useNavigate();

  const read = async () => {
    alert("User clicked scan button");

    try {
      // @ts-ignore
      const ndef = new NDEFReader();
      await ndef.scan();
      alert("> Scan started");

      ndef.addEventListener("readingerror", () => {
        alert("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      ndef.addEventListener("reading", ({ message, serialNumber }: any) => {
        alert(`> Serial Number: ${serialNumber}`);
        alert(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      alert("Argh! " + error);
    }
  };

  return (
    <>
      <h1>Reading...</h1>
      <br />
      <div style={{ backgroundColor: "blue", width: "100%", height: 64 }} onClick={() => read()}>
        READ
      </div>
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/")}>
        Back
      </div>
    </>
  );
}
