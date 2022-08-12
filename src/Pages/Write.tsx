import React from "react";
import { useNavigate } from "react-router-dom";
import Nfc from "nfc-react-web";

export default function Write() {
  const nav = useNavigate();
  return (
    <>
      <h1>Writing...</h1>
      <br />
      <Nfc
        write="Jakub Statny;50"
        writeCallback={(error: any) => {
          if (error) {
            alert("An error occurred while writing to tag: " + error);
          } else {
            alert("Data written to tag! :)");
          }
        }}
        timeout={60} // time to keep trying to write to tags, in seconds
      />
      <br />
      <div style={{ backgroundColor: "red", width: "100%", height: 64 }} onClick={() => nav("/")}>
        Back
      </div>
    </>
  );
}
