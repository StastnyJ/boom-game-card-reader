import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
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
    </>
  );
}
