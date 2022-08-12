import React from "react";
import { useNavigate } from "react-router-dom";
import { decodeNftRecord, readNfc } from "../Utils/nft";

export default function Read() {
  const nav = useNavigate();

  const read = async () => {
    readNfc(
      (data, sn) => {
        alert(`SN: ${sn}, dataLength: ${data.records.length}`);
        alert(`Rec0: ${decodeNftRecord(data.records[0])}`);
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
