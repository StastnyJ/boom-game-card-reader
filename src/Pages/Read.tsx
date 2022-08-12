import React from "react";
import { useNavigate } from "react-router-dom";
import { readNfc } from "../Utils/nft";
// import Nfc from "nfc-react-web";

export default function Read() {
  const nav = useNavigate();

  const read = async () => {
    readNfc(
      (data, sn) => {
        alert(`SN: ${sn}, dataLength: ${data.records.length}`);
        console.log(data);
        alert(`Rec0: ${data.records[0]}`);
      },
      () => alert("error")
    );
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
